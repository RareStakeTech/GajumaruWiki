---
type: source
title: "Sophia FAQ (QPQ Public Wiki)"
slug: summary-qpq-wiki-sophia-faq
source_file: raw/articles/qpq-wiki-sophia-faq.md
author: "Peter Harpending <peterharpending@qpq.swiss>"
date_published: 2026-03-30
date_ingested: 2026-05-15
key_claims:
  - Peter Harpending's QPQ email confirmed — peterharpending@qpq.swiss
  - Sophia compilation pipeline detailed — file/1, file/2, from_string/2, string_to_code/2
  - Parser in so_parser.erl; lexer in so_scan.erl
  - References Sophia docs at git.qpq.swiss/QPQ-AG/sophia and QPQ protocol docs
  - FAQ covers interface event definitions, function arity, map key deletion
related: [[sophia-fate]], [[peter]]
confidence: high
---

# Sophia FAQ (QPQ Public Wiki)

Developer-facing FAQ for the Sophia smart contract language, authored by [[peter]] (Peter Harpending, peterharpending@qpq.swiss). Created 2026-03-30.

## Significance

This page confirms:
- **Peter Harpending's QPQ email**: peterharpending@qpq.swiss
- Peter has deep enough technical knowledge to document Sophia's compilation pipeline in Erlang — suggesting he is more than just a "communicator" (or that Peter Harpending and "Peter the rubber duck" are indeed different people)

## Sophia Compilation Pipeline

Compilation entry points:
- `file/1`, `file/2` — compile from file
- `from_string/2` — compile from string
- `string_to_code/2` — string to bytecode

Parser: `so_parser.erl`  
Lexer: `so_scan.erl`

## Developer References

- Sophia source docs: `git.qpq.swiss/QPQ-AG/sophia/src/branch/master/docs`
- Protocol docs: `git.qpq.swiss/QPQ-AG/protocol`
