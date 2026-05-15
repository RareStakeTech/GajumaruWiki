# /content-plan

Generate a content plan (calendar or series) based on the current wiki knowledge base. Each proposed piece must be grounded in existing wiki pages — no speculative topics. Output is saved to `output/` for human review.

## Usage
```
/content-plan [timeframe] [channel] [audience]
```

Examples:
```
/content-plan 4-weeks twitter developers
/content-plan monthly linkedin general
/content-plan series blog validators
```

Defaults if not specified: `4-weeks`, all channels, general audience.

## Workflow

### Step 1 — Survey the wiki

1. Read `wiki/index.md` in full.
2. Identify the 5–10 strongest concept and entity pages (high confidence, rich content).
3. Note any clusters that are well-developed enough to support a multi-part series.

### Step 2 — Generate the plan

For each proposed content piece, include:
- **Title** — working headline
- **Format** — blog-post | tweet-thread | linkedin-post | newsletter | explainer
- **Wiki source(s)** — the pages it would draw from (must exist)
- **Audience** — who it's for
- **Hook** — one sentence on why this topic is interesting right now
- **Suggested week/date** — based on the timeframe requested

Prefer:
- Leading with the most accessible or high-impact topics
- Spacing technical deep-dives between lighter explainers
- Grouping related pieces into mini-series where wiki depth supports it

### Step 3 — Save to output/

Write the plan to:
```
output/content-plan-{YYYY-MM-DD}.md
```

Use this frontmatter:

```yaml
---
type: content-plan
title: "Content Plan — {timeframe} starting {YYYY-MM-DD}"
channel: twitter | linkedin | blog | newsletter | mixed
audience: "<target audience>"
wiki_snapshot: YYYY-MM-DD
status: draft
created: YYYY-MM-DD
---
```

Format the body as a markdown table followed by per-piece detail sections.

### Step 4 — Report

List:
- File written: `output/content-plan-{date}.md`
- Number of pieces planned
- Any clusters with insufficient wiki depth to support content (flag for future ingestion)
- Suggested next ingest to unlock a planned piece

Do NOT log this to `wiki/log.md` — output drafts are not wiki operations.

## Error Handling

| Problem | Action |
|---------|--------|
| Wiki has fewer than 5 pages | Report; plan around what exists; flag gaps |
| No high-confidence pages | Note low confidence across plan; recommend more ingest before publishing |
| Timeframe not recognized | Ask user to clarify (e.g., "2 weeks", "Q3", "10 posts") |
