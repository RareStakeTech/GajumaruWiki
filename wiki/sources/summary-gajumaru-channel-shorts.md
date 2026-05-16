---
type: source
title: "@Gajumaru_Chain YouTube Channel Shorts (roll-up)"
slug: summary-gajumaru-channel-shorts
source_file: raw/transcripts/ (multiple short videos)
author: "QPQ AG (various combinations of Greg, Craig, Ulf, Dimitar)"
date_published: 2025-2026
date_ingested: 2026-05-16
key_claims:
  - GajuMobile deploys in May 2026 (confirmed in multiple shorts)
  - MainNet launches April 26, 2026 (consistently restated)
  - GRIDS Stage 1 is "highest level of software-based security currently available"
  - Solution implementable "well within the 90 days cybersecurity industry estimates for action"
  - Greg coined "Nazgûl" as label for Bitcoin's would-be saviors (Saylor, Back, Wright, Fink)
  - First-time visit flow — no registration; click login, sign GRIDS challenge, site auto-creates blank account if needed
  - GajuPay watches the chain for vendor payment confirmations and triggers vendor web hooks
  - "10 pucks per like" / "1 Gaju per repost" — price signal economy applied to social media
  - "Less than 5% of blogs today actually write their own stuff" — AI slop saturation
  - OpenClaw user base — approximately 2 million users (growing)
  - Peter Harpending is co-author of GajuDesk (with Craig)
  - GajuDesk is one of "a couple of wallets" QPQ has written with zero dependencies
  - GajuMarket currently in testnet (as of recording)
  - Ulf personally received pay in crypto in Sweden — took ~1 year to negotiate with bank
related: [[grids]], [[gajumaru-product-suite]], [[gaju-token]], [[internet-of-economics]], [[quantum-resistance]], [[peter]], [[craig]], [[gregory-chew]]
confidence: high
---

# Summary: @Gajumaru_Chain YouTube Channel Shorts (roll-up)

The @Gajumaru_Chain YouTube channel publishes many short clips (1-3 minutes each) excerpted from longer interview/panel videos. This roll-up captures content from clips that are not already covered by their parent video summaries.

---

## Confirmed Operational Facts (multiple GRIDS demo clips)

These clips show actual GRIDS demonstrations on live infrastructure:

- **GajuDesk** operational now — built-from-scratch zero-dependency desktop wallet
- **GajuMobile** deploys in **May 2026**
- **GajuMarket** currently in testnet
- **MainNet launches April 26, 2026** — repeated in nearly every recent clip
- Transactions settle in under 3 seconds (commercial settlement) — visually demonstrated
- 1,846,200× efficiency and 8.23× security figures repeated as headline metrics

## First-Time User Flow (GRIDS)

From "No Account. No Password. No Database to Hack":
- User visits a site they've never been to
- Clicks "Login" (not "Register")
- Site presents a GRIDS QR code (or copyable URL)
- Wallet (GajuDesk/GajuMobile) reads the URL, presents the signing challenge
- User approves; signature returns
- Site verifies signature against public key; if new, creates a blank account; if existing, logs in
- All authentication is via cryptographic challenge-response; no credentials transmitted

This is the operational form of [[grids]]'s "SSSO" (Self Single Sign-On) concept.

## GajuPay Backend Integration (from "No Account. No Password.")

> "GajuPay is watching the chain. It knows this transaction went through and it can tell the website — call their web hook and say, 'Hey, web shop, that guy paid now.' And it's done."

The integration model:
- Vendor integrates a GajuPay webhook endpoint
- Customer pays via GRIDS-signed transaction
- GajuPay node observes the transaction settle on-chain
- GajuPay calls the vendor's webhook with the confirmation
- Vendor proceeds with order fulfillment

This is the architecture for [[gajumaru-product-suite#gajupay]] in its initial deployment phase.

## The "Nazgûl" Metaphor (Greg)

From "The Nazgûl: Why Bitcoin's 'Saviours' Want the Keys to the Kingdom":

> "Nobody can hold the ring. Nobody can be entrusted with that much power, but that's what they all want. We should call this cabal of people the Nazgûl. Cuz they're these clingy wraiths that want to run everything, but their own influence has corrupted themselves first and foremost. That's pretty much what they are. In fact, that is what they will be from this day forth, the Nazgûl."

Used to describe figures positioning themselves to "save Bitcoin" from quantum or other threats — Michael Saylor, Adam Back, Craig Wright, Larry Fink. The metaphor explicitly extends to "nine of them and they're all creeps."

## Price Signal Economy (Greg + Craig)

From "What If a Like Cost 10 Pucks?" and "If Every Email Cost One Penny":

Quantitative examples:
- **A like costs 10 pucks** (10 × 10⁻¹⁸ Gaju — effectively free for humans, expensive for bot farms)
- **A repost costs 1 Gaju** — meaningful value signal
- **An email costs 1 penny** (or one-tenth of a penny) — instant elimination of spam

Mechanism:
- Tiny costs imperceptible to humans accumulate to economic infeasibility for bot farms
- Bot farms generating fake engagement at scale become unprofitable
- Authentic engagement re-emerges as the dominant signal
- "Less than 5% of blogs today actually write their own stuff anymore" — current saturation point

This is Milton Friedman's "costly signal" applied through state channel infrastructure.

## OpenClaw User Base (from "Machine Economy Is Here")

> "2 million people who are using OpenClaw — and that's growing every single day. If you go to the Discord channel, it's just a constant flurry of welcome, welcome, welcome."

OpenClaw is the agentic framework that Gajumaru's A2A and A2P state channels are designed to monetise. 2M+ users represents the demand-side base for the machine economy.

## GajuDesk Authorship (from "GajuDesk wallet: no dependencies")

> "The principle that we took — and this is Peter Harpending and I — we were kind of starting with some of these ideas was let's just write a wallet with no dependencies. Let's just write all the code."

**Peter Harpending is confirmed as co-author of GajuDesk** with Craig Everett. This is in addition to his roles as Research Lead, Lead Cryptographic Developer, and public blog author (PoW Theory).

## Ulf's Swedish Banking Experience (from "Decentralization vs Reality")

> "For me as a Swede, I've had long discussions with my bank where I was actually getting paid in crypto and was trying to get them to accept it. After about a year of negotiating they did accept it but basically saying 'don't do anything fancier than that.' Start trading in crypto or trying to run a business on crypto, we'll kick you out."

Confirms Ulf's Swedish nationality and provides an example of the cross-jurisdictional regulatory friction that Associate Chains aim to solve. The Swedish bank/regulator scenario is also used as an example AC use case: "Swedish banks, the Swedish regulator and the Swedish Central Bank get together and say... we'll have a proof-of-stake blockchain operated by all of the regulated players in this space."

## Greg's "Generational Value Creation"

> "The idea that we can have such a defined pie that can only grow at such a slow rate each year to be the true sustainable economy is an argument only made by those who are the haves, because they already have most of the slices of the pie and they don't want to share them. The argument that we are trying to make — and I think that we are making possible — is the argument that we can build a much, much bigger pie. In fact, that pie can be exponentially bigger."

QPQ's framing of value creation as expanding the total pie (positive-sum capitalism) vs zero-sum redistribution.

## Sources
[[grids]], [[gajumaru-product-suite]], [[gregory-chew]], [[ulf]], [[peter]], [[craig]]
