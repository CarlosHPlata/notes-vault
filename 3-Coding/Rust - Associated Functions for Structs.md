---
created:
  - 2024-11-02 00:32
aliases:
  - Associated Functions for Structs 02-11-2024
  - Rust - Constructors
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Associated Functions for Structs 02-11-2024

---
A function in an [[Rust - Implementation Block for Structs|Implementation block]] that does not receive a `self` as first parameter is often referred as just **Associated Function**.

Associated functions are often used for constructors that will return a new instance of the same struct. These are often called **new**.

> [!faq] **new** isn't a special name and isn't built into the language as a reserved word.
However it's often a good practice to follow this convention.

```rust
struct Rectangle {
  width: u32,
  height: u32,
}

impl Rectangle {
  fn new(width: u32, height: u32) -> Self {
    Self {
      width,
      height,
    }
  }

  fn square(size: u32) -> Self {
    Self {
      width: size,
      height: size,
    }
  }
}
```

notice in the last example we have *2* constructors:
- **new** is a simple constructor following the convention, it returns a new instance of `Rectangle`.
- **square** is another constructor, that does not use the same convention but is useful to create a `Rectangle` with equal sides.
## How to call
Associated functions **cannot be called with the dot notation** `rectangle.new` for example will fail.
Instead we use double dot notation, like when we call `String::from` ([[Rust language strings type]]).

So following the example above to call those constructors we use:

```rust
fn main() {
  let my_rectangle = Rectangle::new(20, 30);
  let my_square = Rectangle::square(20);
}
```

# 📦 References
---
- [[Rust - Implementation Block for Structs|Rust - Impl]]
- [[Rust - Structs]]
- [[Rust - Overloading Methods]]
- [[Rust crash course - structs 2024-10-31]]