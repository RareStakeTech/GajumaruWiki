---
type: concept
title: "Cuckoo Cycle"
aliases: [cuckoo-cycle, cuckoo-pow, memory-bound-pow]
sources: [[summary-unwhitepaper]], [[summary-qpq-wiki-mining]]
related: [[groot]], [[gajumaru-architecture]], [[gaju-token]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: core-protocol
cluster_role: member
---

# Cuckoo Cycle

Cuckoo Cycle is the proof-of-work algorithm used by Gajumaru's [[groot]] resource layer. Designed by John Tromp (2014, updated 2019).

## What It Is

A memory-bound, graph-theoretic proof-of-work puzzle. Rather than requiring raw computation (as in Bitcoin's SHA-256 hashcash), it requires **finding cycles within a deterministically generated node map produced from a seed number**. The bottleneck is memory bandwidth, not raw CPU/GPU arithmetic throughput.

QPQ describes it as **"the least computation-heavy, and therefore most energy-efficient, of the known PoW algorithms."** Source: [[summary-qpq-wiki-mining]]

## Why Memory-Bound Matters: No ASIC Arms Race

Bitcoin's SHA-256 PoW can be optimised endlessly with specialised ASIC chips — expensive, energy-hungry hardware that concentrates mining power in the hands of industrial operators. Cuckoo Cycle's memory-bound nature limits ASIC advantage because memory bandwidth does not scale with chip specialisation in the same way arithmetic throughput does.

**Result:** Decentralised mining remains accessible without an industrial ASIC investment. No single entity or mining cartel can dominate by outspending on specialised hardware.

## Technical Basis

Peer-reviewed algorithm, subject to years of cryptographic scrutiny. QPQ implemented Cuckoo Cycle as Groot's PoW puzzle. Combined with Bitcoin-NG consensus (which separates leader election from transaction serialisation), Groot achieves:
- >300 transactions per second
- 2–3 second commercial settlement (next microblock)
- 3–4 minute absolute finality (2 keyblocks)

## Relation to Long-Term Mining Sustainability

The Un-White Paper notes Cuckoo Cycle contributes to Gajumaru's long-term mining distribution — the 87.5-year [[gaju-token]] distribution window requires a PoW mechanism that remains accessible to decentralised miners throughout.

## Miner Rewards

Miners earn in two forms (source: [[summary-qpq-wiki-mining]]):
1. **New coins** — won by solving the Cuckoo Cycle puzzle (block reward)
2. **Transaction fees** — for including transactions from the mempool

## Sources
[[summary-unwhitepaper]], [[summary-qpq-wiki-mining]]
