---
created:
  - 2025-04-14 00:01
aliases: []
Course: Architecture in Practice
---

# ✈️ Emigrates Airlines: Route Search Service

*We will find your path through at least two towers.*

| Stat               | Value    |
| ------------------ | -------- |
| 🧠Difficulty       | **High** |
| 🧰Tech Agnosticism | ⭐⭐⭐⭐     |

> [!info] **Stat Guide**
>
> - **Difficulty**:
>   - Easy: Suitable for students new to software development
>   - Mid: Assumes working knowledge of a programming language and framework
>   - High: Designed for students with experience in backend development and some infrastructure concepts
>   - Expert: Intended for those with industry experience and familiarity with microservice architectures
> - **Tech Agnosticism**: How much knowledge teams would have to choose tools and technologies *(more stars = more knowledge)* meaning they have to have before hand tech related topics, like language advantages, risks, db models, patterns, frameworks.

---

## 🧭 Problem Statement

Booking flights with layovers (multi-stop itineraries) can be incredibly complex. Airlines, travel agencies, and customers must navigate an intricate network of routes, availability windows, and booking constraints. Your mission is to design a flexible, fast, and accurate flight route search and booking service capable of handling real-time user requests while ensuring consistent results and smooth coordination between services.

## 🌟 Vision

The platform should allow users to search for flight connections across different airports, receive intelligent route suggestions, and book travel while coordinating with reservation, billing, and passenger services. The system should support multiple users, time zones, and travel constraints.

## 👥 User Roles

- **Traveler** – Searches for available flights and books a full travel itinerary.
- **Airline Operator** – Manages flights, defines airport connections, and updates availability.
- **Platform Admin** – Maintains system integrity and oversees booking reliability.

## ✅ Core Use Cases

- Search for available flights between two or more locations.
- Receive route options with layovers and estimated total time.
- Book a travel itinerary and reserve seats.
- Receive confirmation and itinerary details.
- Airline operators update schedules and seat availability.

---

## 🔍 Constraints & Expectations

- Support for multi-hop route search and time-based constraints (arrival/departure windows).
- Multiple teams must integrate (search, reservation, billing, etc.).
- System must prevent overbooking and manage partial failures gracefully.
- Should reflect updated availability in near real time.
- Handle date/time consistency across time zones.

---

## 🧠 Architectural Prompts

- How will you model and query route connections efficiently?
- What happens when multiple users try to book the same limited seat?
- How will you ensure consistent availability across services?
- Should your search engine cache routes? How?
- How will the system behave when a downstream service (like billing) fails?

---

> "May your flights be connected, your seats be confirmed, and your transfers on time."

---

