---
title: "Konsult Kalkyl — Swedish AB Consultant Decision Tool"
github: "https://github.com/juanpablozunigahidalgo/konsult-kalkyl"
---
A financial simulator for independent consultants in Sweden who bill through an Aktiebolag. You set timpris, workload, vacation, and operating costs; it returns what actually lands as salary, pension, and K10 dividend after Swedish tax rules.

The model covers Göteborg-style costs (transport, tools, insurance, accounting) and fiscal pieces such as arbetsgivaravgifter, bolagsskatt, kommunalskatt, and tjänstepension around brytpunkt / PBB. Parameters for 2026 live in versioned JSON, not hard-coded magic numbers.

There is also an optional Gemini pass: paste a job offer, pull the live CV, and get a short negotiation brief with recommended SEK/h and a counter-offer. Stack is vanilla JS on GitHub Pages — no framework, just the calculator and the tax math.
