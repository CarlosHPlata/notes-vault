---
created:
  - 2024-10-28 23:09
aliases:
  - Rust crash course References and Borrowing 2024-10-28
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
# 🔥 Rust crash course References and Borrowing 2024-10-28 

---
## 📃Notes 
- References can be taken using `&` prefix
- we can pass a reference to something and borrow the reference to a value
- When creating a reference rust creates a pointer to the variable
- **References must always be valid** (lifetime)
- Mutable reference can be passed using `&mut` as long as the variable is `mutable`
- `*` will de reference of a value usefull if you want to write from or write to a value.
- **An either given time you can have exactly one mutable reference or any number of inmutable reference**
- All rules are enforced by the compiler

# 📦References 
- [Rut Official Documentation](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)
- https://www.udemy.com/course/ultimate-rust-crash-course/learn/lecture/17981905#overview
- 