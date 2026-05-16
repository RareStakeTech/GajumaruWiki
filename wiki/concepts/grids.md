---
type: concept
title: "GRIDS"
aliases: [grids, grid-authentication, grids-login, gajumaru-remote-instruction-dispatch-system, gajumaru-remote-instruction-dispatch-serialisation]
sources: [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]], [[summary-gaju-firsts-gajumaru-blockchain]], [[summary-qpq-wiki-grids]], [[summary-blog-mythos-grids]], [[summary-blog-mythos-glasswing]]
related: [[gajumaru-architecture]], [[gajumaru-product-suite]], [[associate-chains]], [[qpq-ag]], [[craig]], [[gregory-chew]]
created: 2026-05-15
updated: 2026-05-15
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

## Hardware Roadmap — Three Stages

The GRIDS hardware implementation follows a three-stage roadmap (Greg Chew, [[summary-blog-mythos-glasswing]]):

**Stage 1 (Current):** GajuDesk and GajuMobile use device security enclaves (Android hardware key storage; iOS Secure Enclave) as the signing context. **Open-sourced under GPL3.**

**Stage 2 (In Development):** Dedicated air-gapped hardware wallet with **no wireless connectivity** (no WiFi, no Bluetooth, no radio). Communication via QR codes only. This is the "Level 2" referenced in the Year in Review.

**Stage 3 (Planned):** **Sovereign manufacturing facilities in Switzerland and Japan** with verified supply chains — eliminating hardware supply chain attack vectors entirely.

The rationale: keys in Stage 1 are protected by the device's secure enclave. Stage 2 achieves true air-gap — the signing context has zero network exposure. Stage 3 ensures the hardware itself cannot be compromised before reaching the end user.

Source: [[summary-blog-mythos-glasswing]], [[summary-qpq-2025-review]]

## Universal Signing Layer — Confirmed

[[summary-gaju-firsts-gajumaru-blockchain]] shows GRIDS used for mining payout signing — not just marketplace login. The speaker uses the same URL-copy-paste mechanism to sign a mining withdrawal transaction from GajuMining SaaS. This confirms GRIDS is the **universal transaction signing layer** across the entire Gajumaru product suite.

> "This is all happening on-chain and not on the website. Total security, the end of login and passwords."

## Integration Examples

| Context | GRIDS role |
|---------|-----------|
| QuidProQuo marketplace | Login + contract call signing for each transaction step |
| GajuMining SaaS | Payout transaction signing |
| Any future application | Any on-chain action requiring wallet signature |

## Sources
[[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]], [[summary-gaju-firsts-gajumaru-blockchain]], [[summary-qpq-wiki-grids]]
