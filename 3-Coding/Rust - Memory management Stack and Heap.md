---
created:
  - 2024-10-27 21:11
aliases:
  - Stack and Heap 27-10-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Stack and Heap 27-10-2024

---
## Memory management
The stack and the heap are abstract representations of how the memory is managed by the language.
Is a common conception from other low level languages like *C* or *C++*.

**[[Rust - Memory - The Stack | The stack]]** is fast, and is where memory is normally allocated by rust, is based on a stack of course. And the data is local on the context to a function call. *is limited on size*.

**[[Rust - Memory - The Heap| The Heap]]** is slow, but the advantage is that is globally accessible and unlimited in size. However the data is allocated randomly.

# 📦 References

---

- [[ultimate rust crash course - OWNERSHIP 2024-10-27]]
- [Official Rust Docs](https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/the-stack-and-the-heap.html)
- [[Rust - Memory - The Stack]]
- [[Rust - Memory - The Heap]]
