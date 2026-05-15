import fs from "node:fs"
import path from "node:path"

const root = process.argv[2]

if (!root) {
  console.error("Usage: node scripts/prepare-quartz-content.mjs <content-dir>")
  process.exit(1)
}

const wikiLinkFields = new Set(["sources", "related"])

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      sanitizeMarkdown(fullPath)
    }
  }
}

function sanitizeMarkdown(filePath) {
  const original = fs.readFileSync(filePath, "utf8")
  if (!original.startsWith("---\n") && !original.startsWith("---\r\n")) {
    return
  }

  const lineEnding = original.includes("\r\n") ? "\r\n" : "\n"
  const lines = original.split(/\r?\n/)
  const end = lines.findIndex((line, index) => index > 0 && line === "---")

  if (end < 0) {
    return
  }

  let changed = false
  for (let i = 1; i < end; i++) {
    const listItem = lines[i].match(/^(\s*)-\s+(.*)$/)
    if (listItem && !/^\s*[{[]/.test(listItem[2])) {
      lines[i] = `${listItem[1]}- ${JSON.stringify(listItem[2])}`
      changed = true
      continue
    }

    const match = lines[i].match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/)
    if (!match) {
      continue
    }

    const [, field, rawValue] = match
    if (!wikiLinkFields.has(field) || !rawValue.includes("[[")) {
      continue
    }

    const normalized = rawValue.replaceAll("[[[", "[[").replaceAll("]]]", "]]")
    const links = normalized.match(/\[\[[^[\]]+\]\]/g)

    if (!links) {
      continue
    }

    lines[i] = `${field}: [${links.map((link) => JSON.stringify(link)).join(", ")}]`
    changed = true
  }

  if (changed) {
    fs.writeFileSync(filePath, lines.join(lineEnding), "utf8")
  }
}

walk(root)
