---
type: web-article
title: "Consensus"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Consensus
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Consensus

In the context of distributed systems "consensus" means finding some way to agree on a common view of state at a given time. The trouble with the previous sentence is its last word: "time". There is no absolute notion of "wall clock time" in distributed systems, but it is possible to establish relative sequence in a concrete way. Sequence then becomes the basis for notions of time. This means that sequence is the first thing that must be agreed before anything else can occur.

In blockchain the way this works is that a "leader" can be picked (see Leader Selection), and whatever that leader says can be accepted by all nodes in the system as the agreed truth until that leader is replaced. This reduces the problem of consensus to the problem of leader selection.

The Gajumaru works via leader selection as described above, and the mechanism for leader selection on Groot is PoW. There are other mechanisms of leader selection and also consensus paradigms that do not depend on selection of a single leader.

As mentioned above, PoW has the special property that the participants do not need to be known, nor do they need to be trusted. Trustless and anonymous are synonymous in this context and are required for a mint to function properly.

Proof of Stake (PoS) differs radically from PoW as a consensus mechanism. PoS systems are vulnerable to a variety of attacks unless the actors in that system are known and trusted to some degree. Further, if the collateral that has been put at stake is not valuable independent of the staking system the system winds up with what is called the "nothing at stake" problem where the sacrifice of stake may be painless to a malicious actor because it was never externally valuable to begin with.

The entire field of consensus research in distributed systems is dedicated to exploring the tradeoffs that exist and categorizing which systems are viable in which contexts, whether identified or anonymous, trusted or trustless, malicious or benign, closed or open, and so on.
