---
type: concept
title: "Cuckoo Cycle"
aliases: [cuckoo-cycle, cuckoo-pow, memory-bound-pow]
sources: [[summary-unwhitepaper]], [[summary-qpq-wiki-mining]], [[summary-video-bitcoin-proof-of-concept]]
related: [[groot]], [[gajumaru-architecture]], [[gaju-token]], [[bitcoin-ng]], [[aeternity]]
created: 2026-05-15
updated: 2026-05-16
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

**Hardware comparison:**

| Metric | Gaju miner (Cuckoo Cycle) | Bitcoin miner (SHA-256 ASIC) |
|--------|--------------------------|------------------------------|
| Minimum hardware | 8 GB RAM — any laptop or desktop | Specialist ASIC chip required |
| Power draw | 40–100 watts (incandescent bulb equivalent) | ~3,500 watts per unit; industrial cooling required |
| Infrastructure needed | None | Warehouse + power substation |
| Mining advantage from specialisation | Minimal — memory bandwidth doesn't scale with ASIC optimisation | Enormous — SHA-256 throughput scales linearly with chip speed |

> "Memory is memory. You cannot build a specialist chip that is dramatically faster at memory lookups than the RAM in an ordinary laptop." — Un-White Paper Ch. V

**Result:** Decentralised mining remains accessible to commodity hardware throughout the 87.5-year [[gaju-token]] distribution window. No single entity or mining cartel can dominate by outspending on specialised hardware.

## Efficiency Contribution to Groot's 1,846,200× Figure

In the Un-White Paper's four-factor efficiency calculation (Ch. V), Cuckoo Cycle is **Step 4** — contributing a 10×–50× multiplier on top of the preceding three steps:

> "Memory-bound proof-of-work is efficient on commodity hardware versus SHA-256's compute-bound approach... requiring 10–50× fewer total CPU instructions per solution at equivalent security."

Conservative bound (10×): produces the headline **1,846,200×** efficiency claim.  
Upper bound (50×): produces **9,231,000×**.

The **553,800×** figure in the Year in Review (Jan 2026) omitted Cuckoo Cycle as a separate factor — see [[groot]] for the mathematical resolution.

## Puzzle Structure

1. A seed number is generated from the keyblock header
2. The miner uses the seed to produce a large deterministic graph (billions of nodes)
3. The miner searches for a valid cycle within the graph of the required length
4. The solution (cycle proof) is trivially verifiable but computationally hard to find
5. Solution difficulty is calibrated to produce a keyblock approximately every 2 minutes

## Technical Basis

Peer-reviewed algorithm with years of cryptographic scrutiny. QPQ implemented Cuckoo Cycle as Groot's PoW puzzle. [[aeternity]] — the upstream blockchain from which QPQ adopted [[sophia-fate]] — also used Cuckoo Cycle as its PoW. Combined with [[bitcoin-ng]] consensus, Groot achieves:
- >300 transactions per second
- 2–3 second commercial settlement (next microblock)
- 3–4 minute absolute finality (2 keyblocks)

## Miner Rewards

Miners earn in two forms (source: [[summary-qpq-wiki-mining]]):
1. **New coins** — won by solving the Cuckoo Cycle puzzle (block reward); colloquially called "juice" in QPQ internal vocabulary
2. **Transaction fees** — for including transactions from the mempool

## Relation to Long-Term Mining Sustainability

The 87.5-year [[gaju-token]] distribution window requires a PoW mechanism that remains accessible to decentralised miners throughout. Cuckoo Cycle's commodity-hardware requirement directly serves this goal — [[protected-mining]] is designed around the assumption that ordinary consumer hardware remains viable.

## Sources
[[summary-unwhitepaper]], [[summary-qpq-wiki-mining]], [[summary-video-bitcoin-proof-of-concept]]
