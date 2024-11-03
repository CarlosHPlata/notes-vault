---
created:
  - 2024-11-03 23:37
aliases:
  - Slices 03-11-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Slices 03-11-2024

---
Slices is way to reference a contiguous sequence of elements in a collection rather than the whole collection.

>[!tip] is useful if you already know [[Rust - References and borrowing|References and borrowing]] and [[Rust - Memory management Stack and Heap|Memory management Stack and Heap]]

As we already view in the memory management topic, there are some values that will be stored in the Heap instead of the Stack. And one of those values are the [[Rust - Collections]].

Slices let you reference just a part of a collection to use it as reference. It can be use for example to reference parts of **Strings** and **Arrays**.

For example let's say that we have the following code:
```rust
let s = String::from("hello world");
```

If we remember how [[Rust language strings type|Strings]] work the content of the string exists in the heap, let's say we wanna extract just the second word we can use a slice to do that:

```rust
let s = String::from("hello world");
let second_word = &s[6..11];
```

Internally, the slice data structure stores the starting position and the length of the slice. Let's look how this can be represented in memory:

![[slices.svg]]
> [!tip] Notice that the start of the slice is **inclusive** and the end of the slice is **exclusive**.

## Tips and tricks
Let's remember how to declare a slice:

```rust
let slice = &my_array[0..5]; // from 0 to 4
```

With rust the `..` syntax you can make many things:

 **You can omit the starting number if it's the position `0`:**
```rust
let slice = &my_array[..5]; // from 0 to 4
```

**You can omit the ending index if it's the `las position`**:
```rust
let slice = &my_array[5..]; // from 5 to my_array.len()-1
```

**You can also omit both values if you want the entire collection as slice:**
```rust
let slice = &my_array[..]; // a slice of everything
```

# 📦 References

---

- [[Rust - Collections]]
- [[Rust language strings type]]
- [[Rust - Memory management Stack and Heap]]
- [[Rust - Ownership]]
- [[Rust - Crash course slices 2024-11-03]]