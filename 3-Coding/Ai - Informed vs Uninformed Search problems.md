---
created:
  - 2025-06-19 23:05
aliases:
  - Informed vs Uninformed Search in AI 19-06-2025
tags:
  - Programming/topic
language:
  - ai
  - algorithms
---

**Topics:** [[Artificial Intelligence & Machine Learning]], [[Algorithms]]

# 📃 Informed vs Uninformed Search 19-06-2025


---
Search strategies can be broadly categorized as **uninformed** or **informed**, based on whether they use additional knowledge about the problem domain. The choice between them affects efficiency, completeness, and optimality.

## Uninformed Search (Blind Search)
These strategies do not use **domain-specific knowledge** beyond the problem definition (initial state, actions, transition model, goal test).

## Informed Search (Heuristic Search)
These strategies use **problem-specific knowledge** to guide and find solutions more efficiently, typically through an **heuristic function** called $h(N)$ that estimates the cost of the goal from a given node $N$.

# 🔗 Relevant Notes

---
- [[Algorithms - BFS]]
- [[Algorithms - DFS]]
- [[Algorithms - A star]]
- [[Algorithms - Greedy Best First Search]]
- [[Algorithms - Dijkstra’s]]
# 📦 References

---
- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)