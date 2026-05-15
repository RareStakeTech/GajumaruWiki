# Skill: /recall

**Trigger:** User types `/recall [topic]`

**Purpose:** Surface everything the wiki knows about a topic without running a full query workflow.

## Behavior

1. Read `wiki/index.md` to locate relevant pages for the topic.
2. Read each relevant page directly (concept, entity, source summary).
3. Return a structured summary:
   - **What we know** — key claims with [[wiki-link]] citations
   - **Confidence** — aggregate confidence level across sources
   - **Gaps** — what is unknown or only partially covered
   - **Related pages** — links to adjacent concepts/entities
4. Do NOT file a new page unless the user explicitly asks.
5. Append a query entry to `wiki/log.md`.

## Notes

- Keep the response concise — this is a fast recall, not a deep synthesis.
- If the topic maps to zero pages, say so and suggest the closest matches.
- Always cite page slugs using [[wiki-link]] notation.

---

## Ingest Routing

When the user says "ingest [path]" (with or without a skill prefix), select the correct sub-skill automatically based on file extension:

| Extension | Skill to use | Notes |
|-----------|-------------|-------|
| `.url` | `/ingest-url` | Read URL from file, WebFetch content, full ingest |
| `.pdf` | `/ingest-pdf` | Cannot read directly — check for companion `.md`/`.txt`; if absent, prompt user to extract text |
| `.txt` | `/ingest-text` | Copy to `raw/articles/` if needed, then full ingest |
| `-notes.md` or `notes.md` | `/ingest-notes` | Informal notes mode: confidence defaults lower, unattributed claims → open_questions |
| `.md` (not notes) | Standard CLAUDE.md ingest workflow | Read directly, full ingest |

**When in doubt:** check the filename. If it ends in `-notes` or `transcript`, use `/ingest-notes`. If it is a regular `.md` document, use the standard workflow. If the extension is missing or unknown, ask the user which skill to apply.

**Directory shortcut:** If the user says "ingest raw/articles/" (a directory), glob all files in the directory, skip `.gitkeep`, and ingest each file using the routing table above — one at a time, reporting between each.
