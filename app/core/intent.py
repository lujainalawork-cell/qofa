QUESTION_INTENTS = {
    "sales_decline": [
        "sales dropped",
        "sales decreased",
        "sales are down",
        "revenue dropped",
        "revenue decreased",
        "why are my sales down",
        "why did my sales drop",
    ],
    "inventory": [
        "too much stock",
        "excess stock",
        "inventory",
        "stock is not selling",
        "overstock",
    ],
    "customer_growth": [
        "more customers",
        "customer growth",
        "customers decreased",
        "customers are down",
        "attract customers",
    ],
    "conversion": [
    "conversion",
    "visitors but no sales",
    "traffic but no sales",
    "people visit but don't buy",
    "people visit but do not buy",
    "visitors don't buy",
    "visitors do not buy",
    "why do people visit but not buy",
],
}


def detect_intent(question: str) -> str | None:
    question = question.lower()

    for intent, phrases in QUESTION_INTENTS.items():
        for phrase in phrases:
            if phrase in question:
                return intent

    return None