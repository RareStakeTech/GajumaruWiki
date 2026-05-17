---
type: synthesis
title: "From Gold to Gaju: The Sound Money Thesis"
sources: [[summary-video-bitcoin-proof-of-concept]], [[summary-unwhitepaper]], [[summary-qpq-wiki-money]], [[summary-qpq-wiki-monetary-mechanics]], [[summary-video-stablecoins-genius-act]]
related: [[monetary-philosophy]], [[gaju-token]], [[cuckoo-cycle]], [[groot]]
filed_from_query: true
date: 2026-05-17
---

# From Gold to Gaju: The Sound Money Thesis

A synthesis of QPQ's monetary theory — tracing the argument from historical commodity money through gold's limitations to Gajumaru's cryptographic answer.

---

## The Problem: What Real Money Is

Craig Everett's formal definition, drawn from the Austrian economics tradition:

> "Money based upon a finite resource that can be proven, whose extraction has a value — not debaseable, not censorable, tradable between peers without intermediation."

Five properties. Any monetary system missing one of these is not real money in QPQ's framework — it is a credit instrument, a ledger entry, or a promise-to-pay.

| Property | What it means | Fiat status |
|----------|--------------|-------------|
| Finite | Supply is bounded by physics or mathematics, not decree | ✗ — central banks can print |
| Provable | Anyone can verify quantity and authenticity | ✗ — requires auditing authorities |
| Costly to produce | Extraction requires real expenditure of effort | ✗ — keystrokes |
| Not debaseable | No party can inflate the supply arbitrarily | ✗ — structural incentive to inflate |
| Peer-to-peer | Transferable without requiring a trusted intermediary | ✗ — requires bank, payment network |

JP Morgan testified before the United States Congress in 1912 that the greenback was "not money... a credit note." The architect of American banking understood the categorical distinction. The modern financial system subsequently chose credit notes.

---

## Why Gold Was Right — and Where It Breaks

Gold satisfied all five properties for most of human history. Craig's physics explanation of why:

Gold nuclei were forged in supernovae and neutron star collisions — stellar nucleosynthesis. You cannot reverse this process on Earth. Terrestrial gold extraction is a proxy for accessing this irreversible physical event. The expenditure of real energy to recover gold is anchored to a **one-way function within the universe itself**: the energy cost of nuclear fusion during stellar collapse, imprinted permanently into the metal.

This is metastability as monetary guarantee. Gold's supply is constrained not by decree but by physics. No institution can override it.

**Two structural failures, however:**

**1. The 2% target:** The conventional central bank inflation target traces to gold's terrestrial mining rate — approximately 2% per year. When gold backing was removed, the 2% target persisted as permission to inflate without discipline. Craig's sharper framing: central banks "conflated the meaning of price increases with inflation" and passed monetary inflation through capital markets before it reached CPI, using humanity as "transmission fluid" — the squishy absorber between the money printer and the economy's visible indicators.

**2. The space age vulnerability:** There are trillions of tons of gold floating in metal-rich asteroids. Asteroid mining — already being developed — will eventually collapse the terrestrial supply constraint. Gold's 2% annual growth rate could become 2,000%. A currency intended to function across interplanetary civilisation over millennia cannot depend on planetary geology.

---

## Why Bitcoin Was Necessary but Insufficient

Satoshi Nakamoto's insight: a cryptographic puzzle can stand in for gold as the physics-based constraint on money creation.

A valid proof-of-work:
- Requires real computational energy to find
- Cannot be reversed to recover the input without re-doing the work
- Is mathematical irreversibility rather than physical — but equally absolute
- Has no asteroid-mining vulnerability; mathematical scarcity is not bounded by planetary geology

Bitcoin proved the concept. QPQ frames it explicitly as "Newcomen's engine" — a valid, genuine, and **historically necessary** first instance that demonstrated the principle was real. Not a failure. A proof — of the concept only.

