---
created:
  - 2025-05-14 00:11
aliases:
  - Crack a System Design interview 14-05-2025
tags:
  - Programming/topic
  - System-Design
  - Interview
  - architecture
  - course
language: architecture
---

**Topics:** [[Architecture]], [[Interview]]

# 📃 Crack a System Design interview 14-05-2025

---
To succeed in a system design interview, you need to go beyond just drawing boxes and naming services. A strong candidate demonstrates the ability to **break down ambiguous business goals into concrete software specifications**, and then articulate how an architecture addresses those requirements under different scenarios.

The process can be broken down into a series of thoughtful steps:
1. **Write functional requirements**: These describe _what_ the system must do — *core behaviors, data flows, and expected outputs.*

2. **Extract non-functional requirements**: These define _how well_ the system must perform — scalability, latency, reliability, maintainability.
   In interviews, mentioning NFRs shows maturity. You aren’t just building _any_ solution—you’re designing something that can _endure_.

3. **Identify domain entities through use cases**: Root your thinking in [[Architecture - DDD What is Domain Driven Design|DDD]] or in [[Architecture - Conway's law|Conway's Law]]. Focus on [[Architecture - Ubiquitous Language|language and behavior that reflect the business intent]]. In early system design, API contracts are not just technical details — they **mirror your understanding of the domain**.
   Meaning write your requirements into an API draft definition.
    - *“The user should be able to view products in a store”*  
    - translates to: `GET /v1/products` → `{ products: [...] }`

4. **Draft a modular architecture**: Start with simple components or “boxes,” using the emerging language of your [[Architecture - DDD Elements of Domain|domain]].
    - Think in terms of **actors, intents, and results**
    - Identify **core entities** and their responsibilities
  At this point, the goal is not perfection — it's **clarity**. Use your functional requirements and API drafts as your compass.

5. **Refine into bounded contexts**: Look for cohesion. Group responsibilities that change together or belong to the same business area ([[Architecture - DDD Bounded Context & Subdomains|DDD Bounded Context]]).

6. **Sketch relationships**: Show how services or [[Architecture - DDD Forms of relationships between subdomains|modules communicate]], even if abstractly. Relationships will evolve as clarity grows.

7. **Scale your design**: Now think about the non-functional requirements, and more deeply into the relationships, how we can manage the non-functional requirements? which architecture quality properties should be applied (security, reliability, performance, etc...), which other elements could help, gateway, circuit breaker, etc...

8. **Defend your choices**: Be ready to justify decisions under system scenarios like scale spikes, partial outages, or evolving product scope.

This progression mirrors real-world system design and allows you to remain adaptable while staying grounded in the problem space.

# 📦 References

---

- [[Architecture - DDD What is Domain Driven Design]]
- [[Architecture - Conway's law]]
- [[Architecture - Functional Requirements]]
- [[Architecture - Non-Functional Requirements]]
- [[Architecture - DDD Bounded Context & Subdomains]]
- [[Architecture - DDD Forms of relationships between subdomains]]