---
created:
  - 2025-05-15 11:58
tags:
  - Programming/topic
course: architecture in practice
---

# 📃 Requirements 15-05-2025

---
## Functional Requirements

- A Fan can see an event
- A Fan can search can search an event
- A Fan can reserve an event ticket
- A Fan can complete purchase for an event ticket
- If All tickets are reserved or server is on peak a Fan can enter a Queue.
- Organizers can create events.
- Organizer can set a date for start purchasing tickets
- Organizer can see event analysis.
- A Fan can receive notifications of upcoming events near his location.

## Non-Functional Requirements
- The timer for reserved tickets, should be on the backend
- The payment process should be quick and prevent failures.
- It should support 100k concurrent users on peak sales.
- It should support at least 100 events per month, each event detail size is about 100kb so storage about 1000kb of data.
- Search should support multiple ways of searching.
- Fans should receive their ticket information without errors.

# 📦 References
- [[Architecture - Functional Requirements]]
- [[Architecture - Non-Functional Requirements]]
