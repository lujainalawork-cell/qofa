# Qofa

> Community-commerce infrastructure for African merchants, buyers, and local economies.

**Qofa** is a multilingual, mobile-first commerce platform that helps local merchants launch branded shops, sell with greater buyer confidence, and understand the signals that can help them serve their communities better. It is designed as a clear, accessible experience for both people selling and people buying.

## Live demo

[Open the Qofa demo](https://qofa-africa.loujaineal95.chatgpt.site)

## The problem Qofa addresses

Many small merchants have products and customers but lack a simple, trusted digital storefront. Buyers, meanwhile, need a quick, familiar way to discover local products and complete a purchase. Qofa brings those two needs together with a lightweight merchant workspace, a localized storefront, and a buyer-verification journey.

## Product journey

1. Choose English, French, or Arabic. Arabic uses a right-to-left layout, and the language choice is remembered.
2. Register as a merchant and enter the Community Impact tour.
3. Explore how Qofa supports resilient merchants, buyer confidence, and local demand insights.
4. Choose a subscription plan—the final step before launch.
5. Customize the storefront, add products, prices, photos, and a visual theme.
6. Share the shop with buyers, who can add products to a cart and verify their details before purchasing.

## Current capabilities

- Complete English, French, and Arabic translation across the homepage, impact tour, plans, dashboard, storefront, and buyer flow.
- Persistent language selection, with a language switcher that keeps the visitor on their current screen.
- Guided Community Impact tour with animated commerce indicators and an investor-focused explanation of the product loop.
- Merchant dashboard for managing a branded storefront.
- Seven storefront color themes, product creation, prices, image uploads, and product removal.
- Customer-facing shop, cart, and checkout journey.
- Buyer registration using first name, last name, national ID, and phone number.
- Clearly labelled SMS verification demonstration before checkout.
- Nader merchant-assistant prototype for surfacing useful business prompts and insights.

> The current verification code is a demo simulation (`123456`). A production launch would use a secure backend, consent-aware data handling, and a verified SMS provider.

## Community and investor value

Qofa is built around one reinforcing loop: merchants can launch a better local shop, buyers can shop with more confidence, and the resulting demand signals can inform better decisions for the local economy. The model is designed to create value through merchant tools, buyer trust, and recurring subscription revenue—while keeping the experience approachable for first-time digital-commerce users.

## Offline AI submission — Nader

Qofa includes **Nader**, a local merchant-assistant layer for practical business guidance in English, French, and Arabic. The challenge package uses the public `Qwen2.5-0.5B-Instruct-Q4_K_M` GGUF model with `llama.cpp`. Once the model has been downloaded, generation makes no external network request.

The submission-specific files are:

- `metadata.json` — challenge, model, and exactly two merchant test prompts.
- `download_model.sh` — idempotent, credential-free GGUF downloader used by the evaluator.
- `REPORT.md` — technical design and measurement plan.
- `run_nader.py` — local CLI for testing the offline assistant.

### Run Nader locally

Install `llama.cpp` so `llama-cli` and `llama-bench` are on your `PATH`, then download the model and ask a question:

```bash
bash download_model.sh
python run_nader.py "I have too much stock of a product. What should I do?"
```

On Windows, use the convenience downloader if Git Bash or WSL is unavailable:

```powershell
.\download_model.ps1
python run_nader.py "I have too much stock of a product. What should I do?"
```

The official ADTC self-check is:

```bash
adtc-profiler run --submission . --mode participant --output submission.json
```

`submission.json`, the downloaded `model/` directory, and every `.gguf` file are intentionally ignored by Git.

## Technology

- HTML, CSS, and vanilla JavaScript
- Responsive Frutiger Aero-inspired interface
- Node.js local preview server
- Python foundation for backend and Nader modules
- Cloudflare Worker-compatible public hosting

## Run locally

```bash
cd web
node preview-server.js
```

Then open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Demo walkthrough

1. Choose a language and open the merchant experience.
2. Register to view the Community Impact tour, then continue to plans.
3. In **My Brand**, customize colors, products, prices, and product images.
4. Open the customer-facing store, add products to the cart, and begin checkout.
5. Enter buyer details and use `123456` for the demonstration verification code.

## Roadmap

- Connect secure authentication, real SMS verification, and a production payments provider.
- Add consent-led merchant analytics and privacy-preserving local demand insights.
- Package Nader as an offline local-language assistant for low-connectivity settings.
- Add merchant onboarding, inventory support, and delivery-partner integrations.

## Hackathon context

Qofa was created for the Africa deep-tech hackathon context as a community-first commerce product: practical for small merchants, understandable for buyers, and designed to evolve into resilient digital infrastructure for African communities.
