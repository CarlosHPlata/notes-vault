---
created:
  - 2024-10-27 23:25
aliases:
  - Implicit return 27-10-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Implicit return 27-10-2024

---
Rust can return implicitly from functions using no semi colon at the last part of the function so for example this function:
```rust
fn main() {
  let x = 2;
  return x;
}
```

We could simply do:
```rust
fn main() {
  let x = 2;
  x // notice no ;
}
```

This also applies for multiple returns.
# 📦 References

---

- [Rust Official Documentation](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html#functions-with-return-values)
