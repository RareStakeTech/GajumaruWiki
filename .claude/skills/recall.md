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
