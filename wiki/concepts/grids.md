---
type: concept
title: "GRIDS"
aliases: [grids, grid-authentication, grids-login, gajumaru-remote-instruction-dispatch-system, gajumaru-remote-instruction-dispatch-serialisation]
sources: [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]], [[summary-gaju-firsts-gajumaru-blockchain]], [[summary-qpq-wiki-grids]], [[summary-blog-mythos-grids]], [[summary-blog-mythos-glasswing]], [[summary-internet-of-economics-grids-mythos]], [[summary-npm-supply-chain-hack]], [[summary-quantum-ai-machine-economy]], [[summary-gajumaru-channel-shorts]], [[summary-grids-demo-series]], [[summary-web-machine-economy]]
related: [[gajumaru-architecture]], [[gajumaru-product-suite]], [[associate-chains]], [[qpq-ag]], [[craig]], [[gregory-chew]]
created: 2026-05-15
updated: 2026-05-16
confidence: high
cluster: developer-ecosystem
cluster_role: member
open_questions: []
---

# GRIDS (Gajumaru Remote Instruction Dispatch and Serialisation)

GRIDS is QPQ AG's universal transaction signing and authentication protocol for the Gajumaru ecosystem. It allows wallet-based signing of any on-chain action without usernames, passwords, or exposure of private data to the application.

**Full name:** Gajumaru Remote Instruction Dispatch and Serialisation  
**Author:** [[craig]] (Craig Everett) — technical spec, v5, created 2025-01-17, last modified 2026-05-13  
**Status:** "For Implementation"

## Protocol Description

> "A universal secure login mechanism that removes the need for third parties. Imagine logging into a website you have never been to before without a username, password, or any private data exposed to the site."

GRIDS works via **dead-drop signature** (cryptographic challenge-response):
1. The application generates a GRIDS dead-drop URL and provides it as a QR code or copyable link
2. The user's wallet reads the URL, converts it to an HTTPS request (`grids://foo.com/1/d/path` → `GET https://foo.com/path`)
3. The server responds with unsigned JSON containing a randomized challenge
4. The wallet presents the challenge to the user; user approves
5. The wallet signs the JSON and POSTs the updated object back
6. The application verifies the signature — identity confirmed as owner of that public key
7. No credentials transmitted, no GDPR exposure for the site operator

## URL Schema

```
[grid(s)]://[host]/[version]/[instruction]/[path](?a=[amount]&p=[payload])
```

| Component | Values | Meaning |
|-----------|--------|---------|
| Schema | `grids` / `grid` | HTTPS / HTTP |
| Host | varies | Network ID (spend), node (transfer), or service URL (dead-drop) |
| Version | `1` | Protocol version |
| Instruction | `s`, `t`, `d` | Spend, Transfer, Dead-drop |
| Path | address or HTTP path | Recipient or server endpoint |
| `a=` | amount in pucks | Optional, for spend/transfer |
| `p=` | URL-encoded payload | Optional |

## Three Instruction Types

| Type | Code | Use |
|------|------|-----|
| Spend | `s` | Encode a spend TX; host = specific endpoint node |
| Transfer | `t` | Encode a transfer TX; host = network, client resolves endpoint |
| Dead-drop | `d` | Server-queued signing; enables SSO and arbitrary signature requests |

### Example Spend URL
```
grids://groot.mainnet/1/s/ak_srFAGY9Dq6p8LVoPSQ8o86s6EFAqWsXHKLDvpzPFcZ8txtR6U?a=25000000000000000000&p=20250117-0001
```

### Dead-Drop SSO

The dead-drop instruction enables First-Party Single Sign-On **without server-side private data**:

> "Signing of randomized and timestamped messages can be used to implement First-Party Single Sign-On schemes without server-side private data requirements."

The server never holds credentials, passwords, or private keys — it holds only the public key used to verify the signature.

## Security Design Principle

> "Separation of signature and app execution context is needed" to prevent compromise and private key theft.

