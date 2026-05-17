---
type: concept
title: "Sophia / FATE VM"
aliases: [sophia, fate-vm, fate, sophia-language, fast-aeternity-transaction-engine]
sources: [[summary-qpq-wiki-sophia]], [[summary-qpq-wiki-smart-contracts]], [[summary-worlds-first-genuine-blockchain-marketplace-quidproquo]], [[summary-qpq-wiki-sophia-faq]], [[summary-unwhitepaper]]
related: [[gajumaru-architecture]], [[gajumaru-product-suite]], [[groot]], [[associate-chains]], [[aeternity]], [[qpq-software-stack]]
created: 2026-05-15
updated: 2026-05-16
confidence: high
cluster: smart-contracts
cluster_role: hub
---

# Sophia / FATE VM

Sophia is the smart contract language used by Gajumaru. FATE (Fast Aeternity Transaction Engine) is its runtime VM. Both were originally developed for the [[aeternity]] blockchain by a distinguished team of programming language and verification researchers. QPQ AG adopted and extended both rather than building proprietary alternatives.

## In This Cluster

| Page | Description |
|------|-------------|
| [[sophia-fate]] *(hub)* | Sophia language + FATE VM |

## Origins

Sophia and FATE were designed for **Aeternity** — a blockchain built on Erlang/OTP. QPQ adopted both rather than building proprietary alternatives. Cited in the Un-White Paper: "Aeternity Dev Team, 2020" as the formal reference for Sophia/FATE. This gives Gajumaru smart contracts years of academic scrutiny, property-based test coverage, and real deployment history.

**Why Aeternity was built:** Yannis Mares (Aeternity founder) recognized early that Ethereum was "gloriously insecure" because Solidity is a terrible smart contract language and the EVM is not secure. He raised significant funding to hire global experts to build a genuinely secure VM and smart contract language. QPQ borrowed the resulting Sophia/FATE stack under the **ISC license** (similar to MIT; highly permissive).

Greg Chew's framing: "Ethereum continues to be hacked on a daily basis. It's just such a regular occurrence that it doesn't make the news." The DeFi scam tracker Ulf showed in the NPM Supply Chain Hack video confirms hundreds of millions to billions lost routinely — and crypto theft is often unenforceable because crypto is not legally recognized as currency in most jurisdictions.

Source: [[summary-npm-supply-chain-hack]]

## Sophia Language

### File Extension
Sophia source files use the **`.aes`** extension (e.g. `counter.aes` in ExampleCaller).

### Etymology
"Sophia" is the Greek word for **wisdom** — the name is intentional, reflecting the language's design goal of enabling verifiably correct smart contracts. Source: [[summary-unwhitepaper]].

### Design Goals
Designed to correct Solidity's known inadequacies:
- **Pre-execution verification** — contracts are verified before deployment
- **No Solidity corner cases** — designed to avoid the quirks that have caused billions in Ethereum contract exploits
- **Python-adoptable** — "retaining adoptability by Python-trained engineers, removing another bottleneck: the number of people conversant in the language of smart contracts"

QPQ framing: "Sophia resolves irreparable Solidity inadequacies; Python-adoptable." Ethereum/Solidity described as "dangerous for Enterprise or government use."

### ACI — Application Contract Interface
The Sophia compiler includes an **ACI (Application Contract Interface)** module (`so_aci`) that standardizes how external callers interact with deployed contracts — analogous to ABIs in Ethereum but more formally defined.

### Current Version
Sophia compiler: **v7.4.0** (last stable tag, September 2023). Active development continues toward v8/v9. Repository: `git.qpq.swiss/QPQ-AG/sophia` (865+ commits, ISC license).

## FATE VM Security Properties

The FATE VM provides security guarantees absent in the EVM:

| Property | Description |
|----------|-------------|
| **Type safety** | Strong static typing prevents type-confusion exploits |
| **Overflow prevention** | Arithmetic overflow handled at the VM level — no integer wrap-around bugs |
| **Memory isolation** | Contract memory is isolated; cross-contract memory corruption is not possible |
| **Data/control separation** | Data cannot be executed as instructions; control flow cannot be forged from data |
| **Test/prod fidelity** | VM behaviour is identical in test and production — no environment-dependent quirks |

These properties collectively eliminate entire classes of Solidity/EVM vulnerabilities (e.g., reentrancy from shared mutable state, integer overflow, and proxy delegation exploits).

Source: [[summary-unwhitepaper]]

## FATE VM

Designed by Erik Stenman (Erlang native code compiler developer, BEAM Book author, ex-CTO Klarna):
- **High-level functional instruction set** — operates at a higher abstraction level than the EVM
- **Immutability-first** — creates new data structures rather than modifying existing ones
- **Smaller contract footprints** — reduced on-chain storage requirement
- **Enhanced correctness verification** — functional approach enables formal reasoning about contract behaviour

