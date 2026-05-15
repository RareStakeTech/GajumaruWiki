# Skill: /close

**Trigger:** User types `/close`

**Purpose:** End-of-session housekeeping — update hot cache, summarize the session, and prepare the wiki for next time.

## Behavior

1. Read `wiki/log.md` for all entries from today.
2. Read current `wiki/hot.md`.
3. Update `wiki/hot.md` with:
   - **Current Focus** — what was worked on today; what is in-flight
   - **Open Questions** — new questions surfaced during this session (merge with existing, remove resolved ones)
   - **Recent Decisions** — key decisions made today (with date)
   - **Last Operations** — update the table with today's operations
   - **Active Pages** — pages most relevant to current focus
4. Keep `wiki/hot.md` under ~500 words. Trim stale entries.
5. Report back: "Session closed. Hot cache updated."

## Safety Rules

- Do NOT modify any wiki page other than `wiki/hot.md`.
- Do NOT delete log entries.
- If nothing happened today, update hot.md to reflect the idle session.
