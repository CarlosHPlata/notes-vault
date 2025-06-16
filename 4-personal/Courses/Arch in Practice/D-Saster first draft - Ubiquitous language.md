---
created:
  - 2025-05-15 12:42
tags:
  - Programming/topic
course: architecture in practice
---

# 📃 Api from requirements draft 15-05-2025
---
## Api draft

```
GET /event/{id}
-> { event & venue }

GET /event?artist={artinst}&location={venue}&event="event"
-> { Partial<event>[] }

GET /ticket/purchase?eventId={eventID}
-> { ticket[] }
-> { queueId }

POST /ticket/reserve { eventId, ticketId }
-> { ticket }

PATCH /ticket/complete { ticket & paymentDetails }
-> { ticket purchase details }

POST /event {event & venue}

PUT /event { Partial<event> }

GET /event/analysis
-> { event & salesDetails }
```

# 📦 References

---

- [[D-Saster first draft - Requirements]]
- [[Architecture - Ubiquitous Language]]