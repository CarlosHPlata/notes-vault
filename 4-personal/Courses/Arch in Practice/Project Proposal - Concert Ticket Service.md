---
created:
  - 2025-04-13 23:39
aliases: []
Course: Architecture in Practice
---
# 🎟️ Ticket D-Saster: Concert Ticket Service
*Allowing you to meet your favorite bat eating rockstars since Jan 1982.*

| Stat               | Value   |
| ------------------ | ------- |
| 🧠Difficulty       | **Mid** |
| 🧰Tech Agnosticism | ⭐⭐⭐     |


> [!info] **Stat Guide**
> - **Difficulty**:
>   - Easy: Suitable for students new to software development
>   - Mid: Assumes working knowledge of a programming language and framework
>   - High: Designed for students with experience in backend development and some infrastructure concepts
>   - Expert: Intended for those with industry experience and familiarity with microservice architectures
> - **Tech Agnosticism**: How much knowledge teams would have to choose tools and technologies _(more stars = more knowledge)_ meaning they have to have before hand tech related topics, like language advantages, risks, db models, patterns, frameworks.

---

## 🧭 Problem Statement

Purchasing concert tickets online often results in user frustration due to high demand, scalper bots, and unreliable system performance. These challenges lead to an unfair experience and erode trust in ticketing platforms. Your team is tasked with designing a reliable system that supports a high number of users, prevents unfair booking, and delivers a smooth and consistent user experience.

## 🌟 Vision

You will develop a modern ticketing platform where users can discover concerts, check seat availability, and purchase tickets with confidence. The system should handle large volumes of concurrent users, reflect seat status in real time, and offer useful insights to both fans and organizers.

## 👥 User Roles

- **Customer** – Searches for concerts, selects available seats, and completes the ticket purchase.
- **Event Organizer** – Publishes concert events, manages seating arrangements, and tracks sales.
- **System Administrator** – Oversees platform performance, monitors system health, and ensures secure and fair usage.

## ✅ Common Use Cases

- Search and filter upcoming events.
- View a real-time list of available seats.
- Reserve individual seats.
- Finalize a purchase before the reservation expires.
- Receive confirmation with ticket access.
- Organizers access dashboards for monitoring event and sales data.

---

## 🔍 Constraints & Expectations

- The platform must handle many users at once across multiple events.
- Teams must define clear API boundaries and collaborate across services.
- The system must avoid double-bookings and maintain data integrity.
- Handle authentication, authorization, and user privacy appropriately.

---

## 🧠 Architectural Prompts

- What mechanisms will prevent two users from reserving the same seat?
- How will your system perform under high user load during a ticket release?
- Should seat reservations expire automatically? How will you enforce it?
- When is asynchronous communication better than synchronous?
- How will you detect and respond to service-level failures?

---

> "May the fans cheer in peace. May every ticket find its rightful fan."

---

