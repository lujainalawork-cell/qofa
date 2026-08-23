from app.core.intent import detect_intent
from app.core.reasoning import BusinessReasoner


class AgentMemory:
    """
    Stores information provided during the conversation.

    A value of None means the information is not available.
    """

    def __init__(self):
        self.data = {}
        self.unavailable = set()

    def set(self, field, value):
        self.data[field] = value
        self.unavailable.discard(field)

    def mark_unavailable(self, field):
        self.data[field] = None
        self.unavailable.add(field)

    def get(self, field):
        return self.data.get(field)

    def is_unavailable(self, field):
        return field in self.unavailable


class QofaAgent:
    """
    Nader's business intelligence agent.

    The class keeps the existing QofaAgent name so the current
    application and tests continue to work.

    Flow:

        Question
            ↓
        Intent detection
            ↓
        Required business data
            ↓
        Missing data request
            ↓
        Merchant provides data / NA
            ↓
        MerchantData updated
            ↓
        BusinessReasoner analyzes the business
    """

    REQUIRED_DATA = {
        "sales_decline": [
            "revenue",
            "orders",
            "traffic",
        ],
        "inventory": [
            "inventory",
        ],
        "customer_growth": [
            "customers",
            "traffic",
        ],
        "conversion": [
            "orders",
            "traffic",
        ],
    }

    def __init__(self, merchant):
        self.merchant = merchant
        self.memory = AgentMemory()
        self.reasoner = BusinessReasoner(merchant)

        self.pending_intent = None
        self.pending_missing = []

        self._sync_memory_with_merchant()

    def _sync_memory_with_merchant(self):
        """
        Copy currently available MerchantData into agent memory.
        """

        for field in self.merchant.available_fields():
            self.memory.set(
                field,
                self.merchant.get(field)
            )

    def analyze_question(self, question):
        """
        Detect the user's intent and determine which business
        information is required.
        """

        intent = detect_intent(question)

        if intent is None:
            return {
                "question_type": None,
                "required": [],
                "available": [],
                "missing": [],
                "ready": False,
            }

        required = self.REQUIRED_DATA.get(intent, [])

        available = []
        missing = []

        for field in required:

            if self.merchant.is_available(field):
                available.append(field)

            elif self.memory.is_unavailable(field):
                # The merchant explicitly told us this information
                # is not available.
                continue

            else:
                missing.append(field)

        return {
            "question_type": intent,
            "required": required,
            "available": available,
            "missing": missing,
            "ready": len(missing) == 0,
        }

    def request_missing_information(self, analysis):
        """
        Ask the merchant for the information required to answer
        the question properly.
        """

        missing = analysis.get("missing", [])

        if not missing:
            return None

        self.pending_intent = analysis.get("question_type")
        self.pending_missing = missing

        readable = ", ".join(
            field.replace("_", " ")
            for field in missing
        )

        return (
            "I need the following information to analyze this "
            f"properly: {readable}. "
            "If you don't have any of this information, reply with NA."
        )

    def handle_question(self, question):
        """
        Main entry point for merchant questions.
        """

        analysis = self.analyze_question(question)

        if analysis["question_type"] is None:
            return {
                "status": "unknown_intent",
                "message": (
                    "I understand that you have a business question, "
                    "but I need a little more detail to determine "
                    "which business area you want me to analyze."
                ),
            }

        if not analysis["ready"]:
            return {
                "status": "missing_data",
                "intent": analysis["question_type"],
                "missing": analysis["missing"],
                "message": self.request_missing_information(analysis),
            }

        return self.generate_analysis(
            analysis["question_type"]
        )

    def provide_information(self, field, value):
        """
        Accept information from the merchant.

        If the merchant replies with NA, the field is marked
        unavailable instead of being invented or guessed.
        """

        if isinstance(value, str):
            cleaned = value.strip()

            if cleaned.upper() == "NA":
                self.memory.mark_unavailable(field)

                self.pending_missing = [
                    item
                    for item in self.pending_missing
                    if item != field
                ]

                return {
                    "status": "unavailable",
                    "field": field,
                    "message": (
                        f"I'll continue without {field} and use "
                        "the information that is available."
                    ),
                }

            value = self._convert_value(cleaned)

        self.merchant.set(field, value)
        self.memory.set(field, value)

        self.pending_missing = [
            item
            for item in self.pending_missing
            if item != field
        ]

        return {
            "status": "information_added",
            "field": field,
            "value": value,
            "message": (
                f"Got it. I've added {field} to the business data."
            ),
        }

    def _convert_value(self, value):
        """
        Convert simple numeric answers into numbers.

        Examples:
            '2400' -> 2400
            '5.5'  -> 5.5
        """

        try:
            if "." in value:
                return float(value)

            return int(value)

        except (ValueError, TypeError):
            return value

    def generate_analysis(self, intent):
        """
        Generate a deterministic business analysis from the
        merchant's actual data.
        """

        if intent == "sales_decline":
            return {
                "status": "analysis",
                "intent": intent,
                "message": self.reasoner.format_sales_decline_analysis(),
                "analysis": self.reasoner.analyze_sales_decline(),
            }

        if intent == "conversion":
            return self._analyze_conversion()

        if intent == "customer_growth":
            return self._analyze_customer_growth()

        if intent == "inventory":
            return self._analyze_inventory()

        return {
            "status": "analysis",
            "intent": intent,
            "message": (
                "I have enough information to continue, but this "
                "business analysis is not implemented yet."
            ),
        }

    def _analyze_conversion(self):
        """
        Analyze conversion using actual orders and traffic.
        """

        conversion = self.merchant.calculate_conversion_rate()

        if conversion is None:
            return {
                "status": "missing_data",
                "intent": "conversion",
                "message": (
                    "I need both orders and traffic data to "
                    "calculate your conversion rate."
                ),
            }

        message = (
            "Based on your current business data:\n\n"
            f"- Orders: {self.merchant.get('orders')}\n"
            f"- Traffic: {self.merchant.get('traffic')}\n"
            f"- Conversion rate: {conversion:.2f}%\n\n"
            "This means approximately "
            f"{conversion:.2f}% of recorded visitors resulted "
            "in an order."
        )

        return {
            "status": "analysis",
            "intent": "conversion",
            "message": message,
            "metrics": {
                "conversion_rate": conversion,
            },
        }

    def _analyze_customer_growth(self):
        """
        Analyze customer growth when the required customer and
        traffic data are available.
        """

        customers_change = self.merchant.calculate_change(
            "customers",
            "previous_customers",
        )

        traffic_change = self.merchant.calculate_change(
            "traffic",
            "previous_traffic",
        )

        if (
            customers_change is None
            and traffic_change is None
        ):
            return {
                "status": "missing_data",
                "intent": "customer_growth",
                "message": (
                    "I need current and previous customer or "
                    "traffic data to analyze customer growth."
                ),
            }

        lines = [
            "Based on the business data currently available:"
        ]

        if customers_change is not None:
            lines.append(
                f"- Customer change: {customers_change:.2f}%"
            )

        if traffic_change is not None:
            lines.append(
                f"- Traffic change: {traffic_change:.2f}%"
            )

        lines.append(
            "\nI will use the available metrics and will not "
            "assume values that are missing."
        )

        return {
            "status": "analysis",
            "intent": "customer_growth",
            "message": "\n".join(lines),
        }

    def _analyze_inventory(self):
        """
        Basic inventory analysis using available inventory data.
        """

        inventory = self.merchant.get("inventory")

        if inventory is None:
            return {
                "status": "missing_data",
                "intent": "inventory",
                "message": (
                    "I need your inventory information to analyze "
                    "your stock situation."
                ),
            }

        return {
            "status": "analysis",
            "intent": "inventory",
            "message": (
                "Based on the inventory data currently available:\n\n"
                f"- Inventory: {inventory}\n\n"
                "I can use this information for further stock "
                "analysis once product-level data is available."
            ),
        }