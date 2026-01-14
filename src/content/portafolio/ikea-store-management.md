---
title: "ikea-stock-management"
github: "https://github.com/juanpablozunigahidalgo/SeniorSoftwareEngineer-AI-IKEA-Range-Operations-HOMEASSIGMENT"
---
This project was developed as a technical submission for the Senior Software Engineer (AI) role at IKEA Range Operations. It consists of a robust RESTful API designed to manage store inventory with a focus on data integrity and strict business logic.

The solution is built using Node.js and TypeScript to ensure maintainability and type safety. It utilizes PostgreSQL for ACID-compliant transactions and TypeORM for clean data abstraction. The architecture follows a layered pattern—separating controllers, services, and repositories—to isolate concerns and make the system easily testable. A core feature is the stock adjustment logic, which prevents inventory from dropping below zero through server-side validation.

The implementation includes several high-level engineering features such as containerization with Docker, interactive documentation via Swagger/OpenAPI, and a custom integration testing suite. This project demonstrates the ability to deliver production-ready code that balances functional requirements with architectural scalability and concurrency considerations.