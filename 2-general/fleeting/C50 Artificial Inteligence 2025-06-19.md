---
created:
  - 2025-06-19 15:10
tags:
  - fleeting
  - new
cssclasses:
  - color-math
---
```meta-bind-button
label: Start adding topics
id: transcript
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
# 🔷 Introduction to Artificial Inteligence
What will be seen
- Learning how to play a game
- Knowledge how they represent information
- Optimization profits.
- Machine Learning
- Neural Networks
- Natural Language processing

## Artificial intelligence
## Search
The ai able to search to solutions to solve a problem, like how to play tic tac toe or find their path on a path.

We would like for an agent to loof for a solution of a problem. Classic 15 puzzle to slide the tiles to order the numbers, find a way in a maze. A maze problem you can use it to get driver directions in a map.

A search problem is a problem that has an initial state, a set of actions, a transition model, and a goal.

We need to introduce to terminology

- **Agent** is entity that preceives its environment and acts upon that environment.
- **state** is a configuration of the agent and its environment
- **Initial state** the state where the agent starts
- **actions** a function *Action(s)* returns the set of actions that can be executed in state *s*
- **Transition model** a description of what state results from perfoming any applicable action. Function *Result(s, a)* returns the state of resulting from performing action *a* in state *s*.
- **State space** the set of all states reachable from the initial state by any sequence of actions (graph)
- **goal test** way to determine whether a given state is a goal state.
- **Path cost** numerical cost associated with a given path, in the graph representation each relationship between nodes have a cost.

The agent should discover what actions to take from the initial state to get a desired goal.

We will use a 
**Node**: a data structure that keeps track of:
 - A state
 - A parent state (other node)
 - An action (action applied to parent to get this node)
 - A path cost (from initial state to node)

How to solve the problem
We will start from a state `s` and start explore from there, we have multiple options, and we will explore them, and do it iterative.
The **frontier** is all the actions that we could explore that are yet not explored.

BFF (queue) / DFS (stack)
- Start with a frontier that contains the initial state.
- Start with an empty explore set
- Repeat:
    - If frontier is empty, there's no solution.
    - Remove a node from the frontier and use it.
    - If nodes contains goal state, return the solution.
    - Add the node to the explore set
    - Otherwise Expand node, add resulting nodes to the frontier if they are not in explored set.

Example Find a path from a graph from node A to E
(A) -> (B)
(B) -> (C)
(B) -> (D)
(C) -> (E)
(D) -> (F)

Deep first search
Breadth first search is good for searching optimal path but it requires more memory if it explore all stages when the goal is far away.

```python
import sys

class Node():
    def __init__(self, state, parent, action):
        self.state = state
        self.parent = parent
        self.action = action

class StackFrontier():
    def __init__(self):
        self.frontier = []

    def add(self, node):
        self.frontier.append(node)

    def contains_state(self, state):
        return any(node.state == state for node in self.frontier)

    def empty(self):
        return len(self.frontier) == 0

    def remove(self):
        if self.empty():
            raise Exception("empty frontier")
        else:
            node = self.frontier[-1]
            self frontier = self.frontier[:-1]
            return node

class QueueFrontier(StackFrontier):
    def remove(self):
        if self.empty():
            raise Exception("empty frontier")
        else:
            node = self.frontier[0]
            self frontier = self.frontier[1:]
            return node

class maze():
    def __init__(self, filename):
        #read file and set height and width of maze
        with open(filename) as f:
            contents = f.read()

        if contents.count("A") != 1:
            raise Exception("Maze must have one start point")
        if contents.count("B") != 1:
            raise Exception("Maze must have one goal")
            
        #Determine height and width
        contents = contents.splitlines()
        self.height = len(contents)
        self.width = max(len(line) for line in contents)

        #Keep track of walls
        self.walls = []
        for i in range(self.height):
            row = []
            for j in range(self.width):
                try:
                    if contents[i][j] == "A":
                        self.start = (i, j)
                        row.append(False)
                    elif contents[i][j] == "B":
                        self.goal = (i, j)
                        row.append(False)
                    elif contents[i][j] == " ":
                        row.append(False)
                    else:
                        row.append(True)
                except IndexError:
                    row.append(False)
            self.walls.append(row)

        self.solution = NONE

