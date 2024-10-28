---
created:
  - 2024-10-27 21:24
aliases:
  - The Stack 27-10-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 The Stack 27-10-2024

---
> The stack is fast, and is where memory is normally allocated by rust, is based on a stack of course. And the data is local on the context to a function call. *is limited on size*.

Stack is like any other stack in any other software, that's the basic structure that it uses to. Rust uses a stack to allocate values from function calls or [[General - Scope | Scope]].

The stack is an array of bytes that your computer left Rust use, normally is mapped from the **Memory Ram** of your computer.
So for example if your computer has *1 GB* of memory then it will provide an array of *2^30* bytes.

For example:
```rust
fn myFn() {
  let x = 666;
}
```

This will be represented into the stack as this:

| **index** | **variable** | **value** |
| --------- | ------------ | --------- |
| *0*       | x            | 666       |

> **NOTE:** is important that you remember that this is only a representation this will not be real indexes and also some values would take more than just one memory space (byte).

Let's take for example the next program:

```rust
fn lol() {
  let b = 2;
  let c = 3;
}

fn main() {
  let a = 1;
  lol();
}
```

First it will execute `main` and push it's variables to the stack:

| **index** | **variable** | **value** |
| --------- | ------------ | --------- |
| *0*       | a            | 1         |

Once it reaches the execution of `lol` it will push it's values into the stack:

| **index** | **variable** | **value** |
| --------- | ------------ | --------- |
| *2*       | c            | 3         |
| *1*       | b            | 2         |
| *0*       | a            | 1         |
> **NOTE:** notice how the values are pushed to the stack as they are in order of how they were declared.

Of course once the execution of the function `lol` is done it will **pop** the values from the stack.

| **index** | **variable** | **value** |
| --------- | ------------ | --------- |
| *0*       | a            | 1         |
And once `main` it's doe it will **pop** the values too.

# 📦 References

---

- [[ultimate rust crash course - OWNERSHIP 2024-10-27]]
- [Rust Official Docs](https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/the-stack-and-the-heap.html)
- [[Rust - Memory management Stack and Heap]]
