---
created:
  - 2025-06-24 15:48
aliases:
  - Adversarial Search 24-06-2025
tags:
  - Programming/topic
language: ia
---

**Topics:** [[Artificial Intelligence & Machine Learning]]

# 📃 Adversarial Search 24-06-2025

---
**Adversarial search** is a type of search used in environments where **an agent copetes against one or more opponents** (e.g. games). Unlike the [[Ai - Search problems|Single Search problems]] the agent *must consider the actions of the opponents* who actively try to prevent it from reaching its goal.

> “In adversarial search, your opponent is part of the environment and actively works against you.” 
— _Artificial Intelligence: A Modern Approach_, Russell & Norvig
## Definition
Adversarial search models competitive setting where **agents take turns**, and the outcome depends on the sequence of moves by all participants. It is primarily used in [[Ai - Zero-sum games in adversarial search|Zero-sum games]], where one player's gain exactly another's loss.

## Core elements of the Model
A typical adversarial search problem is defined by:
- $S_{0}$: Initial state
- $Player(S)$: indicates which player's turn is at state $S$.
- $Actions(S)$: Returns all legal moves $A$ available in state $S$.
- $Result(S, A)$: Returns the state $S'$ after applying an action $A$ on a state $S$.
- $Terminal(S)$: Checks whether the state $S$ is a terminal state.
- $Utility(S)$: Numerical score value for the outcome of terminal state $S$.

## Agents
In the adversarial search, there's defined two types of [[Ai - The Role of the Agent in AI Search|agents]] when adversarial search is on.

- **MAX Agent**: *Tries to maximize the utility.*
    - Picks an action $A$ in $Actions(S)$ that produce highest value.
- **Max agent**: *Tries to minimize the utility*.
    - Picks an action $A$ in $Actions(S)$ that produce lowest value.

## Algorithmic Implication
Adversarial search leads to decision trees known as **game trees**, and solving them involves algorithms like [[Algorithms - Minimax|Minimax]] which simulate all possible future moves and counter-moves

# 🔗 Relevant Notes

---
- [[Algorithms - Minimax]]
- [[Ai - Zero-sum games in adversarial search]]
# 📦 References

---
- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)