Applications must **not** integrate wallet signing into their own execution environment (as browser-based wallet plugins or in-game wallets do). GRIDS enforces separation: the wallet is always the signing context; the application is always the requesting context. The user's private key never leaves the wallet.

## Significance

> "GRIDS is fundamental to the internet of economics, establishing a distinct transactional protocol from the internet of data — where we find the information that leads to our transactional choices."

GRIDS separates identity/authentication for the transactional internet from the identity systems of the information internet (usernames, passwords, OAuth, social login). Users carry their identity in their wallet — not fragmented across thousands of site-specific accounts.

Implications:
- **Users:** one identity, no passwords, no private data exposure
- **Sites:** no GDPR compliance burden for login data; no credential database to protect
- **Ecosystem:** every GRIDS-integrated application becomes part of a unified identity layer

## SSSO — Self Single Sign-On

GRIDS enables **SSSO (Self Single Sign-On)** — a distinct concept from conventional SSO:

- **Conventional SSO** (OAuth2, social login): a third party (Google, Facebook) vouches for your identity to a site. Your identity lives on the third party's server. The site learns who you are via the third party.
- **SSSO**: your wallet vouches for itself. No third party. The site sees only your public key (which proves ownership of a keypair) and a signature over its challenge. Nothing else is transmitted.

Properties:
- **No credential sharing** — the site never receives a password, email, or social identity
- **GDPR compliance is automatic** — no personal data stored on the relying server; nothing to report or protect
- **Nothing to steal if the site is breached** — the site holds only a public key and the signed challenge; both are already public by definition
- **One identity, every application** — the same wallet works everywhere GRIDS is integrated, without account fragmentation

SSSO is QPQ's term for this property in the context of GRIDS. The conventional term (SSO) implies federation via a central identity provider; SSSO explicitly removes that central provider.

Source: [[summary-unwhitepaper]], [[summary-qpq-wiki-grids]]

## Hardware Roadmap — Three Stages

The GRIDS hardware implementation follows a three-stage roadmap (Greg Chew, [[summary-blog-mythos-glasswing]]):

**Stage 1 (Current):** GajuDesk and GajuMobile use device security enclaves (Android hardware key storage; iOS Secure Enclave) as the signing context. **Open-sourced under GPL3.**

**Stage 2 (In Development):** Dedicated air-gapped hardware wallet with **no network connection of any kind** — no WiFi, no Bluetooth, no radio. Communication via QR codes only. This is the "Level 2" referenced in the Year in Review. The signing context has zero network exposure.

**Stage 3 (Planned):** **Sovereign manufacturing facilities in Switzerland and Japan** with verified supply chains — eliminating hardware supply chain attack vectors entirely. The Un-White Paper references the **RUAG Guardian Secure Mobile Platform** (Switzerland) as the hardware paradigm for this stage — purpose-built secure hardware with verified provenance.

The rationale: keys in Stage 1 are protected by the device's secure enclave. Stage 2 achieves true air-gap — the signing context has zero network exposure. Stage 3 ensures the hardware itself cannot be compromised before reaching the end user.

Source: [[summary-blog-mythos-glasswing]], [[summary-qpq-2025-review]]

## Universal Signing Layer — Confirmed

[[summary-gaju-firsts-gajumaru-blockchain]] shows GRIDS used for mining payout signing — not just marketplace login. The speaker uses the same URL-copy-paste mechanism to sign a mining withdrawal transaction from GajuMining SaaS. This confirms GRIDS is the **universal transaction signing layer** across the entire Gajumaru product suite.

> "This is all happening on-chain and not on the website. Total security, the end of login and passwords."

## Self-Referential Authentication — Music Streaming Example

The `No Account. No Password. No Database to Hack` clip provides a concrete illustration:

- A user visits a music streaming site for the first time
- They have no account — the site checks for their public key
- If not recognised: **the site creates a blank account automatically**, associated with that public key
- On return visit: same key → same account. No registration process
- The site never stores a password, email, or personal data — only the public key

