"""Offline llama.cpp inference for Qofa's Nader merchant assistant.

The challenge evaluator downloads the model before it runs. This module makes
no HTTP calls: all generation happens through a local llama.cpp executable.
"""

from __future__ import annotations

import os
import shutil
import subprocess
from pathlib import Path
from typing import Mapping

from app.core.language import detect_language
from app.core.prompts import SYSTEM_PROMPT


class LocalModelUnavailable(RuntimeError):
    """Raised when the local GGUF model or llama.cpp executable is absent."""


class QofaEngine:
    """Generate merchant guidance with a local GGUF model and llama.cpp only."""

    DEFAULT_MODEL_NAME = "Qwen2.5-0.5B-Instruct-Q4_K_M.gguf"

    def __init__(self, model_path=None, llama_cli=None, max_tokens=240):
        repository_root = Path(__file__).resolve().parents[2]
        self.model_path = Path(
            model_path
            or os.environ.get(
                "QOFA_MODEL_PATH",
                repository_root / "model" / self.DEFAULT_MODEL_NAME,
            )
        )
        self.llama_cli = llama_cli or os.environ.get("QOFA_LLAMA_CLI")
        self.max_tokens = max_tokens

    def chat(self, message, system_prompt=SYSTEM_PROMPT, merchant_context=None):
        language = detect_language(message)
        language_instruction = {
            "en": "Respond in English.",
            "fr": "Répondez en français.",
            "ar": "أجب باللغة العربية.",
        }
        grounding = self._format_merchant_context(merchant_context)
        system_message = (
            f"{system_prompt}\n\nDetected user language: {language}\n"
            f"{language_instruction[language]}{grounding}"
        )

        executable = self._resolve_llama_cli()
        prompt = self._chatml_prompt(system_message, message)

        try:
            result = subprocess.run(
                [
                    executable, "-m", str(self.model_path), "-p", prompt,
                    "-n", str(self.max_tokens), "--temp", "0.2",
                    "--simple-io", "--no-warmup",
                ],
                check=True,
                capture_output=True,
                text=True,
                encoding="utf-8",
                timeout=180,
            )
        except subprocess.CalledProcessError as error:
            detail = error.stderr.strip() or error.stdout.strip() or "unknown llama.cpp error"
            raise RuntimeError(f"llama.cpp could not generate a response: {detail}") from error
        except subprocess.TimeoutExpired as error:
            raise RuntimeError("Local generation exceeded the 180-second safety limit.") from error

        return result.stdout.strip()

    def _resolve_llama_cli(self):
        if not self.model_path.is_file():
            raise LocalModelUnavailable(
                f"Qofa's local model was not found at {self.model_path}. "
                "Run download_model.sh (or download_model.ps1 on Windows) first."
            )

        repository_root = Path(__file__).resolve().parents[2]
        bundled_candidates = (
            repository_root / ".tools" / "llama-cpp" / "llama-cli.exe",
            repository_root / ".tools" / "llama-cpp" / "llama-cli",
        )

        for candidate in (
            self.llama_cli,
            *bundled_candidates,
            "llama-cli",
            "llama-cli.exe",
            "main",
        ):
            if candidate and (Path(candidate).is_file() or shutil.which(candidate)):
                return str(candidate)

        raise LocalModelUnavailable(
            "llama.cpp's llama-cli executable was not found. Install llama.cpp "
            "and add llama-cli to PATH, or set QOFA_LLAMA_CLI to its full path."
        )

    @staticmethod
    def _format_merchant_context(merchant_context):
        """Add verified local business facts without exposing any network path."""
        if not merchant_context:
            return ""

        if not isinstance(merchant_context, Mapping):
            raise TypeError("merchant_context must be a mapping of verified facts.")

        facts = []
        for field, value in merchant_context.items():
            if value is None:
                continue
            label = str(field).replace("_", " ")
            facts.append(f"- {label}: {value}")

        if not facts:
            return ""

        return (
            "\n\nVERIFIED LOCAL MERCHANT FACTS:\n"
            + "\n".join(facts)
            + "\nUse these facts when relevant. Do not invent or change them."
        )

    @staticmethod
    def _chatml_prompt(system_message, user_message):
        return (
            "<|im_start|>system\n"
            f"{system_message.strip()}\n<|im_end|>\n"
            "<|im_start|>user\n"
            f"{user_message.strip()}\n<|im_end|>\n"
            "<|im_start|>assistant\n"
        )
