---
excalidraw-plugin: parsed
excalidraw-open-md: true
created:
  - 2025-06-23 14:25
aliases:
  - Priority Queue 23-06-2025
tags:
  - Programming/topic
language: data structures
---


**Topics:** [[Data structures]]

# 📃 Priority Queue 23-06-2025

---
Priority Queue data structure is a **special queue** in which the elements are present not as per **FIFO** but according to the result of an [[Algorithms - Heuristics in search algorithms|Heuristic function]] $h(n)$, used during queue creation.

In a priority queue, the element at the front has the **lowest** or **highest** (depending on configuration) value of $h(n)$, not necessarily the earliest inserted. For example, below is a queue ordered by natural numbers:

![[Pasted image 20250623143819.png]]

Conceptually, a priority queue behaves like a regular queue from the outside; but internally, it is often implemented using a [[Data Structures - Binary Heap|binary heap]], which allows efficient insertion and retrieval based on priority.

## Min vs Max heaps
A **Min-heap** gives priority to elements with **lower** value of $h(n)$.
While a **Max-heap** does the opposite, giving priority to **higher** values.

## Implementation
As mentioned before, we will use a [[Data structures - Binary Heap|Binary Heap]] represented in an [[Data structures - Array representation of binary tree|Array representation of a tree]]. This will be the main structure we will rely on.

Let's remind how the arithmetic functions works for a tree in an Array Representation: [[Data structures - Array representation of binary tree#Arithmetic functions]]

> [!warning] All operations would take their examples as a Max Priority Queue, for a Min queue just inverse the comparisons.
### ➕ Insertion
Inserting into a priority queue, as described in the [[Data structures - Binary Heap|binary heap]] note, has a time complexity of $O(\log{n})$. Here’s a high-level overview of the process:

1. **Append** the new node $n$, with value $h(n)$, to the **end of the array**.
2. Perform a **"shift up"** operation to restore heap order:
    - Compare $h(n)$ with its parent $h(p)$.
    - If $h(n) > h(p)$ (for max-heap), **swap** them.
    - Repeat this process until the node is either at the root or no longer violates the heap property.

#### Pseudocode:
```ts
function insert(n: Node) {
    this.heap.push(n);
    let nodeIndex = heap.length - 1;
    
    shiftUp(nodeIndex);
}

function shiftUp(nodeIndex: number) {
    while ( 
        hasParent(nodeIndex)
        && h(nodeIndex) > h( parentIndex(nodeIndex) ) 
    ) {
        nodeIndex = parentIndex(nodeIndex);
        swap(nodeIndex, parentIndex(nodeIndex))
    }
}
```

### ➖ Removal (Extract Max)
Removing the root of **max-priority queue**, the element with the highest priority, is also done in $O(\log{n})$ time. This operation is often called **extract max** (or **extract min** for min-heaps). Here's a high-level overview of the process

1. **Swap** first element with last element in the array
2. **Remove** last element of the array.
3. Perform a **Shift Down** operation to restore heap order:
    1. Compare the moved element $h(n)$ to both children $h(r)$ and $h(l)$.
    2. If $h(n) < h(r) | h(n) < h(l)$ then swap it with the **larger** child (in a max heap) that is lesser than $h(n)$.
    3. Repeat this process until the node is either in a position where the heap is satisfied or at the end.

Why do we **swap** the last element with the first before removing it? Why not just return the **first element** directly?
Well, think twice: removing the **first element** of an array means all other elements must be **shifted left** to fill the gap. This operation takes $O(n)$ time, which is inefficient.
By **swapping** the first and last elements, we avoid this costly shift. We can then `pop()` the last element in $O(1)$, and use **Shift Down** to restore the heap.
#### Pseudocode
```ts
function extractMax() {
    swap(0, this.heap.length-1);
    const maxNode = this.heap.pop();

    shiftDown();
    return maxNode;
}

function shiftDown() {
    let nodeIndex = 0;
    while (
        //Since is a complete tree, if node has left child then it will have at least one child always
        hasLeftChild(nodeIndex) 
    ) {
        // set larger child as left frist
        let largerChildIndex = leftChildIndex(nodeIndex);

        // if right child exists and is larger use it
        if (
            hasRightChild(nodeIndex) 
            && h(rightChildIndex(nodeIndex)) > h(largerChildIndex)
        ) {
            largerChildIndex = rightChildIndex(nodeIndex);
        }

        // if current node is larger than both children, then break
        if ( h(nodeIndex) >= h(largerChildIndex) ) {
            break;
        }

        swap(nodeIndex, largerChildIndex);
        nodeIndex = largerChildIndex;
    }
}
```
## Diagram
![[Data structures - Priority Queue|10000]]
# 🔗 Relevant Notes

---
- [[Data structures - Binary Heap]]
- [[Data structures - Array representation of binary tree]]
# 📦 References

---

- [Priority Queue using Binary Heap](https://www.geeksforgeeks.org/priority-queue-using-binary-heap/)

%%
# Excalidraw Data

## Text Elements
1 ^6w1lGkkX

2 ^deF8OEqv

3 ^WtlDHvqa

4 ^tQrYEJle

## Drawing
```compressed-json
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=
```
%%