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

## Deep-tech direction

The public prototype demonstrates Qofa's product and user journeys today. The next technical milestone is to make Nader a genuinely offline, locally runnable assistant using a quantized GGUF model and `llama.cpp`, so merchant guidance can work in low-connectivity contexts. This is a roadmap item, not a feature already claimed by the demo.

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
