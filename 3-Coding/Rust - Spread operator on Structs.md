---
created:
  - 2024-11-01 00:08
aliases:
  - Spread operator on Structs 01-11-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Spread operator on Structs 01-11-2024

---
Rust can use spread operator to pass variables into a new struct. Let's take for example this:

```rust
let pikachu = Pokemon {
  name: String::from("hunter"),
  enemy: true,
  life: 100,
}
```

Let's assume we wanna use the values on `pikachu` to create a new instance with equal values.
We can use the `...` spread operator to use this.

```rust
let pikachu2 = Pokemon {
  name: String::from("muzzarella"),
  ...pikachu,
}
```

> [!faq] Spread operator comes last
> Unlike other languages like `Javascript`, The  `..user1` must come last to specify that any remaining fields should get their values from the corresponding fields in `user1`

> [!danger] Be careful with [[Rust - Ownership]]
> This syntax is like assigning the equal operator *=*; this moves the data. In this example we can no longer use `pikachu` as a whole after creating `pikachu2`
# 📦 References

---

- [[Rust - Structs]]
- [[Rust crash course - structs 2024-10-31]]
