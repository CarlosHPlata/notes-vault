---
created:
  - 2025-05-12 16:46
aliases:
  - DDD Bounded Context & Subdomains 12-05-2025
  - DDD Bounded Context
tags:
  - Programming/topic
language: architecture
---

**Topics:** [[Architecture]]

# 📃 DDD Bounded Context & Subdomains 12-05-2025

---
Developers model their systems with entities and their relationships, as the system organically grows, those relationships become complex and hard to track, this is something that we call Tight Coupling. And we want to avoid this, by reduce the numbers of relationship between our system, sometimes the coupling can be avoided since the pieces interacting share the same context; then this becomes a subdomain or Bounded Context.

> A Bounded Context is a part of the software where particular terms, rules and definitions apply consistently.
> *- Eric Evans*

The advantage architecturally of bounded context is that is a separate way to abstract our domain, and the advantage is that each subdomain can have private or hidden members that can not be shared to other bounded contexts.

## Bounded context and language
Everything in [[Architecture - Architecture as a form of communication|software architecture is about language]], the aim of DDD is to represent it too. perhaps some entities and elements of the domain have different details or understanding depending on the context they are talked about.

let's imagine a system that try to abstract how a airport works. 
- For the booking context a terminal represents the area where the airplanes find a bay to land and users to enter, they can also divide terminals by external or internal flights.
- For the business context, a terminal represents the location where a certain store is located, and maybe they do some specialized metrics to know the volume of customers traveling from and to that terminal.
- For the maintenance context, the engineers or maintenance team have assigned different terminals, and for them they don't represent difference in terms of needs.
Whatever is the case those contexts share a same key element but is used in different forms. In the same way **Bounded contexts can have similar elements but used in different ways.**

# 📦 References

---
- [[Architecture - DDD What is Domain Driven Design]]
- [[Architecture - DDD Types of subdomains]]
- [[Architecture - DDD Forms of relationships between subdomains]]