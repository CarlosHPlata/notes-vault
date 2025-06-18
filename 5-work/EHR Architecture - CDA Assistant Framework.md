---
created:
  - 2025-06-18 01:16
tags: work
---
# 📃 CDA Assistant Framework 18-06-2025

---
The **CDA Assistant Framework** is a next-generation evolution of the traditional **Clinical Assistant**, reimagined as a **modular intelligent planning service**. Its main purpose is to understand the user’s contextual situation including UI gestures, navigation state, language, and semantic input and then **plan and execute actions** by interfacing with the broader [[EHR Architecture - Application Layer|Application Layer]].

## Responsibilities
The framework is responsible for:
- Interpreting user context (UI state, gestures, input language, semantic events).
- Determining **which actions are valid and available** at any given point in the application.
- Orchestrating **intent-driven execution**, leveraging specialized services (Organizer, Documentation, Messaging, etc.).
## Execution flow
The system is composed of **three main stages**:
### 1. 🧩 **Planner**
- Observes semantic input from the user.
- Infers intent and selects **logical plans** by reasoning over [[General - Semantic Object|semantic objects]] from the [[EHR Architecture - Data Layer|Data Layer]].
- Uses an LLM to interpret semantic data and identify high-level intents that align with what the user is trying to do.
### 2. ⚙️ **Execution Engine**
- Decomposes the selected plan into **discrete service calls**.
- Communicates with relevant microservices (e.g., `Messages`, `Organizer`, `Documentation`) to prepare the necessary actions.
- Applies the appropriate **filters, arguments, or constraints** to each subtask, depending on the context.
### 3. 📨 **Response Engine**
- Emits **semantic events** that are dispatched to the **Application Shell** through the [[EHR Architecture - Conversation Plugin|Conversation Plugin]].
- These events signal plugin applications (frontend services) to take appropriate UI or service-level actions.
- Ensures the final result is surfaced to the user (e.g., sending a message, updating a schedule, generating documentation).

# 📦 References

---

- [HL7 FHIR - Healthcare Data Modeling and semantic interoperability](https://hl7.org/fhir/)