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
- <% tp.file.cursor(4) %>
# 📦 References

---

-<% tp.file.cursor(2) %>