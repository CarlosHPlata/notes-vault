---
created:
  - 2025-06-25 11:54
aliases:
  - Depth-Limited minimax
tags:
  - Programming/topic
language: algorithm
---

**Topics:** [[Algorithms]], [[Artificial Intelligence & Machine Learning]]

# 📃 Depth-Limited minimax 25-06-2025

---
**Depth-Limited Minimax** is a variation of the [[Algorithms - Minimax|Minimax algorithm]] where the recursive search is **cut off after a fixed depth $d$** instead of going all the way to terminal states. 
Think about how Minimax works, it infers all possible paths from given state $S$ iterating over all possible answers until a **final state**, this is not only expensive, but also in many cases **impossible**, think for example *chess* how many possible movements exists in chess? the answer is $10^{2900}$ possible games, are more chess moves possible than stars in the galaxy.

**Depth Limited** allows Minimax to work in games with **very large or infinite game trees**. 

> [!info] **Time and Space complexity**
> - **Time**: $O(b^d)$
> - **Space**: $O(d)$
>     - $b$: Average number of legal $actions$ per $state$
>     - $d$ Maximum depth of the game tree.

![[Ai - Adversarial Search#Core elements of the Model]]

![[Algorithms - Minimax#Function definitions]]

## Evaluation function
When the search stops early, the algorithm uses an **evaluation function** to estimate the **utility** of a non-terminal state. Create an evaluation for a non-terminal state is crucial.

Let's think for example in *chess* how would you evaluate a non-terminal state? One could say the **amount of pieces loss vs adversary pieces loss**, this would be a valid option, not too accurate, but good, another could be **Distance between possible check**. As more precise we build our **evaluation function** more intelligent our [[Ai - The Role of the Agent in AI Search|agent]] would be at evaluating it's possibilities.

## Structure
The standard Minimax recursion should be modified. Adding a $depth$ that decreases with each recursive call.

If $depth == 0$, return $Evaluation(state)$ **instead of** $Utility(state)$

## Pseudocode
```ts
function MaxValue(state, depth) {
    if ( isTerminal(state) ) {
        return Utility(state);
    }

    if ( depth == 0 ) {
        return Evaluation(state);
    }

    let value = Integer.MIN_VALUE;
    for (const action in Actions(state)) {
        const resultState = Result(state, action);
        const minPlayerValue = MinValue(resultState, depth);
        value = max(value, minPlayerValue);
    }

    return value;
}
```

```ts
function MinValue(state, depth) {
    if( isTerminal(state) ) {
        return Utility(state);
    }

    if( depth == 0 ) {
        return Evaluation(state);
    }

    let value = Integer.MAX_VALUE;
    for (const action in Actions(state)) {
        const resultState = Result(state, action);
        const maxPlayervalue = MaxValue(resultState, depth);
        value = min(value, maxPlayerValue);
    }

    return value;
}
```

## Combine with other
It can also be combined with [[Algorithms - Alpha-beta pruning|Alpha-beta pruning]] to improve it's performance.

![[Algorithms - Alpha-beta pruning#📚 key concepts]]

# 🔗 Relevant Notes

---
- [[Algorithms - Minimax]]
- [[Algorithms - Alpha-beta pruning]]
- [[Ai - Adversarial Search]]
- [[Ai - Zero-sum games in adversarial search]]
- [[Ai - Utility functions in terminal state for adversarial search]]
# 📦 References

---
- [Cs50 Harvard AI Lecture 0 notes](https://cs50.harvard.edu/ai/2024/notes/0/)
- [CS50 Harvard AI Slides Lecture 0](https://cdn.cs50.net/ai/2020/spring/lectures/0/lecture0.pdf)
- [CS50 Harvard Lecture 0](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/block-v1:HarvardX+CS50AI+1T2020+type@sequential+block@a52582b244c849289b4745d601fa6d43/block-v1:HarvardX+CS50AI+1T2020+type@vertical+block@17b5cbf6a3c348d28c6c02ab84765bb3)