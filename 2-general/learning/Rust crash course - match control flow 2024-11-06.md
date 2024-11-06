---
created:
  - 2024-11-06 11:36
aliases:
  - match control flow 2024-11-06
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
# 🔥 match control flow 2024-11-06 

---
## 📃Notes 
>Rust has an extremely powerful control flow construct called match that allows you to compare a value against a series of patterns and then execute code based on which pattern matches. 

> Patterns can be made up of literal values, variable names, wildcards, and many other things;

Match is like a switch but steroids.

```rust
enum Coin {
  Penny,
  Nickel,
  Dime,
  Quarter,
}

fn value_in_cents(coing: Coin) -> u8 {
  match coin {
    Coin::Penny => 1,
    Coin::Nickel => 5,
    Coin::Dime => 10,
    Coin::Quarter => 25,
  }
}
```

When code is short within the match you can't skip the use of brackets, but if you need to add more logic you can use brackets.

```rust
fn value_in_cents(coin: Coin) -> u8 {
  match coin {
    Coin::Penny => {
      println!("Hello");
      1
    } // notice no comma at the end
  }
}
```

You can bind variables to the content of the match as if they are functions.

```rust
enum Type {
  Fire,
  Ice,
}

enum Creature {
  Human,
  Dragon(Type)
}

fn get_creature_id(creature: Creature) -> u8 {
  match creature {
    Creature::Human => 1,
    Creature::Dragon(type) => {
      println!("This dragon is type {type:?}!")
      2
    }
  }
}
```

**Matches are exhaustive** meaning that `match` should cover all possibilities.

**Default**

```rust
let dice_roll = 9;
match dice_roll {
  3 => add_something(),
  7 => remove_something(),
  other => do_something(),
}
```

> The other is like a variable that catch all other possibilities.

>patterns are evaluated in order. If we put the catch-all arm earlier, the other arms would never run, so Rust will warn us if we add arms after a catch-all!

>Rust also has a pattern we can use when we want a catch-all but don’t want to use the value in the catch-all pattern: _ is a special pattern that matches any value and does not bind to that value. This tells Rust we aren’t going to use the value, so Rust won’t warn us about an unused variable.

```rust
match dice_roll {
  3 => add_something(),
  7 => remove_something(),
  _ => do_something(),
}
```


# 📦References 
- [Doc Rust Lang crash course](https://doc.rust-lang.org/book/ch06-02-match.html)