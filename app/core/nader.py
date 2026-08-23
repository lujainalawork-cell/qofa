from app.data.merchant import MerchantData


class NaderAgent:
    """
    Nader's first reasoning layer.

    Determines whether enough merchant data exists
    to work on a business question.
    """

    QUESTION_REQUIREMENTS = {
        "sales_decline": [
            "revenue",
            "orders",
            "traffic",
        ],
        "inventory": [
            "inventory_value",
            "overstocked_products",
        ],
        "customer_growth": [
            "customers",
            "traffic",
        ],
        "conversion": [
            "traffic",
            "orders",
        ],
    }

    def __init__(self, merchant: MerchantData):
        self.merchant = merchant

    def check_requirements(self, required_fields: list[str]):
        """
        Return the merchant information that is available
        and the information that is missing.
        """

        available = []
        missing = []

        for field in required_fields:
            if self.merchant.is_available(field):
                available.append(field)
            else:
                missing.append(field)

        return {
            "available": available,
            "missing": missing,
        }

    def analyze_question(self, question_type: str):
        """
        Determine what information Nader needs for a question.
        """

        required_fields = self.QUESTION_REQUIREMENTS.get(
            question_type,
            []
        )

        requirements = self.check_requirements(required_fields)

        return {
            "question_type": question_type,
            "required": required_fields,
            "available": requirements["available"],
            "missing": requirements["missing"],
            "ready": len(requirements["missing"]) == 0,
        }

    def request_missing_information(self, analysis: dict):
        """
        Create a simple request for information Nader does not have.
        """

        missing = analysis["missing"]

        if not missing:
            return None

        return (
            "I need the following information to analyze this properly: "
            + ", ".join(missing)
            + ". "
            "If you don't have any of this information, reply with NA."
        )