---
type: entity
entity_type: company
title: "Aeternity"
aliases: [aeternity, ae, aeternity-blockchain]
sources: [[summary-qpq-wiki-sophia]], [[summary-qpq-wiki-smart-contracts]], [[summary-qpq-wiki-state-channels]], [[summary-gajumaru-new-blockchain-demo-1]]
related: [[sophia-fate]], [[state-channels]], [[ulf]], [[gajumaru-architecture]], [[groot]]
created: 2026-05-15
updated: 2026-05-15
cluster: developer-ecosystem
contradictions: []
open_questions:
  - What is the current relationship between QPQ AG and the Aeternity Foundation?
  - Has QPQ contributed any modifications back to Aeternity's open-source repositories?
---

# Aeternity

Aeternity is the blockchain from which Gajumaru directly inherits its three key software components: the **Sophia** smart contract language, the **FATE VM**, and **State Channels**. Gajumaru adopted all three rather than building proprietary alternatives — giving it years of academic scrutiny, property-based testing, and real deployment history from the start.

## What Aeternity Contributed to Gajumaru

| Component | Aeternity origin | Gajumaru status |
|-----------|-----------------|-----------------|
| [[sophia-fate\|Sophia language]] | Designed for Aeternity by Norell, Stenman, Arts, Svensson | Adopted wholesale; extended by QPQ |
| [[sophia-fate\|FATE VM]] | Designed by Erik Stenman | Adopted; immutability-first functional VM |
| [[state-channels\|State Channels]] | Aeternity implementation (CoinFabrik merchant demo 2019) | Extended; new benchmarks + State Channel Markets |

## Erlang / OTP Lineage

Aeternity is built on **Erlang/OTP** — the same runtime that powers telecommunications systems requiring nine-nines uptime. This is why [[ulf]]'s expertise (Erlanger since 1992) was described as "vital to making all of these pieces work" in Gajumaru's implementation. The Erlang lineage passes: Aeternity → Gajumaru.

Source: [[summary-gajumaru-new-blockchain-demo-1]]

## Sophia's Academic Contributors

The contributors who designed Sophia for Aeternity are the same researchers who appear in QPQ's documentation:

| Name | Role | Background |
|------|------|-----------|
| Ulf Norell | Key designer | Chalmers/Quviq; creator of Agda proof assistant |
| Erik Stenman | Key designer + FATE VM | BEAM Book author; ex-CTO Klarna |
| Thomas Arts | Key designer | Quviq co-founder; Chalmers professor |
| Hans Svensson | Key designer | Quviq; software verification |
| Robert Virding | Supporting | **Erlang co-inventor** |
| John Hughes | Supporting | Chalmers; **QuickCheck co-inventor** |

These are not QPQ employees — they are external academics and industry contributors whose work QPQ is building on. Source: [[summary-qpq-wiki-sophia]]

## Property-Based Testing

Aeternity is one of only two major blockchains (alongside Cardano) tested with Quviq's **QuickCheck** property-based testing tool. Gajumaru inherits this testing rigour. Source: [[summary-qpq-wiki-sophia]]

## What Gajumaru Added

Gajumaru is not a fork of Aeternity — it is a distinct architecture that selectively adopts Aeternity's proven software components:

- **Groot** (resource layer) uses Bitcoin-NG + Cuckoo Cycle — not Aeternity's consensus
- **Associate Chains** architecture has no Aeternity equivalent
- **GRIDS** authentication protocol is original QPQ work by [[craig]]
- Sophia/FATE/State Channels are the inherited layer

The result: a new blockchain architecture (Groot + Associate Chains) running a proven smart contract and channel layer (from Aeternity).

## Founder and Motivation

**Yannis Mares** founded Aeternity specifically because Ethereum was "gloriously insecure" — Solidity is a poorly designed smart contract language and the EVM is not secure. He raised significant funding to hire global experts to build a genuinely secure VM and smart contract language. The result was Sophia + FATE VM.

Greg Chew (QPQ CEO): "Ethereum continues to be hacked on a daily basis. It's just such a regular occurrence that it doesn't make the news."

Source: [[summary-npm-supply-chain-hack]]

## License

Sophia/FATE is licensed under the **ISC license** — similar to MIT; highly permissive. QPQ adopts it under this license. This is confirmed in QPQ's own Sophia repository (`git.qpq.swiss/QPQ-AG/sophia`, ISC license).

Source: [[summary-npm-supply-chain-hack]], [[summary-qpq-wiki-sophia]]

## Aeternity Cuckoo Cycle

Aeternity used the same [[cuckoo-cycle]] proof-of-work as Gajumaru. This is notable: the PoW algorithm choice was also validated by Aeternity's prior deployment, not just QPQ's implementation.

## Open Questions

- What is the formal relationship between QPQ AG and the Aeternity Foundation today?
- Has QPQ contributed any modifications back to Aeternity's open-source repositories?
