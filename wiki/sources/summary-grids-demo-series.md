---
type: source
title: "GRIDS Live Demo Series (10 clips)"
slug: summary-grids-demo-series
source_file: raw/transcripts/[multiple — see body]
author: "QPQ AG / Craig Everett / Greg Chew / Peter Harpending"
date_published: 2026-04-01
date_ingested: 2026-05-16
key_claims:
  - GRIDS live demos show login + payment in under 3 seconds with no password transmitted
  - Mythos incident confirmed: April 7 2026, Claude Mythos, OpenBSD, 27-year-old RCE, root access no-auth
  - Stage 2 hardware wallet: fully air-gapped, no WiFi/Bluetooth/radio — QR codes only
  - GajuMarket testnet confirmed; GajuMobile deploys May 2026; MainNet April 26 2026
  - Music streaming site auth: public ID + private key; site auto-creates blank account on first visit
  - GajuPay webhook model: backend watches chain, calls vendor webhook on payment confirmation
  - GRIDS described as "highest level of software-based security currently available"
  - Implementation timeline for any business or government: within weeks, well within 90 days
  - 1846200× more transactionally efficient than Bitcoin; 8.23× greater network security
related: [[grids]], [[gajumaru-product-suite]], [[internet-of-economics]], [[quantum-resistance]], [[qpq-ag]], [[craig]], [[gregory-chew]]
confidence: high
---

# GRIDS Live Demo Series

This summary consolidates 10 short-to-medium video clips all demonstrating GRIDS in action. Several are nearly identical (different cuts of the same demo session); one (`Internet of Economics | No Login. No Password. No Attack Surface. GRIDS Live Demo`) is substantially longer (~6:38) and contains the most complete narrative.

**Source files (raw/transcripts/):**
- `AI Just Broke the Internet. Here Is the Fix#.en.vtt`
- `Internet of Economics｜GRIDS Live Demos, Ready Now.en.vtt`
- `Internet of Economics｜No Login. No Password. No Attack Surface. GRIDS Live Demo.en.vtt` (**longest, most complete**)
- `Internet of Economics｜No Passwords. No Breaches. Payments in Seconds#.en.vtt`
- `Gajumaru Blockchain｜Three Live Demos. No Passwords. No Mythos Threat#.en.vtt`
- `Gajumaru Blockchain｜Watch a Login and a Payment Without Passwords.en.vtt`
- `Gajumaru Blockchain｜The World's First On-Chain Marketplace - Security.en.vtt`
- `Gajumaru Blockchain｜No Account. No Password. No Database to Hack#.en.vtt`
- `Gajumaru Blockchain｜GRIDS: Gajumaru Remote Instruction Dispatch and Serialisation#.en.vtt`
- `The Web Was Never Designed to Carry Economic Value. Post-Quantum, Post-AI, It Cannot#.en.vtt`

---

## The Mythos Incident (April 7, 2026)

The pivotal context for the GRIDS demo series is the **Mythos incident**:

- **Date:** April 7, 2026
- **Model:** Claude Mythos (Anthropic — announced but not released; preview only)
- **Project:** Project Glasswing (Anthropic internal)
- **Target:** OpenBSD operating system
- **Vulnerability:** 27-year-old RCE (Remote Code Execution) vulnerability
- **Capability:** Gained root access from anywhere without authentication — no human involvement after initial instruction
- **Industry response:** Cybersecurity industry given a "90-day" window to adapt

QPQ's framing:

> "We knew the web was the wrong architecture long before Mythos."

> "Defense-in-depth isn't an answer. The fix is not to defend credential data better; it is to remove credential data from the public domain entirely."

> "The attack surface that Mythos and any AI of its capabilities can exploit is now gone if you choose to make it so."

The cybersecurity industry's instinct — more layers, more defense — is architecturally wrong. GRIDS removes the attack surface by eliminating credentials from the connected layer entirely.

---

## Live Demo Summary

