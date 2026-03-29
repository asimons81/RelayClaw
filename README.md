# RelayClaw

**Structured agent handoff and context bridge for OpenClaw crews.**

RelayClaw solves the gap between one agent finishing and another starting. Without it, context is copy-pasted, decisions are lost, costs are invisible, and interrupted sessions disappear into the void. RelayClaw gives every handoff a schema, a queue, an approval gate, and a full audit trail — so your crew operates as a coherent system, not a collection of isolated sessions.

---

## Features

| Feature | What it does |
|---|---|
| **Heartbeat / Dead-Drop** | Active agents emit rolling 30s state snapshots. If a session dies unexpectedly, the dead-drop monitor auto-promotes the last snapshot to an `interrupted` handoff so work is never silently lost. |
| **Approval Gate** | Every handoff sits in `pending` until a human approves it (via Telegram, CLI, or web). High-trust agents can be auto-approved. Rejections and edits are recorded in the immutable audit log. |
| **FIFO Queue** | Approved handoffs are enqueued per target agent using a Postgres-level FIFO (`enqueue_handoff` / `dequeue_handoff` with `FOR UPDATE SKIP LOCKED`). Agents receive work in the order it was approved. |
| **Conflict Resolution** | When multiple handoffs target the same agent simultaneously, `merge_strategy` determines the outcome: `merge`, `replace`, or `flag_conflict` for human review. |
| **Schema Versioning** | Handoff document schemas are stored in `schema_registry` with semver versions and migration paths. The current schema is enforced via a partial unique index. |
| **Cost Ledger** | Every agent session records tokens in/out, USD estimate, and wall-clock time. Per-leg rows roll up to chain aggregates in `handoff_chains` for full crew cost visibility. |

---

## Architecture

```
  Agent Session (source)
       │
       ├─ heartbeat service ──── rolling 30s snapshots ──────► heartbeats table
       │                              │
       │                         dead-drop monitor
       │                              │ (if session dies)
       │                              ▼
       └─ relay_handoff (create) ──► handoffs table (status: pending)
                                          │
                                    approval gate
                                    (Telegram / CLI)
                                          │ approved
                                          ▼
                                   enqueue_handoff()
                                          │
                                    agent_queues table (FIFO)
                                          │
                                  dequeue_handoff() on inject
                                          │
                                          ▼
                               Target agent session
                               (context injected via before_prompt_build hook)
                                          │
                                    relay_handoff (complete)
                                          │
                                    cost_ledger row
                                    chain aggregates updated
```

**Tables:** `handoff_chains` · `handoffs` · `heartbeats` · `agent_queues` · `approval_actions` · `schema_registry` · `cost_ledger` · `agent_config`

**Stored functions:** `enqueue_handoff` · `dequeue_handoff` · `detect_queue_conflicts` · `promote_heartbeat_to_handoff` · `update_chain_cost`

---

## Installation

**Requirements:** OpenClaw (any version) · Node.js 20+ · A Supabase project

```bash
# Install the plugin
openclaw plugin add relayclaw

# Or from source
git clone https://github.com/relayclaw/relayclaw
cd relayclaw
npm install
openclaw plugin link .
```

---

## Supabase Setup

1. Create a new Supabase project (or use an existing one).

2. Open the Supabase SQL editor and run the full migration:

```bash
# Copy the migration file contents into the SQL editor, or use the Supabase CLI:
supabase db push --file supabase/migrations/20260328000000_relayclaw_init.sql
```

3. Copy your project URL and `service_role` key from **Project Settings → API**.

4. Configure the plugin:

```bash
openclaw config set plugins.entries.relayclaw.config.supabaseUrl https://<ref>.supabase.co
openclaw config set plugins.entries.relayclaw.config.supabaseServiceKey <service_role_key>
```

> **Security note:** Always use the `service_role` key — not the `anon` key. The plugin bypasses RLS intentionally. Never expose `supabaseServiceKey` in client-side code or public repositories.

---

## Configuration Reference

All fields go under `plugins.entries.relayclaw.config` in your OpenClaw config.

