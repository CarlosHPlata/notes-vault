---
created:
  - 2025-06-19 22:55
aliases:
  - The Role of the Agent in AI Search 19-06-2025
tags:
  - Programming/topic
language: ai
---
**Topics:** [[Artificial Intelligence & Machine Learning]]

# 📃 The Role of the Agent in AI Search 19-06-2025

---
In the context of AI, an agent is an autonomous entity that **perceives** its environment and **acts** upon it to achieve specific goals. When solving a search problem, the agent must decide which actions to take in order to reach the **goal state**.

## Definitions
- **Agent:** A system that observes its environment (via *sensors*) and takes actions (via *actuators*)
- **Rational Agent:** Chooses actions that maximize expected performance according to a defined objective.

In search problems the agents:
- Are set in a **known state**.
- Has a set of **possible actions**
- Uses the **transition model** to retrieve the future states $S'$ after taking all possible actions $A$ in the known state $S$.
- Aims to reach **goal state**.
- May optimized based on a **path cost**

# 🔗 Relevant Notes

---
- [[Ai - Search problems]]
- [[Ai - Node Representation in Search problems]]
- [[Ai - Informed vs Uninformed Search problems]]
# 📦 References

---
- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)