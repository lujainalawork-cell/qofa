#!/usr/bin/env bash
# Downloads Qofa's public GGUF model for the ADTC 2026 Laptop LLM track.
# The script is intentionally idempotent and requires no credentials.

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MODEL_DIR="$HERE/model"
MODEL_FILE="$MODEL_DIR/Qwen2.5-0.5B-Instruct-Q4_K_M.gguf"
MODEL_URL="https://huggingface.co/bartowski/Qwen2.5-0.5B-Instruct-GGUF/resolve/main/Qwen2.5-0.5B-Instruct-Q4_K_M.gguf"

mkdir -p "$MODEL_DIR"

if [[ -s "$MODEL_FILE" ]]; then
  echo "model already present at $MODEL_FILE — skipping download"
  exit 0
fi

rm -f "$MODEL_FILE.partial"
echo "downloading Qwen2.5-0.5B-Instruct-Q4_K_M (~400 MB)…"

if command -v curl >/dev/null 2>&1; then
  curl -L --fail --retry 3 --progress-bar -o "$MODEL_FILE.partial" "$MODEL_URL"
elif command -v wget >/dev/null 2>&1; then
  wget --show-progress -O "$MODEL_FILE.partial" "$MODEL_URL"
else
  echo "error: neither curl nor wget is available" >&2
  exit 1
fi

if [[ ! -s "$MODEL_FILE.partial" ]]; then
  echo "error: the model download was empty" >&2
  exit 1
fi

mv "$MODEL_FILE.partial" "$MODEL_FILE"
echo "done: $MODEL_FILE"