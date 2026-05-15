# Skill: /ingest-pdf

**Trigger:** User says "ingest [file].pdf" or passes a .pdf path to the ingest workflow.

**Problem:** No PDF extraction tool is available in this environment (no pdftotext, Python, or Word COM). PDFs cannot be read directly.

## Behavior

1. Check whether a companion text file already exists alongside the PDF:
   - `[same-path-and-name].md`
   - `[same-path-and-name].txt`
   - Any `.md` file in `raw/articles/` whose name contains the same slug

2. **If a companion file exists:** proceed immediately with the standard ingest workflow from CLAUDE.md using the companion file as the source.

3. **If no companion file exists:** stop and instruct the user:

   > PDF extraction is not available automatically. To ingest this file:
   >
   > **Option A — Copy-paste:**
   > Open `[filename].pdf` in any PDF viewer, select all text (Ctrl+A), copy, then paste into a new file at:
   > `raw/articles/[slug].md`
   > Then say: `ingest raw/articles/[slug].md`
   >
   > **Option B — Check online:**
   > If this document is also published on the web, drop the URL into a `.url` file at:
   > `raw/articles/[slug].url`
   > (file contents: just the URL on one line, no `[InternetShortcut]` wrapper needed)
   > Then say: `ingest raw/articles/[slug].url`

4. **Never** attempt to parse binary PDF content. Binary extraction produces garbage and wastes context.

5. Log the blocked ingest attempt in `wiki/log.md` with a note that the PDF is pending text extraction.

## Notes
- The companion `.md` file should be placed in `raw/articles/` (not `wiki/`).
- `raw/` is immutable once written — do not modify it after creation.
- Set `confidence: medium` on the resulting source summary if the text was copy-pasted (formatting loss risk).
