---
created:
  - 2025-05-12 19:54
aliases:
  - Microservices vs Monolith 12-05-2025
tags:
  - Programming/topic
language: architecture
---

**Topics:** [[Architecture]]

# 📃 Microservices vs Monolith 12-05-2025

---
**Micro services** as commonly known from all developers nowadays is a way to build an application into a distributed system architecture.

But what Micro Services means? I mean Service is easy something that does something. And then we have the word Micro; Micro means small, but... how small exactly?

I think is easier to describe what is not a Micro Service, and that's a unified self contain application that has all the logic to operate a business. Normally called a **Monolith**.

## Monoliths
Monoliths are the pure form where all the architectures started, back in the days that was the only way to think about developing software, you write a self contained application and deliver it into a CD, APP, Desktop App, even the web suffer this approach with PHP leading monoliths back in the day, doing both front and backend at the same time, one approach that most of the younger generations would fear today.

Monoliths tends to grow over time, this is a fact, code always grows it never diminish, never existed a software that over time removed features on his core code base. Unsupervised monoliths become a big blob of code as a result.

> A haphazardly structured, sprawling, sloppy, duct-taped and bailing wire, spagetti-code jungle
> *- Brian Foote & Joseph Yoder*

#### Modular Monoliths
This was a common issue and architects knew about it, they found architectures to try to solve this issue, MVC, MVVM, Clean, etc. All of them try to solve the issue of having a big blob of code that is hard to understand. But one common factor over those architectures in larger applications is the fact that all of them tried to modularize the code, find code that share the same context and try to encapsulate it, this is called **Modular Monoliths**. This can be clean, structured and understandable.

## Microservices
But wait, then the modern era arrived, rising servers was easier than never, cloud platforms emerged and changed the game, then the idea of having a distribute system becomes a reality. The easier way was to take a *Modular Monoliths* and split it into a distributed system.

Each service independent in charge of a micro context of what was before a Module, each service grow independently, scale independently and have their independent data store if needed; before modules communicate over code dependencies, now they have to communicate using the network. 

But be careful this new communication requires effort to develop all the required bloat to communicate over the network (whatever is the way they communicate), developers are forced now to create contracts and ensure they are delivered and read properly, they have to design their communication API and be careful to not mess it up and broke another service.
This could be an issue... for lazy developers, but a dream for architects, since it formalize the contract of communication between the boundaries.

Not all is magic with microservices, it has it's own drawbacks, starting with the cost, not only monetary but in effort to build and maintain, you have now to maintain different services, machines, deployment process, etc...
Also now you will have to address issues that were never a constraint before, how to deal with the network, what about latency, which technologies have to be implemented, what if a service is down, unresponsive, or unreliable, how to discover new services. etc.

#### Distributed Monoliths
But even doing microservices doesn't mean all your issues will be faded away, you would think that you have to go directly to micro services, monoliths are the devil and should be never considered but if you go blindly you will end with a similar result as with a monolith without supervision, moreover I would say it would be worse!

Not only you will have all the drawbacks from the monolith but also the drawbacks from a distributed system. Drawing too much relationship cross boundaries even if those relationships are through the network would create the same blob with all the wiring and network issues from a distributed system.

One of the common mistakes of micro services is not knowing how to identify the services correctly. Make them too big and you will have a monolith, make them too small and you end with something called **Nano Services**, tiny services that only do one thing and cost as much as a big one. Not only that making services that depend on several others at being so small make the whole system tight coupled resulting in more traffic and more bloated code needed to maintain it. Suddenly you will end more lost than in a monolith with hundreds of public APIs and tiny services.

### How to identify Services candidates
The trick is to correctly identify the services, by drawing the elements and relationships of the business domain, and then find the tight coupled ones before is too late, you can use many techniques to organize this coupling into sub contexts, one of many are:
 - [[Architecture - Conway's law]]
 - [[Architecture - DDD What is Domain Driven Design|Architecture - Domain Driven Design]]
 
# 📦 References

---
- [[Architecture - Conway's law]]
- [[Architecture - DDD for Microservices]]
- [[Architecture - DDD What is Domain Driven Design]]