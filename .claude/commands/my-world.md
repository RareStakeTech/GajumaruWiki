# Skill: /my-world

**Trigger:** User types `/my-world`

**Purpose:** Produce a bird's-eye snapshot of the entire Gajumaru wiki — what clusters exist, what's well-covered, what's sparse.

## Behavior

1. Read `wiki/index.md` and `wiki/overview.md`.
2. For each cluster listed in the index:
   - Count concept pages, entity pages, and source summaries.
   - Note the highest-confidence page in each cluster.
   - Note any cluster with zero pages (empty cluster).
3. Read `wiki/hot.md` for current focus and open questions.
4. Return a structured world map:

```
## Gajumaru Wiki World Map — [date]

### Coverage by Cluster
| Cluster | Concepts | Entities | Sources | Coverage |
|---------|----------|----------|---------|----------|
| ...     | N        | N        | N       | sparse/partial/rich |

### Open Questions
(from hot.md)

### Suggested Next Ingests
(3 suggestions based on gaps)
```

5. Do NOT modify any files. This is a read-only operation.
6. Append a query entry to `wiki/log.md`.
