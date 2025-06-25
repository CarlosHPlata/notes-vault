---
created:
  - 2025-06-24 21:15
aliases:
  - Zero-sum games 24-06-2025
tags:
  - Programming/topic
language: ai
---

**Topics:** [[Artificial Intelligence & Machine Learning]]

# 📃 Zero-sum games 24-06-2025

---
A **zero-sum game** is a competitive scenario where one player's gain is exactly balanced by another player's loss. **In artificial intelligence**, especially in [[Ai - Adversarial Search|Adversarial Search]], this property is used to model two-player deterministic games like *chess* or *tic-tac-toe*.

## Definition
> For all states $S$ in $TerminalStates$ the result of the $utility$ for player a $pa$ is the inverse of the $utility$ for player b.

$$\forall S \in \text{TerminalStates}, \text{Utility}_{pa}(S) = -\text{Utility}_{pb}(S)$$

# 🔗 Relevant Notes

---
- [[Ai - Adversarial Search]]
- [[Ai - Utility functions in terminal state for adversarial search]]
# 📦 References

---
- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)