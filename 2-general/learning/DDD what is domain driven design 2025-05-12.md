---
created:
  - 2025-05-12 13:56
tags:
  - fleeting
---
```meta-bind-button
label: Start adding topics
id: transcript
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
# 🔷 Domain-Driven design

Domain driven design is a technique of software design proposed by Eric Evans in a book of the same name.

The idea of DDD is simple, capture the domain model language in the terms of the same domain (the code). In practice DDD have the philosophy of that the Domain Model should prevail and direct the developping process.

There are 3 principles:
- Capture domain model in domain terms
    - interacting with the experts on the domain.
- Embed domain terminology in the code
    - This means name things as the expert would (CQRS)(SQRS)
- Protect the domain knowledge from corruption
    - If in the code the code they speak from more domains then that should be splited (Single Responsibility Principle), Cohesion

## Ubiquitous language
part of the first principle.
Is a central concept meaning:
> A ubiquitous language, is a spoken context that is used between technical and non technical stakeholders

## Names and relationships
Classes, methods system should be named as how the domain language. The user should be named as how the domain demands it.

## Bounded context
[[DDD Bounded Context & Subdomains 2025-05-12]]
A bounded context is the limit of where the domain applies. It represent different contexts from the domain, and each one can have their own language, or shared language.
There are multiple ways to preserve their own context when building relationships

## Entity
An entity is an object from the domain that can be defined by itself (id) and by it's actions and not by their attributes.

## Value object
A value object is defined by their properties (inmutables).

## Aggregates
Big systems have many numbers of entities and value objects, a compilation of entities and value objects tat share same context can be encapsulated into aggregates so they can be threated as unity.
The aggregate root, is the only entity inside the aggregate that can be referenced.

# DDD for microservices

Cohesion, the distributed monolith is true when all services are high coupled, and high cohesion.
As in the use of DDD in single application the use in microservices is similar phylosophical aproach.

The goal of the DDD is to find contexts and domains.

How to identify domains?
Elicit requirements and create a map of our domain with their relationships.
Any group of domains tight coupled should be then surrounded by a bounded context.

and then you will have your first microservice in DDD.

Microservice is equivalent to a bounded context in domain driven design.

The next challenge is how to share data between services and domains.

## Sharing data between domains, Aggregations techniques
Each service has it owns data mapped to a repository, for example orders could have order ID and Account ID in the orders domain, but at the same time the accounts domain have an account model with account ID.

How do they share this information? in a single DB a foreign key is used, but in microservices is intended each microservice has it's own database, so foreign keys can't be used.

One approach is link the data with the same language. they should only rely on the IDs of their entities. And use shared data through communication.

approach
a gateway to populate aggregated data for each service
A direct communication between services api (tight coupling)
A materialized view A event syncronizer (Event driven system)

To investigate further:
https://www.youtube.com/watch?v=yEzQs1stJhE