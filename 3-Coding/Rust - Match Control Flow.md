---
created:
  - 2024-11-06 13:02
aliases:
  - Match Control Flow 06-11-2024
  - Rust - Switch
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Match Control Flow 06-11-2024

---

Rust has a powerful control flow construct called `match`, that allows you to compare a value against a series of patterns and then execute code based on which pattern matches.

Patterns can be made up of literal [[Rust - variables and types|Variables]] values, names, wildcards, [[Rust - Enums|Enums]] and many other things.

## Basic Usage
To use a match we only have to use the keyword `match` followed by the variable we wanna match. Check next example:

```rust
enum Coin {
  SincoPesos,
  CincoPesos,
}

fn value_in_pesos(coin: Coin) -> u8 {
  match coin {
    Coin::SincoPesos => 555555,
    Coin::CincoPesos => 5,
  }
}
```

>[!tip] When the code is short you can use simply an arrow and then return the value ([[Rust - Implicit return|See Implicit Return]])

## Brackets and multiline
If you want to get more from what you already matched you can enclose it with brackets:

```rust
fn value_in_pesos(coin: Coin) -> u8 {
  match coin {
    Coin::SincoPesos => {
      println!("You found sinco peso");
      55555
    }
    Coin::CincoPesos => 5,
  }
}
```

> [!faq] Notice that when using brackets you don't have to put the comma at the end.

## Inference and arrow function
The match pattern works as an arrow function, meaning it works as a function that can accept parameters, those parameters will be filled from the data you are using to match.

For example let's think about the next Enums:
```rust
enum Type {
  Fire,
  Ice,
}

enum Creature {
  Human,
  Dragon(Type),
}
```

Notice how the `Creature` Enum has in the `Dragon` defined a parameter of type `Type`.
What if we want to do a `match` that does something with the `Type` when the Creature is a Dragon.

```rust
fn get_creature_id(creature: Creature) -> u8 {
  match creature {
    Creature::Human => 1,
    Creature::Dragon(type) => {
      println!("This dragon is type {type:?}!");
      2
    }
  }
}
```

## Exhaustive matches
> [!danger] The match clausule is exhaustive meaning that it will fail if you don't cover all the possible cases

## Default matches

Since **Matches are exhaustive** we have to cover all possibilities, but that doesn't mean we have to map all of them, we can rely on a **default match**.

> [!faq] Match patterns are evaluated in order, so the default should always be at the end.
### Default with parameter
The first is to declare the default as a parameter, **this will let us use the value that is being matched for something else**.

```rust
let dice_roll = 9;
match dice_roll {
  3 => add(),
  7 => remove(),
  other => do_something(other),
}
```

Notice how we declare `other` this let's us catch any other value that aren't `3` or `7` and use it in the function `do_something`.

### Default no parameter
Let's think that you don't want to use the value matched as parameter, you can replace the variable name with underscore `_`.

```rust
let dice_roll = 9;
match dice_roll {
  3 => add(),
  7 => remove(),
  _ => do_nothing(),
}
```

### Empty match
Let's think now that you really don't want to do nothing when the pattern is not matched, you can use a [[Rust - variables and types|Empty Tuple]].

```rust
let dice_roll = 9;
match dice_roll {
  3 => add(),
  7 => remove(),
  _ => (),
}
```

> [!tip] If you have only one option is better to use the [[Rust - Concise Control Flow with if let|if let]].
# 📦 References

---
- [[Rust - Enums]]
- [[Rust - variables and types]]
- [[Rust crash course - match control flow 2024-11-06]]