#!/usr/bin/env python3
"""Run Qofa's Nader assistant entirely locally through llama.cpp."""

from __future__ import annotations

import argparse

from app.core.inference import LocalModelUnavailable, QofaEngine


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Ask Qofa's offline Nader merchant assistant a question."
    )
    parser.add_argument("prompt", help="Merchant question in English, French, or Arabic.")
    parser.add_argument("--max-tokens", type=int, default=240)
    args = parser.parse_args()

    try:
        response = QofaEngine(max_tokens=args.max_tokens).chat(args.prompt)
    except LocalModelUnavailable as error:
        parser.error(str(error))

    print(response)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())