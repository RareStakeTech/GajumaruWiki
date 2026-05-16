---
type: source
title: "Install Erlang and ZX (QPQ Public Wiki)"
slug: summary-qpq-wiki-install-erlang-and-zx
source_file: raw/articles/qpq-wiki-install-erlang-and-zx.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-03
date_ingested: 2026-05-15
key_claims:
  - Gajumaru node software requires Erlang and ZX to run
  - Target Erlang version: 28.1 (use most recent stable)
  - ZX is a project management tool hosted at zxq9.com/projects/zomp/
  - Primary supported platform: Devuan 6 (Excalibur) — consistent with Testnet Node Setup guide
  - Ubuntu also supported (reference build: Erlang 26.2.5 on Ubuntu 24.04)
related: [[peter]], [[craig]], [[summary-qpq-wiki-testnet-node-setup]]
confidence: high
---

# Install Erlang and ZX (QPQ Public Wiki)

Developer setup guide for the Gajumaru node runtime stack. Authored by [[peter]] (Peter Harpending, last updated 2026-05-03).

## Key Technical Facts

- **Erlang 28.1** is the example version; "use the most recent one that looks stable"
- **ZX** — project management tool from `zxq9.com/projects/zomp/`; installed via `wget -q https://zxq9.com/projects/zomp/get_zx && bash get_zx`
- Build method: compile Erlang from source using **Kerl** (Erlang build management tool)
- Verification: `zx run erltris`

## Platform Support

| Platform | Notes |
|----------|-------|
| Devuan 6 (Excalibur) | Primary; extra deps: `fop openjdk-17-jre`; `KERL_BUILD_DOCS=yes` for man pages |
| Ubuntu | Secondary; slightly reduced dependency list |

## Notable: ZX Author Identity

ZX is hosted at `zxq9.com` — the `zxq9` handle is widely associated with Craig Everett in the Erlang community, which would mean ZX is Craig's own project management tool used to bootstrap and run Gajumaru nodes. **Unconfirmed in available sources — treat as open question.**

> [!open_question]
> Is `zxq9.com` Craig Everett's domain? If so, ZX is Craig's own tooling, not a third-party dependency. Source: this page's installation command.
