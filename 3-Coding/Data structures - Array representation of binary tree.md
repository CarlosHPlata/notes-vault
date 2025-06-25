---
created:
  - 2025-06-23 15:16
aliases: []
tags:
  - Programming/topic
language:
  - data structures
---

**Topics:** [[Data structures]]

# 📃 Array representation of binary tree 23-06-2025

---
A **binary tree** can be efficiently represented as a **linear array**, where each element corresponds to a node. The position (index) of each element implicitly encodes its structural relationship within the tree. This method works specifically for **binary trees**, since each level in a binary tree contains at most **twice as many nodes** as the previous level; a pattern that fits naturally into array indexing.

With this structure, we can use simple arithmetic to navigate parent-child relationships.

## Arithmetic functions
Before going to it, we will assume the following:
- Exists a function $n = \text{Array}(i)$ which returns the node $n$ located at possition $i$
Now here are the functions:

1. **parent node** $p$ of a **node** at index $i$:
$$\text{p} = \text{Array}\left(  \frac{i-1}{2}  \right)$$
2. **Left** child $l$ of **node** at index $i$:
$$\text{l} = \text{Array}((2*i)+1)$$
3. **Right** child $r$ of **node** at index $i$:
$$r = \text{Array}((2*i)+2)$$
## Curiosity
When applying [[Algorithms - BFS|Breadth-First Search]] to a binary tree, the order of nodes visited (as seen in the **queue**) will match its **array representation**.

# 📦 References

---

- [Array Representation Binary Trees - Geekforgeeks](https://www.geeksforgeeks.org/dsa/array-representation-of-binary-heap/)