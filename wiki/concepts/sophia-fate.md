---
type: concept
title: "Sophia / FATE VM"
aliases: [sophia, fate-vm, fate, sophia-language, fast-aeternity-transaction-engine]
sources: [[summary-qpq-wiki-sophia]], [[summary-qpq-wiki-smart-contracts]], [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]]
related: [[gajumaru-architecture]], [[gajumaru-product-suite]], [[groot]], [[associate-chains]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: smart-contracts
cluster_role: hub
---

# Sophia / FATE VM

Sophia is the smart contract language used by Gajumaru. FATE (Fast Aeternity Transaction Engine) is its runtime VM. Both were originally developed for the Aeternity blockchain by a distinguished team of programming language and verification researchers.

## In This Cluster

| Page | Description |
|------|-------------|
| [[sophia-fate]] *(hub)* | Sophia language + FATE VM |
| *future: smart-contract-patterns* | Patterns and best practices |
| *future: contract-visibility* | Visible vs Incognito deployment modes |

## Origins

Sophia and FATE were designed for **Aeternity** — a blockchain built on Erlang/OTP. QPQ adopted both rather than building proprietary alternatives. This gives Gajumaru smart contracts years of academic scrutiny, property-based test coverage, and real deployment history.

## Sophia Language

Designed to correct Solidity's known inadequacies:
- **Pre-execution verification** — contracts are verified before deployment
- **No Solidity corner cases** — designed explicitly to avoid the quirks that have caused billions in Ethereum contract exploits
- Described as **"easy to learn and a pleasure to program in"**

QPQ framing (from [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]]): "Sophia resolves irreparable Solidity inadequacies; Python-adoptable."

## FATE VM

Designed by Erik Stenman (Erlang native code compiler developer, BEAM Book author, ex-CTO Klarna):
- **High-level functional instruction set** — operates at a higher abstraction level than the EVM
- **Immutability-first** — creates new data structures rather than modifying existing ones
- **Smaller contract footprints** — reduced on-chain storage requirement
- **Enhanced correctness verification** — functional approach enables formal reasoning about contract behaviour

## Contributors

| Name | Contribution | Background |
|------|-------------|-----------|
| Ulf Norell | Key designer | Chalmers/Quviq, creator of Agda proof assistant |
| Erik Stenman | Key designer + FATE VM | Happi Hacking, BEAM Book, ex-CTO Klarna |
| Thomas Arts | Key designer | Quviq co-founder, Chalmers professor |
| Hans Svensson | Key designer | Quviq, software verification |
| Robert Virding | Supporting | **Erlang co-inventor** |
| John Hughes | Supporting | Chalmers, **QuickCheck co-inventor** |

## Property-Based Testing

Aeternity and Cardano are the only two major blockchains tested using Quviq's **QuickCheck** property-based testing tool. This is a significant quality distinction — most blockchain code relies on unit tests, which cannot discover emergent or statistical failure modes.

## Deployment Modes on Gajumaru

See [[summary-qpq-wiki-gajumaru]]:
- **Visible** — source code included in deployment transaction; callers can verify behaviour before signing
- **Incognito** — source code omitted; opaque to callers

## Open Question

> [!open_question]
> Is "Ulf" (QPQ AG team member, Erlanger since 1992) the same as Ulf Norell (Chalmers/Quviq, Sophia contributor)? Plausible but unconfirmed.
