# Technical Report — Qofa / Nader Offline Merchant Assistant

**Team ID:** qofa  
**Domain:** corporate_enterprise  
**Model:** Qwen2.5-0.5B-Instruct-Q4_K_M (GGUF, llama.cpp)

---

## Problem

Qofa helps small merchants create and run trusted digital storefronts. Many merchants in Morocco and across Africa manage stock, pricing, customer outreach, and daily sales with limited time, modest hardware, and unreliable connectivity. Generic cloud assistants can be inaccessible at the moment a merchant needs help and can require sharing sensitive business context with an external service.

Nader is Qofa's local merchant-assistant layer. It gives concise, actionable business guidance—such as reducing slow-moving stock or attracting local customers on a limited budget—without an internet connection after the model has been downloaded. Qofa supports English, French, and Arabic to match the platform's merchant and buyer experience.

## Design Decisions

- **Base model:** Qwen2.5-0.5B-Instruct, selected for its small footprint, instruction-following capability, and multilingual suitability for English, French, and Arabic merchant questions.
- **Runtime:** `llama.cpp` is the only inference runtime. `app/core/inference.py` invokes a local `llama-cli` executable through a subprocess; it contains no HTTP client or cloud-model dependency.
- **Quantization:** `Q4_K_M` GGUF is used to keep memory use practical on the 8 GB challenge profile while retaining more useful output quality than aggressive low-bit quantizations.
- **Packaging:** the repository stores no model weights. `download_model.sh` downloads the public, credential-free GGUF to the path declared in `metadata.json` before evaluation.
- **Product grounding:** the deterministic Qofa business-data layer calculates the available merchant facts and passes that local evidence into Nader's prompt. The local model supplies the conversational explanation, but it is instructed not to invent or alter merchant metrics. If the local runtime is unavailable, the product returns the deterministic evidence-led response rather than pretending that a model answered.
- **Alternatives considered:** larger 1B–7B models can improve response quality but add memory pressure and reduce CPU throughput on an integrated-graphics laptop. Network-hosted models were rejected because the submission must work offline.

## Constraints

- Target environment: 4 vCPU, 8 GB RAM, integrated GPU only.
- Inference is CPU-first and local after `download_model.sh` finishes. No external request is made while Nader generates a response.
- Merchants may have intermittent connectivity, limited data allowance, and entry-level laptops.
- Advice is practical business guidance, not financial, tax, or legal advice. Nader asks for missing information rather than fabricating operational figures.
- The web prototype uses browser-local demo data. Production deployment would require consent-led data storage, secure authentication, and verified messaging providers.

## Benchmarks

Qofa was measured on the participant laptop with the official ADTC profiler in participant mode. The fast measurement pass used `--skip-accuracy` to obtain the Devpost performance and efficiency values; the final submission should also run the complete accuracy pass before the challenge deadline.

| Metric | Measured value |
|---|---|
| Machine | Windows 11 participant laptop; AMD CPU; 15.9 GB RAM; NVIDIA GeForce RTX 2060 |
| RAM at peak | 561.82 MB |
| Time to first token | 1,695.69 ms |
| Generation speed | 67.54 tokens/s |
| Thermal throttling | Not detected |
| Self-reported performance score (Sperf) | 100.00 |
| Self-reported efficiency score (Seff) | 92.16 |

Measurement command:

```bash
adtc-profiler run --submission . --mode participant --output submission.json --skip-accuracy
```

The resulting `submission.json` reports `"measured_on": "participant_laptop"`. `submission.json` is intentionally ignored by Git because it is a machine-specific self-report, not a source artifact.
