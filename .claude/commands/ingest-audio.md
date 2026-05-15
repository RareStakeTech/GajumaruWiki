# /ingest-audio

Ingest a local audio file into the wiki by transcribing it with Whisper, saving it to `raw/transcripts/`, and running the standard CLAUDE.md ingest workflow.

## Usage
```
/ingest-audio <filepath>
```

## Workflow

### Step 1 — Transcribe with Whisper

Run:
```
whisper "{filepath}" --language en --output_dir raw/transcripts/ --output_format txt
```

Whisper will produce a `.txt` file in `raw/transcripts/` named after the input file's stem (e.g. `interview.mp3` → `raw/transcripts/interview.txt`).

If Whisper is not installed, report to the user:
> Whisper is not available. Install it with: `pip install openai-whisper`
> Then re-run `/ingest-audio <filepath>`.

### Step 2 — Save transcript as source file

Convert the Whisper `.txt` output into a `.md` file at:
```
raw/transcripts/{slug}.md
```

Where `{slug}` is a kebab-case version of the original filename (or a descriptive slug if the filename is generic). Use this frontmatter:

```yaml
---
type: transcript
title: "<descriptive title derived from filename or content>"
source_file: <original filepath>
date_transcribed: YYYY-MM-DD
transcript_method: whisper
---
```

Append the full transcript text below the frontmatter.

### Step 3 — Ingest

Run the standard CLAUDE.md ingest workflow on `raw/transcripts/{slug}.md`:
- Discuss key takeaways (3–5 bullets)
- Create `wiki/sources/summary-{slug}.md`
- Update `wiki/index.md` and all relevant concept/entity pages
- Create new concept/entity pages as needed
- Append to `wiki/log.md`

Set `confidence: medium` by default for transcripts (spoken content may contain imprecision). Upgrade to `high` only if the speaker is a primary source (e.g., CEO interview, official announcement).

## Error Handling

| Problem | Action |
|---------|--------|
| Whisper not installed | Report: `pip install openai-whisper`, then retry |
| File not found | Report the path provided; ask user to verify |
| Unsupported format | Report supported formats (mp3, mp4, wav, m4a, flac, ogg, webm); ask user to convert |
| Transcript empty or garbled | Report; ask user to paste transcript manually into `raw/transcripts/{slug}.md` and re-run ingest |
