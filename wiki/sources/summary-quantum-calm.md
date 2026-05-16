---
type: source
title: "Quantum Threat: Stay Calm and Keep Coding (2 clips)"
slug: summary-quantum-calm
source_file: raw/transcripts/[multiple — see body]
author: "Peter Harpending / QPQ AG"
date_published: 2026-03-01
date_ingested: 2026-05-16
key_claims:
  - Peter Harpending: quantum computers capable of cracking ECC are at least decades away, if ever
  - Shor's algorithm theoretical optimizations bring solution an order of magnitude closer
  - Neutral atom quantum computing increases physical qubit feasibility
  - Mid-2030s most optimistic timeline for single-key ECC attack requiring ~10 days
  - Attack only economically rational for accounts holding $100K+ in value
  - QPQ safe accounts strategy: QR-signed transactions for high-value vaults
  - QPQ: will support quantum-resistant accounts by mainnet launch
  - LLMs are extraordinarily limited and stuck with hallucination — overhyped
  - Quantum computing hype mirrors LLM hype: world will not change immediately
related: [[quantum-resistance]], [[grids]], [[gajumaru-architecture]], [[peter]], [[groot]]
confidence: high
---

# Quantum Threat: Stay Calm and Keep Coding

**Source files (raw/transcripts/):**
- `Gajumaru Blockchain｜Quantum Will Not Break Blockchain Tomorrow#.en.vtt` (~3:57)
- `Gajumaru｜Quantum Threat：Stay Calm and Keep Coding.en.vtt` (~0:22, short clip)

---

## Speaker

Primary speaker is **Peter Harpending** (Research Lead & Lead Cryptographic Developer, QPQ AG). The short clip also features a second voice (likely Craig Everett) making the LLM comparison.

---

## On LLMs and Quantum — The Same Pattern of Hype

The short clip opens by establishing a recurring pattern:

> "Large language models. We're being told that they're perfect. They can do everything. In fact, we know from testing them that they're extraordinarily limited and they're stuck with hallucination."

Then:

> "We we get on to quantum computing and we're being told that the world as we know it is going to change immediately, but it isn't."

The argument: both LLM capabilities and quantum computing threats are systematically overstated by media and commentators. QPQ's position is to reason from evidence rather than headlines.

---

## Quantum Timeline — Peter Harpending's Analysis

> "Quantum computers capable of cracking ECC are at least decades away if it will ever materialize."

Key data points:

| Factor | Detail |
|--------|--------|
| Shor's algorithm optimizations | Theoretical optimizations "bring the solution an order of magnitude closer" |
| Neutral atom QC | New approach to physical qubits; tens of thousands of physical qubits now more feasible |
| Most optimistic timeline | **Mid-2030s** for a quantum computer that could attack a single ECC keypair |
| Attack duration | ~10 days of dedicated compute per target |
| Economic threshold | Only rational for accounts holding **$100,000+** in value |
| Opportunity cost | Quantum compute time has higher-value uses (protein folding, chemistry, drug design) |

> "Our analysis holds up really well."

---

## QPQ's Quantum Resistance Strategy

Two complementary approaches:

**1. Safe accounts (near-term):**
High-value vaults should use QR-signed transactions (GRIDS Stage 2 air-gapped wallet). Since the private key never touches a networked device, a quantum attack on the network cannot reach it. This is a practical mitigation available today.

**2. Native protocol support (roadmap):**
> "We will support quantum-resistant accounts by mainnet launch."

QPQ is working on supporting quantum-resistant signing (ML-DSA-44/65/87) "more natively" — potentially mapping GA-contract behaviour to native protocol functions rather than requiring users to manually deploy GA contracts.

---

## Why This Matters

The quantum resistance story reinforces the broader Gajumaru security philosophy:
- Build defensive architecture proactively, not reactively
- Use architectural separation (GRIDS dead-drop, air-gapped hardware) to remove attack surfaces before they are exploited
- Avoid panic-driven changes; calibrate response to actual threat timelines

Peter's measured analysis is consistent with QPQ's general stance: realistic about threats, dismissive of hype, focused on structural solutions.

---

## Sources
[[summary-quantum-ai-machine-economy]], [[summary-blog-quantum-resistance]], [[summary-quantum-calm]]
