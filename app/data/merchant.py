class MerchantData:
    """
    Structured business data used by Qofa dashboards and Nader.

    A value of None means the merchant does not currently
    have that information available.
    """

    def __init__(
        self,
        business_name=None,
        business_type=None,
        revenue=None,
        previous_revenue=None,
        orders=None,
        previous_orders=None,
        traffic=None,
        previous_traffic=None,
        customers=None,
        previous_customers=None,
        products=None,
        inventory=None,
    ):
        self.data = {
            "business_name": business_name,
            "business_type": business_type,
            "revenue": revenue,
            "previous_revenue": previous_revenue,
            "orders": orders,
            "previous_orders": previous_orders,
            "traffic": traffic,
            "previous_traffic": previous_traffic,
            "customers": customers,
            "previous_customers": previous_customers,
            "products": products,
            "inventory": inventory,
        }

    def get(self, field):
        return self.data.get(field)

    def set(self, field, value):
        self.data[field] = value

    def is_available(self, field):
        value = self.data.get(field)

        return value is not None

    def is_unavailable(self, field):
        return field in self.data and self.data[field] is None

    def available_fields(self):
        return [
            field
            for field, value in self.data.items()
            if value is not None
        ]

    def missing_fields(self):
        return [
            field
            for field, value in self.data.items()
            if value is None
        ]

    def calculate_change(self, current_field, previous_field):
        """
        Calculate percentage change between the current
        and previous value.

        Returns None if either value is unavailable
        or the previous value is zero.
        """

        current = self.get(current_field)
        previous = self.get(previous_field)

        if current is None or previous is None:
            return None

        if previous == 0:
            return None

        return round(((current - previous) / previous) * 100, 2)

    def calculate_average_order_value(self):
        """
        Revenue divided by number of orders.
        """

        revenue = self.get("revenue")
        orders = self.get("orders")

        if revenue is None or orders is None or orders == 0:
            return None

        return round(revenue / orders, 2)

    def calculate_conversion_rate(self):
        """
        Orders divided by traffic.

        Returns a percentage.
        """

        orders = self.get("orders")
        traffic = self.get("traffic")

        if orders is None or traffic is None or traffic == 0:
            return None

        return round((orders / traffic) * 100, 2)

    def summary(self):
        """
        Return all currently available merchant data.
        """

        return {
            field: value
            for field, value in self.data.items()
            if value is not None
        }