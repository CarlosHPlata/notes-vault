---
created:
  - 2025-06-24 23:39
aliases:
  - Utility functions in terminal state for adversarial search
tags:
  - Programming/topic
language:
  - ai
---

**Topics:** [[Algorithms]], [[Artificial Intelligence & Machine Learning]]

# 📃 Utility functions in terminal state for adversarial search 24-06-2025

---
A **utility function** assigns a numerical value to a **terminal state** in a game, representing how desirable the outcome is for a given player. In adversarial search, it's used to guide decision-making by quantifying win/loss/draw outcomes.

In a [[Ai - Zero-sum games in adversarial search|Zero-sum game]]:
- $Utility(S)$: Is only defined for **terminal states** (game over).
- It returns a **scalar** value:
    - $+1$ win for **MAX** player
    - $0$ draw or tie.
    - $-1$ win for **MIN** player.

> [!warn] In stochastic or multiplayer games, utility may be extended into **expected utility** or vector-valued payoffs.

# 🔗 Relevant Notes

---
- [[Ai - Adversarial Search]]
- [[Ai - Zero-sum games in adversarial search]]
# 📦 References

---
- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)