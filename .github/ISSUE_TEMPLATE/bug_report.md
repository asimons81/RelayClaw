---
name: Bug report
about: Something is broken or behaving incorrectly
title: "[bug] "
labels: bug
assignees: ''
---

## Describe the bug

A clear description of what is wrong.

## Steps to reproduce

1.
2.
3.

## Expected behaviour

What you expected to happen.

## Actual behaviour

What actually happened. Include error messages verbatim.

## Environment

| Field | Value |
|---|---|
| OpenClaw version | |
| RelayClaw version | |
| Node.js version | |
| OS | |
| Supabase region | |

## RelayClaw context

| Field | Value |
|---|---|
| Agent ID (`agent_id`) | |
| Handoff ID (if applicable) | |
| Handoff status at time of bug | |
| Chain ID (if applicable) | |
| Origin (`agent` / `dead_drop` / `human` / `cron`) | |

## Logs

Paste relevant output from `openclaw relay inspect <handoff_id>` or the OpenClaw plugin log:

```
<paste here>
```

## Supabase objects affected

List any tables or functions involved (e.g. `agent_queues`, `enqueue_handoff`):

## Additional context

Anything else that might be relevant.
