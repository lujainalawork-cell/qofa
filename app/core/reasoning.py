class BusinessReasoner:
    """
    Business reasoning layer for Nader.

    This class interprets merchant data using deterministic
    calculations and clearly separates facts from conclusions.

    Nader must never invent missing business information.
    """

    def __init__(self, merchant):
        self.merchant = merchant

    def get_available_data(self, fields):
        available = {}

        for field in fields:
            if self.merchant.is_available(field):
                available[field] = self.merchant.get(field)

        return available

    def analyze_sales_decline(self):
        """
        Analyze a sales decline using the merchant's
        available current and previous-period data.
        """

        analysis = {
            "facts": [],
            "metrics": {},
            "insights": [],
            "limitations": [],
            "recommendations": [],
        }

        # -------------------------------------------------
        # BASIC DATA
        # -------------------------------------------------

        revenue = self.merchant.get("revenue")
        previous_revenue = self.merchant.get("previous_revenue")

        orders = self.merchant.get("orders")
        previous_orders = self.merchant.get("previous_orders")

        traffic = self.merchant.get("traffic")
        previous_traffic = self.merchant.get("previous_traffic")

        # -------------------------------------------------
        # REVENUE
        # -------------------------------------------------

        if revenue is not None:
            analysis["facts"].append(
                f"Current revenue: {revenue}"
            )

        if previous_revenue is not None:
            analysis["facts"].append(
                f"Previous revenue: {previous_revenue}"
            )

        revenue_change = self.merchant.calculate_change(
            "revenue",
            "previous_revenue"
        )

        if revenue_change is not None:
            analysis["metrics"]["revenue_change"] = revenue_change

            if revenue_change < 0:
                analysis["insights"].append(
                    f"Revenue decreased by {abs(revenue_change):.2f}% "
                    "compared with the previous period."
                )

            elif revenue_change > 0:
                analysis["insights"].append(
                    f"Revenue increased by {revenue_change:.2f}% "
                    "compared with the previous period."
                )

            else:
                analysis["insights"].append(
                    "Revenue remained unchanged compared with "
                    "the previous period."
                )

        else:
            analysis["limitations"].append(
                "A previous revenue value is unavailable, "
                "so I cannot calculate the revenue change."
            )

        # -------------------------------------------------
        # ORDERS
        # -------------------------------------------------

        if orders is not None:
            analysis["facts"].append(
                f"Current orders: {orders}"
            )

        if previous_orders is not None:
            analysis["facts"].append(
                f"Previous orders: {previous_orders}"
            )

        orders_change = self.merchant.calculate_change(
            "orders",
            "previous_orders"
        )

        if orders_change is not None:
            analysis["metrics"]["orders_change"] = orders_change

            if orders_change < 0:
                analysis["insights"].append(
                    f"Orders decreased by {abs(orders_change):.2f}% "
                    "compared with the previous period."
                )

            elif orders_change > 0:
                analysis["insights"].append(
                    f"Orders increased by {orders_change:.2f}% "
                    "compared with the previous period."
                )

        else:
            analysis["limitations"].append(
                "A previous orders value is unavailable, "
                "so I cannot calculate the order change."
            )

        # -------------------------------------------------
        # AVERAGE ORDER VALUE
        # -------------------------------------------------

        average_order_value = (
            self.merchant.calculate_average_order_value()
        )

        if average_order_value is not None:
            analysis["metrics"]["average_order_value"] = (
                average_order_value
            )

            analysis["facts"].append(
                f"Average order value: {average_order_value:.2f}"
            )

        else:
            analysis["limitations"].append(
                "Revenue and orders are not both available, "
                "so average order value cannot be calculated."
            )

        # -------------------------------------------------
        # TRAFFIC
        # -------------------------------------------------

        if traffic is not None:
            analysis["facts"].append(
                f"Current traffic: {traffic}"
            )

        if previous_traffic is not None:
            analysis["facts"].append(
                f"Previous traffic: {previous_traffic}"
            )

        traffic_change = self.merchant.calculate_change(
            "traffic",
            "previous_traffic"
        )

        if traffic_change is not None:
            analysis["metrics"]["traffic_change"] = traffic_change

            if traffic_change < 0:
                analysis["insights"].append(
                    f"Traffic decreased by {abs(traffic_change):.2f}% "
                    "compared with the previous period."
                )

            elif traffic_change > 0:
                analysis["insights"].append(
                    f"Traffic increased by {traffic_change:.2f}% "
                    "compared with the previous period."
                )

        else:
            analysis["limitations"].append(
                "Traffic data is unavailable or incomplete, "
                "so I cannot determine how customer traffic changed."
            )

        # -------------------------------------------------
        # CONVERSION
        # -------------------------------------------------

        conversion_rate = (
            self.merchant.calculate_conversion_rate()
        )

        if conversion_rate is not None:
            analysis["metrics"]["conversion_rate"] = (
                conversion_rate
            )

            analysis["facts"].append(
                f"Current conversion rate: {conversion_rate:.2f}%"
            )

        else:
            analysis["limitations"].append(
                "Traffic or order data is unavailable, "
                "so conversion rate cannot be calculated."
            )

        # -------------------------------------------------
        # BUSINESS INTERPRETATION
        # -------------------------------------------------

        if (
            revenue_change is not None
            and orders_change is not None
            and traffic_change is not None
        ):

            if revenue_change < 0 and orders_change < 0:

                if abs(orders_change) > abs(traffic_change):
                    analysis["insights"].append(
                        "Orders declined more than traffic. "
                        "This indicates that the sales decline "
                        "may involve weaker conversion in addition "
                        "to the reduction in traffic."
                    )

                elif abs(orders_change) < abs(traffic_change):
                    analysis["insights"].append(
                        "Traffic declined more than orders. "
                        "This suggests reduced customer traffic "
                        "is a major contributor to the sales decline."
                    )

                else:
                    analysis["insights"].append(
                        "Traffic and orders declined at a similar rate."
                    )

        # -------------------------------------------------
        # RECOMMENDATIONS
        # -------------------------------------------------

        if traffic is None:
            analysis["recommendations"].append(
                "Connect or provide traffic data so Nader can "
                "separate a customer-acquisition problem from "
                "a conversion problem."
            )

        if (
            revenue_change is not None
            and orders_change is not None
            and traffic_change is not None
            and abs(orders_change) > abs(traffic_change)
        ):
            analysis["recommendations"].append(
                "Investigate conversion: review product availability, "
                "pricing, customer experience, and checkout behavior."
            )

        if (
            traffic_change is not None
            and traffic_change < 0
        ):
            analysis["recommendations"].append(
                "Investigate the traffic decline by reviewing "
                "marketing activity, customer acquisition channels, "
                "and changes in demand."
            )

        if revenue_change is None:
            analysis["recommendations"].append(
                "Provide a previous-period revenue value to "
                "measure the actual sales change."
            )

        if orders_change is None:
            analysis["recommendations"].append(
                "Provide previous-period order data to determine "
                "whether order volume has changed."
            )

        analysis["recommendations"].extend([
            "Identify which products or services contributed most "
            "to the change in sales.",
            "Review pricing and promotions during the affected period.",
            "Compare the current period with a meaningful previous "
            "period before making major business decisions.",
        ])

        return analysis

    def format_sales_decline_analysis(self):
        """
        Convert the structured analysis into a readable
        response for the merchant.
        """

        analysis = self.analyze_sales_decline()

        lines = []

        lines.append(
            "Based on the merchant data currently available:"
        )

        # FACTS
        if analysis["facts"]:
            lines.append("")
            lines.append("What we know:")

            for fact in analysis["facts"]:
                lines.append(f"- {fact}")

        # METRICS
        if analysis["metrics"]:
            lines.append("")
            lines.append("Calculated metrics:")

            for name, value in analysis["metrics"].items():
                readable_name = name.replace("_", " ").title()

                if "change" in name:
                    lines.append(
                        f"- {readable_name}: {value:.2f}%"
                    )
                elif name == "conversion_rate":
                    lines.append(
                        f"- {readable_name}: {value:.2f}%"
                    )
                else:
                    lines.append(
                        f"- {readable_name}: {value:.2f}"
                    )

        # INSIGHTS
        if analysis["insights"]:
            lines.append("")
            lines.append("What the data suggests:")

            for insight in analysis["insights"]:
                lines.append(f"- {insight}")

        # LIMITATIONS
        if analysis["limitations"]:
            lines.append("")
            lines.append("What I cannot determine yet:")

            for limitation in analysis["limitations"]:
                lines.append(f"- {limitation}")

        # RECOMMENDATIONS
        if analysis["recommendations"]:
            lines.append("")
            lines.append("Recommended next steps:")

            for recommendation in analysis["recommendations"]:
                lines.append(f"- {recommendation}")

        return "\n".join(lines)