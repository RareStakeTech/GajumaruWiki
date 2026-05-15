---
type: source
title: "Mining (QPQ Public Wiki)"
slug: summary-qpq-wiki-mining
source_file: raw/articles/qpq-wiki-mining.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Mining = nodes competing for temporary leader recognition by solving Cuckoo Cycle puzzles
  - Cuckoo Cycle = finding cycles in a deterministically generated node map from a seed number
  - Cuckoo Cycle is "the least computation-heavy, and therefore most energy-efficient, of the known PoW algorithms"
  - Memory access prioritised over CPU — limits ASIC arms race
  - Dual miner reward — new coins (puzzle win) + transaction fees (inclusions)
  - The jigsaw puzzle visualisation — whoever finishes first becomes leader and gets mempool authority
related: [[cuckoo-cycle]], [[groot]], [[gaju-token]], [[protected-mining]]
confidence: high
---

# Mining (QPQ Public Wiki)

QPQ's public explanation of Gajumaru mining, authored by [[peter]] (Peter Harpending).

## What Mining Is

Mining = multiple nodes competing for recognition as the temporary leader. On Gajumaru this means solving **Cuckoo Cycle** puzzles: finding cycles within a deterministically generated node map produced from a seed number.

**Jigsaw puzzle analogy**: Multiple people at desks solving jigsaw puzzles — whoever finishes first becomes the new leader, receives the master ledger copy, and gains authority to include pending transactions from the mempool.

## Why Cuckoo Cycle

Unlike most blockchains (which use numerical hashing), Cuckoo Cycle prioritises **memory access over CPU capacity**.

> "The least computation-heavy, and therefore most energy-efficient, of the known PoW algorithms."

This limits ASIC advantage — memory bandwidth doesn't scale with chip specialisation the way arithmetic throughput does.

## Miner Rewards

Miners earn in two ways:
1. **New coins** — for winning the puzzle competition (block reward)
2. **Transaction fees** — additional compensation for including transactions from the mempool

This dual-reward system drives Gaju coin supply growth over time.
