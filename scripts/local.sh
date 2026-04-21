#!/usr/bin/env bash
# ------------------------------------------------------------------
#  Local runner for FASL_Micromundo_landing
#
#  Usage:
#    scripts/local.sh dev       # Vite dev server (HMR)
#    scripts/local.sh preview   # vite build + vite preview
#    scripts/local.sh check     # eslint + typecheck (tsc --noEmit)
#    scripts/local.sh stop      # kill any dev/preview server
#
#  Default ports:
#    dev      -> http://localhost:5173
#    preview  -> http://localhost:4173
#
#  Parity: mirrors scripts/local.ps1 subcommand-for-subcommand per
#  CAOS_MANAGE/conventions/scripts.md. Works on Git Bash (Windows),
#  macOS, Linux.
# ------------------------------------------------------------------

set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DEV_PORT=5173
PREVIEW_PORT=4173

cd "$REPO_ROOT"

cmd="${1:-dev}"

print_urls_dev() {
  cat <<EOF

  Micromundo landing is up at:

    http://localhost:$DEV_PORT/   (dev -- HMR, source maps)

  Ctrl+C to stop.

EOF
}

print_urls_preview() {
  cat <<EOF

  Micromundo landing (production build) is up at:

    http://localhost:$PREVIEW_PORT/   (static preview of dist/)

  Ctrl+C to stop.

EOF
}

ensure_deps() {
  if [ ! -d node_modules ]; then
    echo "node_modules/ missing — running npm install..."
    npm install
  fi
}

stop_port() {
  local port=$1
  if command -v lsof >/dev/null 2>&1; then
    pids=$(lsof -ti :$port 2>/dev/null || true)
    if [ -n "$pids" ]; then
      echo "Killing PIDs on port $port: $pids"
      echo "$pids" | xargs -r kill -9
    fi
  elif command -v netstat >/dev/null 2>&1; then
    # Git Bash on Windows fallback
    pids=$(netstat -ano | grep ":$port " | awk '{print $5}' | sort -u || true)
    if [ -n "$pids" ]; then
      echo "Killing PIDs on port $port: $pids"
      for p in $pids; do taskkill //PID "$p" //F 2>/dev/null || true; done
    fi
  else
    echo "Neither lsof nor netstat available — kill manually."
    exit 1
  fi
}

case "$cmd" in
  dev)
    ensure_deps
    print_urls_dev
    exec npm run dev
    ;;
  preview)
    ensure_deps
    echo "Building static artifact (dist/)..."
    npm run build
    print_urls_preview
    exec npm run preview
    ;;
  check)
    ensure_deps
    echo "Running eslint + tsc --noEmit..."
    npm run lint
    npx tsc --noEmit -p tsconfig.app.json 2>/dev/null || npx tsc --noEmit
    ;;
  stop)
    echo "Stopping any server on :$DEV_PORT or :$PREVIEW_PORT..."
    stop_port "$DEV_PORT"
    stop_port "$PREVIEW_PORT"
    ;;
  *)
    echo "Unknown command: $cmd"
    echo "Usage: $0 {dev|preview|check|stop}"
    exit 2
    ;;
esac
