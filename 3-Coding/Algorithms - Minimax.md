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

![[Ai - Adversarial Search#Core elements of the Model]]

## Core principles
*"Maximizing the minimum gain"* the **MAX** player chooses ta move that yields the highest possible utility assuming the **MIN** player plays optimally to reduce it. And the **MIN** player chooses the opposite.

## Function definitions
Given a state $S$:
- $\text{MaxValue}(S)$: Chooses the action leading to the highest $Utility$ based on $MinValue(Result(S, A))$.
- $MinValue(S)$: Chooses the action leading to the lowest $Utility$ based on $MaxValue(Result(S, A))$.

### Pseudocode
```ts
function MaxValue(state) {
    if ( Terminal(state) ) {
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
    if ( Terminal(state) ) {
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
# 🔗 Relevant Notes

---
- [[Ai - Adversarial Search]]
- [[Ai - Zero-sum games in adversarial search]]
- [[Ai - Utility functions in terminal state for adversarial search]]
- [[Algorithms - Alpha-beta pruning]]
# 📦 References

---

-<% tp.file.cursor(2) %>