---
created:
  - 2025-05-10 23:31
aliases:
  - Conway's law 10-05-2025
tags:
  - Programming/topic
language: architecture
---

**Topics:** [[Architecture]]

# 📃 Conway's law 10-05-2025

---
Conway law was proposed by Melvin Conway, it is a rule that's followed by architecture in enterprises as they grow, and it's the tendency to architectures to mimic software organization through time.

> Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure.
> *- Melvin Conway*

### Concept
It was observed during organizations once the teams are set, they choose language, technologies and tools, they start rising their own abstraction of the product, abstract concepts, their own language and assumptions, that can only be understood by them, and ultimately is translated to the code itself in a cohesive form.

**How do the rest of the organization communicate with this team?** they agree to subtract the details of their implementation, ultimately their communication relies in a set of agreements where both teams have to minimize the complexity of their own system and find a middle ground.
This is also translated into code.

## Layered team example
Imagine a team where we have a **Front end Team** and a **Backend Team** they both have a set of structured design decisions and stack of tools they decided upon, each one have been working to create their own abstract language of what it means the product for them. 
How do they communicate when they need a new feature? They maybe meet and agree on something each one explains their need and ultimately that is translated into the code as one relationship.

Let's think front end team needs to communicate the backend team to achieve one feature, mostly they will communicate and ask for a new endpoint, in the same way the code will reflect this communication. They have created a relationship.

![[Pasted image 20250511002516.png]]

## Life Cycle example
Last example shows clearly how the architecture is driven by the organization need, but this does not only reflect in how the teams communicate but also how the organization life cycle communicate.

Let's think now on the life cycle organization, we have a basic organization of a dev team involved in creating new features, a test environment that has the need to test and allocate bugs, and a operations team that delivers and monitors the code to production.

How do they communicate?
Certainly the test team will require the devs to deliver their latest code so they can test, neither of them need to know the intricate details of how the code is done nor how the tests are done. They only need to find a way to communicate properly between them. Their solution may be set a test environment where they can test, or maybe the test team automates everything, so they build a pipeline where they can run and integrate with the dev team and they only need to ensure their code is well packaged into an image. They will agree on something, create a relationship, and reflect that into code.

What about operations? certainly they need also something from the test and dev team, that after the code is well tested and developed they share it with them to ultimately deploy it. Perhaps they can re-use dev image and deploy it, perhaps they need the dev team to configure some environment vars in certain way, no matter what they only need to communicate their necessary decisions to success and that will be also reflected into the code.
![[Pasted image 20250511004121.png]]


## Domain Driven Design
Ok those are pretty self explanatory examples, but in real life most companies don't have dedicated teams to each environment, most companies are cross functional meaning they have different devs with different roles, or devs with multiple roles, they test and code, or a designer, or a manager that tests, etcs.

Normally they tend to encapsulate key domains of their application into teams, suddenly the payment team appear, and far away in the room the user system team appear, and so on.

How do they communicate?
Exactly as before, since each team has only expertise in their own domain, they have to simplify their communication into something both teams can understand, by abstracting their needs. Then the relationship is build and is reflected into architecture.

## Reverse Consway's Law
So now we know that architecture tends to mimic organization decisions and communications, so the goal of the architect is to try to guess the future and start building and designing the overall architecture taking in consideration how the organization operates and communicate.
# 📦 References

---

- [[Architecture - DDD What is Domain Driven Design]]
- [[Architecture - Conway's law|Conway's law 10-05-2025]]