| Field | Type | Default | Description |
|---|---|---|---|
| `supabaseUrl` | `string` | **required** | Supabase project URL (`https://<ref>.supabase.co`) |
| `supabaseServiceKey` | `string` | **required** | `service_role` key. Never use the `anon` key. |
| `heartbeatIntervalMs` | `number` | `30000` | How often (ms) the heartbeat service snapshots agent state. |
| `deadDropThresholdMs` | `number` | `90000` | How long (ms) after the last heartbeat before the dead-drop monitor promotes the snapshot to an `interrupted` handoff. Recommended: 3× `heartbeatIntervalMs`. |
| `mdExportDir` | `string` | `~/.openclaw/relayclaw/handoffs/` | Absolute path where `.md` handoff exports are written. |
| `notifyTarget` | `string` | *(your Telegram DM ID)* | Default Telegram chat ID for approval notifications. |
| `notifyGroupId` | `string` | *(your Mission Control group ID)* | Telegram group ID for topic-routed crew notifications. |
| `autoApproveHighTrust` | `boolean` | `true` | Auto-approve handoffs from agents with `trust_level='high'` without requiring human confirmation. |

### Per-Agent Config (`agent_config` table)

Each agent row in `agent_config` controls its individual behaviour:

| Column | Type | Default | Description |
|---|---|---|---|
| `agent_id` | `text` | — | Agent identifier (primary key). Matches the agent ID in OpenClaw. |
| `display_name` | `text` | `null` | Human-readable name shown in notifications and the UI. |
| `trust_level` | `text` | `'medium'` | `'high'` · `'medium'` · `'low'`. High-trust agents can bypass the approval gate when `autoApproveHighTrust` is enabled. |
| `default_merge_strategy` | `text` | `'flag_conflict'` | `'merge'` · `'replace'` · `'flag_conflict'`. Applied when multiple handoffs target the same agent. |
| `notify_channel` | `text` | `'telegram'` | Notification channel for approval requests. |
| `notify_target` | `text` | `null` | Telegram chat ID override for this agent. |
| `notify_topic_id` | `int` | `null` | Telegram `message_thread_id` for topic-routed group notifications. |
| `max_queue_depth` | `int` | `10` | Maximum number of pending handoffs allowed in this agent's queue. |
| `auto_inject` | `boolean` | `false` | If true, automatically inject the next queued handoff at session start without waiting for explicit `inject` action. |
| `heartbeat_interval_s` | `int` | `30` | Heartbeat emission frequency in seconds. |
| `heartbeat_dead_threshold_s` | `int` | `90` | Seconds of silence before this agent's heartbeat is considered dead. |
| `min_create_interval_s` | `int` | `60` | Minimum seconds between handoff creates from this agent (rate limiting). |

---

## CLI Command Reference

```bash
# Handoff management
openclaw relay list [--agent <id>] [--status <status>]
openclaw relay inspect <handoff_id>
openclaw relay approve <handoff_id>
openclaw relay reject <handoff_id> [--reason <reason>]
openclaw relay inject <handoff_id>
openclaw relay complete <handoff_id>

# Queue management
openclaw relay queue [--agent <id>]
openclaw relay queue flush <agent_id>

# Heartbeat / dead-drop
openclaw relay heartbeat status [--agent <id>]
openclaw relay heartbeat promote <heartbeat_id> [--target <agent_id>]

# Cost
openclaw relay cost [--chain <chain_id>] [--agent <id>]

# Schema
openclaw relay schema list
openclaw relay schema show [<version>]

# Chain management
openclaw relay chain list
openclaw relay chain inspect <chain_id>
```

---

## Full Data Flow

```
1. CREATE
   Agent calls relay_handoff with action='create'.
   Fields: target_agent_id, goal, status_summary, decisions[], artifacts[],
           blockers[], next_steps[], confidence, notes, merge_strategy, chain_id.
   Handoff row created with status='pending'.
   Markdown export written to mdExportDir/<uuid>.md.
   Approval notification sent via Telegram.

2. APPROVE
   Human approves via Telegram reply or `openclaw relay approve <id>`.
   approval_actions row recorded (actor, channel, timestamp).
   Handoff status → 'approved'.
   (If autoApproveHighTrust=true and source agent trust_level='high', this happens automatically.)

3. QUEUE
   enqueue_handoff(target_agent_id, handoff_id) called.
   agent_queues row inserted with next FIFO position.
   Handoff status → 'queued'.

4. INJECT
   Target agent calls relay_handoff with action='inject' (or auto_inject fires on session start).
   dequeue_handoff(agent_id) pops the next pending item (FOR UPDATE SKIP LOCKED).
   context_snapshot prepended to agent's system prompt via before_prompt_build hook.
   Handoff status → 'injected'.

5. COMPLETE
   Target agent calls relay_handoff with action='complete' at end of session.
   cost_ledger row recorded (tokens, USD, wall clock).
   update_chain_cost(chain_id) refreshes aggregate totals.
   Handoff status → 'completed'.
```

