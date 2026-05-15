---
type: source
title: "Transaction (QPQ Public Wiki)"
slug: summary-qpq-wiki-transaction
source_file: raw/articles/qpq-wiki-transaction.md
author: "Peter Harpending (QPQ Public Wiki)"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Transactions = state transition events (TXs) within blockchain blocks
  - Ordered list of state transitions = the record of what happened and when
  - Spend TX — one account sends coins to another
  - Contract call TX — account calls a smart contract for execution on-chain
  - Each TX updates the ledger; the next TX is "included" on the chain
related: [[groot]], [[sophia-fate]], [[grids]]
confidence: high
---

# Transaction (QPQ Public Wiki)

QPQ's definition of blockchain transactions, authored by [[peter]] (Peter Harpending).

**Transactions (TXs)** are the state transition events within a block. The ordered list of state transitions in each block dictates the sequence of events on the chain.

Two primary transaction types:
- **Spend TX** — coins transferred between accounts
- **Contract call TX** — smart contract invoked on-chain

Each TX updates the ledger state, establishing the ordered history that all nodes agree on.
