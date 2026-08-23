from app.core.inference import QofaEngine

qofa = QofaEngine()

questions = [
    "I run a small grocery shop. I have too much stock of one product and it is not selling. What should I do?",

    "Je possède une petite boutique de vêtements. Comment puis-je attirer plus de clients avec un petit budget ?",

    "أنا صاحب متجر صغير وأريد تحسين مبيعاتي. ماذا يمكنني أن أفعل؟",
]

for question in questions:
    print("\nUSER:")
    print(question)

    print("\nQOFA:")
    print(qofa.chat(question))

    print("\n" + "=" * 60)