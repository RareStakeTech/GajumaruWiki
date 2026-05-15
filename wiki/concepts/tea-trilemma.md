---
type: concept
title: "TEA Trilemma"
aliases: [tea, trustlessness-efficiency-accountability, tea-framework]
sources: [[summary-unwhitepaper]], [[summary-qpq-wiki-blockchain-trilemma]], [[summary-qpq-wiki-consensus]]
related: [[gajumaru-architecture]], [[groot]], [[associate-chains]], [[ripa-model]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: core-protocol
cluster_role: member
---

# TEA Trilemma

QPQ's analytical framework for evaluating blockchain systems, proposed in the Un-White Paper as a replacement for Buterin's blockchain trilemma.

## The Framework

**TEA = Trustlessness + Efficiency + Accountability**

| Property | Meaning | Where it belongs |
|----------|---------|-----------------|
| **Trustlessness** | Can you verify the message without trusting any messenger? | Resource layer (Groot) |
| **Efficiency** | Can the system process transactions at commercial velocity and cost? | Infrastructure layer (Associate Chains) |
| **Accountability** | If trust is required, can you identify and hold accountable those who hold power? | Infrastructure layer (Associate Chains) |

These are not independent dials. Trust enables efficiency; trustlessness has inherent costs; accountability only matters where trustlessness is absent (i.e. where someone can say no).

## Why QPQ Rejects Buterin's Trilemma

Buterin's trilemma (decentralisation / security / scalability — "pick two") is described in the Un-White Paper as:

> "Not a law. It is what happens when you try to solve contradictory requirements in a single system."

Security is derivative of trustlessness. Scalability is derivative of efficiency. The correct analytical questions are about trust, efficiency, and accountability — not their surface manifestations.

## The Failure Mode: Anonymous Proof-of-Stake

Anonymous PoS (e.g. Ethereum, Solana) fails all three TEA tests:
- **Not trustless:** Must trust the validator set not to collude
- **Not maximally efficient:** Efficiency gains are real but come with hidden governance costs
- **Not accountable:** Cannot identify, sue, or replace pseudonymous validators

QPQ: "A system with the costs of governance and none of its protections."

## How Gajumaru Satisfies TEA

**Groot (Resource Layer):** Trustless — no operator, no one can say no, algorithmic consensus only. Trades efficiency and accountability for pure trustlessness.

**Associate Chains (Infrastructure Layer):** Efficient + Accountable — governed by identifiable operators under legal jurisdiction, with dispute resolution and recourse. Trades trustlessness for efficiency. The accountability requirement is not optional: "whoever can say no must be accountable."

Neither layer compromises. Each occupies a distinct corner of the trilemma. The architecture partitions rather than trades off.

## Tony Benn's Diagnostic

The Un-White Paper applies MP Tony Benn's five questions to any blockchain foundation:
1. What power have you got?
2. Where did you get it from?
3. In whose interests do you exercise it?
4. To whom are you accountable?
5. **How can we get rid of you?**

> "If you cannot answer the last question, the first four do not much matter."

Applied to Ethereum Foundation, Solana Foundation, DFINITY: the answer to question 5 is always "you cannot."

## Relation to the Blockchain Trilemma and CAP Theorem

The QPQ Public Wiki explicitly connects the blockchain trilemma (secure, distributed, scalable — pick two) to the CAP theorem (consistency, availability, partition tolerance — pick two) in distributed systems.

QPQ's position: the blockchain trilemma is not a permanent law — it is "what happens when you try to solve contradictory requirements in a single system." By separating concerns across Groot (trustless resource layer) and Associate Chains (governed infrastructure layer), each layer satisfies a different corner of the trilemma rather than compromising all three.

Algorand, by contrast, resolves the trilemma by dropping partition tolerance entirely — the network halts during a large split. QPQ's architecture avoids this by partitioning responsibilities across layers.

Source: [[summary-qpq-wiki-blockchain-trilemma]]

## PoS and the TEA Failure Mode (Consensus Perspective)

From the [[summary-qpq-wiki-consensus]] page: PoS systems face the **"nothing at stake"** problem. If the staked collateral is not externally valuable (independent of the staking system), sacrificing it costs nothing for a malicious actor. This is a TEA failure:
- **Not trustless**: PoS requires known/trusted actors to prevent attacks
- **Not accountable**: Pseudonymous validators cannot be identified, replaced, or held liable
- **Efficiency gains are real** but come with hidden governance costs

PoW avoids this entirely because the computational work is externally costly — the sacrifice is real regardless of any system-specific value.

## Sources
[[summary-unwhitepaper]], [[summary-qpq-wiki-blockchain-trilemma]], [[summary-qpq-wiki-consensus]]
