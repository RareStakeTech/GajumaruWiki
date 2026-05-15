---
type: web-article
title: "Mempool"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Mempool
author: "Craig Everett (last edited 2026-02-06)"
date_downloaded: 2026-05-15
---

## Mempool

When a user wants to place a transaction on the blockchain, he submits a transaction in the form of a signed message. This message is propagated throughout the network in a holding space called the "mempool". The current leader checks the mempool for transactions that are likely to be the most profitable, includes it on the chain (executes its instruction), updates the current block state, and then looks for another profitable transaction to process. The leader has an incentive to pick the most profitable message it can find, balancing the difficulty of comparing them against the benefit of racing through transaction processing.
