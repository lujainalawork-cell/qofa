from flask import Flask, render_template, request, jsonify
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from app.data.merchant import MerchantData
from app.core.agent import QofaAgent

app = Flask(
    __name__,
    template_folder=str(Path(__file__).resolve().parent / "templates"),
    static_folder=str(Path(__file__).resolve().parent / "static")
)

merchant = MerchantData(
    business_name="Demo Business",
    business_type="grocery",
    revenue=12000,
    previous_revenue=15000,
    orders=100,
    previous_orders=125,
    traffic=2000,
    previous_traffic=2200
)

nader = QofaAgent(merchant)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "service": "Qofa",
        "agent": "Nader"
    })


@app.route("/api/nader", methods=["POST"])
def nader_chat():
    data = request.get_json(silent=True) or {}
    question = str(data.get("question", "")).strip()

    if not question:
        return jsonify({
            "status": "error",
            "message": "Please enter a question."
        }), 400

    result = nader.handle_question(question)

    return jsonify(result)


@app.route("/api/nader/information", methods=["POST"])
def provide_information():
    data = request.get_json(silent=True) or {}

    field = str(data.get("field", "")).strip()
    value = data.get("value")

    if not field:
        return jsonify({
            "status": "error",
            "message": "A field is required."
        }), 400

    result = nader.provide_information(field, value)

    return jsonify(result)


@app.route("/api/support", methods=["POST"])
def create_support_ticket():
    data = request.get_json(silent=True) or {}

    ticket = {
        "name": data.get("name", ""),
        "email": data.get("email", ""),
        "subject": data.get("subject", ""),
        "message": data.get("message", ""),
        "status": "open"
    }

    return jsonify({
        "status": "created",
        "message": "Your support ticket has been submitted to the Qofa support team.",
        "ticket": ticket
    })


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )