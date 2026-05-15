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

## Status
Fully operational RIPA model delivered at MainNet launch (April 6/7 2026).

## TEA Alignment
The two-path architecture is the architectural resolution of the [[tea-trilemma]]: Groot provides Trustlessness; Associate Chains provide Efficiency + Accountability. Neither layer is asked to do the other's job.

## Sources
[[summary-qpq-2025-review]], [[summary-unwhitepaper]]
