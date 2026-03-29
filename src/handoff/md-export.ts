import { promises as fs } from "node:fs";
import path from "node:path";
import type {
  Handoff,
  HandoffArtifact,
  HandoffBlocker,
  HandoffDecision,
  HandoffNextStep,
} from "../types.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function yamlStr(value: unknown): string {
  if (value === null || value === undefined) return "null";
  const s = String(value);
  // Quote if value contains special chars or looks like a number/bool
  if (/[:#\[\]{}&*!|>'"%@`,]/.test(s) || /^\s|\s$/.test(s) || s === "") {
    return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return s;
}

function fmField(key: string, value: unknown): string {
  return `${key}: ${yamlStr(value)}`;
}

function truncate(s: string, max = 72): string {
  return s.length <= max ? s : `${s.slice(0, max - 1)}…`;
}

// ---------------------------------------------------------------------------
// Serialize Handoff → markdown
// ---------------------------------------------------------------------------

export function serializeHandoffMd(
  handoff: Handoff,
  costRows?: Array<{ model: string; tokens_in: number; tokens_out: number; estimated_usd: number; wall_clock_s: number }>,
): string {
  const fm = [
    "---",
    fmField("id", handoff.id),
    fmField("chain_id", handoff.chain_id),
    fmField("schema_version", handoff.schema_version),
    fmField("status", handoff.status),
    fmField("source_agent_id", handoff.source_agent_id),
    fmField("target_agent_id", handoff.target_agent_id),
    fmField("source_session_key", handoff.source_session_key),
    fmField("target_session_key", handoff.target_session_key),
    fmField("origin", handoff.origin),
    fmField("heartbeat_id", handoff.heartbeat_id),
    fmField("chain_sequence", handoff.chain_sequence),
    fmField("merge_strategy", handoff.merge_strategy),
    fmField("confidence", handoff.confidence),
    fmField("created_at", handoff.created_at),
    fmField("approved_at", handoff.approved_at),
    fmField("queued_at", handoff.queued_at),
    fmField("injected_at", handoff.injected_at),
    fmField("completed_at", handoff.completed_at),
    fmField("expires_at", handoff.expires_at),
    "---",
  ].join("\n");

  const title = `# Handoff: ${truncate(handoff.goal)}`;

  const sections: string[] = [fm, "", title, ""];

  // Goal
  sections.push("## Goal", "", handoff.goal, "");

  // Status Summary
  sections.push("## Status Summary", "", handoff.status_summary, "");

  // Decisions
  sections.push("## Decisions", "");
  if (handoff.decisions.length > 0) {
    sections.push("```json", JSON.stringify(handoff.decisions, null, 2), "```");
  } else {
    sections.push("_None recorded._");
  }
  sections.push("");

  // Artifacts
  sections.push("## Artifacts", "");
  if (handoff.artifacts.length > 0) {
    sections.push("```json", JSON.stringify(handoff.artifacts, null, 2), "```");
  } else {
    sections.push("_None recorded._");
  }
  sections.push("");

  // Blockers
  sections.push("## Blockers", "");
  if (handoff.blockers.length > 0) {
    sections.push("```json", JSON.stringify(handoff.blockers, null, 2), "```");
  } else {
    sections.push("_None._");
  }
  sections.push("");

  // Next Steps
  sections.push("## Next Steps", "");
  if (handoff.next_steps.length > 0) {
    sections.push("```json", JSON.stringify(handoff.next_steps, null, 2), "```");
  } else {
    sections.push("_None specified._");
  }
  sections.push("");

  // Notes
  if (handoff.notes) {
    sections.push("## Notes", "", handoff.notes, "");
  }

  // Cost Ledger
  sections.push("## Cost Ledger", "");
  if (costRows && costRows.length > 0) {
    sections.push(
      "| Model | Tokens In | Tokens Out | Est. USD | Wall Clock (s) |",
      "|-------|-----------|------------|----------|----------------|",
      ...costRows.map(
        (r) =>
          `| ${r.model} | ${r.tokens_in.toLocaleString()} | ${r.tokens_out.toLocaleString()} | $${r.estimated_usd.toFixed(4)} | ${r.wall_clock_s.toFixed(1)} |`,
      ),
    );
  } else {
    sections.push("_No cost data recorded._");
  }
  sections.push("");

  return sections.join("\n");
}

// ---------------------------------------------------------------------------
// Export to filesystem
// ---------------------------------------------------------------------------

export async function exportHandoffMd(params: {
  handoff: Handoff;
  exportDir: string;
  costRows?: Array<{ model: string; tokens_in: number; tokens_out: number; estimated_usd: number; wall_clock_s: number }>;
}): Promise<string> {
  await fs.mkdir(params.exportDir, { recursive: true });
  const filePath = path.join(params.exportDir, `${params.handoff.id}.md`);
  await fs.writeFile(filePath, serializeHandoffMd(params.handoff, params.costRows), "utf8");
  return filePath;
}

// ---------------------------------------------------------------------------
// Parse .md back into a partial Handoff update
// ---------------------------------------------------------------------------

type ParsedHandoffUpdate = Partial<
  Pick<Handoff, "goal" | "status_summary" | "notes" | "decisions" | "artifacts" | "blockers" | "next_steps">
>;

function extractFrontmatterBlock(md: string): { fm: string; body: string } | null {
  const match = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  return { fm: match[1], body: match[2] };
}

function parseFmValue(raw: string): string | null {
  const trimmed = raw.trim();
  if (trimmed === "null") return null;
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return trimmed.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
  return trimmed;
}

function extractSection(body: string, heading: string): string {
  // Match ## <heading>\n<content until next ## or end>
  const re = new RegExp(`## ${heading}\\n([\\s\\S]*?)(?=\\n## |$)`, "i");
  const match = body.match(re);
  if (!match) return "";
  return match[1].trim();
}

function extractJsonBlock(section: string): unknown[] {
  const match = section.match(/```json\n([\s\S]*?)\n```/);
  if (!match) return [];
  try {
    const parsed = JSON.parse(match[1]);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function parseMdHandoff(md: string): ParsedHandoffUpdate & { id?: string } {
  const blocks = extractFrontmatterBlock(md);
  if (!blocks) return {};

  // Parse frontmatter for id (so caller can route the update)
  let id: string | undefined;
  for (const line of blocks.fm.split("\n")) {
    const colonIdx = line.indexOf(": ");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const rawVal = line.slice(colonIdx + 2);
    const val = parseFmValue(rawVal);
    if (key === "id" && val) id = val;
  }

  const body = blocks.body;

  const goalSection = extractSection(body, "Goal");
  const statusSection = extractSection(body, "Status Summary");
  const notesSection = extractSection(body, "Notes");

  const result: ParsedHandoffUpdate & { id?: string } = {};
  if (id) result.id = id;
  if (goalSection) result.goal = goalSection;
  if (statusSection) result.status_summary = statusSection;
  if (notesSection) result.notes = notesSection;

  const decisions = extractJsonBlock(extractSection(body, "Decisions")) as HandoffDecision[];
  if (decisions.length > 0) result.decisions = decisions;

  const artifacts = extractJsonBlock(extractSection(body, "Artifacts")) as HandoffArtifact[];
  if (artifacts.length > 0) result.artifacts = artifacts;

  const blockers = extractJsonBlock(extractSection(body, "Blockers")) as HandoffBlocker[];
  if (blockers.length > 0) result.blockers = blockers;

  const nextSteps = extractJsonBlock(extractSection(body, "Next Steps")) as HandoffNextStep[];
  if (nextSteps.length > 0) result.next_steps = nextSteps;

  return result;
}
