---
type: source
title: "Gajumaru Update: Whitelist Mining, Distribution & Payment Processing"
slug: summary-video-whitelist-mining-distribution
source_file: raw/transcripts/gajumaru-update-whitelist-mining-distribution.md
author: "Gregory Chew, Craig Everett, Ulf Wiger, Dimitar Ivanov"
date_published: 2024-08-01
date_ingested: 2026-05-16
key_claims:
  - QPQ decided on whitelist mining in October (2023); estimated 2-3 months, took 10 months
  - Chain launched with 5× $300 laptops running i5 processors
  - Satoshi and friends mined 40%+ of Bitcoin; QPQ explicitly designed against this concentration
  - 5 accounts control 95%+ of Bitcoin consensus; 2 accounts control 51%+
  - Whitelist mining = restricted miner list enabling protocol updates during development period; QPQ pushes updates "on a weekly basis" during this period
  - Any governance on a blockchain turns it from resource into infrastructure (corruptible)
  - QPQ held NO foundation debate; consensus was no governance at all
  - 720 blocks/day on Gajumaru vs Bitcoin's few blocks/day — "the smaller your block interval, the more opportunities there are to win in a day — that incentivizes the creation of competitive pools"
  - Defensive mining concept: commercial users mine to protect chain value ("juice" = block rewards are secondary to platform stability)
  - Block rewards called "juice" — defensive mining incentive is NOT primarily juice but ensuring platform viability for commercial actors
  - GajuMine = miner software (only needs account ID to mine for; no secrets)
  - GajuDesk = desktop wallet with development features; described as "kind of overfeatured wallet"; account = key pair; private key stays client-side
  - Login to gajmining.com via GRIDS URL — no username, no password
  - WordPress + Stripe initial approach failed; payment processors refused as "crypto-adjacent"
  - Payment solution: European company + Singapore company secured after months of rejections
  - Referral program: person who introduces a buyer receives portion of license fee (not MLM)
  - Goal: millions to tens of millions mining — "this is probably the one and only chance we have to try and get millions, maybe tens of millions of people into this at an early stage and effectively create something that is akin to a G20 economy on chain"
  - Solving distribution = solving commercial adoption: "if we solve the distribution problem, we solve the problem of how to get true commercial actors like retail on board"
  - Early adopter demographic: predominantly small business owners — "laser focused on how can I apply this to a real problem I've actually got... That's the best early adopter crowd I think for a project like this. And we really got lucky."
  - Craig framing: "getting this movement for the economic emancipation of humanity underway"
  - "You will own your data, your assets, and your money — rights, not licenses"
  - Jarvis Carroll and Peter Harpending confirmed as background team contributors
  - Only other company that built what QPQ built in GajuDesk: Steam — with 600 developers
related: [[protected-mining]], [[gajumaru-product-suite]], [[grids]], [[gaju-token]], [[groot]], [[qpq-ag]]
confidence: high
---

# Summary: Gajumaru Update — Whitelist Mining, Distribution & Payment Processing

This video is an extended team discussion of *why* whitelist mining exists and *how* the supporting software was built. It covers the distribution problem, the governance philosophy, and the nine-month engineering ordeal of getting payment processing to work.

---

## The Distribution Problem

A proof-of-work blockchain requires **broad coin distribution** to function as a currency. The challenge: how do you start a fully mined digital asset (self-referential, no seed wallets) from zero and ensure it doesn't concentrate in the hands of the founders?

The Bitcoin cautionary tale is explicit: Satoshi and friends mined **40%+ of all Bitcoin** before outside participation began. Today, **5 accounts control 95%+ of Bitcoin consensus**; just **2 accounts control 51%+**. QPQ set out to prevent this from inception.

The solution was a *whitelist mining period* — a structured bootstrap phase where:
1. QPQ restricts the miner list (the one and only control function QPQ holds)
2. Updates can be pushed to the chain during development
3. Distribution broadens through a software-as-a-service mining product accessible to non-technical users
4. Development is funded via mining license sales

---

## Hardware Access and Cuckoo Cycle

The Cuckoo Cycle proof-of-work was chosen specifically because it is memory-bound and accessible on commodity hardware. The chain itself was started on **five $300 laptops with i5 processors**. This design allows broad participation before industrial mining operations enter.

