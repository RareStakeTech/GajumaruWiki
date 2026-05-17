---
type: concept
title: "Hive Mining"
aliases: [hive-miner, saas-mining, gaju-hive]
sources: [[summary-gaju-mining-journey-update]], [[summary-gaju-mining-video]], [[summary-qpq-2025-review]], [[summary-video-whitelist-mining-distribution]]
related: [[protected-mining]], [[gaju-token]], [[groot]], [[ulf]], [[qpq-software-stack]], [[cuckoo-cycle]], [[adam-percy]]
created: 2026-05-15
updated: 2026-05-16
confidence: high
cluster: tokenomics-economics
cluster_role: member
---

# Hive Mining

Hive mining is QPQ's SaaS-based model for delivering [[protected-mining]] access to non-technical participants. Customers purchase mining licenses from QPQ; QPQ operates the mining hardware (the "hive"); smart contracts on [[groot]] automatically distribute Gaju rewards to license holders as they are earned.

## What It Is

A conventional blockchain miner runs software locally and receives rewards directly. Hive mining inverts this: QPQ operates physical mining infrastructure on behalf of license holders. A **dividend-writing smart contract** on Groot ties each license to its share of the hive's output and distributes Gaju automatically.

This removes the hardware acquisition, maintenance, and configuration burden from the end user entirely.

## Key Technical Facts

| Component | Detail |
|-----------|--------|
| Client software | `gmhive_client` (Erlang/OTP) |
| Default port | **17888** |
| Connection lookup | `gajumining.com` via miner's public key; cached 24h |
| GPU support | CPU + CUDA GPU (via `gmminer`) |
| License model | SaaS — software + services bundled at gajumining.com |
| Reward distribution | On-chain dividend-writing smart contracts |

## Who Built It

Designed and implemented by [[ulf]] (Ulf Wiger) — from scratch, with no prior art:

> "Ulf has had lots of fun with the task of: 'Hey, we're going to do this hive mining concept. Just poop out a whole hive mining concept and make everything work with dividend-writing contracts that tie it all together on the blockchain.'"

This was a global first. No reference implementations existed. "There was no Reddit forum you could go to."

## Development Timeline

The hive mining system was built under significant pressure, during cascading failures and with a skeleton team:

| Period | Event |
|--------|-------|
| 22 Oct 2024 | Groot genesis block mined |
| Nov 2024 | Hive mining concept scoped; Architecture A planned |
| Early 2025 | Architecture A collapses — original design abandoned entirely |
| Early 2025 | Payment provider rugpull — forced webshop rebuild from scratch |
| Mar 2025 | Sales begin; first external customers onboarded |
| Mid-2025 | Mining Journey Update video recorded; 300+ pre-release miners active |
| Aug 2025 | Internal scaling target for miner infrastructure |
| 22 Oct 2025 | LTIN announced; first Gaju circulation already in progress (16 Oct 2025) |
| 6/7 Apr 2026 | MainNet technical launch |
| End 2026 | Public mining opens; millions target |
| 30 Mar 2027 | Protected mining window closes (authoritative date from Un-White Paper) |

## The Collapse and Rebuild (Early 2025)

The development path was not linear. Two major crises occurred in close succession:

### Architecture A Collapse
The original hive mining architecture (internally "Architecture A") fell apart during development. The failure was not cosmetic — the approach was fundamentally wrong and had to be abandoned. This triggered cascading technology failures across related systems.

> Craig described the period as one of the hardest in the company's history — multiple things going wrong simultaneously, with a tiny team, while Groot was simultaneously live.

### Payment Provider Rugpull
Simultaneously, QPQ's payment provider withdrew service. This forced a complete rebuild of the customer-facing webshop from scratch — **with zero external dependencies**:

> "Also just poop out a web shop with no dependencies by last week."

The zero-dependency requirement was not a preference — it was a survival decision. After losing one critical dependency without warning, QPQ could not afford to build another single point of failure into the stack.

Both crises were resolved without a funding round, without extending timelines publicly, and without external contractors. The team shipped through it.

## The Primary Audience

> "The crypto bros aren't really our audience. It's small business owners are our primary adopters and they're not crypto experts."

Hive mining was designed for people who:
- Own ordinary laptops or desktops
- Have no interest in configuring blockchain software
- Want to participate in early-stage token distribution without technical overhead
- May have heard about crypto but never run a node

The user experience goal: install, activate, mine. No firewall configuration, no seed phrase management, no command-line interaction required.

This also drives the **SaaS revenue model** — small business owners are comfortable with subscription software. They understand "pay monthly, get a service." Translating mining into a SaaS product made it legible to a completely non-crypto audience.

## Adam Percy and Community-Driven Development

**Adam Percy** is a professional house builder — not a software developer, not a crypto native. He became QPQ's day-one community champion.

