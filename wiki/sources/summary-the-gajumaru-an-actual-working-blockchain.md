---
type: source
title: "The Gajumaru — an actual, working blockchain (YouTube)"
slug: summary-the-gajumaru-an-actual-working-blockchain
source_file: raw/transcripts/the-gajumaru-an-actual-working-blockchain.md
author: "Craig (lead architect), Dimitar (implementation engineer), Peter (communicator), unnamed host — QPQ AG"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Gajimaru tree means "the walking tree" — starts single trunk, drops runners that become indistinguishable independent trunks
  - Name was a working name Craig expected to change; nothing better came up
  - Associate chains cooperate to improve finality on the mint — Dimitar's area, more detail promised in later videos
  - Competitive chain spawning — if a chain gets overloaded, users can spawn a competing chain; Gajus flow freely since no chain-specific currency lock-in
  - Blockchain industry critique — "squares into polygons" — adding complexity to hide flawed original designs
  - QPQ's goal is an "internet of economics" with an open common resource layer
  - Peter is a non-technical communicator helping stress-test explanations for a general audience
related: [[gajumaru-architecture]], [[associate-chains]], [[groot]], [[gaju-token]], [[craig]], [[dimitar]], [[peter]]
confidence: high
---

# Summary: The Gajumaru — an actual, working blockchain

Earlier/more casual video featuring the core team: Craig (lead architect), Dimitar (implementation engineer), Peter (communicator/"rubber duck"), and an unnamed host. This appears to be one of the first in QPQ's explainer series. Primary sources speaking directly; confidence upgraded to **high**.

---

## The Name — Craig (extended version)

Consistent with [[summary-why-the-gajumaru-and-how-it-works]] but with new detail:

- The *gajimaru* tree translates as **"the walking tree"**
- Craig describes it: "you can't tell which one was the original one at some point"
- He chose it as a working name, fully expecting to change it — but nothing better emerged

The naming reason is architectural: a central PoW mint drops "runners" (associate chains) that become fully independent and indistinguishable in terms of capability — just as the gajimaru tree's dropped roots become full trunks.

---

## Associate Chains — Dimitar

Closely matches [[summary-why-the-gajumaru-and-how-it-works]]. Notable framing here:

**Fee bribery problem (Dimitar):** When a popular app floods a shared transaction pool, miners pick transactions by fee. This "bribery" is not correlated with computational work — you're paying for memory space in the block, not for extra computation. Your own transaction pool eliminates this entirely.

---

## New Technical Detail: Associate Chains Cooperate to Improve Mint Finality

> "The associate chains will also cooperate to improve the finality as we call it on the mint."

Craig attributes this to Dimitar ("that's Dimitar's baby") and explicitly defers detail to a later video. This is the only mention of inter-chain finality cooperation in all ingested sources. It suggests Associate Chains play an active role in Groot's security/finality — not merely passive consumers of the mint.

**Open question:** How exactly do Associate Chains cooperate to improve Groot finality? Mechanism not explained in this source.

---

## Competitive Chain Spawning

New concept not in prior sources:

> "If a chain gets overloaded or doesn't serve a use case properly, you can spawn a competing chain — where the shared resources can flow because you're not locked into the unique currency of the specific chain."

Since Gajus are cross-chain transferable, users are never locked in. If one Associate Chain becomes monopolistic, overloaded, or mis-governed, a competitor can emerge and capture the same traffic. Market discipline is structurally embedded in the architecture.

---

## The "Squares into Polygons" Critique

Craig's sharpest critique of the blockchain industry:

> "What this industry has been trying to do is: we've got a couple of squares that we've attached to axles on this new mode of transport. Instead of saying 'squares aren't very good wheels,' they've tried to turn them into polygons — and obscure the fact that the original design just didn't work."

Context: Craig is responding to Peter noting how confusing and complex blockchain is. Craig (paraphrasing [[gregory-chew]]): "The reason you don't understand is because you're a good person who's thinking of this logically." The disinformation and complexity are structural — they serve to hide fundamental design failures in other blockchains.

---

## "Internet of Economics"

Craig explicitly names QPQ's mission:

> "Ultimately we're trying to create an internet of economics — what that means is that we have an open common resource layer that is this Gajumaru and that's what we're trying to deliver to the market."

Consistent with Un-White Paper framing ([[summary-unwhitepaper]]).

---

## Peter — Communicator Role

Peter is introduced as a "rubber duck" — a non-technical voice helping test explanations before they reach a general audience. His role appears to be:
- Asking the questions a smart non-specialist would ask
- Flagging where explanations are still opaque
- Representing the target audience for these videos

This is a distinct communicator/educator role at QPQ, not a technical or executive position.

---

## Speaker Notes

- **Craig** — lead architect. Consistent with prior video; no new personal details.
- **Dimitar** — referred to by auto-subs as "deitar/dier"; clearly Dimitar from context.
- **Peter** — first appearance. Last name unknown. Non-technical communicator.
- **Host** — unnamed, same person as [[summary-why-the-gajumaru-and-how-it-works]] host.
- This appears to be an earlier video than [[summary-why-the-gajumaru-and-how-it-works]] based on production quality and phrasing.
