---
created:
  - 2024-11-01 00:00
aliases:
  - Structs 01-11-2024
  - Rust - Classes
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Structs 01-11-2024

---
## Declaring a struct

Structs like in any other language are a way of declaring a more structured way of grouping variables and values. Is like classes for Rust (with less capabilities).

To declare a new struct use the keyword `struct`

```rust
struct Pokemon {
  name: String,
  enemy: bool,
  life: u8,
} 
```

> [!tip] notice how the properties are separated by comma

## Using a struct
Now that you have a struct you can instance it by:

```rust
let pikachu = Pokemon {
  name: String::from("pikachu"),
  enemy: true,
  life: 100,
}
```

We have to consider the way we declare the instance, now in the previous example all values from the struct are only for reading purposes if we want to change the values inside the struct we would have to declare it as a [[Rust - Mutable references| Mutable]].

```rust
let mut pikachu = Pokemon {
  ...
}

pikachu.name = String::from("raichu");
```

> [!tip] Rust doesn't allow us to mark only certain fields as *mutable*
## Other types of structs
This is not the only way of declaring a struct, it exists two additional types of structs:
- [[Rust - Tuple Structs | tuple structs]]
- [[Rust - Unit-Like Structs | unit like structs]]

## Declaring methods to a struct
Structs are meant to be only properties, in order to declare methods we have to use the keyword [[Rust - Implementation Block for Structs| Implementation Keyword]]

# 📦 References

---
- [[Rust crash course - structs 2024-10-31]]
- [[Rust - Tuple Structs]]
- [[Rust - Unit-Like Structs]]
- [[Rust - Implementation Block for Structs]]
- [[Rust - Traits]]
- [[Rust - Inheritance]]
- [[Rust - Ownership]]

