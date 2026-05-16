# ingest-any

Universal ingestion router. Detects file type or URL and routes to the correct workflow.

## Usage
/ingest-any {filepath or URL}

## Routing Logic
- URL containing youtube.com or youtu.be → run /ingest-video workflow
- URL containing rumble.com → run /ingest-video workflow
- File ending in .pdf → run /ingest-pdf workflow
- File ending in .png .jpg .jpeg .webp .gif → run /ingest-image workflow
- File ending in .mp3 .mp4 .wav .m4a → run /ingest-audio workflow
- File ending in .txt .md → standard ingest from CLAUDE.md directly
- File ending in .csv .json → summarise structure and key data, then ingest
- Any URL not recognised as video → run /ingest-url workflow

## After Routing
Always end with the full CLAUDE.md ingest workflow on the resulting markdown file.
Report: file type detected, workflow used, pages created, pages updated.
