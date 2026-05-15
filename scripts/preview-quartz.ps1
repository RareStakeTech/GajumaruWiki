$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$quartzDir = Join-Path $repoRoot "_quartz"

if (-not (Test-Path -LiteralPath $quartzDir)) {
  git clone --depth 1 --branch v4 https://github.com/jackyzha0/quartz.git $quartzDir
}

Remove-Item -LiteralPath (Join-Path $quartzDir "content") -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force -Path (Join-Path $quartzDir "content") | Out-Null
Copy-Item -Path (Join-Path $repoRoot "wiki\*") -Destination (Join-Path $quartzDir "content") -Recurse -Force
Remove-Item -LiteralPath (Join-Path $quartzDir "content\hot.md") -Force -ErrorAction SilentlyContinue
node (Join-Path $repoRoot "scripts\prepare-quartz-content.mjs") (Join-Path $quartzDir "content")
Copy-Item -LiteralPath (Join-Path $repoRoot ".github\quartz\quartz.config.ts") -Destination (Join-Path $quartzDir "quartz.config.ts") -Force
Copy-Item -LiteralPath (Join-Path $repoRoot ".github\quartz\quartz.layout.ts") -Destination (Join-Path $quartzDir "quartz.layout.ts") -Force
Copy-Item -LiteralPath (Join-Path $repoRoot ".github\quartz\custom.scss") -Destination (Join-Path $quartzDir "quartz\styles\custom.scss") -Force

Push-Location $quartzDir
try {
  if (-not (Test-Path -LiteralPath "node_modules")) {
    npm.cmd ci
  }
  npx.cmd quartz build --serve
}
finally {
  Pop-Location
}
