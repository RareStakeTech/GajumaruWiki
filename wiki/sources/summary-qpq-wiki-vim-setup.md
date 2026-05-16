---
type: source
title: "Vim Setup (QPQ Public Wiki)"
slug: summary-qpq-wiki-vim-setup
source_file: raw/articles/qpq-wiki-vim-setup.md
author: "Peter Harpending (QPQ Public Wiki, last edited 2026-05-08)"
date_published: 2026-05-08
date_ingested: 2026-05-15
key_claims:
  - Sophia has syntax highlighting support (at minimum: GitHub; details not yet documented on wiki)
  - Developer stack targets Devuan 6 (Excalibur) — consistent across all QPQ setup guides
  - Peter Harpending actively maintaining developer tooling docs as of May 2026
related: [[peter]], [[sophia-fate]]
confidence: high
---

# Vim Setup (QPQ Public Wiki)

Vim configuration guide for working in the QPQ AG codebase. Authored by [[peter]] (Peter Harpending, last edited 2026-05-08).

## Research-Relevant Notes

- **Sophia syntax highlighting** exists (confirmed reference to GitHub), though implementation details are not yet on this wiki page — suggests Sophia has editor tooling maturing alongside the language
- **Platform consistency**: Devuan 6 (Excalibur) throughout — all QPQ developer guides target this same OS
- **Author activity**: Peter Harpending was actively editing wiki pages as recently as May 8, 2026 — confirms he is the live maintainer of QPQ public documentation

## Content Summary

Fuzzy-finding plugin setup using fzf + ripgrep + fd. Packages: `bat fd-find fzf ripgrep`. Keybindings: `:Files` (file search), `:Rg` (interactive grep). Configuration uses `fdfind` to respect .gitignore boundaries.
