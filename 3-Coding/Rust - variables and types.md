---
id: Rust variables and types
aliases:
  - Rust - Variables
  - Rust - Scalar Types
  - Rust - Compound Types
tags:
  - Programming/topic
created:
  - 2024-10-20 23:06
language: rust
---

**Topics:** [[rust]]

# 📃 Rust variables 20-10-2024

---
## Scalar Types

### Integers

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |
> [!tip] the arch type depends on the type of architecture your **SO** manage, 32b or 64b.

You can write integer literals in any of the following forms:

| Type            | Example                                       |
| --------------- | --------------------------------------------- |
| Decimal         | 98_222                                        |
| Hex             | 0xff                                          |
| Octal           | 0o77                                          |
| Binary          | 0b1111_0000                                   |
| Byte(*u8 only*) | b'A' (*converts the char into the byte form*) |
> [!tip] Integer use `i32` as default
### Floating point
Rust only support 2 types of floating numbers

| Length | Float |
| ------ | ----- |
| 32     | f32   |
| 64     | f64   |
> [!tip] the default type for floats is `i64`
### Booleans
Booleans can be used using the keyword:
```rust
bool
```

### Characters
Character types are encoded in **Unicode** UTF-8 so it's stored inside **4 bytes** of memory.
```rust
let c = 'z';
let z: char = 'ℤ'; // with explicit type annotation
let heart_eyed_cat = '😻';
```

>[!tip] chars use single quote


## Compound types
___

### Tuples

they can store values of different type

```rust
let tuple = (1, 1.3, "tuple");
let fist_value = tuple.0;
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
- [[Rust - strings type]]
