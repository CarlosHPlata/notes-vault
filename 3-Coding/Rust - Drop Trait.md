---
created:
  - 2024-10-27 23:31
aliases:
  - Drop Trait 27-10-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Drop Trait 27-10-2024

---
> This method is called implicitly when the value goes out of scope, and cannot be called explicitly (this is compiler error [E0040](https://doc.rust-lang.org/error_codes/E0040.html)). However, the [`mem::drop`](https://doc.rust-lang.org/std/mem/fn.drop.html "fn std::mem::drop") function in the prelude can be used to call the argument’s `Drop` implementation.

# 📦 References

---

- [Rust docs](https://doc.rust-lang.org/std/ops/trait.Drop.html#tymethod.drop)