Gajumaru produces **720 blocks/day** (vs. Bitcoin's ~144). Craig's explanation: "The smaller your block interval, the more opportunities there are to win in a day — and that incentivizes the creation of competitive pools." More pools = more diverse distribution. The higher frequency is not a scaling decision — it is a distribution design decision.

---

## Governance Philosophy

The team held an extended internal debate about whether to create a foundation to steward Gajumaru after the whitelist period. The winning argument:

> "Any governance leads to corruption. Any governance on a system defines it as infrastructure rather than resource. In order to be a resource layer, it must have absolutely no governance."

The whitelist phase is explicitly **temporary**. QPQ has a limited window to push core updates (where the minting function occurs). After the whitelist period ends, QPQ will have no more control than any other network participant. The blockchain itself is already ungovernable: QPQ cannot control what people build on it, who uses it, or what transactions occur.

---

## Defensive Mining and "Juice"

Block rewards in Gajumaru are called **"juice"** in the team's internal vocabulary. The defensive mining argument is that for commercial users, juice is a secondary consideration — their primary motivation is preserving the value and stability of the platform they run their businesses on.

Beyond earning Gaju rewards, commercial users on the chain have a second incentive to mine: **defending the chain against predatory takeover**. Industrial mining operations with pre-built data centres could show up and capture 80%+ of rewards the moment whitelist restrictions lift. Commercial actors who do real business on Gajumaru are naturally incentivised to contribute mining power to prevent this capture — not for the juice, but for the economic stability of the platform they rely on.

---

## GajuMine and GajuDesk

- **GajuMine**: the miner software. Knows only which account to mine for; holds no secrets. Cross-platform (Mac, Windows, Linux). Install-once, auto-updating.
- **GajuDesk**: the desktop wallet. Described by Craig as "kind of overfeatured" — it includes developer-oriented features that go beyond a standard wallet. A user's account IS their key pair; the private key is generated client-side and never leaves the device.

Craig noted: the only other company that has built what QPQ built is Steam — with 600 developers. QPQ built this with a fraction of that headcount.

---

## GRIDS Login (No Passwords)

Login to **gajmining.com** is handled via a **GRIDS URL** — the user's wallet decodes the URL and signs the authentication transaction. There is no username/password combination. This eliminates the user account database entirely.

The onboarding flow challenge: a user buys a license before generating a blockchain account. QPQ cannot generate the account for them (it's their key). The GRIDS-based login pairs the email from the purchase with the wallet address once the user generates their account and returns to the site.

---

## Payment Processing Ordeal

The team spent months navigating payment processor rejections. WordPress + Stripe was the initial plan. Every major processor eventually rejected the application because the product was classified as "adjacent to blockchain mining" — even though it was software-as-a-service (no crypto sales, no hardware).

A European company and a Singapore company ultimately agreed to work with QPQ. Getting this far without a payment solution was described as "a testimony to the faith" of early adopters.

---

## Whitelist Mining Contracts Are On-Chain

All governance for the whitelist mining hive is enforced through **smart contracts on the Gajumaru blockchain** — not inside gajmining.com's server. The website is just an interface.

---

## Referral Programme

When an existing member introduces a new buyer, they receive a portion of the license fee (e.g., if someone spends 1,000 CHF, the referrer receives ~200 CHF). This is a straightforward referral incentive, not multi-level marketing.

---

## The Early Adopter Demographic

Craig reflects on who actually joined early and why this mattered:
> "So many of them are small business owners... laser focused on how can I apply this to a real problem I've actually got... That's the best early adopter crowd I think for a project like this. And we really got lucky."

This is contrasted with speculative retail adoption (the casino crowd). Small business owners who understand the commercial problem are the right seed distribution — they have incentive to mine defensively AND to build on the chain.

The scale ambition:
> "This is probably the one and only chance we have to try and get millions, maybe tens of millions of people into doing this at an early stage and effectively create something that is akin to a G20 economy on chain."

Craig explicitly frames the whitelist mining distribution as "getting this movement for the **economic emancipation of humanity** underway."

---

## Vision Statement

> "The restoration of your economic sovereignty… the creation of a free and open economic resource layer that everything else can operate with and build upon."
>
> "You will own your data, your assets, and your money. Which in turn means that your rights become rights, not licenses."

The team frames the tension ahead as statists (who print money) vs corporatists (who tax via fragmented infrastructure) vs the sovereign individual — and Gajumaru as the mechanism that restores equal standing to the individual in that contest.
