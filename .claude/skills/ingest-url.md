# Skill: /ingest-url

**Trigger:** User says "ingest [file].url" or passes a `.url` file path to the ingest workflow.

**Purpose:** Fetch a web article or page and run the full CLAUDE.md ingest workflow on it.

## Behavior

1. Read the `.url` file. Accept two formats:
   - Windows Internet Shortcut: look for the line starting with `URL=` and extract the value.
   - Bare URL: if the file contains only a URL (no `[InternetShortcut]` header), use it directly.

2. WebFetch the URL with this prompt:
   > "Extract the full content of this page: all sections, headings, key claims, statistics, dates, names of people/organisations/products, and any strategic or technical announcements. Return everything in structured markdown."

3. If the fetch redirects, follow the redirect and note the canonical URL in the source summary.

4. If the fetch fails (private page, 404, auth wall):
   - Report the failure to the user.
   - Log a blocked-ingest entry in `wiki/log.md`.
   - Suggest saving the page content manually as a `.md` file and using `/ingest-text`.

5. Run the **full ingest workflow** from CLAUDE.md on the fetched content:
   - Discuss key takeaways (3–5 bullets).
   - Create `wiki/sources/summary-{slug}.md`.
   - Update `wiki/index.md`, relevant concept/entity pages.
   - Create new concept/entity pages as needed.
   - Append to `wiki/log.md`.

6. Derive the `{slug}` from the `.url` filename (strip `.url` extension, kebab-case).

## Source File Convention
The `.url` file itself stays in `raw/articles/` as the immutable source pointer.
Set `source_file: raw/articles/[filename].url` in the source summary frontmatter.

## Notes
- Do not follow links found within the fetched page — ingest only the target URL.
- If the page is very long and the fetch is summarised, note `confidence: medium` and flag any gaps.