Bitcoin's limitations are architectural rather than conceptual:
- 3.25 TPS at 600-second settlement — insufficient for global commerce
- No native smart contracts — cannot express complex economic relationships
- No mechanism for high-speed off-chain payments (Lightning's routing monopolies fail this)
- ASIC dominance — computational specialisation concentrated mining into industrial farms
- No path to the machine economy (agents cannot hold bank accounts; Bitcoin lacks the micropayment layer)

---

## What Gajumaru Adds: The Complete Monetary Stack

Gajumaru inherits Bitcoin's core monetary insight (cryptographic work as physics-equivalent constraint) and resolves each structural limitation:

### The Constraint Layer: Cuckoo Cycle

Cuckoo Cycle is memory-bound rather than compute-bound. Memory access patterns cannot be accelerated by ASIC design — "memory is memory." A standard laptop with 8 GB RAM competes on equal terms with any specialist hardware. The ASIC arms race that centralised Bitcoin mining cannot happen with Cuckoo Cycle.

The result: gold's original democratic property is restored. Anyone who can run a laptop participates equally in minting.

### The Supply Design: 1 Trillion Gaju

Why 1 trillion? Craig's direct answer: "Why are there one trillion gajus? Well, why is there $100 trillion worth of private debt in the world?"

Bitcoin's 21-million ceiling was calibrated for a niche store of value. Gajumaru's supply is calibrated for a G20-scale operating economy — one large enough that transaction volume, not unit scarcity, drives value. The Fibonacci-derived emission curve distributes over 87.5 years, avoiding Bitcoin's cliff-edge halving dynamics.

A 125-billion-Gaju Stabilisation Treasury smooths early-adoption volatility during the protected mining window. This is not inflation — it is reserve management with a hard-coded end date.

### The Velocity Layer: Bitcoin-NG + State Channels

Sound money must be **usable** money. Gold's weight and transport friction made it impractical for daily commerce at scale — hence the drift toward promissory notes and credit. Gajumaru addresses this structurally:

- **Bitcoin-NG:** 300+ TPS at 2–3 second microblock settlement; 3–4 minute absolute finality on Groot
- **State Channels:** 500,000+ TPS on a single Mac Mini; 3 ms latency; near-zero per-transaction fees

A currency that settles in 3 seconds, charges sub-cent fees, and scales to millions of transactions per second per node can be used for bread, haircuts, and t-shirts — not just store-of-value speculation.

### The Self-Referential Target

Stablecoins are permanently dollar-defined — derivative instruments that reference fiat, never stand alone. Gaju is designed to eventually be self-referential: "how many eggs, how many pens" — not "how many dollars."

Greg Chew frames this as fulfilling the Bitcoin whitepaper's stated purpose: *"Bitcoin: A Peer-to-Peer Electronic Cash System."* People who cite that whitepaper as inspiration "proceed to go on as if the title of the paper didn't exist." Gajumaru is QPQ's claim to be the actual peer-to-peer electronic cash system the whitepaper described.

---

## The Three-Way Test

Sound money must satisfy Craig's test: **trustless, accountable, and scalable** simultaneously (see [[tea-trilemma]]).

| | Gold | Bitcoin | Fiat | Gaju |
|--|------|---------|------|------|
| Trustless (no operator required) | ✓ (physics) | ✓ (PoW) | ✗ (central bank) | ✓ (Cuckoo Cycle + Groot) |
| Accountable (supply provable) | ✓ (geology) | ✓ (blockchain) | ✗ (claimed) | ✓ (open source; on-chain) |
| Scalable for daily commerce | ✗ (weight/friction) | ✗ (3.25 TPS) | ✓ (Visa/Mastercard) | ✓ (300+ TPS + state channels) |

Gold wins two. Bitcoin wins two. Fiat wins one. Gaju is the first system to satisfy all three — by design.

---

## The 5,000-Year Counter-Claim

David Graeber's *Debt: The First 5,000 Years* argues that credit-money — not commodity-money — has been dominant throughout human history. If Graeber is right, stablecoins and CBDCs are the natural endgame.

Greg Chew explicitly frames Gajumaru as a counter-claim. His phrase "the next 5,000 years" is, in his own words, *"my little dig at Daniel Greyber"* — a deliberate counter-claim. Where Graeber looks back 5,000 years and sees credit-money as foundational, Greg is building **non-credit, peer-to-peer, commodity-equivalent money** for the *next* 5,000 years.

The debate is not merely academic. It determines what you build. QPQ builds for the Austrian position: real money requires physics-equivalent constraint, and only PoW-based cryptographic systems qualify.

---

## Back-links

This synthesis draws on:
- [[monetary-philosophy]] — Austrian economics foundation; gold metastability; JP Morgan; 2% target; Graeber counter-claim
- [[gaju-token]] — 1 trillion supply; Fibonacci emission; Stabilisation Treasury; puck denomination
- [[cuckoo-cycle]] — memory-bound PoW; ASIC resistance; democratic mining
- [[groot]] — Bitcoin-NG consensus; 300+ TPS; the resource layer that enforces the mathematical constraint
- [[tea-trilemma]] — trustless / accountable / scalable test
- [[bitcoin-ng]] — velocity layer enabling daily commerce at scale
