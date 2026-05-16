---
type: source
title: "Why Proof-of-Work Works (in Theory) (gajumaru.io, Mar 2026)"
slug: summary-blog-proof-of-work-theory
source_file: web:https://gajumaru.io/2026/03/13/why-proof-of-work-works-in-theory/
author: "Peter Harpending"
date_published: 2026-03-13
date_ingested: 2026-05-15
key_claims:
  - Peter Harpending is the confirmed author — demonstrates his role as public technical writer for QPQ
  - PoW security relies on irreversibility of energy expenditure (second law of thermodynamics)
  - Bitcoin: 7 TPS theoretical; 3.5 TPS practical. Visa: 65,000 TPS peak; 8,500 TPS resting rate
  - Bitcoin market cap at article date: ~$2.4 trillion (April 2026)
  - "There is no solution to the Blockchain Trilemma — any project claiming to have solved it is a scam"
  - Without practical usability, Bitcoin's value collapses to "cargo cult theory" (memetic value without substance)
  - CAP theorem parallel: blockchain trilemma (security, decentralization, scalability cannot fully coexist)
related: [[tea-trilemma]], [[groot]], [[cuckoo-cycle]], [[bitcoin-ng]], [[peter]]
confidence: high
---

# Summary: Why Proof-of-Work Works (in Theory)

Published March 13, 2026. **Author: Peter Harpending.** This confirms Peter Harpending's role as a technical writer in QPQ's public communications, alongside Craig Everett. The article examines PoW's theoretical foundations and practical limitations, framing Gajumaru's approach within this context.

---

## The Ledger Problem

Distinction: a **ledger** is transaction data; a **blockchain** is the system for modifying it. Traditional banks maintain centralized ledgers with exclusive authority. Blockchain solves this without trusted intermediaries.

## The Double-Spend Problem

Without a central authority, distributed parties cannot agree on transaction sequence. If Alice sends her 5 coins to both Bob and Carol, conflicting ledger versions are irresolvable without an authority — unless one is arbitrarily selected.

## How PoW Solves It

Miners solve computationally expensive mathematical problems to validate blocks. Three principles:

1. Problem-solving requires substantial energy expenditure (watt-hours)
2. Verification remains trivial
3. Energy consumption is irreversible (second law of thermodynamics)

The longest chain — requiring the most energy to produce — becomes the trustworthy version.

## The Blockchain Trilemma

CAP theorem has a blockchain parallel: **security, decentralization, and scalability cannot fully coexist.** Bitcoin sacrifices scalability:

- Bitcoin: **7 TPS** theoretical; **3.5 TPS** practical
- Visa: **65,000 TPS** peak; **8,500 TPS** resting rate
- Bitcoin market cap at article date (April 2026): **~$2.4 trillion**

**Key quote:** *"There is no 'solution' to the Blockchain Trilemma... Any project claiming to have 'solved' the Blockchain Trilemma is a scam."*

This is QPQ's framing for why Gajumaru doesn't claim to "solve" the trilemma — it navigates it deliberately via the TEA framework.

## Value Theory Critique

Harpending argues Bitcoin relies on **memetic theory of value** — viability depends on widespread belief backed by real economic utility. Without practical usability, this collapses into **"cargo cult theory"**: value persists through ritual rather than substance.

## Significance

This article:
1. Confirms Peter Harpending as a public technical author for QPQ
2. Sets up the theoretical case for why Gajumaru's approach (deliberate trilemma navigation) differs from competitors
3. Provides QPQ's explicit framing that "solved the trilemma" claims are fraudulent
