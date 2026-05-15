# /ingest-video

Ingest a YouTube or Rumble video into the wiki by extracting its transcript, saving it to `raw/transcripts/`, and running the standard CLAUDE.md ingest workflow.

## Usage
```
/ingest-video <URL>
```

## Workflow

### Step 1 — Extract transcript via subtitles (preferred)

Run:
```
yt-dlp --write-auto-sub --sub-lang en --skip-download --output "raw/transcripts/%(title)s" <URL>
```

Check whether a `.vtt` or `.srt` file was produced in `raw/transcripts/`. If yes, convert it to plain text (strip timestamps and formatting tags) and proceed to Step 3.

### Step 2 — Fallback: audio transcription via Whisper

If no subtitle file was found, run:
```
yt-dlp --extract-audio --audio-format mp3 --output "raw/transcripts/%(title)s.%(ext)s" <URL>
```

Then transcribe the downloaded `.mp3` with Whisper:
```
whisper "raw/transcripts/<title>.mp3" --language en --output_dir raw/transcripts/ --output_format txt
```

If Whisper is not installed, report to the user:
> Whisper is not available. Install it with: `pip install openai-whisper`
> Then re-run `/ingest-video <URL>`.

### Step 3 — Save transcript as source file

Write the cleaned transcript text to:
```
raw/transcripts/{slug}.md
```

Where `{slug}` is a kebab-case version of the video title. Use this frontmatter:

```yaml
---
type: transcript
title: "<video title>"
source_url: <URL>
platform: youtube | rumble
date_downloaded: YYYY-MM-DD
transcript_method: subtitles | whisper
---
```

Append the full transcript text below the frontmatter.

### Step 4 — Ingest

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
| yt-dlp not installed | Report: `pip install yt-dlp`, then retry |
| No subtitles + Whisper not installed | Report both install commands; halt |
| Private/geo-blocked video | Report to user; halt |
| Transcript empty or garbled | Report; ask user to paste transcript manually into `raw/transcripts/{slug}.md` and re-run ingest |
