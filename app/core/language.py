def detect_language(text):
    """
    Detect whether the user is writing in English, French, or Arabic.
    """

    # Arabic Unicode range
    if any("\u0600" <= char <= "\u06FF" for char in text):
        return "ar"

    french_words = {
        "je", "suis", "vous", "avec", "pour", "dans",
        "une", "des", "les", "comment", "peux", "peut",
        "boutique", "entreprise", "clients", "vente",
        "bonjour", "merci"
    }

    words = set(text.lower().split())

    if words.intersection(french_words):
        return "fr"

    return "en"