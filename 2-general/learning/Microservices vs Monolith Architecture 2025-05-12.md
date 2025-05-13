---
created:
  - 2025-05-12 19:44
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
# 🔷 Microservices vs Monolith Architecture
Micro means small but how small exactly?

What microservices are not? a monolith

One unified self contain application

start small grows into a big blob.
>A haphazardly structured, spawling, sloppy, duct-tape and baling wire, spagetti-code jungle
>(brian Foote & Joseph yoder)

We need some clear structure, we divide the system into smaller managable subsistems. drawing boundaries.

this is called Modular Monolith.

This can be clean understandable code, easy to understand and navigate.

We can left this as it is or we can move each bit into it's own service. Each one independent can be scaled differently, can run in different machines, languages, easy to identify failures.

Each service has it's own database.

Services communicate over the network.

We need to ensure that we do not deploy changes that impact other changes, this is a disadvantage for lazy developers but it's a dream for architects since it formalize the contract of communication between boundaries. 

Drawing a lot of relationship cross boundaries, can be harmful and end with another blob of code, with the same disadvantages as a monolith but plus all disadvantages from the distributed system this is a Distributed Monolith.

Common mistake is to not be able to identify the services correctly.

Make them too small and then you end with **Nano services** tiny services that only contain one function.

Tightly coupled services means changes will be hard to maintain.

The trick is to identify services that share relationships and build them together in the same context, we can do it by DDD or Conway's law or both.

