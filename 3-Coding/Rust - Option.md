---
created:
  - 2024-11-05 00:16
aliases:
  - Option 05-11-2024
  - Rust -Null
  - Rust - Undefined
tags:
  - Programming/topic
---

**Topics:** [[rust]]

# 📃 Option 05-11-2024

---
> [!danger] Spoiler if you were looking, Rust DOES NOT HAVE SUPPORT FOR NULL OR UNDEFINED.

Instead of managing `null`, Rust have the `Option` Enum, that can encode the concept of a value being present or absent.

This is the official definition:
```rust
enum Option<T> {
  None,
  Some(T),
}
```

Option eliminates the risk of incorrectly assuming a not-null value helps you to be more confident in your code.

>[!tip] Enum is so useful that **is included in the prelude**. Meaning that you can use `None` and `Some` without calling `Option::`.

To use this Enum you can do:
```rust
let with_value = Some(32);
let no_value: Option<i32> = None;
```

The [Option Official Documentation](https://doc.rust-lang.org/std/option/enum.Option.html) has several methods that you can use with the Optional Enum.


## Helper functions
Option has some helper functions and operators you can explore:
- If you want to select between None and Some you have to use [[Rust - Match Control Flow]] or [[Rust - Concise Control Flow with if let]]
 - [[Rust - unwrap|unwrap helper functions]] will help you to get the value of the `Option` without use `match`.
 - [[Rust - Question Mark Operator|The question mark operator]] will help you to `unwrap` a value directly.
# 📦 References

---

- [[Rust - Option Crash course 2024-11-04]]
- [Option Official Documentation](https://doc.rust-lang.org/std/option/enum.Option.html)
- [[Rust - Enums]]