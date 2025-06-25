---
created:
  - 2025-06-23 22:50
aliases:
  - Dijkstra 23-06-2025
tags:
  - Programming/topic
language: algorithms
---

**Topics:** [[Algorithms]]

# 📃 Dijkstra’s 23-06-2025

---
**Dijkstra’s Algorithm** is an **uninformed search algorithm** that finds the **shortest path** from a starting node to all other reachable nodes in a [[Data Structures - Graphs|Graph]] with **non-negative edge weights**. It is a form of **uniform-cost search** that expands nodes based on the **lowest total cost so far** $g(n)$, without using any heuristic.

The difference with [[Algorithms - Greedy Best First Search|Best First Search]] is that instead of using an [[Algorithms - Heuristics in search algorithms|heuristic]] function $h(n)$ that estimates the **cost to a goal**, Dijkstra's takes the **opposite** approach, it calculates a function $g(n)$ of the **cost from the start**.

As with Best First Search, Dijkstra uses a [[Data structures - Priority Queue|min-priority queue]] to structure the nodes to visit.

> [!info] **Time and Space complexity**
> - **Time**: $O((n + e) \log {v})$
> - **Space**: $O(n + e)$
>     - $n$: Number of vertices (nodes)
>     - $e$ Number of edges.
## Core Idea
- Initialize the cost to all nodes as ∞, except the start node (set to 0)
- Use a **min-priority queue** to **select** the node with the **lowest cost-so-far**.
- Add the current node to the priority queue.
- Start a **visited set** with current node.
- While the **priority queue** is not empty:
    - Pop from the **priority queue**
    - If node is the **target** then return
    - Add every **neighbor** in the **adjacent** nodes that **are not visited** to the priority queue using $g(n)$.

## Pseudocode
```ts
const comparatorByCost = (a: Node, b: Node) => {
    return g(a) - g(b); // Min-priority queue based on cost
}

function dijkstra(start: Node, target: Node) {
    const priorityQueue = new MinPriorityQueue(comparatorByCost);
    const visited = new Set<Node>();
    const gScore = new Map<Node, number>();

    gScore.set(start, 0);
    priorityQueue.insert(start);
    visited.add(start);

    while ( !priorityQueue.isEmpty() ) {
        const current = priorityQueue.extractMin();
        if (current == target) return;

        for (const neighbor of current.adjacent()) {
            const tentativeG = gScore.get(current)! + g(current, neighbor)
            if (!gScore.has(neighbor) || tentativeG < gScore.get(neighbor)) {
                gScore.set(neighbor, tentativeG);
                visited.add(neighbor);
                priorityQueue.insert(neighbor)
            }
        }
    }
}
```

# 🔗 Relevant Notes

---
- [[Algorithms - Greedy Best First Search]]
- [[Algorithms - A star]]
- [[Ai - Informed vs Uninformed Search problems]]
# 📦 References

---

-<% tp.file.cursor(2) %>