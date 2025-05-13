---
created:
  - 2025-05-12 13:48
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
# 🔷 
Developers model systems with entities and their relationships, as the system grows it becomes complex.

We want simple and concise.

Naturally our language support abstraction of contexts.

Let's say you have a system that have a travel system with a platform context, but for booking platform is one thing, but for maintainance platform have different things, what about shopping a shopping can be in a platform? what about service like WC are shared between platforms?

Each domain can have their own way to talk about entities. Shared context makes them converge into a bounded context.

A part of the software where particular terms, rules and definitions appy consistently (eric evans)

There are different types of domains

- core domains are domains that make the business special it's a bit that gives you the competitive advantage, this is where the vast majority of the effort is done
- Bits that helps the business operates, are called supporting domains
- Generic sub domains, are domains that are not special to the business but are required to work propertly.

Ways of communicating between contxt
    - Conform, you can conform with the other context by using their language in the communication.
    - But maybe we not want to polute our system with their language, in this case we can implement a middle layer called anti-corruption layer, that translates other context into is own language.
    - What if they share a subset, this is called shared kernel, this reduce duplication but we need to be more carefull.
    - Customer-supplier, or partnership is when the upper context dictates how the communication will be.


