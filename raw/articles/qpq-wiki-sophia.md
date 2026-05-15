---
type: web-article
title: "Sophia"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Sophia
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## The Sophia Language

Sophia is the smart contract language for Gajumaru, originally implemented on Aeternity alongside FATE. The language was designed by a distinguished team with expertise in programming language and virtual machine design.

**Key Contributors:**
- Ulf Norell (Chalmers University, Quviq AB) - creator of Agda
- Erik Stenman (Happi Hacking AB) - Erlang native code compiler developer, former CTO at Klarna, author of The BEAM Book
- Thomas Arts (Quviq AB co-founder, Chalmers professor)
- Hans Svensson (Quviq AB) - software verification specialist

**Supporting Contributors:**
- Robert Virding - Erlang co-inventor
- John Hughes - Chalmers professor, QuickCheck co-inventor

## Development History

The Aeternity team initially ported the EVM to Erlang, creating AEVM for Sophia execution. This approach allowed the team to address known Solidity/EVM limitations while leveraging their collective expertise in language design.

Notably, "Aeternity and Cardano are the only two major blockchains that have been tested using Property-Based Testing" through Quviq's QuickCheck tool.

## FATE Virtual Machine

Erik Stenman later designed FATE (Fast Aeternity Transaction Engine), a new VM architecture optimizing blockchain context management and chain interaction. FATE features a high-level, functional instruction set that creates new data structures rather than modifying existing ones, resulting in smaller smart contract footprints and enhanced correctness verification.

**User Experience:** Despite its sophistication, practitioners report Sophia is "easy to learn and a pleasure to program in."
