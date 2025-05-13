---
created:
  - 2025-05-12 17:18
aliases:
  - DDD Forms of relationships between subdomains 12-05-2025
tags:
  - Programming/topic
language: architecture
---

**Topics:** [[Architecture]]

# 📃 DDD Forms of relationships between subdomains 12-05-2025

---
## Forms of relationships between subdomains

#### Conform
A bounded context that require to communicate to other subdomain have to **conform with the other context naming in their communication**.

#### No pollution
A bounded context that needs to communicate to other subdomain but don't want to conform with their language, have to create an **anti-corruption layer**. In charge of translate the other context into it's own.

#### Shared
Two bounded context can share elements between them, normally [[Architecture - DDD Elements of Domain|Value objects or Aggregates Definitions]], for this sometime it would be useful to create a subset a *supporting domain* called **Shared Kernel**.
The disadvantage is that this shared kernel has to be more carefully maintained and approved by both domains when doing changes.

#### Customer-supplier or partnership
This type of relationship inverts the conform, it makes the one **who is dependent of the other dictates the communication** and their context language.

# 📦 References

---

- [[Architecture - DDD Bounded Context & Subdomains]]