> "You don't have to make an account. There's no database to hack because there's nothing sensitive stored there."

At checkout, a GRIDS spend-transaction URL is provided. The user's wallet signs it. The merchant's GajuPay node detects the on-chain confirmation and fires a webhook to the merchant system ("that guy paid now") — identical in integration pattern to Stripe webhooks, but requiring zero credential handling.

## Integration Examples

| Context | GRIDS role |
|---------|-----------|
| QuidProQuo / GajuMarket | Login + contract call signing for each transaction step |
| GajuMining SaaS | Payout transaction signing |
| Music streaming site | Self-referential auth; auto-account creation on first visit |
| Any e-commerce checkout | GRIDS URL → wallet signs → GajuPay webhook notifies merchant |
| Any future application | Any on-chain action requiring wallet signature |

## The Anthropic Mythos AI Threat — and GRIDS as Architectural Answer

**The Mythos Incident (April 7, 2026):**
- **Date:** April 7, 2026
- **Model:** Claude Mythos (Anthropic — announced via Project Glasswing; not released publicly)
- **Target:** OpenBSD operating system
- **Vulnerability:** 27-year-old RCE (Remote Code Execution) — present and unpatched for 27 years
- **Capability:** Gained root access from anywhere without authentication; no human involvement after initial instruction
- **Industry response:** Cybersecurity industry given a "90-day" window to adapt

QPQ's analysis:
- The cybersecurity industry's response will be "more layered defense, more defense in depth"
- This response is structurally wrong — it tries to protect the wrong thing
- The fix is not to defend credential data better; it is to **remove credential data from the public domain entirely**

> "We knew the web was the wrong architecture long before Mythos."

> "It's not that you've increased the security. You've just removed the sensitive data from needing to be protected at all."

> "Defense-in-depth isn't an answer."

GRIDS achieves this:
- No usernames or passwords ever transmitted
- Site holds only a public key plus a signed challenge — both already public by definition
- Mythos has no attack surface to exploit because the credentials never exist on the connected layer

> "The attack surface that Mythos and any AI of its capabilities can exploit is now gone if you choose to make it so."

Source: [[summary-grids-demo-series]], [[summary-internet-of-economics-grids-mythos]], [[summary-quantum-ai-machine-economy]]

## 3DS / Credit Card Replacement Path

Greg proposed (and Craig confirmed feasibility of) using GRIDS to replace credit card flows:

1. **Phase 1:** Replace 3D Secure (3DS) credit-card verification with GRIDS signing — drop-in upgrade for existing card networks
2. **Phase 2:** Replace the credit card itself with wallet-bound payment via GRIDS — existing payment systems integrate GRIDS as their primary authentication

This is the migration path from current credit-card commerce to GRIDS commerce without requiring synchronous global migration.

Source: [[summary-internet-of-economics-grids-mythos]]

## Operational Status

| Component | Status |
|-----------|--------|
| GRIDS protocol | Operational |
| GajuDesk integration | Operational (zero-dependency desktop wallet) |
| GajuMobile integration | Deploys **May 2026** |
| GajuMarket integration | Testnet (as of clips); MainNet alignment April 26, 2026 |
| GajuPay backend | Operational — watches chain, calls vendor webhooks on payment confirmation |

Implementation timeline for businesses: described as "well within the 90 days cybersecurity industry estimates for action."

Source: [[summary-gajumaru-channel-shorts]]

## Sources
[[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]], [[summary-gaju-firsts-gajumaru-blockchain]], [[summary-qpq-wiki-grids]], [[summary-blog-mythos-grids]], [[summary-blog-mythos-glasswing]], [[summary-unwhitepaper]], [[summary-internet-of-economics-grids-mythos]], [[summary-npm-supply-chain-hack]], [[summary-quantum-ai-machine-economy]], [[summary-gajumaru-channel-shorts]], [[summary-grids-demo-series]], [[summary-web-machine-economy]]
