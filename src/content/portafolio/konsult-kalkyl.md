---
title: "Konsult Kalkyl — Swedish AB Consultant Decision Tool"
github: "https://github.com/juanpablozunigahidalgo/konsult-kalkyl"
---
A decision product for independent consultants running an Aktiebolag in Sweden. It answers a practical question before accepting work: with this hourly rate, workload, cost stack, and Swedish tax rules — is the offer actually good? Live demo: https://juanpablozunigahidalgo.github.io/konsult-kalkyl/

The calculator models contract inputs (timpris, omfattning, vacation, and Swedish public holidays), a realistic Göteborg cost stack (transport, lodging, tools, insurance, accounting, conferences), and a fiscal engine covering arbetsgivaravgifter, bolagsskatt, K10 dividends, kommunalskatt, and tjänstepension around the brytpunkt / PBB rules. Versioned data files (`tax.json`, `rates.json`) keep 2026 parameters explicit and maintainable. An executive summary turns the run into one clear verdict: revenue, take-home, pension, dividend, and conclusion.

On top of the numbers, an optional AI advisor fetches the consultant’s live CV, reads a pasted job description, and combines both with the financial snapshot and market rate bands. The output is a structured negotiation brief — verdict, CV–offer fit, recommended SEK/h, gap vs. offered timpris, and a concrete counter-offer — not a generic chatbot reply.

Technically it is a static, console-minimal product: vanilla JS ES modules, pure fiscal functions with no framework lock-in, GitHub Pages + Actions deploy, and secret-injected Gemini access for AI analysis. Built as a personal operating tool and a public craft sample for Swedish consultancy economics.