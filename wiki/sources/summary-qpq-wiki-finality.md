---
type: source
title: "Finality (QPQ Public Wiki)"
slug: summary-qpq-wiki-finality
source_file: raw/articles/qpq-wiki-finality.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Classical blockchain = "longest fork wins" = eventual consistency
  - Bitcoin practical finality: 6 blocks ≈ 1 hour (10-minute intervals); exponentially harder to rewrite
  - Some chains prevent forks beyond a certain depth
  - Users often accept lesser certainty — mempool checks, zero-confirmation trades
  - Second-finality claims require scrutiny under CAP theorem constraints
related: [[groot]], [[tea-trilemma]], [[associate-chains]]
confidence: high
---

# Finality (QPQ Public Wiki)

QPQ's explanation of blockchain finality and why second-finality claims are problematic, authored by [[peter]] (Peter Harpending).

## Classical Blockchain Finality

"Longest fork wins" = **eventual consistency**. Conflicting blocks resolve as one fork outpaces others over time. Not guaranteed at any given moment.

**Bitcoin**: 6-block practical threshold. After 6 blocks, the exponential cost of rewriting the chain makes removal practically impossible. At 10-minute intervals: **~1 hour for finality**.

Some chains hard-code fork prevention beyond a certain depth — a different tradeoff.

## Practical Workarounds

Users often accept lesser certainty in practice:
- Checking the **mempool** for a pending transaction (before block inclusion)
- Accepting **zero-confirmation** trades for low-value exchanges

These reflect the real friction of classical blockchain finality.

## Second-Finality Claims

Multiple competing systems claim finality within seconds. QPQ questions these:

> "Given the CAP Theorem constraints outlined in the Blockchain Trilemma discussion, questions arise regarding whether these models adequately address all scenarios, particularly in fully decentralized environments."

This is a pointed critique — systems claiming instant finality must be interrogated about their behavior during network partitions. (See [[summary-qpq-wiki-blockchain-trilemma]] — Algorand halts during splits.)

## Gajumaru in Context

[[groot]] achieves **2–3 second commercial settlement** (next microblock) with **3–4 minute absolute finality** (2 keyblocks). This is dramatically faster than Bitcoin's 1-hour threshold while operating in a fully decentralized PoW environment — made possible by Bitcoin-NG's separation of leader election from transaction processing.
