---
type: concept
title: "Protected Mining"
aliases: [mining-window, protected-mining-period]
sources: [[summary-qpq-2025-review]], [[summary-gaju-mining-video]], [[summary-gaju-mining-journey-update]], [[summary-blog-defensive-mining]], [[summary-video-whitelist-mining-distribution]]
related: [[gaju-token]], [[groot]], [[qpq-ag]], [[cuckoo-cycle]], [[gajumaru-product-suite]]
created: 2026-05-15
updated: 2026-05-16
confidence: high
cluster: tokenomics-economics
cluster_role: member
---

# Protected Mining

The "protected mining" period is a finite window during which mining licenses provide exclusive or privileged access to Gaju token generation, before competitive mining communities take over.

## Key Date
**Protected mining target: 30 March 2027 (outer boundary: 30 September 2027)**

> **Date resolution note:** The Un-White Paper states "30 March 2027" **twice** in the raw document (the authoritative technical source). The 2025 Year in Review summary says "March 29 2027" — likely a typo. A gajumining.com walkthrough referenced "March 31, 2027." **Working figure: 30 March 2027** per the Un-White Paper.

From the vault bootstrap date (May 15 2026), approximately **10 months remain** in the protected window.

## Significance
QPQ frames this as a critical adoption runway:
> "15 months for critical mass adoption and network decentralisation" (measured from ~end 2025)

After 30 March 2027, license sales shift to competitive mining communities and associations — intended to drive long-term decentralisation.

## Network Flywheel
The protected mining period is tied to the network flywheel thesis:
> More miners → more decentralisation → more credibility → more adoption → higher Gaju value → more resources → more miners

The goal is to achieve critical mass adoption before the protected window closes, so the flywheel is self-sustaining.

## Post-2027 Model: Token Economics After the Protected Window

This section addresses what happens to miner incentives after 30 March 2027 — the "cliff" that the protected mining period creates.

### What Changes on 30 March 2027

| Item | Before 30 March 2027 | After 30 March 2027 |
|------|---------------------|---------------------|
| License distribution | QPQ whitelist SaaS (gajumining.com) | Competitive mining communities and associations |
| Protocol update authority | QPQ can push updates | No one can — chain is locked; minting function fixed |
| QPQ's network power | Can push updates, hold influence via SaaS position | Same as any other network participant |
| Mining reward source | Block rewards (juice) + transaction fees | Block rewards (juice, decreasing per Fibonacci curve) + transaction fees (growing) |

### Miner Incentive After 2027: Three Sources

**1. Fibonacci Reward Curve (Juice)**
The 1-trillion-Gaju supply is distributed over 87.5 years via a Fibonacci-modelled emission curve — heaviest at the start (Period 1: 1,554,161 Gaju/keyblock), decreasing per period. After March 2027, block rewards continue but follow the declining emission schedule. This mirrors Bitcoin's halving model, except the decrease is Fibonacci-smooth rather than sudden halvings.

Implication: early miners (whitelist period) receive the highest reward rate. Post-2027 miners receive lower juice per block, but the network's accumulated transaction volume should be substantially higher.

**2. Transaction Fees (Growing)**
As the network onboards commercial actors — payments, marketplace transactions, smart contract interactions — transaction fees per block increase. This is the long-run equilibrium for any PoW chain: block rewards decline, transaction fees rise to replace them. On Gajumaru's 720-blocks/day schedule, fee revenue is distributed more frequently than on Bitcoin, smoothing the miner revenue curve.

**3. Defensive Mining (Platform Insurance)**
Commercial entities running on-chain operations have a rational non-juice motivation to mine: security. A business whose revenue depends on Groot's censorship resistance is rationally willing to mine at break-even or slight loss as an operational insurance premium. The regulated mining pool model (documented in [[summary-blog-defensive-mining]]) allows commercial miners to publicly commit to content-neutral block production — turning mining into a service contract rather than a speculation.

### The Structural Unknown

QPQ has not (in any publicly available source as of May 2026) published a detailed model of post-2027 equilibrium miner economics — the crossover point where transaction fees replace juice revenue, or the projected revenue per miner at various Gaju price levels. This is the most significant gap in the publicly available tokenomics documentation.

**Open question:** At what transaction volume does fee revenue make post-2027 mining economically rational for a small commercial miner without juice subsidies? This requires assumptions about Gaju price, transaction count, and fee per transaction that QPQ has not published.

### Comparison to Bitcoin's Post-Subsidy Model

Bitcoin's block subsidy is projected to near-zero after 2140. The "fee-only" security model is actively debated among Bitcoin researchers — whether transaction fees alone can sustain sufficient hashrate for security. Gajumaru's position: the combination of Fibonacci decay (not a cliff), defensive mining (non-speculative demand), and 720-blocks/day fee distribution creates a more robust long-run model than Bitcoin's 4-year halving cliff. Whether this claim holds depends on transaction volume achieving sustainable levels during the 87.5-year window.

