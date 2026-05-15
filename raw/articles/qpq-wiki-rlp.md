---
type: web-article
title: "RLP (Recursive-Length Prefix)"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/RLP
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## RLP: Ethereum Recursive-Length Prefix Codec

RLP is a serialization standard for encoding arbitrary-depth nested lists of binary data as bytestrings. Decoded data is either binary strings or recursive lists thereof.

## Decoding Process

The decoder examines the first byte:
- **Single bytes (0-127)**: Returned as-is
- **Short bytestrings (128-183)**: Prefix minus 128 = length
- **Long bytestrings (184-191)**: Prefix indicates byte-length of the actual length field (up to 2^64-1 bytes)
- **Short lists (192-247)**: Prefix minus 192 = payload length; items decoded recursively
- **Long lists (248-255)**: Prefix indicates byte-length of the length field

## Encoding Process

Binary encoding based on size thresholds. Lists encoded by concatenating encoded items, then prefixing based on total payload size.

**Gajumaru deviation from Ethereum spec**: Single-byte values are treated as binaries rather than integers, simplifying Erlang implementation without practical consequences.

## References

- Erlang implementation: vrlp.erl
- TypeScript implementation: rlp.ts
- Official documentation: ethereum.org RLP specification
