---
type: concept
title: "RIPA Model"
aliases: [ripa, rpa, resource-infrastructure-platform-application]
sources: [[summary-qpq-2025-review]], [[summary-unwhitepaper]]
related: [[gajumaru-architecture]], [[groot]], [[associate-chains]], [[gajumaru-product-suite]], [[tea-trilemma]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: core-protocol
cluster_role: member
---

# RIPA Model

RIPA stands for **Resource, Infrastructure, Platform, Application** — the four-layer deployment model for the Gajumaru ecosystem. The architecture is traversable via two distinct paths.

## Layer Characteristics

| Characteristic | Resource ([[groot]]) | Infrastructure ([[associate-chains]]) |
|---|---|---|
| Governance | None | Yes — by design |
| Operator | None | Yes — entity or consortium |
| Rules | Algorithmic consensus only | Customised to jurisdiction/purpose |
| Efficiency | Lower (trustlessness has costs) | Higher (trust enables efficiency) |
| Control | No one can say no | Operators can say no |
| Accountability | Not required (no operator) | Essential — whoever can say no must be accountable |
| Analogy | High seas / internet / outer space | Coastal waters / ports / intranet |

## Two Traversal Paths

### Path 1 — RPA (Resource → Platform → Application)
Skip infrastructure entirely. Operate directly on [[groot]].

**Strengths:** Permissionless — no exclusion possible. No operator can freeze assets or change rules. Available to anyone, anywhere, continuously. 1.3 billion unbanked adults have access.

**Costs:** Less efficient than trusted infrastructure. Full public ledger transparency. No consumer protection, dispute resolution, or deposit insurance. No recourse for lost keys or wrong-address transactions.

### Path 2 — RIPA (Resource → Infrastructure → Platform → Application)
Use governed [[associate-chains]] built on Groot.

**Strengths:** Faster, cheaper, familiar UX. Regulated consumer protections. Identifiable operators with legal recourse. The critical difference from all prior infrastructure: participants have a real exit. This disciplines operator pricing and behaviour — fees that bear no relation to value will push participants to the trustless path.

**Costs:** Operators can say no, freeze assets, change rules, exclude participants. Governance can be captured. Different jurisdictions create friction at chain boundaries.

### Why Both Must Exist

> "If only RPA exists, everything is trustless but inefficient. If only RIPA exists, everything is efficient but controlled."

RPA disciplines RIPA: infrastructure operators who know participants can leave have a structural incentive to remain fair. RIPA disciplines RPA: the availability of efficient governed alternatives ensures trustlessness remains a choice rather than a sentence.

The existence of the exit — even if never used — transforms the relationship between institutions and participants from compulsion to consent.

## The Duality Principle

The Un-White Paper names the two-path coexistence the **"Duality Principle"** — a deliberate architectural decision, not an inevitable tradeoff.

- **Without RPA:** everything is efficient but controlled; the exit to trustlessness is unavailable; infrastructure operators face no competition from a governance-free alternative
- **Without RIPA:** everything is trustless but inefficient; 1.3 billion unbanked have access but no consumer protection; commercial adoption is blocked by performance and familiarity constraints

The existence of the exit — even if never used — transforms the relationship between institutions and participants from **compulsion to consent**. An AC operator who charges extractive fees faces migration to Groot; the threat is structural, not legal.

> "The duality that disciplines power."

## The Exit Option Principle

The single most structurally important feature of RIPA is that participants can always leave governed infrastructure:

1. An AC operator can say no, freeze assets, or change rules
2. The participant can send their Gajus to themselves on Groot at any keyblock height
3. The AC operator cannot prevent this — Groot enforces the cap, not the AC
4. Therefore: AC operators who know participants can leave must remain fair

This is fundamentally different from the existing financial system, where SWIFT exclusion, account freezing, and deplatforming have no exit. The RPA path always exists as structural competition.

## GL1 — Institutional Validation

The Monetary Authority of Singapore (MAS) organised the **GL1 (Global Layer 1)** consortium — Standard Chartered, Citi, JPMorgan, MUFG, BNY, Societe Generale-FORGE, Euroclear — to create a framework for transacting assets between jurisdictions.

At "Point Zero in Zurich," MAS described the technology as something that "doesn't yet exist." QPQ's position: it exists. It's the Gajumaru.

> "This consortium operates a Master Associate Chain. This is their GL1." — Un-White Paper

Previous attempts (R3's Corda, the Regulated Liability Network) failed because governance at the base layer proved unanswerable. The RIPA model resolves this by separating the governance question to the AC level, leaving Groot as a governance-free foundation that no consortium member controls.

## The "Institutional Advantage Inversion"

The Un-White Paper notes a counter-intuitive implication:

> "The institutions best positioned to thrive are, ironically, the very institutions that today profit from the system the Gajumaru changes. They have the expertise, the regulatory standing, the client relationships, and the institutional knowledge. What they lack is the connective tissue that lets them deploy those assets globally without surrendering sovereignty to a competitor's platform or a consortium they do not control. The resource layer provides that connective tissue."

## Associate Chain Hierarchy

Associate Chains can have their own sub-ACs. Example:
- **National chain** (e.g., "Liechtenstein LTIN") at the top
- **Each regulated bank** in that country runs a sub-chain
- The national chain is the minting master for the national native currency
- Sub-chains see the national chain as their superior

Each level has its own governance and compliance rules; cross-level transfers are constrained by the hard cap at every level.

ACs need not be blockchains at all. They can be SQL databases, legacy banking systems with "a clever adapter," or any infrastructure that implements the inter-chain protocol for fund transfers. Source: [[summary-blockchain-governance-associate-chains]].

## The Hard Cap — "Too Big to Fail" Eliminated

Groot enforces one and only one constraint on ACs: more Gajus can never be taken out of an AC than were put in. If an AC creates synthetic Gajus or inflates its supply, those units cannot transfer to Groot — they are stranded on the AC until it collapses.

> "If an associate chain allows sneaky stuff to happen and they're inventing and blowing up money... that whole thing collapses and there's no bailout mechanism whatsoever." — Craig Everett

The systemic-risk socialisation that characterises modern banking crises is structurally impossible in RIPA: AC failures are isolated by the hard cap.

## Regulatory Pathways

Two compliance paths for Associate Chain operators:

1. **Performance path:** Launch on Groot first (permissionless, unregulated); if the application gains volume, spin out an AC with isolated transaction throughput and jurisdiction-specific governance
2. **Compliance path:** Move directly to an AC with KYC/AML enforced at the chain level; Gajus treated as a foreign currency on that chain, subject to the AC's regulatory framework only

Each jurisdiction can dictate who gets to be a node, confirm access, and provide access — on their own AC, without requiring coordination with Groot or other ACs. An American AC can treat a Taiwanese AC differently from a Chinese AC based on geopolitical or regulatory relationships.

## Status
Fully operational RIPA model delivered at MainNet launch (April 6/7 2026). First sovereign AC deployment: [[ltin]] (Liechtenstein Trust Integrity Network).

## TEA Alignment
The two-path architecture is the architectural resolution of the [[tea-trilemma]]: Groot provides Trustlessness; Associate Chains provide Efficiency + Accountability. Neither layer is asked to do the other's job.

## See Also

- [[ripa-vs-traditional-banking]] — Synthesis: full structural comparison of RIPA model vs traditional banking infrastructure
- [[associate-chains]] — Technical implementation detail for the Infrastructure layer
- [[tea-trilemma]] — The analytical framework that RIPA resolves

## Sources
[[summary-qpq-2025-review]], [[summary-unwhitepaper]], [[summary-blockchain-governance-associate-chains]], [[summary-how-gajumaru-addresses-scaling]], [[summary-video-future-of-banking]]
