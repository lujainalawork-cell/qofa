from __future__ import annotations

import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from app.core.inference import LocalModelUnavailable, QofaEngine


class OfflineInferenceTests(unittest.TestCase):
    def test_missing_model_explains_how_to_prepare_local_inference(self):
        engine = QofaEngine(model_path=Path("missing-model.gguf"))

        with self.assertRaises(LocalModelUnavailable) as error:
            engine.chat("How can I improve sales?")

        self.assertIn("download_model", str(error.exception))

    def test_generation_uses_a_local_llama_cli_process(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            model_path = Path(temporary_directory) / "nader.gguf"
            model_path.write_bytes(b"GGUF")
            engine = QofaEngine(
                model_path=model_path,
                llama_cli="llama-cli",
                max_tokens=32,
            )

            with patch("app.core.inference.shutil.which", return_value="llama-cli"), patch(
                "app.core.inference.subprocess.run"
            ) as local_process:
                local_process.return_value.stdout = "Try a small bundle offer."
                response = engine.chat("I have slow-moving stock")

        self.assertEqual(response, "Try a small bundle offer.")
        command = local_process.call_args.args[0]
        self.assertEqual(command[0], "llama-cli")
        self.assertIn("-m", command)
        self.assertIn(str(model_path), command)
        self.assertNotIn("http", " ".join(command).lower())

    def test_generation_includes_verified_merchant_facts_in_local_prompt(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            model_path = Path(temporary_directory) / "nader.gguf"
            model_path.write_bytes(b"GGUF")
            engine = QofaEngine(
                model_path=model_path,
                llama_cli="llama-cli",
                max_tokens=32,
            )

            with patch("app.core.inference.shutil.which", return_value="llama-cli"), patch(
                "app.core.inference.subprocess.run"
            ) as local_process:
                local_process.return_value.stdout = "Run a limited bundle offer."
                engine.chat(
                    "How should I handle slow-moving stock?",
                    merchant_context={"current_orders": 100, "previous_orders": 125},
                )

        command = local_process.call_args.args[0]
        prompt = command[command.index("-p") + 1]
        self.assertIn("VERIFIED LOCAL MERCHANT FACTS", prompt)
        self.assertIn("current orders: 100", prompt)
        self.assertIn("previous orders: 125", prompt)


if __name__ == "__main__":
    unittest.main()
