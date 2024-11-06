---
created:
  - 2024-11-06 15:21
aliases:
  - Rust crash course - if let 2024-11-06
tags:
  - Programming/learning
language: rust
---
```meta-bind-button
label: Start adding topics
id: transcript
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
# 🔥 Rust crash course - if let 2024-11-06 

---
## 📃Notes 

> The `if let` syntax lets you combine `if` and `let` into a less verbose way to handle values that match one pattern while ignoring the rest.

```rust
let config_max = Some(3u8);
match config_max {
  Some(max) => println!("The max is ${max}"),
  _ => (),
}
```

> Instead, we could write this in a shorter way using `if let`.

```rust
let config_max = Some(3u8);
if let Some(max) = config_max {
  println!("The max is ${max}");
}
```

**Notice the way is written `let Some(max)`** this is the type we are comparing to, and `max` is the variable we want to use.
In short we are saying `if config_max is equal to something that looks like type Some(max) [Some with variable max]`

>It works the same way as a `match`, where the expression is given to the `match` and the pattern is its first arm.

> We can include an `else` with an `if let`. The block of code that goes with the `else` is the same as the block of code that would go with the `_` case in the `match` expression that is equivalent to the `if let` and `else`.

```rust
let mut count = 0;
if let Coin::Quarter(state) = coin {
  println!("State quarter from {state:?}!");
} else {
  count += 1;
}
```



# 📦References 
- [Rust crash course doc rust lang](https://doc.rust-lang.org/book/ch06-03-if-let.html)