---
type: source
title: "Sophia (QPQ Public Wiki)"
slug: summary-qpq-wiki-sophia
source_file: raw/articles/qpq-wiki-sophia.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Sophia = smart contract language for Gajumaru; originally on Aeternity; QPQ adopted it
  - Contributors include Erlang co-inventor Robert Virding and QuickCheck co-inventor John Hughes
  - Key designer Ulf Norell (Chalmers/Quviq) — creator of Agda proof assistant
  - FATE VM (Fast Aeternity Transaction Engine) — designed by Erik Stenman (BEAM Book author)
  - FATE uses high-level functional instruction set; creates new data structures (immutable); smaller footprint
  - Aeternity + Cardano = only two major blockchains tested with property-based testing (Quviq QuickCheck)
  - Sophia described as "easy to learn and a pleasure to program in"
related: [[gajumaru-architecture]], [[gajumaru-product-suite]], [[groot]], [[associate-chains]]
confidence: high
---

# Sophia (QPQ Public Wiki)

QPQ's description of the Sophia smart contract language and FATE VM, authored by [[peter]] (Peter Harpending).

## What Sophia Is

Sophia is a smart contract language originally designed for **Aeternity** and now used by Gajumaru. It was created by a high-calibre team of programming language and VM researchers.

## Contributors

| Name | Role | Affiliation |
|------|------|-------------|
| Ulf Norell | Key designer | Chalmers University, Quviq AB — creator of Agda |
| Erik Stenman | Key designer + FATE VM | Happi Hacking AB — Erlang native code compiler, BEAM Book author, ex-CTO Klarna |
| Thomas Arts | Key designer | Quviq AB co-founder, Chalmers professor |
| Hans Svensson | Key designer | Quviq AB — software verification |
| Robert Virding | Supporting contributor | **Erlang co-inventor** |
| John Hughes | Supporting contributor | Chalmers professor, **QuickCheck co-inventor** |

## Development History

Aeternity first ported the EVM to Erlang (creating AEVM). This let the team address Solidity/EVM limitations using their deep expertise in language and VM design.

**Property-based testing:** Aeternity and Cardano are the only two major blockchains tested using Quviq's QuickCheck property-based testing tool — a significant quality distinction.

## FATE VM

Designed by Erik Stenman after the AEVM phase:
- High-level, **functional instruction set**
- **Creates new data structures rather than modifying existing ones** — immutability-first approach
- Smaller smart contract footprints
- Enhanced correctness verification

## Why This Matters for Gajumaru

QPQ adopted Sophia + FATE VM rather than building their own contract language. This means:
- Sophia carries years of academic scrutiny, property-based test coverage, and real deployment history on Aeternity
- Gajumaru avoids the Solidity corner cases that have cost Ethereum contracts billions in exploits
- The contributor network (Virding, Hughes, Norell) represents the highest tier of functional programming and formal methods expertise

> [!open_question]
> Is "Ulf" (QPQ AG team member, Erlanger since 1992, hive mining/smart contracts) the same person as Ulf Norell (Chalmers/Quviq, Sophia contributor)? The connection is plausible but not confirmed in current sources.