### FATE Bytecode Representations (three formats)
From `gmbytecode` library:
1. **Bytecode** — consensus-level binary format (canonical)
2. **Assembler** — human-readable text (varies by implementation); opcodes are uppercase (`DUP`), identifiers lowercase, stack references like `stack1` or `a`
3. **Internal** — Erlang-native representation for the bytecode engine

### FATE Address Prefixes
On-chain objects use typed address prefixes:

| Prefix | Object Type |
|--------|------------|
| `@ak_` | Account key (user wallet) |
| `@ct_` | Contract |
| `@ch_` | State channel |
| `@ok_` | Oracle key *(being removed)* |
| `@oq_` | Oracle query *(being removed)* |

## Version History (Key Milestones)

| Version | Key Changes |
|---------|------------|
| v3.0.0 | `stateful` enforcement; byte arrays `bytes(N)` |
| v4.0.0 | FATE backend added; list comprehensions; payable contracts |
| v5.0.0 | String stdlib; BLS12-381 pairing cryptography; protected contract calls; `Oracle.expiry` |
| v6.0.0 | Child contracts (`Chain.clone`, `Chain.create`) |
| v7.0.0 | **AEVM eliminated** (FATE-only from here); pipe operator; contract polymorphism |
| v8.0.0 | Bitwise ops (`band`, `bor`, `bxor`, `bnot`, shifts); `Crypto.poseidon`; arbitrary `bytes()` type; AENSv2; signature literals `sg_...` |
| v9.0.0 | **Oracles removed entirely** |

### AEVM Elimination (v7)
Prior to v7, Sophia could compile to both AEVM (Aeternity EVM — Ethereum-compatible) and FATE. From v7 onward, **FATE is the only target**. This was a deliberate simplification. The `gmbytecode` library still contains AEVM code for legacy/compatibility purposes.

### Oracle Removal (v9)
Gajumaru is removing oracle support from Sophia. The March 2025 commit ("Renaming and preparing to remove oracles") preceded the v9.0.0 formal removal. Oracles were present in Aeternity's design but are not part of QPQ's Gajumaru architecture.

## Advanced Capabilities (v8+)

### AENS — Aeternity Name Service
Gajumaru includes a name service (**AENSv2** as of v8) providing human-readable names that resolve to on-chain addresses — analogous to ENS on Ethereum or DNS for the web. Supports raw data pointers.

### Cryptographic Primitives
- **BLS12-381 pairing cryptography** — used in zero-knowledge proofs and Ethereum 2.0; available from Sophia v5+
- **Poseidon hash** (`Crypto.poseidon`) — ZK-friendly hash function; added v8.0.0

### Child Contracts
`Chain.clone` and `Chain.create` enable contracts to deploy other contracts — supporting factory patterns and composable on-chain systems.

## Contributors (to Aeternity Sophia, adopted by QPQ)

| Name | Contribution | Background |
|------|-------------|-----------|
| Ulf Norell | Key designer | Chalmers/Quviq, creator of Agda proof assistant |
| Erik Stenman | Key designer + FATE VM | Happi Hacking, BEAM Book, ex-CTO Klarna |
| Thomas Arts | Key designer | Quviq co-founder, Chalmers professor |
| Hans Svensson | Key designer | Quviq, software verification |
| Robert Virding | Supporting | **Erlang co-inventor** |
| John Hughes | Supporting | Chalmers, **QuickCheck co-inventor** |
| Craig Everett (zxq9) | QPQ maintainer | Lead architect, QPQ AG |
| [[ulf\|Ulf Wiger]] (uwiger) | QPQ reviewer | Erlang/OTP expert; blockchain infrastructure |

> [!note]
> The "Ulf" listed on the Sophia contributors page from QPQ's repo is Ulf Wiger (uwiger). Ulf Norell is an Aeternity-side contributor. Both are distinct individuals. [[ulf]] = Ulf Wiger.

## Property-Based Testing

Aeternity and Cardano are the only two major blockchains tested using Quviq's **QuickCheck** property-based testing tool. This is a significant quality distinction — most blockchain code relies on unit tests, which cannot discover emergent or statistical failure modes. QuickCheck was co-invented by John Hughes (Chalmers), who also contributed to Sophia.

## Deployment Modes on Gajumaru

- **Visible** — source code included in deployment transaction; callers can verify behaviour before signing
- **Incognito** — source code omitted; behavior is opaque to callers

## Compilation Pipeline

From [[summary-qpq-wiki-sophia-faq]] (authored by Peter Harpending):
Sophia source (`.aes`) → Sophia compiler → FATE bytecode → FATE VM execution on Gajumaru node

## FINMA Compliance

Sophia/FATE is described as FINMA-compliant, enabling GajuDEX to pass Switzerland's substance-over-form decentralisation test.

## In this cluster

| Page | Role | Description |
|------|------|-------------|
| [[sophia-fate]] | hub | Sophia smart contract language and FATE VM; ISC-licensed from Aeternity |

*The smart-contracts cluster currently has only one page. Candidate future members: a dedicated Sophia FAQ summary page, a Gajumaru contract examples page.*
