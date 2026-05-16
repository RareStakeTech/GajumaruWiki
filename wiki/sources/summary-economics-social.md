---
type: source
title: "Alternative Economy, Price Signals, and Generational Value (7 clips)"
slug: summary-economics-social
source_file: raw/transcripts/[multiple — see body]
author: "QPQ AG / Greg Chew / Craig Everett / Peter Harpending"
date_published: 2026-01-01
date_ingested: 2026-05-16
key_claims:
  - QPQ goal: alternative economy first, default economy in time — not just a currency
  - Crypto critique: most crypto projects chasing short-term money and hoarding, not building
  - GajuDesk and all wallets built with zero external dependencies — deliberate architectural choice
  - Browser plugin wallets described as sketchy — deliberate backdoors; not the right model
  - Price signals eliminate spam/bot farms economically — if every email cost one penny, no spam
  - Bot farms retweeting at 0.5 yen per retweet = tens of thousands per hour in costs
  - Less than 5 percent of blogs today write original content — big data is degrading
  - Milton Friedman reference: price signals as best information-routing mechanism
  - Generational wealth: pie can be exponentially bigger — each sliver worth far more on 100x pie
  - Blockchain and currency must actually work before anything else becomes possible
related: [[gajumaru-product-suite]], [[grids]], [[gaju-token]], [[internet-of-economics]], [[price-signal-economy]], [[craig]], [[gregory-chew]], [[peter]]
confidence: high
---

# Alternative Economy, Price Signals, and Generational Value

**Source files (raw/transcripts/):**
- `Gajumaru Blockchain：from Alternative to Default Economy.en.vtt` (~0:51)
- `Gajumaru Blockchain｜Convenience vs Security.en.vtt` (~2:23)
- `Gajumaru｜GajuDesk wallet：no dependencies.en.vtt` (same content as Convenience vs Security)
- `Gajumaru Blockchain｜If Every Email Cost One Penny There Would Be No Spam#.en.vtt` (~2:07)
- `What If a Like Cost 10 Pucks？ The Price Signal Economy Applied to Social Media#.en.vtt` (~0:44)
- `Gajumaru｜Generational value creation.en.vtt` (~1:15+)
- `Gajumaru｜Blockchain and currency that works.en.vtt` (~0:49)

---

## Alternative to Default Economy

Greg Chew's framing of QPQ's long-term vision:

> "Get as many people as possible engaged — not just as a currency but as an alternative economy at first and a default economy in time."

This is a deliberate sequencing:
1. **Phase 1:** Gajumaru as an *alternative* economy alongside fiat — people who opt in
2. **Phase 2:** Gajumaru as the *default* economy — the baseline for economic activity

Critique of the existing crypto industry:

> "[They are] chasing short-term money and hoarding."

Most crypto projects fail this test — they optimize for token price appreciation, not for building usable economic infrastructure. The distinction is between holding a cryptocurrency as a speculative asset vs. building the infrastructure for a functioning economy.

---

## Zero-Dependency Wallets — Convenience vs Security

Craig Everett and Peter Harpending on wallet architecture:

> "Not impossible, just annoying."

The QPQ team built GajuDesk (and multiple other wallets) with **zero external dependencies** — every piece of code was written from scratch, without npm packages, without third-party libraries.

**Why:**
- Browser plugin wallets operate in the **execution context** of the browser/website — this is architecturally wrong
- "The whole idea is silly" — a plugin that signs transactions from within the browser's runtime is co-located with the attacker's potential entry point
- Third-party npm packages can contain **deliberate backdoors** (see [[summary-npm-supply-chain-hack]])
- Zero-dependency wallets eliminate an entire class of supply chain attack vectors

Peter Harpending confirmed as co-author of GajuDesk alongside Craig Everett.

GajuDesk is the reference implementation. Multiple wallets have been written this way. The philosophy: accept the development annoyance; remove the structural risk.

---

## Price Signal Economy — If Every Email Cost One Penny

The economic mechanism that makes a transactional internet functionally different from the web:

> "If every email cost one penny there would be no spam."

Key arguments:

**Bot farms:**
- A retweet/repost currently costs near-zero (server CPU, bandwidth)
- At 0.5 yen per retweet, a bot farm producing tens of thousands of reposts per hour incurs **tens of thousands of yen per hour in costs**
- This is economically unsustainable — bot farms are *destroyed* by price signals, not just slowed

**Content quality:**
> "Less than 5% of blogs write their own content today."
> "Big data is the whole thing. Now big data sucks. Now you have to look for focused meaning."

Mass AI-generated spam content degrades signal quality across the entire web. Price signals force each post to carry an economic cost, making mass spam unprofitable.

**Curation:**
> "Best curation filters are cost signals."

This echoes Milton Friedman's point on price signals as the most efficient information-routing mechanism in an economy. In the Gajumaru model, the same principle applies to attention, content, and social interactions.

**The puck:**
A "puck" is the Gajumaru sub-unit of account used for micropayments (see [[gaju-token]]). "What if a like cost 10 pucks?" — even a tiny nominal value forces genuine preference expression.

---

## Price Signal Economy — Social Media

From the `What If a Like Cost 10 Pucks?` clip:

> "If a repost or like carries a cost, it becomes a genuine value signal."

The current model (costless likes/retweets) produces noise: engagement optimized for algorithmic amplification, not genuine endorsement. A 10-puck like is a real vote with real economic weight.

> "Unbridled capitalist economy" — the speaker describes a price-signal social media layer as restoring genuine capitalist price discovery to attention/endorsement markets that are currently manipulated by algorithms.

---

## Generational Value Creation

From the `Generational value creation` clip (Greg Chew or Gregory Chew):

The common argument from crypto critics: "existing holders benefit at the expense of later generations."

Response:

> "We don't need generations to be poorer."

> "Such a defined pie that can only grow at such a slow rate is the argument of 'the halves.'"

> "We can build a much much bigger pie. In fact, that pie can be exponentially bigger."

> "Your same sliver — in degrees, it may not grow in absolute terms — but on a 100× bigger pie, each sliver is way more than 100× more valuable."

The argument reframes the economic model: this is not zero-sum wealth redistribution; it is value creation. A functioning Internet of Economics unlocks markets and economic activity that currently cannot exist (machine economy, unbanked populations, micropayment-based services). That expansion makes existing holdings more valuable by increasing the total economic base, not by taking from others.

---

## Blockchain and Currency That Works

From the `Blockchain and currency that works` clip (Ulf Wiger):

> "We're delivering an actual blockchain that actually works and putting the currency back into cryptocurrency."

> "It's not an end, it's a beginning. There's a whole slew of things that we want to make possible that only become possible if you have an actual blockchain that actually works and a cryptocurrency that is a cryptocurrency and actually works."

The framing: Gajumaru is a prerequisite, not an end state. The machine economy, price-signal social media, alternative economy framing — none of these are achievable without first solving the base layer.

---

## Sources
[[summary-economics-social]], [[summary-internet-of-economics-grids-mythos]], [[summary-quantum-ai-machine-economy]]