The demos walk through three operations in sequence:

### 1. Login via GRIDS (GajuDesk)
- Website presents a QR code / URL
- User opens GajuDesk, scans / pastes URL
- GajuDesk sends a signed challenge response
- **No username, no password, no credential transmitted**
- Login confirmed in under 3 seconds

### 2. Payment via GRIDS (GajuDesk)
- Same mechanism — payment is a spend transaction encoded in a GRIDS URL
- User scans/pastes, approves in wallet, signs
- Transaction confirmed on-chain in under 3 seconds (live demo, multiple confirmations across clips)

### 3. GajuMarket / QuidProQuo (testnet)
- QR code at checkout stage triggers GRIDS payment signing
- GajuMobile (when deployed) uses the same QR mechanic for mobile
- As of demo clips: testnet. Public market alignment April 26 2026 MainNet.

---

## Music Streaming Site — Auth Model

The `No Account. No Password. No Database to Hack` clip explains self-referential authentication:

- A user visits a music streaming site for the first time
- They have no account — the site simply checks if it recognises their public key
- If not recognised: **the site creates a blank account automatically**, associated with that public key
- On return visit: same key → same account. No registration required
- The site never holds a password, email, or personal data — only the public key

> "You don't have to make an account. ... There's no database to hack because there's nothing sensitive stored there."

---

## GajuPay Webhook Integration

The backend integration model for merchants:

1. GajuPay node **watches the Gajumaru chain continuously**
2. Merchant integrates a **webhook endpoint** into their platform
3. When a payment transaction for that merchant is confirmed on-chain, GajuPay **calls the vendor webhook**
4. The webhook notifies: "that guy paid now"
5. Drop-in architecture: same pattern as Stripe/credit-card-network webhooks

At checkout, the buyer pays via a GRIDS message (spend transaction URL), not a card swipe. Everything else in the merchant stack stays the same.

---

## Security Properties

> "This is the highest level of software-based security currently available."

Key properties:
- **No credentials** ever transmitted — nothing to intercept, steal, or replay
- **Physical device separation** — signing context (wallet) is always separate from execution context (website/app); private key never leaves the wallet
- **No browser plugin wallet** — "The whole idea is silly." Browser extensions execute in the execution context; GRIDS enforces the separation
- **Site holds nothing sensitive** — only a public key + signed challenge; both are public by definition
- **GRIDS is open-sourced** (Stage 1; GPL3)

---

## Stage 2 Hardware Wallet (In Development)

The next hardware tier beyond device secure enclaves:

- **Fully air-gapped** — zero network connections of any kind
- No WiFi, no Bluetooth, no radio
- Communication **via QR codes only**
- True physical separation: the signing context has no network exposure whatsoever

This is described as being in active development as of April 2026.

---

## Efficiency Claim (Confirmed Across Multiple Clips)

From the `GRIDS Live Demos, Ready Now` clip:

> "1,846,200 times more transactionally efficient than Bitcoin with 8.23 times greater network security"

This figure is consistent with the Un-White Paper and the Groot efficiency figure in `[[summary-unwhitepaper]]`.

---

## Implementation Timeline

> "Any business or government can implement GRIDS within weeks — well within the 90 days the cybersecurity industry is estimating for action."

The 90-day reference is to the industry's self-imposed window following the Mythos incident. QPQ positions GRIDS as a ready solution within that window.

---

## MainNet and Launch Dates (Confirmed)

| Event | Date | Source |
|-------|------|--------|
| Technical MainNet | April 6/7, 2026 | [[summary-qpq-ag]] |
| Public MainNet launch | April 26, 2026 | Confirmed across demo clips |
| GajuMobile deployment | May 2026 | Confirmed across demo clips |

---

## Sources
[[summary-grids-demo-series]], [[summary-internet-of-economics-grids-mythos]], [[summary-npm-supply-chain-hack]], [[summary-blog-mythos-glasswing]], [[summary-unwhitepaper]]
