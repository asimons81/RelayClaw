# RelayClaw — Agent Skill Reference

## What is RelayClaw

RelayClaw is a handoff and context bridge system for OpenClaw agent crews. It gives you a structured, human-supervised channel to pass state from your session to another agent. When you create a handoff, the information is stored in a schema-validated document, held for approval, queued for the target, and injected into their next session context automatically.

You use RelayClaw when you have finished your scope of work and a specific other agent needs to continue from your state — not when you want to communicate casually or ask a question.

---

## The `relay_handoff` Tool

```
relay_handoff(action, ...params)
```

Available actions: `create` · `inject` · `list` · `inspect` · `complete`

---

## action: `create`

Use this to hand off to another agent when:
- You have completed a discrete unit of work and the next unit belongs to a different agent.
- You are about to hit a context limit and want to preserve your state before the session ends.
- You have been asked explicitly to create a handoff.

Do NOT create a handoff if:
- You are partway through a task that you will continue yourself.
- You are uncertain which agent should receive the work.
- The work is a quick message or question — use normal communication instead.
- You created a handoff in the last 60 seconds (rate limit applies).

**Required fields:**

| Field | Type | Notes |
|---|---|---|
| `target_agent_id` | `string` | Must match an `agent_id` in `agent_config`. E.g. `"sabbath"`, `"geezer"`. |
| `goal` | `string` | One to three sentences. What the target agent must accomplish. Be specific. |
| `status_summary` | `string` | Where the work stands right now. What is done, what is not done, what the target should know before starting. |

**Optional fields (populate as fully as you can):**

| Field | Type | Notes |
|---|---|---|
| `decisions` | `array` | Decisions you made during this session that the target needs to know about. Format: `{ decision, rationale }`. Include every non-obvious choice. |
| `artifacts` | `array` | Files, directories, or outputs you produced. Format: `{ path, type, description }`. Use absolute paths. |
| `blockers` | `array` | Things that could stop the target from completing the work. Format: `{ description, severity, suggested_resolution }`. Severity: `low` · `medium` · `high` · `critical`. |
| `next_steps` | `array` | Ordered steps for the target to take. Format: `{ step, priority }`. Priority: `low` · `medium` · `high`. |
| `confidence` | `number` | Your confidence (0–1) that the state you are handing off is accurate and complete. |
| `notes` | `string` | Free text. Anything that does not fit the structured fields. |
| `merge_strategy` | `string` | `merge` · `replace` · `flag_conflict` (default). Controls conflict resolution if the target already has queued handoffs. |
| `chain_id` | `string` | UUID of an existing `handoff_chains` row to attach this handoff to a named workflow chain. Omit to create a standalone handoff. |

**Example:**
```
relay_handoff({
  action: "create",
  target_agent_id: "sabbath",
  goal: "Write the final draft of the Q1 product update using the research brief at ~/.openclaw/workspace/research/q1_brief.md",
  status_summary: "Research is complete. Brief is 4200 words covering user growth, retention, and three new features. Lead with user growth — it is the strongest story this quarter.",
  decisions: [
    { decision: "Scope to Q1 only", rationale: "Q4 data is not finalized" }
  ],
  artifacts: [
    { path: "~/.openclaw/workspace/research/q1_brief.md", type: "markdown", description: "Full research brief" }
  ],
  blockers: [
    { description: "Q4 churn figure unconfirmed", severity: "low", suggested_resolution: "Use placeholder, Tony fills in later" }
  ],
  next_steps: [
    { step: "Write 800-word exec summary", priority: "high" },
    { step: "Write full 3000-word body", priority: "high" }
  ],
  confidence: 0.9
})
```

---

## action: `inject`

Loads the next queued handoff addressed to you into your session context. Call this at the start of a session if you know you have pending handoffs, or if the system does not auto-inject.

```
relay_handoff({ action: "inject" })
```

Returns: the handoff document, or null if your queue is empty.

If auto_inject is enabled for your agent (`agent_config.auto_inject = true`), this fires automatically via the `before_prompt_build` hook — you do not need to call it manually.

---

## How to Read an Injected Context Block

When a handoff is injected, you will see a block like this prepended to your context:

```
=== RELAYCLAW HANDOFF ===
from: geezer (Geezer) | chain: quarterly-update | seq: 2
goal: <the goal set by the source agent>
status: <the status_summary>
decisions:
  - <decision> (<rationale>)
artifacts:
  - <path> [<type>] <description>
blockers:
  - [<severity>] <description> → <suggested_resolution>
next_steps:
  1. [<priority>] <step>
confidence: <N>%
=== END HANDOFF ===
```

Read this block before doing anything else in your session. Your goal, starting state, and next steps are defined here. The `blockers` section tells you what might stop you — address each one or document why you are proceeding despite it.

---

## action: `list`

Lists handoffs visible to you.

```
relay_handoff({ action: "list" })
relay_handoff({ action: "list", status: "pending" })
relay_handoff({ action: "list", agent_id: "sabbath" })
```

Useful for checking your queue depth or finding a handoff ID before calling `inspect` or `complete`.

---

## action: `inspect`

Returns full detail for a single handoff.

```
relay_handoff({ action: "inspect", handoff_id: "<uuid>" })
```

---

## action: `complete`

Call this at the end of your session to mark the handoff as completed and record your session cost.

```
relay_handoff({
  action: "complete",
  handoff_id: "<uuid>",
  model: "claude-sonnet-4-6",
  tokens_in: 48200,
  tokens_out: 12100,
  estimated_usd: 0.18,
  wall_clock_s: 840
})
```

The cost row is written to `cost_ledger` and the chain aggregate is updated. If you do not know exact token counts, provide the best estimate available from your session metadata.

---

## When NOT to create a handoff

- You have not finished your assigned goal yet. Finish it, then hand off.
- The task is small enough that another agent can receive it via a normal message or task assignment.
- You are spinning up a sub-task for yourself to handle in the same session.
- No other agent needs your context to continue — the work is truly done and complete.
- You already created a handoff to this target in the last 60 seconds.

Unnecessary handoffs create approval noise for the human operator and clutter the queue. Create handoffs for meaningful unit boundaries, not micro-steps.
