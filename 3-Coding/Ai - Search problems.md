---
created:
  - 2025-06-19 22:27
aliases:
  - Search problems 19-06-2025
tags:
  - Programming/topic
language: ai
---

**Topics:** [[Artificial Intelligence & Machine Learning]]

# 📃 Search problems 19-06-2025

---
A **Search Problem** is a formalized way to describe decission-making tasks in **Artificial Intelligence**. it frames a goal-oriented scenario as a traversal through a space of possible configurations (states) that an intelligent [[Ai - The Role of the Agent in AI Search|Agent]] can reach through a series of valid actions.
## Core components
A search problem consists of:
- **Initial State** $S$: The starting configuration of the agent
- **A function** $Actions(S)$:  function that returns the list of valid actions in state $S$.
- **Transition Model**: Describes what state results from performing an action, formally described as a function $Result(S,A)$ A function that returns a future state $S'$ result of applying an action $A$ in a state $S$.
  $\text{Result}(S, A) \to S'$
- **Goal Test**: A boolean function that checks whether a state satisfies the goal.
- **Path Cost**: A function that assigns a numeric cost to a path (typically additive). Often denoted as $\text{g}(N)$ in search algorithms.

From these elements, we define the **state space**, the set of all states reachable from the initial state using any sequence of actions. Conceptually, this forms a **Graph** where:

- $Nodes = States$ see: [[Ai - Node Representation in Search Problems|Nodes representation]]
- $Edges = \text{transition between states via actions}$

## Why it matters
This formal structure enables generic AI algorithms (like [[Algorithms - BFS|BFS]], [[Algorithms - DFS|DFS]], [[Algorithms - A star|A*]]) to solve a wide variety of problems:
- Finding a path in a maze.
- Solving puzzles.
- Planning actions in robotics
- Strategic game playing

Once framed as a search problem, the same algorithms can be reused across domains.

# 🔗 Relevant Notes

---
- [[Ai - The Role of the Agent in AI Search]]
- [[Ai - Node Representation in Search problems]]
- [[Ai - Informed vs Uninformed Search problems]]
- [[Algorithms - BFS]]
- [[Algorithms - DFS]]
- [[Algorithms - Dijkstra’s]]
- [[Algorithms - Greedy Best First Search]]
- [[Algorithms - A star]]
# 📦 References

---

- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)