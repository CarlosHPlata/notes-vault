---
created:
  - 2024-11-01 00:26
aliases:
  - Unit-Like Structs 01-11-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Unit-Like Structs 01-11-2024

---
Rust allows also to define structs that have no properties. This is useful when you want to implement a [[Rust - Traits | Trait]].

```rust
struct AlwaysEqual;

fn main() {
  let subject = AlwaysEqual;
}
```

>[!tip] notice that we didn't use any `()` or `{}`.

# 📦 References

---
- [[Rust - Structs]]
- [[Rust crash course - structs 2024-10-31]]
