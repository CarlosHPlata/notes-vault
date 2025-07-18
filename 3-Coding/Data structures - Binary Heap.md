---
excalidraw-plugin: parsed
excalidraw-open-md: true
created:
  - 2025-06-23 14:47
aliases:
  - Binary Heap 23-06-2025
tags:
  - Programming/topic
language: data structures
---


**Topics:** [[Data structures]]

# 📃 Binary Heap 23-06-2025

---
A binary Heap is a complete binary tree that stores data efficiently, allowing quick access to the **maximum** or **minimum** element, depending of the type fo heap. It can be either a **Min** heap or a **Max** heap.

In a **Min** heap the **root** element of the tree is the **smallest** among all the **nodes** in the heap, while in a **Max** heap is the opposite where the **root** is the **greatest** among all the **nodes**.

## Constrains
The **heap** must be a **complete binary tree** meaning:
- **All levels are fully filled**, except possibly the last level.
- The last level is filled from **left to right** with no gaps.

It also has to **complain** to the order decision:
- All **parent leaves** are always the greatest or lowest (depending of type) of the **leaves** of all their children.
## Diagram
![[Data structures - Binary Heap|10000]]

## Representation
To take all advantage and optimization possible, heaps are always represented in [[Data Structures - Array representation of binary tree|an array]]. This ensures that when calculated **insertions and deletions** always take $O(\log{n})$. 

| Operation          | Time Complexity |
| ------------------ | --------------- |
| *insert*           | $O(\log{n})$    |
| *Remove from root* | $O(log n)$      |
| *peek*             | $O(1)$          |

## Usage
The usage of heaps could vary depending on the need, but they are commonly used to represent [[Data structures - Priority Queue|Priority Queues]]. to know how to code it, visit that note.
# 🔗 Relevant Notes

---
- [[Data structures - Array representation of binary tree]]
- [[Data structures - Priority Queue]]
# 📦 References

---

- [Binary heap - geeksforgeeks](https://www.geeksforgeeks.org/dsa/binary-heap/)

%%
# Excalidraw Data

## Text Elements
8 ^BvPzGmV0

7 ^jzciViTt

6 ^7WhWyUqd

5 ^s0Brfked

4 ^lZ5oAH6l

3 ^iQSKpyi7

8 ^8FtWKLRh

7 ^hKlwXcoB

6 ^AgPnXiP9

3 ^EUcDkD1H

2 ^xZu8jEFS

4 ^kphaQMRu

8 ^P7an351r

4 ^vp6PuRA7

6 ^T4ZbLbQu

7 ^idUSK0sJ

3 ^M9PEWN2e

Max-Heaps examples ^7XCodBsu

## Drawing
```compressed-json
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
```
%%