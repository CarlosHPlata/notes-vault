---
created:
  - 2024-11-01 00:21
aliases:
  - Tuple Structs 01-11-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Tuple Structs 01-11-2024

---
Rust also support structs that look similar to tuples, called tuple structs.
This is useful if you have a type of tuple that you repeat often and want to give it a context and a name:

```rust
struct Point(i32, i32);
struct Color(i32, i32, i32);

fn main() {
  let my_point = Point(1, 2);
  let black = (0, 0, 0);
}
```

# 📦 References

---
- [[Rust - Structs]]
- [[Rust crash course - structs 2024-10-31]]
