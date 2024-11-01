---
created:
  - 2024-11-01 00:18
aliases:
  - Passing variables with same name to Structs 01-11-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Passing variables with same name to Structs 01-11-2024

---
Let's take this example:
```rust
fn create_pokemon(name: String, life: u8) {
  pokemon {
    name: name,
    life: like,
    enemy: true
  }
}
```

>[!tip] notice the variable names and the properties of the struct are the same

we can short this by just writing the name, if you came from *JavaScript* this will be similar.

```rust
fn create_pokemon(name: String, life: u8) {
  pokemon {
    name,
    life,
    enemy: true
  }
}
```

# 📦 References

---
- [[Rust - Structs]]
- [[Rust crash course - structs 2024-10-31]]
