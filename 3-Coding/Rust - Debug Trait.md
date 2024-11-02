---
created:
  - 2024-11-01 23:27
aliases:
  - Debug Trait 01-11-2024
tags:
  - Programming/topic
  - Rust/trait
language: rust
---

**Topics:** [[rust]]

# 📃 Debug Trait 01-11-2024

---
>`Debug` should format the output in a programmer-facing, debugging context. Generally speaking, you should just `derive` a `Debug` implementation.
  When used with the alternate format specifier `#?`, the output is pretty-printed.

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let scale = 2;
    let rect1 = Rectangle {
        width: dbg!(30 * scale),
        height: 50,
    };

    dbg!(&rect1);
}
```
# 📦 References

---
- [Official Docs](https://doc.rust-lang.org/std/fmt/trait.Debug.html)
- [[Rust - Display Trait|Rust - Display Trait]]
- [[Rust - Traits]]
- [[Rust - Structs]]
- [[Rust crash course - structs 2024-10-31]]
