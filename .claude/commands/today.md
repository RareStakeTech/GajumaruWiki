# Skill: /today

**Trigger:** User types `/today`

**Purpose:** Summarize what happened in the wiki during today's session — a fast session debrief.

## Behavior

1. Read `wiki/log.md`.
2. Find all entries dated today (YYYY-MM-DD matching current date).
3. Return a structured debrief:

```
## Session Summary — [date]

### Operations
- [ingest|query|lint] — description

### Pages Created
- list

### Pages Updated
- list

### Contradictions Flagged
- list (or "none")

### Open Questions Raised
- list (or "none")
```

4. If no entries exist for today, report "No operations logged today."
5. Do NOT modify any files. This is a read-only operation.

## Notes

- This skill reads the log only — it does not re-derive state from wiki pages.
- For a full world snapshot, use /my-world instead.
