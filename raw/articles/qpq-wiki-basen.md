---
type: web-article
title: "BaseN (Base64 vs Base58)"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/BaseN
author: "Peter Harpending (QPQ Public Wiki)"
date_downloaded: 2026-05-15
---

## Base64 vs Base58 Explained

Base64 and Base58 are binary-to-text encoding schemes.

**Base64**: Treats binary data as a long stream of bytes. Processes in 3-byte chunks, regrouping into 6-bit segments. Uses a 64-character alphabet. Available in most standard libraries. Efficient for general use.

**Base58**: Treats the binary data as a "really really long integer." Implements the quotient-remainder algorithm (long division). Uses 58 characters, excluding visually similar symbols (0, O, I, l) to reduce manual entry errors. "Super inefficient both space-wise and time-wise." Suitable only for short binary data likely entered manually (wallet addresses).

**Leading zero handling**: Base58 maps leading zero bytes to leading `$1` characters during encoding, reversed during decoding.
