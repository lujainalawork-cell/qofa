import requests

from app.core.language import detect_language
from app.core.prompts import SYSTEM_PROMPT


class QofaEngine:
    def __init__(self, base_url="http://127.0.0.1:8080"):
        self.url = f"{base_url}/v1/chat/completions"

    def chat(self, message, system_prompt=SYSTEM_PROMPT):
        language = detect_language(message)

        language_instruction = {
            "en": "Respond in English.",
            "fr": "Répondez en français.",
            "ar": "أجب باللغة العربية."
        }

        system_message = (
            f"{system_prompt}\n\n"
            f"Detected user language: {language}\n"
            f"{language_instruction[language]}"
        )

        messages = [
            {
                "role": "system",
                "content": system_message
            },
            {
                "role": "user",
                "content": message
            }
        ]

        response = requests.post(
            self.url,
            json={
                "messages": messages,
                "temperature": 0.2,
                "max_tokens": 400
            },
            timeout=120
        )

        response.raise_for_status()

        return response.json()["choices"][0]["message"]["content"]