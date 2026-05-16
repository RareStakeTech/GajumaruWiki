---
type: source
title: "Mythos, Glasswing, and Why We Built What We Built (qpq.swiss, Apr 2026)"
slug: summary-blog-mythos-glasswing
source_file: web:https://qpq.swiss/2026/04/14/mythos-glasswingand-why-we-built-what-we-built/
author: "Greg Chew (QPQ AG)"
date_published: 2026-04-14
date_ingested: 2026-05-15
key_claims:
  - Greg Chew confirmed as author — CEO writing publicly about security architecture
  - GRIDS full name confirmed as "Gajumaru Remote Instruction Dispatch and Serialisation"
  - GRIDS Stage 1 (current): GajuDesk and GajuMobile using device security enclaves; open-sourced under GPL3
  - GRIDS Stage 2 (in development): dedicated air-gapped hardware wallet; dependent on Series A funding
  - GRIDS Stage 3 (planned): sovereign manufacturing in Switzerland and Japan; requires national security-level conversation
  - Stage 1 honest limitation: "probably secure rather than definitely secure" — no mathematical guarantee without air-gap
  - The internet was designed for information replication, not value transmission — creating systemic vulnerability
  - Eliminating attack surfaces entirely is the structural solution; incremental improvements cannot match AI-speed exploitation
  - Project Glasswing ~50 orgs: AWS, Apple, Microsoft, Google, JPMorganChase, Cisco, Linux Foundation (partial list)
  - 90-day industry planning horizon before equivalent Mythos capability proliferates to other frontier labs
  - Groot operational since 22 October 2024 (MainNet genesis)
  - NPM supply chain attack: September 2025 (confirmed date)
  - LavaMoat flaw publicly documented in GitHub issue #5728
  - Ciaran Martin (former UK NCSC head) cited; CSA/SANS/OWASP published 11-action response framework post-Mythos
  - LTIN: Q3/Q4 2026 target for first sovereign customer
related: [[grids]], [[gajumaru-product-suite]], [[craig]], [[gregory-chew]]
confidence: high
---

# Summary: Mythos, Glasswing, and Why We Built What We Built

Published April 14, 2026. Author: **Greg Chew** (CEO, QPQ AG). Provides QPQ's first-principles architectural argument for GRIDS in the context of Mythos AI's demonstrated capabilities. A companion piece to the April 30 GRIDS blog post.

---

## The Mythos Context

Mythos (described here by Greg Chew before the April 30 GRIDS post):
- Autonomous AI system that discovered thousands of previously unknown OS/browser vulnerabilities
- Independently identified a **27-year-old OpenBSD vulnerability**
- Generated **181 working Firefox exploits** (vs 2 from prior-generation models)
- Anthropic provided early access to ~50 organizations (AWS, Apple, Microsoft, Google) via Project Glasswing, allowing them to scan their own systems before comparable capabilities become widely available

## The Structural Argument

Greg Chew's framing:
- The internet was designed for **information replication**, not value transmission
- The financial system has operated value exchange over copied-data infrastructure
- This creates **systemic vulnerability** to AI-speed exploitation
- The solution is **separating economic infrastructure from the existing internet**, not improving defensive measures incrementally

## GRIDS Implementation Stages

**Stage 1 (Current):** GajuDesk and GajuMobile using device security enclaves. **Open-sourced under GPL3.**

**Stage 2 (In Development):** Dedicated air-gapped hardware wallet with no wireless connectivity. This is the device Greg refers to as GajuSafe/GRIDS hardware — no WiFi, no Bluetooth, no radio.

**Stage 3 (Planned):** Sovereign manufacturing facilities in **Switzerland and Japan** with verified supply chains — eliminating hardware supply chain attack vectors.

## Key Technical Points

GRIDS full name: **"Gajumaru Remote Instruction Dispatch and Serialisation"**

- Optical-only communication between signing and connected devices (via QR codes)
- No private keys on networked systems
- Hardware security enclaves for key storage
- "No credentials to discover" — eliminates the attack surface entirely

## Industry Response to Mythos

The article confirms a coordinated post-Mythos industry response:
- **~50 orgs** received early access via Project Glasswing: includes AWS, Apple, Microsoft, Google, JPMorganChase, Cisco, and the Linux Foundation (partial public list)
- **Ciaran Martin** (former head, UK National Cyber Security Centre) cited as a key voice framing the 90-day planning window
- **CSA / SANS / OWASP** published a joint 11-action framework in response to Mythos capabilities
- The 90-day window: before other frontier labs produce equivalent capability — not a precise date, a planning horizon

## Stage 1 Honest Limitation

Greg explicitly frames Stage 1 as "probably secure rather than definitely secure." Hardware security enclaves provide strong protection but no mathematical air-gap guarantee — an attacker with root access on the same device (Mythos-level) could theoretically reach enclave memory in exotic scenarios. Stage 2 (air-gap) is where the mathematical guarantee arrives.

## LTIN and Timeline

- Groot operational since **22 October 2024** (MainNet genesis block)
- NPM supply chain attack confirmed: **September 2025**
- LTIN (first sovereign customer): **Q3/Q4 2026**
- Stage 2 hardware: dependent on **Series A** funding
- Stage 3 sovereign manufacturing: requires a **national security-level institutional conversation**

## LavaMoat Reference

LavaMoat's flaw is publicly documented in **GitHub issue #5728** on the MetaMask repository — cited by Greg as evidence that patching JavaScript with JavaScript is structurally impossible, not merely an engineering shortfall.

## Significance

1. Confirms Greg Chew as a public author for QPQ alongside Craig Everett and Peter Harpending
2. Provides the three-stage GRIDS hardware roadmap with honest limitations per stage
3. Confirms GPL3 open-source status of Stage 1; Series A dependency for Stage 2
4. Frames GRIDS as an architectural necessity, not a product feature
5. Provides firm dates: Groot genesis 22 Oct 2024; NPM attack Sept 2025; LTIN Q3/Q4 2026
