class NaderMemory:
    """
    Stores information Nader learns during a conversation.
    """

    def __init__(self):
        self.data = {}

    def store(self, field: str, value):
        if isinstance(value, str) and value.strip().upper() == "NA":
            self.data[field] = None
            return

        self.data[field] = value

    def get(self, field: str):
        return self.data.get(field)

    def is_unavailable(self, field: str) -> bool:
        return field in self.data and self.data[field] is None
