---

title: "AI Onboarding & Registration Agent for a Nordic Bank"
github: "https://github.com/juanpablozunigahidalgo/AWS-CLOUDINTEGRATED-GENAI-BANK-ID-CREDIT-PROCESSING"

---
Developed as a demonstration for a nordic bank, this project is an end-to-end intelligent onboarding and identity verification system. It addresses the complexity of modern banking registration by integrating generative ai with secure cloud infrastructure to create a frictionless user experience.

The architecture is built entirely on AWS, utilizing amazon bedrock agents to handle conversational onboarding. this ai assistant LLM NOVA powered manages consent, answers credit-related inquiries, and orchestrates the verification flow. the backend follows a serverless, stateless design using lambda functions to extract data from id documents stored in s3 and verify them against simulated national registries.

On the technical side, the frontend is developed with react and typescript, providing a clean interface for both customer onboarding and internal bank management. data integrity is managed through dynamodb with idempotent writes, ensuring that customer records are unique and secure. this project demonstrates a deep understanding of cloud security, iam least-privilege policies, and the practical application of large language models in a highly regulated industry.