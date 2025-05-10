---
created:
  - 2025-04-14 00:11
aliases: 
Course: Architecture in Practice
---
# 🍔 Nom Nom Now: Food Delivery Service
*Feeding unemployed streamers, night owls, and ramen-fueled coders since forever.*

| Stat               | Value         |
| ------------------ | ------------- |
| 🧠Difficulty       | **Expert** 🔥 |
| 🧰Tech Agnosticism | ⭐⭐⭐⭐⭐    |

> [!info] **Stat Guide**
> - **Difficulty**:
>   - Easy: Suitable for students new to software development
>   - Mid: Assumes working knowledge of a programming language and framework
>   - High: Designed for students with experience in backend development and some infrastructure concepts
>   - Expert: Intended for those with industry experience and familiarity with microservice architectures
> - **Tech Agnosticism**: How much knowledge teams would have to choose tools and technologies _(more stars = more knowledge)_ meaning they have to have before hand tech related topics, like language advantages, risks, db models, patterns, frameworks.

---

## 🧭 Problem Statement

Hungry users expect fast, reliable, and accurate food delivery services. Restaurants update menus, customers place complex orders, and delivery agents must coordinate real-time logistics. Your team has been tasked with building a platform to manage all of this chaos: from browsing menus to tracking the courier's movement until the food arrives hot and (hopefully) on time.

## 🌟 Vision

NomNomNow connects customers, restaurants, and delivery agents through a distributed system. Users should be able to browse restaurants, place orders, pay securely, and track their delivery in real time. Restaurants should manage availability, promotions, and order prep. Couriers should get clear assignments and live updates.

## 👥 User Roles

- **Customer** – Browses menus, places orders, tracks delivery.
- **Restaurant Partner** – Manages menus, schedules, accepts orders.
- **Courier** – Receives deliveries and updates order status.
- **System Admin** – Oversees coordination and reliability of the system.

## ✅ Core Use Cases

- Search restaurants by location or cuisine.
- View menu items and availability.
- Add items to cart and place order.
- Receive order updates and live delivery tracking.
- Restaurants accept or reject incoming orders.
- Couriers mark pickup and delivery milestones.

---

## 🔍 Constraints & Expectations

- The platform must support **multiple concurrent users** and orders across locations.
- Data must remain **consistent and observable** across services.
- Integrations should be resilient to **failure in downstream services** (restaurant timeout, courier app crash, etc.).
- Teams should integrate their services via **clear API contracts**.
- Availability and delivery status must be kept **up to date in near real-time**.

---

## 🧠 Architectural Prompts

- How do you prevent race conditions when multiple couriers want the same delivery?
- How do you ensure a smooth order flow across restaurant → courier → customer?
- How will you handle spikes in traffic (e.g., lunch time)?
- What happens if a restaurant is offline during peak time?
- How can users track delivery status live?

---

> *“In NomNomNow, only the observant survive the hunger rush.”*

---

