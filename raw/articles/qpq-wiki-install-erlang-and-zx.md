---
type: web-article
title: "Install Erlang and ZX (QPQ Public Wiki)"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Install-Erlang-and-zx
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Install Erlang and ZX

Developer setup guide for installing Erlang and ZX on Linux, required to run Gajumaru node software.

## Erlang

- Target version: **Erlang 28.1** (example; use most recent stable)
- Build tool: **Kerl** (Erlang build management tool)
- Installation method: compile from source via Kerl

### Core Dependencies

gcc, curl, g++, build-essential, automake, autoconf, libncurses-dev, libssl-dev, flex, xsltproc, wget, vim, git

### Platform-Specific

**Devuan 6 Excalibur** — additional: `fop openjdk-17-jre`; set `KERL_BUILD_DOCS=yes` for man page generation

**Ubuntu** — slightly reduced dependency list; reference build: Erlang 26.2.5 on Ubuntu 24.04

### Installation Steps (Summary)

1. Install build dependencies via package manager
2. Download and configure Kerl
3. Compile Erlang from source using Kerl
4. Add Erlang to system PATH via shell configuration

## ZX

- **ZX** is a project management tool used to build and run Gajumaru node software
- Hosted at: `zxq9.com/projects/zomp/`
- Installation: `wget -q https://zxq9.com/projects/zomp/get_zx && bash get_zx`
- Verification: `zx run erltris`
- No specific version pinned; installs latest stable

## Notes

- Primary supported platform: Devuan 6 (Excalibur) — same platform as Testnet Node Setup guide
- ZX is hosted at `zxq9.com` — the domain owner's identity is unconfirmed in this source
