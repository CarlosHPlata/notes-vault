---
id: Rust variables and types
aliases:
  - Coding
tags:
  - Programming/topic
created:
  - 2024-10-20 23:06
language: rust
---

**Topics:** [[rust]]

# 📃 Rust variables 20-10-2024

---

## Primitive variables

| type            | description  |
| --------------- | ------------ |
| u8 u16 ... u128 | unsigned int |
| i8 i16 ... i128 | signed int   |

## Compound types

There are multiple types of compound types

### Tuples

they can store values of different type

```rust
let tuple = (1, 1.3, "tuple")
```

### Arrays

Arrays always contain the same type of value stored

**You can initialize an array like:**

```rust
let arr = [0;3]
```

where the first `0` is the value inserted, and the `3` is how many times.

**You can use the type annotation like this:**

```rust
let arr: [u8; 3] = [1, 2, 3]
```

To access a member of an array use: `arr[0]` where `0` is the index of the array.

> [!faq] **Arrays have a maximum length of 32**

## 📦References
- [[Rust - Memory - The Stack]]
- [[Rust - Memory management Stack and Heap]]