---

## Trust Level Explanation

Trust levels control the approval gate behaviour:

- **`high`** — Agent is trusted to produce correct, complete handoffs. If `autoApproveHighTrust=true` (default), handoffs from high-trust agents skip human review and go directly to the queue. Approval is still logged automatically for auditability.
- **`medium`** — Default. All handoffs require human approval before queuing.
- **`low`** — All handoffs require human approval. Additionally, `min_create_interval_s` rate limiting is strictly enforced and flagged in notifications.

Trust level is set per-agent in the `agent_config` table and can be changed at any time without a schema migration.

---

## How It Works With Your Crew

A concrete Geezer → Sabbath handoff:

**Scenario:** Geezer (research agent, trust_level=`high`) has completed a research brief and needs Sabbath (writing agent, trust_level=`medium`) to draft the final document.

**Step 1 — Geezer creates the handoff:**
```
relay_handoff {
  action: "create",
  target_agent_id: "sabbath",
  goal: "Draft the quarterly product update using the attached research brief",
  status_summary: "Research complete. Key findings in artifacts. Three open questions in blockers — proceed without them.",
  decisions: [
    { decision: "Scope limited to Q1 2026", rationale: "Q4 data incomplete, not worth delaying" },
    { decision: "Lead with user growth story", rationale: "Most compelling metric per Tony's brief" }
  ],
  artifacts: [
    { path: "~/.openclaw/workspace/research/q1_brief.md", type: "markdown", description: "Full research brief, 4200 words" }
  ],
  blockers: [
    { description: "Q4 churn figure still unconfirmed", severity: "low", suggested_resolution: "Omit or use placeholder — Tony to fill in post-draft" }
  ],
  next_steps: [
    { step: "Write 800-word exec summary", priority: "high" },
    { step: "Write full 3000-word body", priority: "high" },
    { step: "Flag any gaps back to Geezer via relay", priority: "medium" }
  ],
  confidence: 0.9,
  merge_strategy: "replace"
}
```

**Step 2 — Auto-approval (Geezer is `high` trust):**
RelayClaw records `system:auto_trust` in `approval_actions` and enqueues immediately. Tony gets a Telegram notification confirming the auto-approval on topic 7 (Geezer's Mission Control thread).

**Step 3 — Sabbath's next session:**
Sabbath starts a new session. The `before_prompt_build` hook fires. RelayClaw calls `dequeue_handoff('sabbath')`, finds Geezer's handoff at position 1, and prepends the injected context block to Sabbath's system prompt:

```
=== RELAYCLAW HANDOFF ===
from: geezer (Geezer) | chain: quarterly-update | seq: 2
goal: Draft the quarterly product update using the attached research brief
status: Research complete. Key findings in artifacts. Three open questions in blockers — proceed without them.
decisions:
  - Scope limited to Q1 2026 (Q4 data incomplete, not worth delaying)
  - Lead with user growth story (Most compelling metric per Tony's brief)
artifacts:
  - ~/.openclaw/workspace/research/q1_brief.md [markdown] Full research brief, 4200 words
blockers:
  - [low] Q4 churn figure still unconfirmed → Omit or use placeholder — Tony to fill in post-draft
next_steps:
  1. [high] Write 800-word exec summary
  2. [high] Write full 3000-word body
  3. [medium] Flag any gaps back to Geezer via relay
confidence: 90%
=== END HANDOFF ===
```

**Step 4 — Sabbath completes:**
At session end, Sabbath calls `relay_handoff` with `action='complete'`. The cost ledger records Sabbath's session (tokens, USD, wall clock). `update_chain_cost` rolls up the chain totals. The quarterly-update chain now shows Geezer's research cost + Sabbath's writing cost as a single aggregate.

---

## License

MIT — see [LICENSE](LICENSE).
