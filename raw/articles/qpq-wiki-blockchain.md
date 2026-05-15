---
type: web-article
title: "Blockchain"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Blockchain
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Blockchain

A blockchain is essentially a linked list of data entries where the entries are stored in order as "blocks". As new blocks are added a hash of the previous block's value is added to the current new block's contents and a hash of that combination becomes the new block's hash identity. This structure guarantees that the sequence of the blocks cannot be changed later, as any changes to past data would propagate through all hashes that occur later, tipping off any outside observer that a retroactive change has occurred.

Most blockchains store data in some form of tree today and have a number of interesting features that pure lists do not have, but the above description is a reasonable approximation upon which to build a mental model of how blockchain works. The important part about the idea is that the way that blockchains are structured enforces the sequence in which data has been added to it. It is not possible to add data to an old block in the chain without rewriting every block that came afterward, and if many parties have copies of this list then unauthorized edits to past data are obvious to all of them.
