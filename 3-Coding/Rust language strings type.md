---
id: Rust language strings type
aliases:
  - Coding
tags:
  - Programming/topic
created:
  - 2024-10-20 23:55
language: rust
---

**Topics:** [[rust]]

# 📃 strings 20-10-2024

---

There are **6** types of string definitions, but we have to worry about **2**

### string slice

Defined by:

```rust
str
```

You will find int in shared mode:

```rust
&str
```

A literal string without type is **always a string slice**

```rust
let msg = "Hello";
```

A borrowed string slice is always referred as a string.

A borrowed string slice is internally made up of a pointer of some bytes and a len:

```
&str
ptr -> [H, E, L, L, O]
len -> 4
```

### String

The biggest difference between both is that the borrowed string slice can't be modified.
You will always get a `string` from a **borrowed string slice** by using `to_string`

```rust
let msg = "Hello".to_string()
```

Or by passing the **borrowed string slice** to the String constructor:

```rust
let msg = String::from("Hello")
```

A borrowed string slice is internally made up of a pointer of some bytes, a length and a capacity:

```
&str
ptr -> [H, E, L, L, O]
len -> 4
capacity -> 8
```

A **borrowed string slice** is a subset of **string**

### Encoding

All string are encoded in **UTF-8** so that mean that every character is encoded into a set of bytes. for that:

> [!faq] You cannot iterate over strings

### Iterate over strings

Since the last point using **UTF-8** you cannot iterate over a string simply you can

- Iterate over the bytes by using `word.bytes()`
- Iterate over every UTF-8 char by using `word.char()`
- Use a library in Rust to iterate `unicode-segmentation`

> [!tip] But you don't worry all strings have helper functions.

# 📦References

---

- [[Rust variables and types]]
- [[Rust - Memory - The Heap]]
- [[Rust - Memory management Stack and Heap]]
