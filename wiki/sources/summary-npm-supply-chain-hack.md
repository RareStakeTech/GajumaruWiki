---
type: source
title: "NPM Supply Chain Hack, Unserious Crypto, Serious Gajumaru Full (YouTube)"
slug: summary-npm-supply-chain-hack
source_file: raw/transcripts/npm-supply-chain-hack-unserious-crypto-serious-gajumaru-full.md
author: "QPQ AG (Greg Chew, Craig Everett, Ulf Wiger — discussion format)"
date_published: 2025-09-15
date_ingested: 2026-05-16
key_claims:
  - Largest NPM supply chain attack in history — 18 packages with 2 billion weekly downloads affected
  - Up to 2 billion wallets potentially affected by the attack vector
  - MetaMask is the "Google of Ethereum-based wallets" — the dominant attack target
  - MetaMask spent tremendous effort trying to secure against NPM vulnerabilities — and failed
  - Attack pattern — malicious code rewrote receiver account in MetaMask transactions silently
  - Even the package author of an attacked package may not know about the compromise (transitive dependency)
  - "Leftpad incident" recap — one developer pulled a single trivial package; half the internet broke
  - GajuDesk written from scratch with zero dependencies — including its own package manager (also zero-dependency)
  - NPM operates by automatic dependency resolution — Hello World in Vue.js spits out 70,000 lines of code
  - JavaScript framework builds typically show tens of thousands of critical security warnings — and developers ship anyway
  - The web is "permanently on fire" — warnings are normalized; airline-grade engineering treats warnings as errors
  - JavaScript was specified over a weekend by one person who then got stuck with it
  - Browser plugins like MetaMask are inherently insecure architecture — the signing context must be separated
related: [[grids]], [[qpq-ag]], [[qpq-software-stack]], [[gajumaru-product-suite]], [[craig]], [[ulf]], [[gregory-chew]]
confidence: high
---

# Summary: NPM Supply Chain Hack, Unserious Crypto, Serious Gajumaru

Long-form discussion (likely September 2025) reacting to the largest NPM supply chain attack in history. Craig walks through the technical history of NPM/JavaScript and explains why GajuDesk's zero-dependency architecture is the only structural answer.

---

## The Attack Itself

> "The largest NPM supply chain attack in history with 18 packages and two billion weekly downloads affected."

The "Shai-Hulud worm" (referenced in the Un-White Paper Security Philosophy chapter) spread autonomously across the NPM ecosystem in this incident.

Affected critical packages included:
- `debug` (~357M weekly downloads)
- `chalk` (~300M weekly downloads)
- `ansi-styles` (~371M weekly downloads)

**Potential blast radius: 2 billion wallets** (the MetaMask ecosystem and adjacent JS wallets).

---

## How the Attack Vector Works

> "The attack is so subtle and so layered. The author doesn't know about it. And actually what the target is is not even MetaMask. It's the page that would have an Ethereum account in it. And that account has been changed to the malicious — to the attacker's account."

The malicious code rewrote the receiver account silently when a user attempted to pay. The displayed address on the merchant page and in MetaMask itself could appear correct but route to the attacker's address.

Craig and Peter analyzed MetaMask's defenses a year prior and concluded the architecture could not be secured — only worked around. The current incident is the predicted failure.

---

## Why JavaScript and NPM Are Structurally Broken (Craig)

**Origin of the mess:**
- JavaScript was specified over a weekend by one person; the spec was incomplete and self-contradictory
- The person came back and said "Oh crap, now we're stuck with this"
- Node.js extracted JavaScript from the browser, but the language defects came with it
- NPM is automatic dependency resolution — when you depend on package X, NPM transitively fetches every dependency of X, of every X's dependencies, and so on
- Hello World in Vue.js produces approximately **70,000 lines of code** from thousands of dependencies

**The "everything is on fire" problem:**
- Builds in JS frameworks routinely show tens of thousands of critical security warnings
- Developers normalize this: "It always does that"
- Compare to airline engineering: warnings are treated as errors and must be resolved before shipping
- In JavaScript: warnings are ignored and the build is shipped under investor pressure

**The leftpad story** (cited as foundational example):
- One programmer published many tiny single-function packages
- One of them, `leftpad`, was a 10-line function inserting spaces to the left of text
- Every framework in the universe transitively depended on leftpad
- The author had a dispute with NPM and pulled his package
- **Half the internet broke the next day**

---

## GajuDesk's Zero-Dependency Architecture

> "When we built our software, our desktop wallet — that's all from scratch. There's no dependencies. And the package manager actually that we use for that, I [Craig] wrote that too with zero dependencies. It actually bootstraps and runs itself."

- GajuDesk is written from scratch in Erlang/Elixir (per the QPQ stack)
- Even the package manager used to build it has zero dependencies and bootstraps itself
- "We know every single detail of how everything works and all of our code"
- This is the structural answer to NPM-class attacks: **no supply chain to attack**

GajuDesk is contrasted explicitly with MetaMask:
> "MetaMask is a wallet that is actually designed to handle different kinds of crypto. So they had to take a more agnostic approach. We didn't have to. We're specifically a Gajumaru wallet, so we could go vertical and own every layer."

---

## Why Browser Plugin Wallets Are Fundamentally Unsafe (Craig)

> "The web — where we use browsers and Chrome and Firefox — it is just a nightmare of problems. The only correct way to cope with all the just limitless number of unknowable security vulnerabilities is to just separate the context."

This is the core argument for GRIDS:
- The browser is an inherently unsafe execution context
- The signing context (wallet) must never live inside the unsafe execution context
- A wallet that is a browser plugin is **architecturally** insecure regardless of how carefully it is coded
- The only correct solution is out-of-band signing (QR code, separate device, separate process)

> "The easiest code to secure is the code that you don't have."

---

## Sources
[[grids]], [[qpq-ag]], [[qpq-software-stack]]
