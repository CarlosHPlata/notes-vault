---
created:
  - 2025-05-12 15:44
aliases:
  - DDD What is Domain Driven Design 12-05-2025
tags:
  - Programming/topic
language: architecture
---

**Topics:** [[Architecture]]

# 📃 DDD What is Domain Driven Design 12-05-2025

---
Domain Driven Design (DDD) is a technique of software design proposed by Eric Evans in a book under the same name.

Everything about software architecture is how to translate the stakeholder domain expertise into some abstraction that have meaning, in short our work as architects is to translate their language into our technical language.

The idea about DDD is to capture the domain model language in terms of the same domain (the software). In practice DDD have the philosophy of: The domain Model should prevail and orchestrate the developing process.

There are 3 principles that have to be followed to abstract the domain into something understandable by the developers.

### Capture the domain
> [!info] Capture the domain in terms that are abstraction of their understanding of the system.

The goal is to talk with the domain experts, those stakeholders that have all the knowledge of the business, capture their thinking about the business and represent it into contexts that have some level of abstraction.

We want to build an **[[Architecture - Ubiquitous Language|Ubiquitous Language]]**.

### Embed domain
> [!info] Embed domain terminology into the code

The goal is once abstracted we translate that understanding into the code, by respecting the concepts from the language the domain experts understand.
In practice it means defining entities and their relationships in the names the domain knows, and respect them.

> Classes, methods, systems should be named as how the domain language.

### Protect the domain
> [!info] Protect the domain knowledge from corruption

If one piece on our software is touching more domain context than required it has to be protected and divide it into separate contexts.
This is respecting the Single Responsibility Principle.
In shot we want less coupled code, and avoid tight coupling or cohesion.

This is related to [[Architecture - DDD Bounded Context & Subdomains]].
# 📦 References

---

- [[Architecture - DDD Elements of Domain]]