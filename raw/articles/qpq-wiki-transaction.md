---
type: web-article
title: "Transaction"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Transaction
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Transaction

The ordered list of state transitions that occur within a block dictate the order in which events have occurred on the chain. The state transition events themselves are called "transactions" (often abbreviated to "TXs"). There are several types of transactions, each with different effects. For example, a "spend TX" is where one account sends some amount of coins to another account, and a "contract call TX" is where an account calls a smart contract for it to be executed on the chain. The resulting update to the ledger is recorded and then the next transaction is "included" on the chain.
