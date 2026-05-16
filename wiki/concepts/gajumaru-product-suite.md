---
type: concept
title: "Gajumaru Product Suite"
aliases: [gaju-products, gajumaru-apps, product-suite]
sources: [[summary-qpq-2025-review]], [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]]
related: [[gajumaru-architecture]], [[ripa-model]], [[qpq-ag]], [[gaju-token]], [[grids]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: developer-ecosystem
cluster_role: hub
---

# Gajumaru Product Suite

The full suite of applications and platforms built on Gajumaru by [[qpq-ag]].

## Authentication

**[[grids]]** — Universal secure login mechanism. Wallet-based challenge-response authentication — no username, no password, no GDPR exposure for site operators. Fundamental to the "internet of economics." Also referenced as a hardware wallet in the Year in Review (see [[grids]] for open question on hardware vs protocol distinction).

## Wallet & Desktop Infrastructure

**GajuDesk** — Cross-platform desktop wallet (Windows/macOS/Linux). Wallet management, chain interaction, signature requests, contract development/deployment/calling. Zero dependencies, original codebase. Confirmed name: [[summary-gaju-firsts-gajumaru-blockchain]]. *(Earlier working name: "Clutch" — [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]].)*

**GajuMobile** — iOS/Android/Linux wallet and smart contract access. Zero dependencies. Targets retail payments and banking the 1.4 billion unbanked globally. Confirmed current name (gajumaru.io homepage, Summer 2026 launch plan). *(Earlier working name: "Bor" — [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]]. Current name: GajuMobile. QR interface for GajuDesk communication in development; Android 13+ hardware key storage prototypes created.)*

**GajuMine** — Cross-platform mining program (Windows/macOS/Linux). Confirmed name: [[summary-gaju-firsts-gajumaru-blockchain]].

**GajuMining Dashboard** — SaaS interface for managing mining payouts. Used to generate payout transactions signed via [[grids]].

**GajuExplorer** — Web-based chain explorer (`groot.mainnet.gajumaru.io`).

> [!resolved]
> Mobile wallet naming resolved: GajuMobile is the current name (Bor was an earlier working name, analogous to Clutch→GajuDesk). Confirmed by gajumaru.io homepage and Summer 2026 launch article.

## Finance & Exchange

**GajuDEX** — Decentralised Exchange.
- Immutable smart contracts; no admin keys; no upgradability
- No governance votes for fee redirects or asset freezing
- **First DEX to pass FINMA substance-over-form test for genuine decentralisation**
- AMM + CLOB with stop losses; infinitesimal fees; TradingView-like analytics
- Sophia language (FINMA compliant). Gaju holder benefits: liquidity, passive income (LPs), validator rewards.

**GajuPay** — Point-of-sale payment system.
- Solves blockchain acceptance at physical retail
- Multi-register routing, real-time fiat/Gaju rate logging (tax compliance), refund chains
- Backend infrastructure comparable to Stripe's origins

**GajuFX** — CHF/EUR/USD fiat on/off ramps (via QPQ Capital AG SRO regulated).

**GajuCEX / GajuTrade** — Centralised institutional order book variant.

## Commerce & Marketplace

**GajuMarket / QuidProQuo** — World's first on-chain marketplace for goods and services.
- Called "QuidProQuo" in [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]]; "GajuMarket" in [[summary-qpq-2025-review]] (soft launched mid-January 2026)
- Uses dynamic smart contracts between counterparties — no third-party intermediation
- [[grids]]-authenticated login — no account creation, no passwords
- Transaction escrow on-chain: buyer funds locked in secure enclave until agreement reached
- Moderation is the only external function (prevents Silk Road use)
- Supports physical goods, digital assets, real estate; peer-to-peer
- May evolve to require its own associate chain, and possibly nested associate chains for national regulatory compliance
- Future: automated customs compliance integration planned

**GajuMall** — Large-scale retailer unified marketplace.

**GajuMe (PayMe)** — Online invoicing integrated with blockchain.

## Infrastructure & Integration

**GajuAuth** — GRIDS-backed OAuth2 service (S3O). Enables GRIDS-authenticated login to replace conventional OAuth2/OIDC flows for web services. In early architecture phase (as of March 2026 dev update).

**GajuPort** — Listed on gajumaru.io as a coming product. Purpose not yet detailed in public sources.

## Security & Recovery

**GajuSafe** — Social recovery and key escrow.
- Shamir's Secret Sharing; trusted contacts hold secret fragments
- Threshold recovery; prevents permanent asset loss

**GajuVault** — Regulated service provider-held mnemonic keys (via QPQ Capital AG).

## Creative & Loyalty

**Da Vinci Protocol** — Creative and IP monetisation.
- Addressable market: USD 10.8 trillion
- Cinema, music, art, patents, athlete NIL, royalties on-chain
- Active outreach to Ligue 1 and La Liga footballers
- AI integration: LLM licensing automation (ChatGPT, Grok, Claude)
- Variant: InnovateLoyalty for corporate/retail programs

**GajuLoyalty** — Corporate/retail loyalty programs.

**Giggerlicious** — Remote gig work with instant blockchain-based payments.

## Regulated Services (QPQ Capital AG)
SRO application submitted January 2026. Enables KYC Wallets, tokenization of Swiss company shares (DLT Act 2021), Mining as Service, Key Management. MiCAR firm planned for Liechtenstein/Germany.

## In this cluster

| Page | Role | Description |
|------|------|-------------|
| [[gajumaru-product-suite]] | hub | Full application and platform catalogue |
| [[grids]] | member | Universal secure login/authentication protocol |
| [[state-channels]] | member | Off-chain sessions; 500+ transfers/sec; State Channel Markets |
| [[qpq-ag]] | — | Company building the suite |
| [[gregory-chew]] | — | CEO |

## Sources
[[summary-qpq-2025-review]], [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]]
