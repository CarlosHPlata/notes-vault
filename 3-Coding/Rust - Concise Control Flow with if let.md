---
created:
  - 2024-11-06 15:43
aliases:
  - Cocise Control Flow with if let 06-11-2024
  - Rust - if let
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Concise Control Flow with if let 06-11-2024

---
The `if let` syntax will let you combine the power of [[Rust - Match Control Flow|Match keyword]] without the fear of having to fulfill all the edge cases. It's a less verbose way to handle values that match one pattern while ignoring the rest.

## Basic usage

To use it, first let's see this case using [[Rust - Option]] and [[Rust - Match Control Flow|Match control flow]]:
```rust
let config_age = Some(3u8);

match config_age {
  Some(age) => println!("Your age is {age}"),
  _ => (),
}
```

As you could see in the example above we only want to match something when the type is `Some` and when is not we don't want to do anything.

This is how we should refactor it using `if let`:

```rust
let config_age = Some(3u8);

if let Some(age) = config_age {
  println!("Your age is {age}");
}
```

> [!tip] Notice the way is written `let Some(max)` this is the type we are trying to compare to, `max` is the variable name we wanna use later.

This way is less verbose and easy to use. Look closely to how `if let Some(age) = config_age` is declared and what all of this mean. This in English words can be translated to:

*IF `config_age` is equal to something of type `Some(number)` where number is a variable named `age`*

## Else clausule

We can include an `else` with the `if let`. The block that goes with the `else` is the same as the block of code that would go with the `_` case in the `match` expression that is equivalent to the `if let` and `else`.

```rust
let mut count = 0;

if let Coin::SincoPeso(value) = coin {
  println!("Your coin is Sinco Peso of {value:?}!");
} else {
  count += 1;
}
```
# 📦 References

---
- [[Rust - Enums]]
- [[Rust - Match Control Flow]]
- [[Rust crash course - if let 2024-11-06]]