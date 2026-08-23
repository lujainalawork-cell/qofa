# Qofa

**Qofa** is a multilingual commerce platform built for African merchants. It gives merchants a branded online storefront, a simple way to add products, and a buyer checkout journey designed for mobile-first commerce.

## Live demo

[Open the Qofa demo](https://qofa-africa.loujaineal95.chatgpt.site)

## What Qofa can do

- Switch the complete experience between English, French, and Arabic, including right-to-left Arabic layouts.
- Create a merchant account and explore the business dashboard.
- Customize a storefront with seven color themes.
- Add, remove, price, and upload images for products.
- View a customer-facing shop, add items to cart, and complete checkout.
- Register buyers with first name, last name, national ID, and phone number.
- Verify buyers through a clearly labelled SMS demonstration flow before placing an order.
- Explore Nader, Qofa's merchant-assistant demo, for business insights.

> The current SMS code is a demo simulation (`123456`). A production launch would connect a secure backend and an SMS provider.

## Technology

- HTML, CSS, and vanilla JavaScript
- Responsive Frutiger Aero-inspired interface
- Node.js local preview server
- Python backend foundation and Nader assistant modules
- Public Cloudflare Worker-compatible hosting

## Run locally

```bash
cd web
node preview-server.js
```

Then open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Demo path

1. Choose a language.
2. Open the merchant experience.
3. Go to **My Brand** to customize colors, products, prices, and product images.
4. Open the consumer page and add products to the cart.
5. At checkout, enter the buyer details and use `123456` for the demonstration verification code.

## Project goal

Qofa was created as an Africa Tech Hackathon project to make digital commerce clearer and more accessible for local merchants and their customers.