## Mining Accessibility
The promotional video [[summary-gaju-mining-video]] confirms that during the protected rollout, everyday home computers are sufficient — no specialised equipment or large power supplies required. This is a direct consequence of [[cuckoo-cycle]] PoW design. The pitch explicitly draws the Bitcoin 2008/2009 early-miner analogy: early participants mine the most Gajus and benefit most from the movement.

**Public mining target:** End of 2026. Goal: millions of miners creating sufficient decentralised computing capacity before the protected window closes.

## Target Adopter Profile and the G20 Economy Goal

> "The crypto bros aren't really our audience. It's small business owners are our primary adopters and they're not crypto experts."

The hive mining software is designed for non-crypto users — principally small business owners — who can mine with a basic computer and internet connection, with minimal technical intervention required. Source: [[summary-gaju-mining-journey-update]].

Craig reflects on the actual early adopter composition (from [[summary-video-whitelist-mining-distribution]]):
> "So many of them are small business owners... laser focused on how can I apply this to a real problem I've actually got... That's the best early adopter crowd I think for a project like this. And we really got lucky."

The scale ambition is framed as a historic singular opportunity:
> "This is probably the **one and only chance** we have to try and get millions, maybe tens of millions of people into doing this at an early stage and effectively create something that is akin to a **G20 economy on chain**."

Craig explicitly describes the protected mining period as "getting this movement for the **economic emancipation of humanity** underway." The distribution problem and the adoption problem are the same problem: if QPQ solves distribution at scale during the protected window, it simultaneously solves the commercial adoption bootstrap — "if we solve the distribution problem, we solve the problem of how to get true commercial actors like retail on board."

## "Juice" — Block Reward Vocabulary

Block rewards in Gajumaru's internal vocabulary are called **"juice."** The defensive mining argument (see below) is explicitly framed as: commercial miners are NOT primarily motivated by juice — they mine to preserve the platform their businesses depend on. Juice is a bonus, not the primary rational.

This distinguishes Gajumaru's commercial miner base from purely speculative miners in other PoW chains.

Source: [[summary-video-whitelist-mining-distribution]]

## Defensive Mining

A concept introduced in [[summary-blog-defensive-mining]] (April 2026): commercial entities with on-chain business operations have rational incentive to mine **beyond direct profit** — mining serves as insurance protecting their core business interests.

The argument:
- Standard PoW security assumes profit-seeking miners
- But when a commercial actor's livelihood depends on blockchain uptime and censorship resistance, mining becomes an operational expense, not a speculative investment
- A single custodian controls an estimated **47% of total Bitcoin mining power** — concentration risk motivates regulated alternatives
- **Regulated mining pools** in proper jurisdictions can publicly commit to content-neutral block production; censorship becomes a contract breach subject to litigation

This extends the audience for GajuMining from speculative miners to commercial operators who need reliable, uncensorable on-chain infrastructure as part of their business model.

## The Bitcoin Concentration Problem

The whitelist mining design was a direct response to what QPQ calls the "Satoshi problem." From the whitelist mining update video ([[summary-video-whitelist-mining-distribution]]):

- Satoshi and friends mined **40%+ of all Bitcoin** before outside participation began
- Today **5 accounts control 95%+ of Bitcoin consensus**; just **2 accounts control 51%+**

QPQ explicitly did not want to end up with founders and associates holding the majority of Gaju supply. Whitelist mining is the mechanism that creates broad distribution during the bootstrap phase.

## No Governance — A Core Design Principle

The team held an internal debate about creating a QPQ Foundation. The conclusion was unanimous: no foundation, no governance of any kind.

> "Any governance leads to corruption. Any governance on a system defines it as infrastructure rather than resource. In order to be a resource layer, it must have absolutely no governance."

The whitelist period is the sole window in which QPQ can push protocol updates. Once it ends, QPQ has no more power over the chain than any other network participant. The minting function is locked; there is no governance body that can be coerced.

## 720 Blocks/Day — Mining Diversity Incentive

Gajumaru produces **720 blocks/day** versus Bitcoin's ~144 blocks/day. This higher frequency means more opportunities to win block rewards per day, which:
- Incentivises the formation of many smaller competitive mining pools
- Prevents consolidation into a few mega-pool operators
- Gives the broad distribution of whitelist miners a better long-term chance to remain relevant once industrial miners arrive

## Whitelist Mining SaaS Infrastructure

The mining software was designed to be non-technical (install once, never touch again, auto-updates):
- **GajuMine**: the miner — only needs an account address; holds no secrets; auto-updates
- **GajuDesk**: the desktop wallet — generates key pairs client-side; private keys never leave the device
- Cross-platform: Mac, Windows, Linux

Craig's benchmark: the only company that has built comparable user onboarding infrastructure is **Steam** — with 600 developers.

Login to gajmining.com uses **GRIDS URL authentication** — no username, no password required.

## Payment Processing Ordeal

The team spent ~9 months unable to accept payment for mining licenses. Major processors rejected the application as "adjacent to blockchain mining" even though it was purely software-as-a-service. A European company and a Singapore company were ultimately secured.

## Sources
[[summary-qpq-2025-review]], [[summary-gaju-mining-video]], [[summary-blog-defensive-mining]], [[summary-video-whitelist-mining-distribution]]
