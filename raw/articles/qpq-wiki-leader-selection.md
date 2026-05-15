---
type: web-article
title: "Leader Selection"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Leader-Selection
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Leader (S)election

The idea of the distributed ledger is important but also comes with an obvious problem: who has the authority to make an update to the ledger? Enforcing sequence is a critical feature of blockchain, so updates to the ledger in parallel is a non-trivial problem, meaning that the most obvious way to maintain correctness is to only have a single node be permitted to issue updates at a time. The node with this update authority is called the "leader". Picking the leader in a way that all nodes agree upon is the problem of leader selection.

There are two common approaches to this that simplify the problem:

1. Hold an election
2. Hold a competition

In the case of voting we must have some reason to trust that the participants in the vote are acting in good faith. Voting participants must place a costly symbol of their faith at risk for all to see, and they must also be known (not anonymous) parties to prevent gaming of the system. That is, for a voting system to work we must have some trust in the voters, and that can either be because we assume they are trusted (we know their identity) or because they have placed something valuable at stake and we know their identity.

In the case of puzzle solving, however, we do not require any special faith in stake, nor do we require known identities because the act of solving a difficult puzzle is itself a costly signal. The cost of solving the puzzle is moderated by the number of other participants against which all other participants are in competition, and in the ideal case the cost associated with compromising or capturing the system is greater than the value to be gained by going to the expense and trouble.
