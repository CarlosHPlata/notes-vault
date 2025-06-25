---
created:
  - 2025-06-24 22:09
aliases:
  - Minimax 24-06-2025
tags:
  - Programming/topic
language: algorithm
---

**Topics:** [[Algorithms]], [[Artificial Intelligence & Machine Learning]]

# 📃 Minimax 24-06-2025

---
The **Minimax algorithm** is a decision-making strategy used in [[Ai - Zero-sum games in adversarial search|Zero-sum]], two player games. It assumes both players play optimally: 
- One tries to **maximize** the utility (MAX).
- While the other tries to **minimize** it (MIN).

It simulates all possible moves and counter-moves, recursively exploring the game tree down to terminal states, then propagates back the optimal utility values.

> [!info] **Time and Space complexity**
> - **Time**: $O(b^d)$
> - **Space**: $O(d)$
>     - $b$: Average number of legal $actions$ per $state$
>     - $d$ Maximum depth of the game tree.

![[Ai - Adversarial Search#Core elements of the Model]]

## Core principles
*"Maximizing the minimum gain"* the **MAX** player chooses ta move that yields the highest possible utility assuming the **MIN** player plays optimally to reduce it. And the **MIN** player chooses the opposite.

## Function definitions
Given a state $S$:
- $\text{MaxValue}(S)$: Chooses the action leading to the highest $Utility$ based on $MinValue(Result(S, A))$.
- $MinValue(S)$: Chooses the action leading to the lowest $Utility$ based on $MaxValue(Result(S, A))$.

## Pseudocode
```ts
function MaxValue(state) {
    if ( isTerminal(state) ) {
        return Utility(state);
    }

    const value = Integer.MIN_VALUE;
    for (const action in Actions(state)) {
        const minPlayerValue = MinValue(Result(state, action));
        value = max(value, minPlayerValue);
    }

    return value
}
```

```ts
function MinValue(state) {
    if ( isTerminal(state) ) {
        return Utility(state);
    }

    const value = Integer.MAX_VALUE;
    for (const action in Actions(state)) {
        const maxPlayerValue = MaxValue(Result(state, action));
        value = min(value, maxPlayerValue);
    }

    return value;
}
```

## Complexity and cons
As you may guess from the pseudocode and definitions, you would notice this has a complexity of $O(b^{d})$ where:
- $b$ is the **branching factor**. The average number of legal moves ($actions$) available at each node in the game tree.
- $d$ is the **depth** of the game tree. How many moves ahead the algorithm is searching.

It is a **really expensive algorithm** there are certain improvements that can be done, for example:
 - [[Algorithms - Alpha-beta pruning]]
 - [[Algorithms - Depth limited Minimax]]

# 🔗 Relevant Notes

---
- [[Algorithms - Alpha-beta pruning]]
- [[Algorithms - Depth limited Minimax]]
- [[Ai - Adversarial Search]]
- [[Ai - Zero-sum games in adversarial search]]
- [[Ai - Utility functions in terminal state for adversarial search]]
# 📦 References

---
- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)