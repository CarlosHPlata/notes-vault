---
created:
  - 2025-05-10 19:32
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
# 🔷 Conway's law
> Any organization that designs a system will produce a design whoe structure is a copy of the organization's communication structure.
> - *Melvin Conway*

Imagine a team that agree which tools they will use, they share assumptions and functions, they create a cohesive language. They create a couple system

How the rest of the organization communicates to this team?

## Layered team example
Let's imagine the rest of the organizations is stacked in the tech stack, each team have a mirror service that couple their assumptions into code.

We have:
 - Frontend team
 - Backend team
 - Database team

How do they communicate? what if they want to introduce a new feature, the front ent will ask the backend to send something in the way they can understand like and endpoint, this will be mirrored by the system as a relationship.
The same way with the database team

## Life Cycle Example

Let's imagine the communication is divided by the stages of the life cycle.
We have:
 - The dev team
 - The testers
 - the operations team
How do they communicate?
The test team will require the dev team to handover something from them to test, so the dev team agrees to publish their code and packaging it into an image later released into a testing environment.
Then the test team has it's own system with their automated tests etc. Once they finish they handover to operations, in a pipeline streamline process that later is deployed to Operations.

## Cross functional teams
What if the teams consists of diverse group containing everything but separated by topics or domains.

We have:
- Users
- Payments
- Shipping
- Products

How do they communicate?
(DDD)

when they depend they have to communicate each team only has expertise in their own domain so they have to simplify their communication into something both teams can understand, by abstracting away some of their domain complexity, and explain their needs.
Then the relationships are build into the systems and reflected into the architecture
## Reverse Consway's Law
Intentionally shape the organization in the way we design the architecture, if we practice  Domain Driven Design, this is a great  way to build it.