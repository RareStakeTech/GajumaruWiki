---
type: web-article
title: "Vim Setup (QPQ Public Wiki)"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Vim-Setup
author: "Peter Harpending (QPQ Public Wiki, last edited 2026-05-08)"
date_downloaded: 2026-05-15
---

## Vim Setup

Developer Vim configuration guide for working in the QPQ AG codebase. Authored by Peter Harpending; last edited 2026-05-08.

## Sophia Syntax Highlighting

Page notes this feature exists on GitHub but provides no implementation detail on the current page.

## Fuzzy Finding Plugin

Setup using fzf + ripgrep + fd for fast file and code search in large codebases. Required packages (Devuan Excalibur):

```
sudo apt install bat fd-find fzf ripgrep
```

Installation:
- Clone `fzf.vim` to `~/.vim/bundle/fzf.vim`
- Copy `/usr/share/doc/fzf/examples/plugin/fzf.vim` to `~/.vim/autoload/fzf.vim`

Key bindings:
- `:Files` — fuzzy file finder
- `:Rg` — interactive grep search

Recommended vimrc: use `fdfind` to respect .gitignore; map Ctrl+E and Ctrl+R to fuzzy commands.

## Notes

- Platform: Devuan 6 (Excalibur) — consistent with rest of QPQ developer stack
- Author: Peter Harpending confirms active developer tooling maintenance as of May 2026
