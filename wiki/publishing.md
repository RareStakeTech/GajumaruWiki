---
type: overview
title: "Publishing Workflow"
created: 2026-05-15
updated: 2026-05-15
confidence: high
---

# Publishing Workflow

This Obsidian wiki is published with Quartz and GitHub Pages.

On each push to `main`, the GitHub Actions workflow in `.github/workflows/deploy-quartz.yml` fetches Quartz, copies the `wiki/` directory into Quartz's `content/` directory, renders the site, and deploys the generated static files to GitHub Pages.

The public site includes the generated wiki layer: [[index]], [[overview]], concept pages, entity pages, and source summary pages. It does not publish `raw/`, `output/`, `.obsidian/`, or the session cache `wiki/hot.md`.

Quartz is used because it supports Obsidian-style `[[wikilinks]]`, backlinks, graph view, search, Markdown callouts, and frontmatter without requiring the wiki to abandon its vault-native format.

## Related

- [[overview]]
- [[gajumaru-architecture]]
- [[gajumaru-product-suite]]
