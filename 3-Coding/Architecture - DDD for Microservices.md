---
created:
  - 2025-05-12 16:16
aliases:
  - DDD for Microservices 12-05-2025
tags:
  - Programming/topic
language: architecture
---

**Topics:** [[Architecture]]

# 📃 DDD for Microservices 12-05-2025

---
As with the software architecture approach for single applications ([[Architecture - DDD What is Domain Driven Design|DDD]]). The philosophy is the same, try to abstract the domain into a technical language everybody can use, from the non technical to the technical staff ([[Architecture - DDD What is Domain Driven Design|Ubiquitous Language]]).

We find the same approach for distributed systems, we start by talking with the domain experts and identifying the key structures of the business.

## Identify domain
Elicit requirements and create a map of the domain, draw relationships between then.
Next step is crucial analyze the entitles and their relationships and find elements that share the same context, then surrounded into the same [[Architecture - DDD Bounded Context & Subdomains|DDD Bounded Context]].

These bounded context are your first approach to allocate your microservices.

> [!danger] Micro Services = Bounded Context
## Analyze relationships
You will find that they will have to share data between your context, this will force you to create ideas on how to share data and cross their boundaries. This part is complicated since the microservices rule points out that each microservice have to be independent and have their own data store (database).

In microservices there are 3 major strategies to share data:
- Gateway populate aggregate.
- Direct communication through network.
- An event communication (Event Driven Design).

This will be later explored in the topic [[Microservices Communications]]

# 📦 References

---
- [[Architecture - DDD What is Domain Driven Design]]
- [[Architecture - DDD Bounded Context & Subdomains]]