...

    def solve(self):
        self.num_explored = 0
        start = Node(state=self.start, parent=None, action=None)
        frontier = StackFrontier()
        frontier.add(start)
        self.explored = set()

        while True:
            if frontier.empty():
                raise Exception("No solution")

            node = frontier.remove()
            self.num_explored += 1

            if node.state == self.goal:
                actions = []
                cells = []
                while node.parent is not None:
                    actions.append(node.action)
                    cells.append(node.state)
                    node = node.parent
                actions.reverse()
                cells.reverse()
                self solution = (actions, cells)
                return

            self.explored.add(node.state)

            for action, state in self.neighbors(node.state):
                if not frontier.contains_state(state) and state not in self.explored:
                    child = Node(state=state, parent=node, action=action)
                    frontier.add(child)
                
```

maze.txt
```
####B#
#### #
###  #
### ##
    ##
A#####
```

Modifying the algorithm, we can optimize by making an assumptions like if we know the coordinates or direction of the goal. This makes a difference between algorythms:

- **Uninformed search** search strategy that uses no problem-specific knowledge
- **Informed search** search strategy that use problem-specific knowledge to find solutions more efficiently.

There are a number of informed search algorithms one fo this is **greedy best-first search**:
Search algorithm that expands the node that is closest to the goal, as estimated by a heuristic function *h(n)*.

In the maze example the heuristic function could be the result of the mathematical formula of distance of two points (A and B) or the Manhattan distance formula.

Sometimes the heuristic function can be mistaken, if the maze complicates when taking the greedy path, and later it deviates on the path. For this we can improve even better.

**A * search** is a search algorithm that expands node with lowest value of *g(n) + h(n)* where *g(n)* is the cost to reach node and *h(n)* is the estimated cost to goal (algorithm used by Google Maps)
is Optimal if:
 - *h(n)* is admissible (never overestimates the true const) and
 - *h(n)* is consistent for every node *n* and successor *n'* with step cost *c*, *h(n) <= h(n') +c*

## Adversarial Search
Something take turns to the agent fails the goal.
algorithm for this is **Minimax**, it works by assign outcomes a value for example in tik tak toe, -1 is x loosing, 0 is tie, and 1 x is wining.
We will have a MAX agent aims to maximize score and a MIN agent aims to minimize the score.

the game for this algorithm will require
- $S_{0}$: Initial state
- $Player(S)$: returns which player to move in state $S$
- $Actions(S)$: returns legal moves in state $S$
- $Result(S, A)$: returns state after action $A$ taken in state $S$.
- $Terminal(S)$: checks if state $S$ is a terminal state.
- $Utility(S)$: final numerical value for terminal state $S$.

The algorithm is recursive when a Min or Max player enters, it iterates over all the possible results, then it calculates by adding the values of all possible states until terminal state.
This is the logic of minimax.

Pseudocode:
- Given a state $S$
    - **Max** picks action $A$ in $Actions(S)$ that produces highest value of $Min-Value(Result(S,A))$
    - **Min** picks action $A$ in $Actions(S)$ that produces smallest value of $Max-Value(Result(S,A))$

Pseudocode Function $Max-Value(state)$:
```python
def MaxValue(state):
    if Terminal(state):
        return Utility(state)

    v = -INFINITY
    for action in Actions(state):
        v = Max(v, MinValue(Result(state, action)))

    return v
```

Pseudocode function for $Min-Value(state)$:
```python
def MinValue(state):
    if Terminal(state):
        return Utility(state)

    v = INFINITY
    for action in Actions(state):
        v = Min(v, MaxValue(Result(state, action)))

    return v
```

This is a long process and recursive is not enough in complex games with huge decision threes. How we can optimize it?

One way is to not traverse all future states by storing the most relevant value (min or max) and if a future state already calculates worst than the most relevant one then I do not need to calculate future states. This is called **Alpha-Beta Pruning**.

This is good but not enough, for example chess has millions of possible states, even by narrowing four moves only the possible states are $288$ billion of possible states, for a complete chess game there are more moves possible than stars in the known universe $10^{2900}$ possible games.

For this a better approach is **Depth-Limited Minimax** for this approach we are saying that after $N$ number of moves we will stop. But how we figure it out the score of a game if we don't reach a final state after $N$ moves? for this we require an *evaluation function*:
Function that estimates the expected utility of the game from a given state.
