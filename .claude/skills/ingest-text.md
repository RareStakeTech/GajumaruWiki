# Skill: /ingest-text

**Trigger:** User says "ingest [file].txt" or passes a plain-text file path to the ingest workflow.

**Purpose:** Ingest a plain `.txt` file — copy it to `raw/articles/` if not already there, then run the full CLAUDE.md ingest workflow.

## Behavior

1. **Locate the file.** Accept any path the user provides.

2. **Ensure it is in `raw/`:**
   - If the file is already under `raw/articles/` (or any `raw/` subdirectory): proceed.
   - If the file is elsewhere in the vault (e.g., vault root, desktop path): copy it to `raw/articles/[filename].txt`. Do not delete the original.
   - If the path does not exist: report the error and stop.

3. **Read the file** from its `raw/` location.

4. Run the **full ingest workflow** from CLAUDE.md:
   - Discuss key takeaways (3–5 bullets).
   - Create `wiki/sources/summary-{slug}.md`.
   - Update `wiki/index.md`, relevant concept/entity pages.
   - Create new concept/entity pages as needed.
   - Append to `wiki/log.md`.

5. Derive `{slug}` from the filename (strip `.txt` extension, kebab-case).

6. Set `source_file: raw/articles/[filename].txt` in the source summary frontmatter.

## Confidence
Default to `confidence: high` for formal documents, `confidence: medium` for informal text. Adjust per content.

## Notes
- `.txt` files are the standard output format for manual PDF copy-paste extraction (see `/ingest-pdf`).
- Do not use this skill for `.md` files — those are ingested directly via the standard workflow.
- Never write to `raw/` files after they are placed there. They are immutable source documents.
