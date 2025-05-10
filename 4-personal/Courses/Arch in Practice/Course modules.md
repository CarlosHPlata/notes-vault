---
created:
  - 2025-04-13 18:44
aliases: []
Course: Architecture in Practice
---
# 🏢 Software Architecture Course
---

## 🧭 Module 1: Software Architecture Fundamentals 
**Weeks**: 1-2
**Theme**: Learn what is software architecture, and kickoff
### 🧠 Theoretical Topics
- What is Software Architecture?
- Conway’s Law & Team Topologies
- Domain-Driven Design (DDD)
- Bounded Contexts & Aggregates
- REST vs gRPC
- OpenAPI Spec
- Contract-First API Design
### 🎯 Learning Goals
- Understand software architecture’s strategic role
- Identify bounded contexts and define responsibilities
- Design APIs using a contract-first approach
### 🛠️ Team Deliverables
- Domain model (Context Map)
- OpenAPI spec
- Team charter (roles, values, rituals)
- Kickoff pitch: your company + your service’s purpose

---

## 🚢 Module 2: Microservice Delivery & Internal Launch  
**Weeks**: 3–5  
**Theme**: Your team must deliver your first production-ready microservice. Containerize it, integrate with other teams, and build CI/CD pipelines.
### 🧠 Theoretical Topics
- 12-Factor App
- Docker & Docker Compose
- Microservice Communication Patterns
- Event-Driven Architecture (intro)
- CI/CD principles
- Databases and Differences (SQL, No SQL, Graph, key-value, Elastic)
- GitHub Actions
- Semantic Versioning
### 🎯 Learning Goals
- Apply microservice design best practices
- Use containers for deployment consistency
- Set up reliable and testable pipelines
### 🛠️ Team Deliverables
- Microservice Dockerized and runnable locally
- CI pipeline: build, test, and publish image
- Basic integration with one other team
- Public README with usage instructions

---

## 📊 Module 3: Operations, Monitoring & Resilience  
**Weeks**: 6–8  
**Theme**: The system is live! Add monitoring, alerting, and resilience features to ensure it behaves well under pressure.
### 🧠 Theoretical Topics
- Observability: Logs, Metrics, Traces
- Prometheus, Grafana, Loki
- Quality Attributes: Availability, Performance, Modifiability
- Architectural Tactics: Retry, Timeout, Circuit Breakers, Redundancy
- Chaos Testing (intro)
### 🎯 Learning Goals
- Implement observability: metrics, logs, traces
- Design for fault tolerance and graceful degradation
- Evaluate architecture with quality attributes
### 🛠️ Team Deliverables
- Prometheus metrics + Grafana dashboard
- Structured logs with Loki
- Resilience improvements (timeouts, retries, etc.)
- Design tradeoff discussion (e.g., complexity vs stability)

---

## 🔐 Module 4: Security, Scalability & Product Launch  
**Weeks**: 9–10  
**Theme**: You're going public. Secure your services, evaluate architecture, and get ready to pitch your product to stakeholders.
### 🧠 Theoretical Topics
- AuthN/AuthZ (OAuth2, JWT)
- API Security: headers, CORS, secrets management
- Horizontal vs Vertical Scaling
- Stateless Design & 12-Factor Review
- Architecture Evaluation (ATAM)
- Final review of quality attributes
### 🎯 Learning Goals
- Secure API endpoints and identity flows
- Ensure services scale and are cloud-ready
- Evaluate architectural decisions using scenarios
### 🛠️ Team Deliverables
- Secured API with Auth implementation
- Deployment architecture diagram
- ATAM-style peer review of another team's architecture
- Final product demo + system walkthrough

---

## 🧩 Bonus: Engineering Culture & Teamwork  
_Soft skills embedded throughout all modules._
### 🧠 Topics Include
- Tech Lead & Role Expectations
- Giving and Receiving Feedback
- Architectural Decision Records (ADRs)
- Code Review Etiquette
- Agile Estimation & Planning
- Async Communication and Decision-Making

---

> _“Every architecture decision is a business decision in disguise.”_  
> – Inspired by *Software Architecture in Practice*