When he encountered the initial setup friction, instead of giving up, he systematically worked through it and documented the process — then began helping every other miner who hit the same obstacles.

> "He's really good at making things simple for people... making things approachable."

Percy became QPQ's most effective onboarding resource not because QPQ asked him to, but because his own problem-solving process was directly useful to others in exactly the same situation. He is now listed in QPQ's community acknowledgements as a community champion.

The practical impact: 300+ pre-release miners had a human-authored guide written from first principles by someone who was not a crypto expert. This was more effective than any technical documentation QPQ could have produced internally.

## The Human Story: Dimitar's Baby

During the hardest phase of the Architecture A rebuild, [[dimitar]] (Dimitar Ivanov, CDO) had a newborn child.

This detail surfaces in the Mining Journey Update as a humanising data point — it contextualises the delivery under conditions of personal and professional stress. QPQ did not pause; Dimitar did not step back. The timeline held.

## VC Refusal: An Anti-Corporatist Stance

QPQ explicitly declined venture capital funding:

> "We refused to pursue venture funding that would demand we play the corporatist game."

The reasoning:
- VC funding typically demands growth metrics, monetisation pressure, and exit timelines that misalign with a 24-year architecture project
- VC investors would acquire equity and board influence, introducing the governance capture problem that QPQ's architecture explicitly prevents at the blockchain level
- QPQ preferred organic revenue (CHF 1M+ in SaaS mining sales, zero marketing budget) to validate product-market fit

The refusal is consistent with the broader QPQ thesis: if you want to build a governance-free resource layer, you cannot build the company itself through mechanisms that introduce governance capture.

## Scaling to Millions

> "Ulf has been doing the work to make sure that the blockchain itself, the hive miners and so on can actually handle this."

The transition from 300+ pre-release miners to the millions target represents an infrastructure scaling challenge, not just a sales challenge. Ulf Wiger is responsible for ensuring:
- The hive backend can handle connection volume
- The dividend-writing contracts scale with license count
- Block propagation and reward distribution remain reliable at high miner counts

Public mining is planned to open by end 2026, coinciding with the final phase of the [[protected-mining]] window before its 30 March 2027 close.

## Everyday Currency Framing

QPQ explicitly positions Gaju as money for daily transactions — not as speculative investment:

> "Bread, haircuts, t-shirts."

The ambition is for Gajus to be usable at the corner shop, the barber, the online marketplace — with the same friction level as cash or card. This requires:
- Price stability sufficient for commerce (addressed by the Fibonacci emission schedule in [[gaju-token]])
- Transaction speed adequate for retail (Groot: sub-3-second finality)
- UX familiar to non-technical users (GRIDS passwordless authentication)

**GajuMarket** is the concrete product embodiment: described as "like eBay at a fraction of the cost." It is the platform layer ([[ripa-model]]) built on Groot infrastructure for peer-to-peer commerce denominated in Gaju.

## Mining Flywheel

QPQ draws an explicit parallel to Bitcoin's early mining period:

> "Early miners in Bitcoin in 2008 and 2009 got the most Bitcoin."

The hive mining flywheel:
1. **Early miners** enter during [[protected-mining]] window (before 30 Mar 2027)
2. Block rewards are highest relative to total miner count during this period
3. Early miners accumulate the most Gaju per unit of compute
4. As adoption grows, Gaju value grows (larger economic base = more valuable sliver)
5. Early miners are structurally advantaged — **the window is finite and publicly announced**

This is a deliberate incentive design, not incidental. QPQ's communications consistently emphasise the time-bounded nature of the protected window to drive early participation.

## Why This Model

The target audience is small business owners and everyday computer users — not crypto engineers. Requirements:

1. No specialised mining hardware (ordinary home computers during protected rollout)
2. No large power supplies
3. Minimal configuration — install, activate, mine
4. Security must match non-technical users' capabilities

The SaaS model achieves this: QPQ handles the infrastructure, users receive rewards via smart contract. After the [[protected-mining]] window closes (30 March 2027), the model is designed to hand off to community-run competitive mining associations for long-term decentralisation.

## Relation to Tokenomics

Hive mining is the primary distribution mechanism for Gaju during the [[protected-mining]] period. The protected window ends 30 March 2027. Early miners receive the most Gajus — the Bitcoin 2008/2009 early-miner analogy is explicit in QPQ's marketing. See [[gaju-token]] for full supply schedule.

## See Also

- [[protected-mining]] — The time-bounded window within which hive mining operates
- [[gaju-token]] — Full supply schedule; Fibonacci emission; puck denomination
- [[ulf]] — Architect and implementer of the hive mining system
- [[cuckoo-cycle]] — PoW algorithm enabling ordinary hardware participation

## Sources

[[summary-gaju-mining-journey-update]], [[summary-gaju-mining-video]], [[summary-qpq-2025-review]], [[summary-video-whitelist-mining-distribution]]
