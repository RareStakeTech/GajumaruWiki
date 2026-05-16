---
type: source
title: "QPQ Dev Updates March & April 2026 (qpq.swiss)"
slug: summary-blog-dev-updates-2026
source_file: web:https://qpq.swiss/blog/
author: "QPQ AG"
date_published: 2026-04-30
date_ingested: 2026-05-15
key_claims:
  - GajuDEX CLOB (central limit order book) with order matching and expiration logic completed (April 2026)
  - TUI step debugger for Sophia smart contracts developed as a Gajumaru node plugin
  - State Channel benchmark (March 2026) — single node handles 10,000 concurrent channels (20,000 endpoints); linear throughput scaling
  - GajuMobile: Android 13+ hardware key storage prototypes created; Kotlin library development ongoing
  - GajuAuth in early architecture phase — GRIDS-backed (S3O) OAuth2 service
  - GajuMarket test environment operational by March 2026
  - SumUp integrated for card payment processing on mining licenses
  - Multi-hive mining support with random miner assignment deployed
  - OpenAPI HTTP endpoint registration for Gajumaru node plugins added
  - QR interface for GajuMobile↔GajuDesk communication launching
related: [[sophia-fate]], [[state-channels]], [[gajumaru-product-suite]], [[hive-mining]], [[qpq-software-stack]]
confidence: high
---

# Summary: QPQ Dev Updates March & April 2026

Combined summary of the March 2026 and April 2026 monthly development updates from qpq.swiss/blog.

---

## April 2026 Dev Update (Published April 30, 2026)

### Core Infrastructure
- Orchestration tool for experimental chain setup (first version complete)
- OpenAPI HTTP endpoint registration for Gajumaru node plugins
- Hive-style mining pool support merged into Gajumaru master branch
- TUI step debugger for Sophia smart contracts (Gajumaru node plugin)
- Regulator-friendly token-defined asset standards in progress

### GajuDesk
- Compression for Sophia contract source code in Hakuzaru (implemented)
- Unified Hakuzaru call interface
- Contract deploy/call interface issues resolved

### GajuDEX
- **CLOB (Central Limit Order Book) smart contract completed** — includes order matching and expiration logic

### GajuMining
- WhatsApp OTP for phone validation and promo code verification
- Multi-hive support with random miner assignment
- **SumUp integrated** for card payment processing on mining licenses
- Tilt webhook improvements; dynamic payment provider selection
- HiveServer webhook for first-time miner connection reporting
- License bundle creation; expanded admin UI

---

## March 2026 Dev Update (Published April 2, 2026)

### Core Infrastructure
- Indexing plugin reached beta completion
- Associate Chain connection demonstrator in development
- Orchestration tool created for experimental chains + documentation

### State Channels Benchmark
Single Gajumaru node handles **10,000 concurrent channels (20,000 endpoints)** with linear throughput scaling until CPU saturation.

### QHL (QPQ Header Library)
- Websocket integration ~50% complete

### GajuDesk
- Contract interfaces → process-based lifecycle
- Localization groundwork substantially finished
- **QR interface for GajuMobile communication launching**
- Network fallback feature for mainnet/testnet

### GajuMobile
- Kotlin library development (serialization, cryptography)
- Initial interface prototyping
- **Android 13+ hardware key storage prototypes created**

### GajuAuth
- Early architecture phase — "GRIDS-backed (S3O) OAuth2 service"

### GajuDEX
- Sophia parser complement tool
- Enhanced smart contract documentation

### GajuMarket
- **Test environment operational** (awaiting faucet and explorer completion)

---

## Significance

These updates confirm the breadth of concurrent development across 7+ products simultaneously. GajuDEX CLOB completion and GajuMarket test environment status are notable milestones. The SumUp payment integration resolves the payment friction issue first identified in the Mining Journey Update.
