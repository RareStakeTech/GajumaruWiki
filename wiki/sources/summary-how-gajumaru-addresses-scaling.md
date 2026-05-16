---
type: source
title: "How the Gajumaru Addresses Scaling (YouTube)"
slug: summary-how-gajumaru-addresses-scaling
source_file: raw/transcripts/gajumaru-how-the-gajumaru-addresses-scaling.md
author: "Craig Everett, Greg Chew, Ulf Wiger (Q&A format with community pioneer Susan)"
date_published: 2025-01-01
date_ingested: 2026-05-16
key_claims:
  - Bitcoin's throughput limit is a design choice, not a physics constraint — "separation of concerns" design principle
  - Bitcoin practical throughput: ~3.2 TPS; ~100,000 transactions per day flat line
  - Gajumaru Groot: 300–900 TPS depending on transaction type (simple spends faster; contract calls heavier)
  - State channels: theoretical 50,000 TPS per node; Tokyo Metro (world's biggest) does not reach 300 TPS at peak
  - Associate chain scaling: 10,000 ACs × 300 TPS = 3,000,000 TPS combined network throughput
  - Cross-chain routing: AC A → Groot → AC B; Groot is the nearest common parent
  - Hard cap: more Gajus can never be taken out of an AC than were put in — enforced by Groot at every keyblock height
  - No bailout mechanism: if an AC "allows sneaky stuff" and collapses, there is no rescue mechanism
  - "Too big to fail" problem structurally impossible — Groot enforces a hard money supply cap
  - Reason blockchain must be slow is proof of work, not transaction broadcasting — proven separate concerns
  - Associate chains avoid the leader selection problem by using known, legally accountable operators
  - Visa processes ~124 TPS real-time; batches when under contention
related: [[groot]], [[associate-chains]], [[state-channels]], [[cuckoo-cycle]], [[bitcoin-ng]], [[craig]], [[gregory-chew]], [[ulf]]
confidence: high
---

# Summary: How the Gajumaru Addresses Scaling

Q&A format video with Craig Everett as primary explainer, assisted by Greg Chew and Ulf Wiger. Prompted by community pioneer "Susan" asking how Gajumaru avoids Bitcoin's scaling problem. One of the clearest non-technical explanations of the full scaling architecture.

---

## Why Bitcoin Is Slow (Craig)

Bitcoin is slow as a **design choice** made at inception, not because of any physical law:

> "They conflated two concerns which is the work of updating the ledger with the work of proving who's a leader. The design principle is called separation of concerns and that's exactly this."

Satoshi conflated both concerns into one message type because they "weren't quite sure how well a pure gossip messaging system was actually going to work." This caused the side effect that transactions can't be processed until the next block — the "chunky nature of Bitcoin."

Bitcoin practical throughput: **~3.2 TPS**; theoretical maximum ~7 TPS; approximately **100,000 transactions per day** (flat line observed in practice).

---

## Layer 1 Scaling: Groot

Gajumaru separates leader election (keyblocks, every ~2 min) from transaction processing (microblocks, every 3 sec). This gives:

- **300–900 TPS** depending on transaction type
- Simple spends: fast (just A → B update)
- Contract calls: heavier — VM instantiation, state loading, processing, write-back

At 300 TPS, "quite a few countries would actually fit inside of that." Still not every casual transaction globally.

---

## Layer 2 Scaling: State Channels

> "To give that kind of silly number context, the Tokyo subway, Tokyo Metro system, which is the world's biggest of them all, that doesn't do 300 transactions per second at peak. So you get some idea of just how redundant something like that could very very quickly be."

State channels are "batching without batching" — every transaction is recorded, but within the channel context so chain throughput is not consumed. Theoretical: **50,000 TPS per node**.

Comparison: Visa processes ~**124 TPS** in real time; batches when contention arises.

---

## Layer 3 Scaling: Associate Chains

> "If you look at the whole world's economy, that's still plenty for most — like quite a few countries would actually fit inside of that. But that's still not the whole world and it's definitely not every casual transaction."

The scaling answer:

> "Multiply 300 transactions per second by 10,000 [associate chains] and you're talking about stupid numbers of transactions that are occurring real time around the world. That's the true answer to how you scale."

**10,000 ACs × 300 TPS = 3,000,000 TPS** combined network throughput. This is the "networks within networks and markets within markets" concept Greg described when first designing the architecture.

Jurisdictional rationale:
> "We don't think that we'll ever really stretch Groot because the moment people start to do something that requires large numbers of transactions, it's likely that that's occurring within a single jurisdiction. And that jurisdiction will want its own rules, its own supervision, its own regulations."

---

## Why Associate Chains Can Be Fast

The reason blockchains are slow is proof of work solving the leader selection problem in an adversarial network where no nodes are trusted. Associate chains eliminate this:

> "When you get to associate chains, you now have operators and they're known which means you don't have the peer selection, you don't have the leader selection problem anymore. You have known actors, they're under legal penalty if they screw up."

Therefore ACs can run at "phenomenally high speeds" using PoS or PoA, because those mechanisms are viable when the participants are known and legally accountable.

---

## Cross-Chain Money Flow and the Hard Cap

Money movement mechanism:
- "Your account on Groot is the same as your account on an associate chain."
- Transfer: do a spend transaction from yourself to yourself on a different chain
- Every keyblock height is an opportunity for transfers in both directions

Cross-chain routing:
> "If you want to go from associate chain A to associate chain B, the nearest parent common parent for those two chains is Groot. It goes from chain A through Groot to chain B."

**The hard constraint:**
> "Groot is aware of all the subordinate chains. And it ensures that more money can never be taken out of an associate chain than was put in. So you have a hard cap on the circulation of the money supply."

**No bailout mechanism:**
> "If chain — if an associate chain allows sneaky stuff to happen and they're inventing and blowing up money or whatever, if people start evacuating from that chain, that whole thing collapses and there's no bailout mechanism whatsoever."

> "The funny money problem that you've got in the too big to fail banks — that cannot occur in the context of the Gaju. There's a hard cap to that."

---

## Sources
[[groot]], [[associate-chains]], [[state-channels]]
