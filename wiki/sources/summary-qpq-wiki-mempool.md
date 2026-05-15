---
type: source
title: "Mempool (QPQ Public Wiki)"
slug: summary-qpq-wiki-mempool
source_file: raw/articles/qpq-wiki-mempool.md
author: "Craig Everett (last edited 2026-02-06, UTC+9)"
date_published: 2026-02-06
date_ingested: 2026-05-15
key_claims:
  - Mempool = network-wide holding space for pending signed transaction messages
  - Leader selects most profitable transactions from mempool for inclusion
  - Leader incentivised by fees — balance: profitability comparison vs speed of processing
  - Transactions enter as signed messages; leader executes and updates block state
  - NOTE: This page was authored by Craig Everett (not Peter Harpending) — confirms Craig writes technical content
related: [[groot]], [[cuckoo-cycle]], [[craig]]
confidence: high
---

# Mempool (QPQ Public Wiki)

QPQ's explanation of the mempool, authored by **Craig Everett** (not Peter Harpending — notable as a primary source from the lead architect, last edited 2026-02-06 UTC+9, confirming Japan timezone).

**Mempool** = the network-wide holding space for pending transactions.

Process:
1. User submits a signed transaction message
2. Message propagates to the mempool (distributed across all nodes)
3. Current leader selects the most profitable transactions
4. Leader executes each transaction, updates block state, then picks the next

**Leader incentive:** Fees reward profitability. The leader must balance the effort of comparing transactions against the benefit of processing them quickly.
