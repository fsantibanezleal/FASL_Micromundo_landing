# ------------------------------------------------------------------
#  Local runner for FASL_Micromundo_landing (PowerShell 5.1+)
#
#  Usage:
#    .\scripts\local.ps1 dev       # Vite dev server (HMR)
#    .\scripts\local.ps1 preview   # vite build + vite preview
#    .\scripts\local.ps1 check     # eslint + typecheck (tsc --noEmit)
#    .\scripts\local.ps1 stop      # kill any dev/preview server
#
#  Default ports:
#    dev      -> http://localhost:5173
#    preview  -> http://localhost:4173
#
#  Parity: mirrors scripts/local.sh subcommand-for-subcommand per
#  CAOS_MANAGE/conventions/scripts.md.
# ------------------------------------------------------------------

param(
    [Parameter(Position = 0)]
    [ValidateSet('dev', 'preview', 'check', 'stop')]
    [string]$Command = 'dev'
)

# Note: we intentionally do NOT set $ErrorActionPreference = 'Stop' here.
# In PowerShell 5.1, that turns every native-exe stderr line (including
# harmless npm warnings) into a terminating error even when the command
# exits 0. We check $LASTEXITCODE explicitly for native commands instead.

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir '..')
$DevPort = 5173
$PreviewPort = 4173

Set-Location $RepoRoot

function Print-UrlsDev {
    Write-Host ''
    Write-Host '  Micromundo landing is up at:'
    Write-Host ''
    Write-Host "    http://localhost:$DevPort/   (dev -- HMR, source maps)"
    Write-Host ''
    Write-Host '  Ctrl+C to stop.'
    Write-Host ''
}

function Print-UrlsPreview {
    Write-Host ''
    Write-Host '  Micromundo landing (production build) is up at:'
    Write-Host ''
    Write-Host "    http://localhost:$PreviewPort/   (static preview of dist/)"
    Write-Host ''
    Write-Host '  Ctrl+C to stop.'
    Write-Host ''
}

function Ensure-Deps {
    if (-not (Test-Path 'node_modules')) {
        Write-Host 'node_modules/ missing — running npm install...'
        npm install
        if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    }
}

function Stop-Port {
    param([int]$Port)
    $conns = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if (-not $conns) { return }
    $procIds = $conns | Select-Object -ExpandProperty OwningProcess -Unique
    Write-Host "Killing PIDs on port ${Port}: $($procIds -join ', ')"
    foreach ($procId in $procIds) {
        Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
    }
}

switch ($Command) {
    'dev' {
        Ensure-Deps
        Print-UrlsDev
        & npm run dev
    }
    'preview' {
        Ensure-Deps
        Write-Host 'Building static artifact (dist/)...'
        & npm run build
        if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
        Print-UrlsPreview
        & npm run preview
    }
    'check' {
        Ensure-Deps
        Write-Host 'Running eslint + tsc --noEmit...'
        & npm run lint
        if (Test-Path 'tsconfig.app.json') {
            & npx tsc --noEmit -p tsconfig.app.json
        } else {
            & npx tsc --noEmit
        }
    }
    'stop' {
        Write-Host "Stopping any server on :$DevPort or :$PreviewPort..."
        Stop-Port -Port $DevPort
        Stop-Port -Port $PreviewPort
    }
}
