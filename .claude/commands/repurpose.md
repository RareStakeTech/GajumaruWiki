# /repurpose

Repurpose wiki knowledge into a publishable draft — blog post, tweet thread, LinkedIn post, newsletter section, or other format. All claims must trace to wiki pages. Output is saved to `output/` for human review before publishing.

## Usage
```
/repurpose <wiki-page-or-topic> [format] [audience]
```

Examples:
```
/repurpose [[gajumaru-consensus]] blog-post developers
/repurpose [[tokenomics]] tweet-thread general
/repurpose [[validator-onboarding]] linkedin-post operators
```

## Workflow

### Step 1 — Gather source material

1. Read `wiki/index.md` to find all pages relevant to the topic.
2. Read those wiki pages directly.
3. Note every claim you intend to use and its source wiki page — you will cite these in frontmatter.

### Step 2 — Determine format

If no format is specified, ask the user which format they want:
- `blog-post` — 500–1200 words, structured with headers
- `tweet-thread` — 8–15 numbered tweets, each ≤280 chars
- `linkedin-post` — 150–300 words, conversational, 3–5 hashtags
- `newsletter` — 300–600 words, educational tone, one CTA
- `explainer` — short (200–400 words), plain language, no jargon

### Step 3 — Write the draft

Rules:
- Every factual claim must be traceable to a wiki page. If you cannot source a claim, omit it.
- Do not speculate or extrapolate beyond what the wiki contains.
- Match tone and complexity to the specified audience.
- Do not include a call-to-action unless the user specifies one.

### Step 4 — Save to output/

Write the draft to:
```
output/{format}-{slug}-{YYYY-MM-DD}.md
```

Use this frontmatter:

```yaml
---
type: content-draft
format: blog-post | tweet-thread | linkedin-post | newsletter | explainer
title: "<draft title>"
topic: "<wiki page or topic>"
audience: "<target audience>"
sources: [[wiki-page-1]], [[wiki-page-2]]
status: draft
created: YYYY-MM-DD
---
```

### Step 5 — Report

List:
- File written: `output/{filename}.md`
- Wiki pages used as sources
- Any claims you had to omit because they lacked wiki backing

Do NOT log this to `wiki/log.md` — output drafts are not wiki operations.

## Error Handling

| Problem | Action |
|---------|--------|
| Topic not found in wiki | Report which pages are missing; suggest ingesting source material first |
| Insufficient wiki depth for format | Write what is possible; flag thin sections for the user to expand manually |
| Conflicting claims between wiki pages | Surface the contradiction; use the higher-confidence page; note the conflict in the draft |
