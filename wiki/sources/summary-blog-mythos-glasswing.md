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
  - GRIDS Stage 2 (in development): dedicated air-gapped hardware wallet with no wireless connectivity
  - GRIDS Stage 3 (planned): sovereign manufacturing facilities in Switzerland and Japan with verified supply chains
  - The internet was designed for information replication, not value transmission — creating systemic vulnerability
  - Eliminating attack surfaces entirely is the structural solution; incremental improvements cannot match AI-speed exploitation
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

## Significance

1. Confirms Greg Chew as a public author for QPQ alongside Craig Everett and Peter Harpending
2. Provides the three-stage GRIDS hardware roadmap not documented elsewhere
3. Confirms GPL3 open-source status of Stage 1 components
4. Frames GRIDS as an architectural necessity, not a product feature
