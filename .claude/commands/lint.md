# Skill: /lint

**Trigger:** User types `/lint` or says "health check"

**Purpose:** Full wiki health check — surface contradictions, orphans, missing pages, and cluster gaps.

## Behavior

Execute the full Lint Workflow from CLAUDE.md:

1. **Contradiction scan** — Read all concept and entity pages. List pairs where claims conflict. Use `> [!contradiction]` format in the report.

2. **Orphan scan** — Find wiki pages with zero inbound `[[links]]` from other pages. List them.

3. **Missing concept pages** — Find terms mentioned 3+ times across pages that have no dedicated concept page. List them.

4. **Stale claim check** — Flag claims that newer-dated sources may have superseded. List with source dates.

5. **Cluster health check:**
   - Every concept/entity page has a `cluster:` field. List any missing.
   - Every `cluster_role: hub` page has an `## In this cluster` section. List any missing.
   - Every cluster hub is listed in `wiki/index.md`. List gaps.

6. **Synthesis back-link check:**
   - Every synthesis page is back-linked from the concept pages it drew on. List near-orphan syntheses (≤1 inbound link).

7. **Suggestions** — Propose 3–5 new questions or source documents to investigate based on gaps found.

8. Append a lint entry to `wiki/log.md` with date and findings summary.

## Output Format

```
## Wiki Health Report — [date]

### Contradictions
...

### Orphan Pages
...

### Missing Concept Pages
...

### Stale Claims
...

### Cluster Health
...

### Synthesis Back-links
...

### Suggested Next Steps
1. ...
2. ...
3. ...
```
