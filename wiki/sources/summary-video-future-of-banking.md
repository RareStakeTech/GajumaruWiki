---
type: source
title: "Gajumaru | The Future of Banking in Blockchain — the Place for Trust and Delegated Responsibility"
slug: summary-video-future-of-banking
source_file: raw/transcripts/gajumaru-future-of-banking-in-blockchain.md
author: "Gregory Chew"
date_published: 2025-01-01
date_ingested: 2026-05-16
key_claims:
  - Greg Chew has been working on this problem for 24 years
  - In 2002 demonstrated mobile money and certificate transfer at HSBC London HQ using 2G GPRS phones
  - 2002 HSBC demo was the "first iteration" of what became Gajumaru
  - Future of banking is more profitable for less risk with none of today's infrastructure headaches
  - Banks treat infrastructure as assets; it is actually a liability
  - Most people will want safekeeping and delegated responsibility (banking relationship with City Bank, Wells Fargo, etc.)
  - Those who want self-custody will have the right and capacity to hold their own keys
  - "We don't have that at the moment" — self-custody at scale not yet available
  - People will still want a City Bank or Wells Fargo app as the interface to their wallet
related: [[gajumaru-product-suite]], [[grids]], [[gregory-chew]], [[gajumaru-architecture]]
confidence: high
---

# Summary: Gajumaru | The Future of Banking in Blockchain

This is a short standalone segment from Gregory Chew, recorded as part of a longer discussion. It traces the origin of his vision for transforming banking, the 2002 proof-of-concept demonstration at HSBC, and his model for what banking looks like when built on Gajumaru infrastructure.

---

## 24 Years of Context

Greg frames his current work explicitly as the culmination of a 24-year project. The first concrete demonstration was in 2002:

> "I stood in HSBC's headquarters in London showing them how to transfer money and certificates around the room using 2G mobile phones, GPRS mobile phones. That was the first iteration of what I've built here."

This positions Gajumaru not as a new startup idea but as the mature iteration of a long-running vision.

---

## What Is Wrong With Banking Today

Banks today maintain large infrastructure they believe to be assets. Greg's view is that this infrastructure is actually a **liability** — expensive to maintain, slow to change, and generating headaches while delivering services where banks add little direct value. The opportunity is to strip away that infrastructure and retain only the trust function.

---

## The Future Banking Model

Greg's model splits users into two groups:

1. **Delegated responsibility users** (the majority): people who want a trusted party to handle safekeeping, compliance, and care on their behalf. They will continue to want a City Bank or Wells Fargo interface — but that interface accesses a Gajumaru wallet, not the bank's own database.

2. **Self-custody users** (minority): those who want to hold their own keys and take full responsibility. This right and capacity doesn't currently exist at scale; Gajumaru is designed to enable it.

The key shift: banks stop being the ledger and become the **trusted interface and service layer** on top of a public ledger. The bank's brand provides the trust and compliance layer; the blockchain provides the settlement and custody layer.

---

## Relation to Gajumaru

This vision directly describes the [[associate-chains]] model — where a regulated bank could operate an Associate Chain with KYC/AML controls, while users who want self-custody operate directly on [[groot]]. The bank's app becomes a GajuMobile/GajuPay interface into the underlying chain, not a proprietary closed ledger.
