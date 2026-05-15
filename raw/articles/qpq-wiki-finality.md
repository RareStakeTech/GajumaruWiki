---
type: web-article
title: "Finality"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Finality
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Finality

In classical blockchain consensus, the "longest fork wins" rule means conflicting blocks eventually resolve with one fork outpacing others—described as "eventual consistency" in distributed systems terminology.

Bitcoin uses a practical rule: transactions become nearly impossible to remove once six blocks are added atop them. With Bitcoin's 10-minute block intervals, this represents approximately one hour for finality. The six-block threshold reflects the exponentially rising costs of chain rewriting with each additional block. Some alternative chains simply prevent fork introduction beyond a certain depth.

However, one hour creates practical limitations. Users often accept lesser certainty—checking the mempool for pending transactions, or accepting "zero-confirmation" trades before blockchain inclusion.

Multiple competing systems claim finality within seconds. Given the CAP Theorem constraints outlined in the Blockchain Trilemma discussion, questions arise regarding whether these models adequately address all scenarios, particularly in fully decentralized environments.
