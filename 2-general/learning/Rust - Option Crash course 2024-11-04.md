---
created:
  - 2024-11-04 23:57
aliases:
  - Rust - Option 2024-11-04
tags:
  - Programming/learning
language: rust
---
```meta-bind-button
label: Start adding topics
id: transcript
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
# 🔥 Rust - Option 2024-11-04 

---
## 📃Notes 
> Rust does not have nulls

> it does have an enum that can encode the concept of a value being present or absent. This enum is `Option<T>`, and it is [defined by the standard library](https://doc.rust-lang.org/std/option/enum.Option.html) as follows:

```rust
enum Option<T> {
  None,
  Some(T),
}
```

> enum is so useful that it’s even included in the prelude; you don’t need to bring it into scope explicitly. Its variants are also included in the prelude: you can use `Some` and `None` directly without the `Option::` prefix.

> Eliminating the risk of incorrectly assuming a not-null value helps you to be more confident in your code.

> The `match` expression is a control flow construct that does just this when used with enums: it will run different code depending on which variant of the enum it has, and that code can use the data inside the matching value.

# 📦References 
- [Rust crash docs](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)
- [Rust official documentation](https://doc.rust-lang.org/std/option/enum.Option.html)