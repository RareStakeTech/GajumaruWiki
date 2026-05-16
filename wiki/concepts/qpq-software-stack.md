---
type: concept
title: "QPQ AG Software Stack"
aliases: [qpq-repos, gajumaru-repos, software-stack]
sources: [[summary-qpq-wiki-install-erlang-and-zx]], [[summary-gajumaru-new-blockchain-demo-1]], [[summary-qpq-wiki-sophia-faq]]
related: [[qpq-ag]], [[sophia-fate]], [[groot]], [[grids]], [[aeternity]], [[craig]], [[ulf]]
created: 2026-05-15
updated: 2026-05-15
confidence: high
cluster: developer-ecosystem
cluster_role: member
---

# QPQ AG Software Stack

QPQ AG publishes 26 public repositories at `git.qpq.swiss/QPQ-AG/`. All are Erlang/OTP based. All commit timestamps show UTC+9 (Japan — confirming [[craig]] as primary author). The build system throughout is **ZX** (Craig Everett's project management tool at `zxq9.com`) and/or rebar3.

## Repository Index

### Core Node Infrastructure

| Repo | Description | Version | Key Contributors |
|------|-------------|---------|-----------------|
| `GajuDesk` | Desktop wallet for Gajumaru | — | Craig (zxq9) |
| `GajuMine` | Mining pool client | — | Craig (zxq9) |
| `gmhive_client` | Hive mining client (SaaS); connects to gajumining.com port 17888 | — | Ulf Wiger (uwiger) |
| `gm_mining_pool_protocol` | Mining pool protocol spec | — | Ulf Wiger (uwiger) |
| `gmminer` | Erlang library for CPU + CUDA Cuckoo Cycle mining | — | — |
| `Gaju` | (Reserved — currently empty; 11 watchers) | — | — |

### Smart Contract Infrastructure

| Repo | Description | Version | Key Contributors |
|------|-------------|---------|-----------------|
| `sophia` | Standalone Sophia smart contract compiler; Sophia → FATE | v7.4.0 | Craig (zxq9), Ulf Wiger |
| `gmbytecode` | Library + assembler for Gajumaru FATE bytecode; legacy AEVM support | v3.4.0 | — |
| `hakuzaru` | Erlang type checker / data validator (likely for Sophia tooling) | — | Craig (zxq9) |
| `ExampleCaller` | Contract deployment + call example (`counter.aes`, `toy_caller.erl`) | — | Craig (zxq9) |
| `gmplugin_hello` | Hello world Gajumaru plugin (plugin architecture example) | — | — |

### Serialization & Configuration

| Repo | Description | Version | Key Contributors |
|------|-------------|---------|-----------------|
| `gmserialization` | Serialization helpers — static + dynamic RLP-based | v1.2.0 | Ulf Wiger (uwiger) |
| `gmconfig` | JSON-Schema-based configuration management; in-service updates | — | Ulf Wiger (uwiger) |

### Cryptography Libraries

| Repo | Description | Key Notes |
|------|-------------|-----------|
| `enacl` | Erlang NaCl (libsodium) crypto bindings | — |
| `erlang-sha3` | SHA3 in C | — |
| `erl-base58` | Base58 encoding | — |
| `eblake2` | Blake2 hash | — |
| `ec_utils` | Elliptic curve utility functions | — |
| `ecrecover` | Erlang ECDSA public key recovery | — |

### Networking & Protocol

| Repo | Description | Key Notes |
|------|-------------|-----------|
| `enoise` | Erlang Noise protocol (DH448 + Blake2s); P2P encrypted comms | Ulf Wiger (uwiger) |
| `mnesia_rocksdb` | RocksDB backend for Mnesia (Erlang's distributed DB) | — |
| `QHL` | Quick HTTP Library for Erlang; Craig's HTTP abstraction | Craig (zxq9), MIT |

### Developer Tools

| Repo | Description | Key Notes |
|------|-------------|-----------|
| `zx_rebar_plugin` | rebar3 plugin for ZX-based projects | Craig (zxq9) |
| `chroot_sandboxes` | chroot environments for install script testing | — |
| `getopt` | CLI option parsing library | — |
| `public-wiki` | QPQ Public Wiki source (TypeScript/Gitea) | — |

## Key Technical Facts

### Build System: ZX (zomp)
Every Gajumaru repo includes a `zomp.meta` file — the project descriptor for ZX, Craig Everett's project management tool. The `zx_rebar_plugin` bridges ZX and rebar3 for mixed projects. ZX appears to be Craig's primary build and dependency management tool for the Gajumaru ecosystem.

### Erlang Version: 28.1
From [[summary-qpq-wiki-install-erlang-and-zx]]: Erlang 28.1 is the reference version; "use the most recent one that looks stable." Built from source via Kerl. Primary platform: Devuan 6 (Excalibur).

### Mining Port: 17888
`gmhive_client` connects to the Gajumaru Hive server on port **17888** by default. Connection info is fetched from `gajumining.com` using the miner's public key and cached for 24 hours.

### Sophia File Extension: `.aes`
Sophia source files use the `.aes` extension (from `counter.aes` in ExampleCaller).

### FATE Address Prefixes
From `gmbytecode` assembler documentation:

| Prefix | Type |
|--------|------|
| `@ak_` | Account key (user wallet) |
| `@ct_` | Contract |
| `@ok_` | Oracle key |
| `@oq_` | Oracle query |
| `@ch_` | State channel |

Note: Oracle operations are being removed from Sophia v9+ (see [[sophia-fate]]).

### Noise Protocol (enoise)
Gajumaru nodes communicate peer-to-peer using the **Noise Protocol Framework** (implemented in `enoise`). The specific protocol pattern uses DH448 key exchange and Blake2s for hashing — providing authenticated, encrypted P2P connections without a PKI. Maintained by Ulf Wiger.

### Database: Mnesia + RocksDB
`mnesia_rocksdb` provides a RocksDB storage backend for Mnesia, Erlang's built-in distributed database. Gajumaru stores on-chain state in Mnesia (in-memory) backed by RocksDB (persistent disk storage).

### `Gaju` Repo (Empty)
The `Gaju` repo at `git.qpq.swiss/QPQ-AG/Gaju` has no content but 11 watchers. This may be the planned home for the Gajumaru main node software (not yet publicly published).

## Commit Authorship Pattern

- `zxq9` = Craig Everett (all commits in UTC+9 / Japan)
- `uwiger` = Ulf Wiger (serialization, config, P2P networking, hive client)

The pattern: Craig authors node software, wallets, and developer tools; Ulf authors infrastructure libraries (serialization, config, networking).
