---
id: Rust lang Ternary Conditions
aliases:
  - Coding
tags:
  - Programming/topic
created:
  - 2024-10-20 23:20
language: Rust
---

**Topics:** [[rust]]

# 📃 Ternary Conditions 20-10-2024

---

Rust have the ability to use ternary conditions within the code. take for example the next format:

```rust
if num == 5 {
  msg = "five";
} else if num == 4 {
  msg = "four";
} else {
  msg = "other";
}
```

Let's imagine you want the assign of that variable to occur like a ternary condition you can convert it to:

```rust
msg = if num == 5 {
  "five"
} else if num == 4 {
  "four"
} else {
  "other"
}; // <--- this semicolon is needed
```

> [!tip] note that in the ternary conditions there are no semicolons `[;]`

> [!tip] You need the semicolon `[;]` at the end


---

## 📦References 

- 
