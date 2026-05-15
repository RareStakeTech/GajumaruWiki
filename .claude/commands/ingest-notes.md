# Skill: /ingest-notes

**Trigger:** User says "ingest [file]-notes.md" or passes a notes/transcript file to the ingest workflow.

**Purpose:** Ingest informal notes, meeting transcripts, personal research notes, or call transcripts where content may be incomplete, unstructured, or lightly sourced.

## Behavior

1. Read the notes file from `raw/` (do not modify it).

2. Before running the ingest workflow, assess the notes:
   - Are they structured (headings, bullets) or raw stream-of-consciousness?
   - Do they contain attributed claims ("X said…", "source: Y") or unattributed assertions?
   - Are there timestamps, speaker labels, or other metadata?

3. Run the **full ingest workflow** from CLAUDE.md with these adjustments:

   **Confidence defaults:**
   - Attributed claims (named source, linked doc): `confidence: medium`
   - Unattributed claims or personal interpretations: `confidence: low`
   - Claims that match existing wiki pages exactly: inherit that page's confidence

   **Frontmatter:**
   - Set `author:` to the note-taker's name if known, otherwise `"(notes author unknown)"`
   - Set `date_published:` to the meeting/session date if available, otherwise omit
   - Add a `> [!note] These are informal notes. Claims may be incomplete or paraphrased.` callout at the top of the source summary body.

4. Flag any claims that **contradict** existing wiki pages using `> [!contradiction]` callouts, as required by CLAUDE.md.

5. Do **not** create new concept/entity pages solely from low-confidence unattributed claims — instead, add the claim as a bullet under `## Open Questions` on the relevant existing page.

6. Append to `wiki/log.md` with note type flagged: `ingest (notes)`.

## Notes
- Notes files are especially likely to introduce duplicate or near-duplicate concepts. Check `wiki/index.md` carefully before creating new pages.
- If the notes reference external documents not yet ingested, add them to the `open_questions` list on the relevant entity page.
