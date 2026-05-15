---
type: concept
title: "GRIDS"
aliases: [grids, grid-authentication, grids-login]
sources: [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]], [[summary-gaju-firsts-gajumaru-blockchain]]
related: [[gajumaru-architecture]], [[gajumaru-product-suite]], [[associate-chains]], [[qpq-ag]]
created: 2026-05-15
updated: 2026-05-15
confidence: medium
cluster: developer-ecosystem
cluster_role: member
open_questions:
  - Is the GRIDS hardware wallet (mentioned in Year in Review) the same as or separate from the GRIDS login protocol?
  - What is "Level 2" of the GRIDS hardware wallet (referenced in Year in Review as a target)?
---

# GRIDS

GRIDS is QPQ AG's universal secure authentication system for the Gajumaru ecosystem. It allows wallet-based login to any application without usernames, passwords, or exposure of private data.

## Protocol Description

> "A universal secure login mechanism that removes the need for third parties. Imagine logging into a website you have never been to before without a username, password, or any private data exposed to the site."

GRIDS works via cryptographic challenge-response:
1. The application provides a QR code and a GRIDS URL
2. The user's wallet (Clutch on desktop, Bor on mobile) reads the URL and retrieves a random challenge message from the application's backend
3. The user signs the challenge with their wallet's private key
4. The application verifies the signature — identity confirmed as owner of that public key
5. No credentials transmitted, no GDPR exposure for the site operator

## Significance

> "GRIDS is fundamental to the internet of economics, establishing a distinct transactional protocol from the internet of data — where we find the information that leads to our transactional choices."

GRIDS separates identity/authentication for the transactional internet from the identity systems of the information internet (usernames, passwords, OAuth, social login). Users carry their identity in their wallet — not fragmented across thousands of site-specific accounts.

Implications:
- **Users:** one identity, no passwords, no private data exposure
- **Sites:** no GDPR compliance burden for login data; no credential database to protect
- **Ecosystem:** every GRIDS-integrated application becomes part of a unified identity layer

## Hardware Component

The Year in Review ([[summary-qpq-2025-review]]) references a "GRIDS hardware wallet" with multiple levels (Level 2 mentioned as a target milestone). The relationship between the GRIDS hardware device and the GRIDS login protocol is not yet clarified in available sources.

> [!open_question]
> Is the GRIDS hardware wallet a physical device (like a YubiKey) that implements the GRIDS protocol? Or is "GRIDS" used for two distinct products? Source: [[summary-qpq-2025-review]].

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
[[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]], [[summary-gaju-firsts-gajumaru-blockchain]]
