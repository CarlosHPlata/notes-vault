---
created:
  - 2024-11-01 23:33
aliases:
  - Rust - Display Trait 01-11-2024
tags:
  - Programming/topic
  - Rust/trait
language: rust
---

**Topics:** [[rust]]

# 📃 Rust - Display Trait 01-11-2024

---

>Format trait for an empty format, `{}`.
>Implementing this trait for a type will automatically implement the [`ToString`](https://doc.rust-lang.org/std/string/trait.ToString.html) trait for the type, allowing the usage of the [`.to_string()`](https://doc.rust-lang.org/std/string/trait.ToString.html#tymethod.to_string) method. Prefer implementing the `Display` trait for a type, rather than [`ToString`](https://doc.rust-lang.org/std/string/trait.ToString.html).

```rust
use std::fmt;

struct Point {
    x: i32,
    y: i32,
}

impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}

let origin = Point { x: 0, y: 0 };

assert_eq!(format!("The origin is: {origin}"), "The origin is: (0, 0)");
```
# 📦 References

---

- [Official Docs](https://doc.rust-lang.org/std/fmt/trait.Display.html)
- [[Rust - Traits]]
- [[Rust - Debug Trait]]
- [[Rust - Structs]]
- [[Rust - Implementation Block for Structs|Rust - Impl]]
- [[Rust crash course - structs 2024-10-31]]
