---

title: "Partner Research Assistant for Digital Banking (KYB First-Pass)"
github: "https://github.com/juanpablozunigahidalgo/NorthBank"

---
A first-pass research dossier for digital banks that need to screen prospective merchants and business partners faster — without handing risk ownership to a black-box model. Built as an Applied AI Analyst case for nordic-style partnership / KYB-style screening before a first commercial conversation.

The system splits work clearly: a deterministic policy engine sets Approved / Escalate / Rejected from registry, bureau-style credit, VAT validity and related flags; an automated externalities layer fans out trusted-domain news searches (company + CEO) across risk themes such as fraud, financial distress and PEP; an optional LLM only connects hard facts with grounded quotes and cannot change the classification. Human review remains mandatory.

Technically it is a FastAPI backend plus React UI, deployed as a single Docker service, with explicit coverage reporting (including news-Code = 0) and labelled prototype cuts where live bureau contracts are mocked. Live demo: https://northbank.onrender.com
