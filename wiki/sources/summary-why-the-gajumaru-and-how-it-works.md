---
type: source
title: "Why the Gajumaru and How it Works (YouTube)"
slug: summary-why-the-gajumaru-and-how-it-works
source_file: raw/transcripts/why-the-gajumaru-and-how-it-works.md
author: "Craig (lead architect), Dimitar (implementation engineer), unnamed host — QPQ AG"
date_published: 2026-05-15
date_ingested: 2026-05-15
key_claims:
  - Gajumaru named after the gajimaru tree Craig saw outside his office in Okinawa — single trunk drops support roots that become independent trunks
  - Naming captures the tree-structure scalability design — root mint + independent associate chains
  - The PoW mint is required because a currency needs a trust anchor that no party can control
  - Each Associate Chain has its own independent database, CPU space, and transaction throughput
  - A Gaju account is valid on every chain in the ecosystem
  - Gajus are "checked out" from the mint to an associate chain; transferable cross-chain
  - A central bank was consulted and confirmed needing different chain configs for coffee vs interbank settlement
  - Rejects "one ring to rule them all" — no single blockchain can meet all real-world requirements
related: [[gajumaru-architecture]], [[associate-chains]], [[groot]], [[gaju-token]], [[ripa-model]], [[craig]], [[dimitar]]
confidence: high
---

# Summary: Why the Gajumaru and How it Works

Technical explainer video featuring Craig (lead architect) in Okinawa, Japan, Dimitar (implementation engineer), and an unnamed host. This is a primary-source technical discussion; confidence upgraded to **high** as it features the lead architect and implementation engineer speaking in their own words.

---

## The Name — Craig's Explanation

Craig was working through the scalability problem — partitioning the blockchain into a tree structure where each branch could operate independently. He didn't have a name for it. Outside his office window in Okinawa, Japan, he could see a *gajimaru* tree:

> "It grows first from a single bowl but pretty quickly it starts dropping these support roots and they wind up becoming trunks of their own — which is similar to the structure that we actually want."

The name stuck. Craig describes it as "a crazy name" that would be easy to search for later.

---

## The Architecture Rationale (Craig)

**The core scalability insight:** Partition the problem down to as local as possible — the same approach the traditional banking system uses. This yields a tree structure.

**Why PoW for the mint:** Any digital currency needs an anonymous PoW mint — "a mint that no party can control, which means that we can trust it." A trust-dispensing function that requires PoW. This consensus model cannot serve all use cases, so Associate Chains are given freedom to choose their own.

**The goal:** A single currency used across all chains, with each chain free to set its own rules.

---

## Associate Chains — Dimitar's Explanation

Associate Chains are all spawned from the mint. They:
- Share the same economy (Gaju currency)
- Can vary in consensus: PoW, PoS, Proof of Authority, or anything suitable for the business case
- Have their own **independent database** and **independent CPU space** (transaction throughput isolation)
- Can define their own block size and enable new functionalities

**Ethereum contrast:** On Ethereum, a viral product congests the whole network and drives fees up for everyone. On Gajumaru, each Associate Chain owns its throughput — one chain's load cannot impact another's.

---

## Account Universality and Cross-Chain Transfers (Craig, continued)

What sets Gajumaru apart from "a loose collection of chains":
- **A Gaju account is valid on every chain** — demanded by the ecosystem design
- Each Associate Chain treats the mint like a local bank treats a central bank
- When you start an Associate Chain, you "check out" Gajus from the mint to your chain
- Gajus are transferable between associate chains and between user accounts cross-chain

**Two paths for a successful application:**
1. Run on Groot in the unregulated space → if successful, spawn an Associate Chain for performance
2. If jurisdiction compliance is needed, move to an Associate Chain with the appropriate KYC/consensus → Gajus treated "more or less like foreign currency" not under your regulatory control

---

## "One Ring to Rule Them All" Rejection

The host explicitly invokes Tolkien: "JR Tolkien is really talking about how that is an absolute power that absolutely corrupts." But the deeper point: **there is no one solution for every need or requirement**.

**Central bank use case (real consultation):** A central bank told QPQ they wanted:
- High-speed chain for retail payments (coffee purchases)
- High-security chain for interbank settlements and end-of-day settlements

This validates the multi-chain design against real institutional requirements.

---

## Speaker Notes

- **Craig** = lead architect, based in Okinawa, Japan; named the project; designed the tree structure. First name only in this video.
- **Dimitar** = implementation engineer, working on Associate Chain interplay. First name only.
- **Host** = unnamed; references "Greg" (likely [[gregory-chew]]) when handing to Dimitar.
- Transcript confidence note: auto-subtitles; occasional garbling ("Soc" for "Associate Chain", "gajuaru" variants). Substance clearly intact.
