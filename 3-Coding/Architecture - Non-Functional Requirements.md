---
created:
  - 2025-05-14 00:42
aliases:
  - Non-Functional Requirements 14-05-2025
tags:
  - Programming/topic
  - course
  - architecture
  - Interview
  - quality-attributes
language: architecture
---

**Topics:** [[Architecture]]

# 📃 Non-Functional Requirements 14-05-2025

---
Non-functional requirements (NFRs) describe the _qualities_ the system must uphold. They’re often implicit but are just as critical as functional requirements. Where functional requirements say _what_ the system must do, **NFRs say _how well_ it must do it**.

Common categories:
- **Performance**: Response times, throughput
- **Scalability**: Vertical and horizontal capacity
- **Reliability**: Fault tolerance, uptime guarantees
- **Maintainability**: Modularity, ease of updates
- **Portability**: Deployability across environments
- **Security**: Data protection, authentication, authorization

These often emerge **after** discussing functional requirements. You ask:
- What scale is expected for this feature?
- What happens under high load?
- What’s the consequence of failure in this part?

Example:
- Functional requirement: *"System stores large files uploaded by users"*  
- NFRs: "*Must support 2GB files*", "*99.9% uptime*", "*Latency < 1s for metadata*"

# 📦 References

---

- [[Architecture - Functional Requirements]]
- [[Architecture - DDD Forms of relationships between subdomains]]