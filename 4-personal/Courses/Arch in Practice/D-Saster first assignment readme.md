---
created:
  - 2025-05-14 23:18
tags:
  - Programming/topic
course: architecture in practice
---

# 📃 14-05-2025

---
# 🎟️ Ticket D-Saster: Concert Ticket Service

> *Allowing you to meet your favorite bat-eating rockstars since Jan 1982.*
---

## Mission and vision
[[Project Proposal - Concert Ticket Service]]

---

## 🧪 Some of the Functional Highlights

You **must address** the following behaviors in your design:

1. 🧾 **View Events**  
   - Users can view concerts and see remaining tickets

2. ⏳ **Queueing**  
   - If tickets are temporarily reserved, users may enter a queue

3. 🔒 **Time-Limited Reservation**  
   - Starting checkout reserves a seat for a limited time window

4. ⌛ **Purchase Deadline**  
   - User must complete payment before the timer expires or lose reservation

5. 🗺️ **Seat Map**  
   - Users see seat pricing and availability visually

6. 🧠 **Trusted Timer**  
   - Timer logic must run server-side — **UI timers are decorative only**

---

## ✅ Deliverables

- 📄 Functional & non-functional requirements 
- 🧱 Initial domain breakdown (entities and api)  
- 🧭 First architectural sketch (bounded domains)  

---

## 🎓 Learning Goals

You’ll practice:

- Turning vague ideas into system requirements  
- Thinking about architecture properties through NFRs
- Identifying context boundaries and subdomains  
- Communicating ideas through language and visuals  
- Thinking like an architect from day one

---

## 🔐 Constraints & Anti-Goals

### ❌ You don’t need to:
- Build real yet
- Write backend/frontend code  
- Optimize performance  
- Deploy to production

### ✅ You should:
- Model smart, justifiable boundaries  
- Focus on clarity of thought and structure  
- Present ideas in diagrams

# 📦 References

---

- [[Project Proposal - Concert Ticket Service]]
- [[Architecture - Functional Requirements]]
- [[Architecture - Non-Functional Requirements]]
- [[Architecture - DDD What is Domain Driven Design]]
- [[Architecture - Conway's law]]
- [[Architecture - Crack a System Design interview]]