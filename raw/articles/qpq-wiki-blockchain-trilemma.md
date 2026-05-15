---
type: web-article
title: "Blockchain Trilemma"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Blockchain-Trilemma
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## The Blockchain Trilemma

In engineering there is a famous trilemma such that:
- A project can be cheap, fast or correct; pick two.

In distributed systems there is a trilemma called "the CAP theorem" such that:
- A distributed system can, at any given moment, have consistency, availability, or partition tolerance; pick two.

The "blockchain trilemma" can be stated as follows:
- A ledger system can be secure, distributed, or scalable; pick two.

To understand the blockchain trilemma it is useful to first understand the CAP theorem. To expand on its three properties, to a distributed systems engineer they mean:

- **Consistency**: all nodes will give the same response to a query
- **Availability**: the system is highly responsive
- **Partition tolerance**: if the network splits both parts will behave correctly

The trouble is that the laws of physics conspire in such a way that any system can achieve only two of these three qualities at a time. The challenge for the designer is to pick which qualities matter most at a given moment rather than trying to naively achieve all three and simply failing.

Given that DLTs are distributed systems, the CAP theorem applies to them. Algorand, for example, addresses the problem by favoring security over availability — their network simply stops during a sufficiently large network split, i.e. dropping the "P" in "CAP". As an example of how the CAP theorem forces the blockchain trilemma, consider that in the context of DLTs claiming "instant finality" it is relevant to inquire how they can guarantee that in the face of network splits.

The Gajumaru solves the blockchain trilemma in a novel way that is related to both its architecture and its approach to consensus.
