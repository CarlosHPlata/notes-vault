---
created:
  - 2025-06-19 23:11
aliases:
  - Node Representation in Search Problems 19-06-2025
tags:
  - Programming/topic
language: ai
---

**Topics:** [[Artificial Intelligence & Machine Learning]]

# 📃 Node Representation in Search Problems 19-06-2025

---
In AI Search algorithms, a **node** is an internal data structure used to represent a point in the search space. While the **State** defines the external configuration (e.g. agent's position), the **node** tracks additional metadata required for traversing, expanding, and reconstructing solutions.

A node typically stores:
- **State**: The current configuration in the environment.
- **Parent Node**: A reference to the node which this one was generated when explored.
- **Action**: The action that was taken to reach the node from its parent.
- **Path Cost** $g(N)$: The accumulative cost from the initial state to this node.

This structure enables:
- **Backtracking**
- **Path reconstruction**
- **Cost calculation**

Example:
```yaml
Node:
 ├─ state: (x, y)
 ├─ parent: reference to previous node
 ├─ action: 'move-right'
 └─ path_cost: 6
```

# 🔗 Relevant Notes

---
- [[Ai - Search problems]]
# 📦 References

---
- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)