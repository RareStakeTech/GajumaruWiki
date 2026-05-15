---
type: web-article
title: "Sophia FAQ"
source_url: https://git.qpq.swiss/QPQ-AG/public-wiki/wiki/Sophia-FAQ
author: "Peter Harpending <peterharpending@qpq.swiss>"
date_created: 2026-03-30
date_modified: 2026-04-07
date_downloaded: 2026-05-15
---

## Sophia FAQ

Created: 2026-03-30
Authors: Peter Harpending <peterharpending@qpq.swiss>
Last Modified: 2026-04-07

### References

- Sophia docs: https://git.qpq.swiss/QPQ-AG/sophia/src/branch/master/docs
- Protocol docs: https://git.qpq.swiss/QPQ-AG/protocol

### Defining Events in interfaces

Apparently this is legal syntax but the point is unclear.

### Can there be the same function name with different arities?

[Section header present but no content follows]

### What happens if you delete a non-existent key from a map?

[Section header present but no content follows]

### How does Sophia compilation work

From commit dbab49936daad7d82bae7cf7336b1ce82e7ab779

[Contains detailed Erlang code snippets showing the compilation pipeline, including specifications for file/1, file/2, from_string/2, and string_to_code/2 functions, followed by parser implementation from so_parser.erl and lexer specifications from so_scan.erl.]
