---
created:
  - 2025-05-13 22:08
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
# 🔷 Crack a System Design Interview first draft
How to succeed in a system design.

The steps
- Translate ambiguous business problem into concrete software requirements (functional and non functional requirements).
- Craft an architecture design that articulate those requirements.
- Defend you architecture against system scenarios.

## 1. Write Functional Requirements
Requirements analysis is an essential process. Requirements are generally split into two types: Functional and Non-functional requirements.

These are the requirements that the end user specifically demands as basic facilities that the system should offer. All these functionalities need to be necessarily incorporated into the system as a part of the contract.

- These are represented or stated in the form of input to be given to the system, the operation performed and the output expected.

First things in the system design is to write the functional requirements as bullet points, identify the key ones.

## 2. Write Non-Functional Requirements
With the previous exploratory chat about functional requirements you will start having a hint of what may be the non functional requirements for the system.

Non-Functional Requirements these are the quality constraints that the system must satisfy according to the project contract. The priority or extent to which these factors are implemented varies from one project to another. They are also called non-behavioral requirements.

Non-Functional Requirements deal with issues like reliability, portability, scalability (architecture properties).

Base upon the conversation of functional requirmentes and start thinking about the non-functional, identify the key part of the functional requirments and how some quality properties have to apply in order to satisfy it.

For example if the system functional requirement key is to do a store, then your system have to be robust around that area? how many buyers will handle? errors? latency? what size of transactions are expected, how big are the responses in terms of GB of data to be store. Do it need special performance, flexibility features?

Write them down as bullet points.

## 3. Not so fast first let's identify the domain entities and use cases.
As our first practice we will not dive, into the bits and bites of formalities, we will start small, we will use a technique of thinking about the contracts, the contracts will determine our first glance of the domain.

Let's use what we learned about DDD and Conway's law, re read the functional requirements, and how they could be mirrored and translated into an API.

For example:
- The user should be able to see the products in the store.

Then it will be translated into:
     - GET v1/products
     - return { products: List< products > }

## 4. Draw boxes
Now is the time to start drawing our boxes, use the information we learned before, our new ubiquitous language created by our API and functional requirements, and let's start drawing our domain elements. Each element should have the name of a subject and entities, and think they are modules or services.

## 5 More boxes
Fantastic we have our first draft, now we want to ask ourselves, does there are tight coupled elements of the domain? are elements that share the same context?
Fantastic, let's get them together, create our bounded contexts. replace them with our new structure.

## 6 Relationships
Let's not over complicate in this first practice let's think about how they interconnect for the moment without complicating things, we will refine it latter, let's draft our first requirements.

