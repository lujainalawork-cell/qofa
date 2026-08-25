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
- **Product grounding:** the deterministic Qofa business-data layer remains available for numeric calculations and missing-data checks. The local model supplies conversational merchant guidance; it does not invent merchant metrics.
- **Alternatives considered:** larger 1B–7B models can improve response quality but add memory pressure and reduce CPU throughput on an integrated-graphics laptop. Network-hosted models were rejected because the submission must work offline.

## Constraints

- Target environment: 4 vCPU, 8 GB RAM, integrated GPU only.
- Inference is CPU-first and local after `download_model.sh` finishes. No external request is made while Nader generates a response.
- Merchants may have intermittent connectivity, limited data allowance, and entry-level laptops.
- Advice is practical business guidance, not financial, tax, or legal advice. Nader asks for missing information rather than fabricating operational figures.
- The web prototype uses browser-local demo data. Production deployment would require consent-led data storage, secure authentication, and verified messaging providers.

## Benchmarks

The authoritative benchmark must be generated on the submitter's laptop with the official ADTC profiler and committed only as a local submission artifact (it is ignored by Git). No performance figures are asserted before that measurement.

| Metric | Value |
|---|---|
| Machine | To be measured on participant laptop |
| RAM at peak | To be measured by ADTC profiler |
| Time to first token | To be measured by ADTC profiler |
| Generation speed | To be measured by ADTC profiler |
| Thermal throttling | To be measured by ADTC profiler |

Run the following from the repository root after installing `llama.cpp` and the official profiler:

```bash
bash download_model.sh
adtc-profiler run --submission . --mode participant --output submission.json
```

The resulting `submission.json` must report `"measured_on": "participant_laptop"`. The report will be updated with the measured values before final Devpost submission.