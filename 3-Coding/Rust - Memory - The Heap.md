---
created:
  - 2024-10-27 21:43
aliases:
  - The Heap 27-10-2024
tags:
  - Programming/topic
language: rust
---

**Topics:**  [[rust]]

# 📃 The Heap 27-10-2024

---
> The heap is slow, but the advantage is that is globally accessible and unlimited in size. However the data is allocated randomly.

Now you learned about [[Rust - Memory management Stack and Heap | How Rust manage memory in stacks]] it is worth to talk about what happen when you want to allocate some value in memory that you don't want to lose in your program.

Let's take the next example:
```rust
fn main() {
  let y = Box::new(5);
  let x = 1;
}
```

In Rust [[Rust - variables and types| primitive values]] are allocated in the stack by default. But with [[Rust - Box| Box]] you can make the value go to the heap instead.

Here is what will happen in the memory:

| **index** | **variable** | **value**   |
| --------- | ------------ | ----------- |
| *1*       | x            | 1           |
| *0*       | y            | -> (2^30)-1 |
One moment what is that `-> (2^30)-1`? it's a pointer. to a value in the same memory. Since we are using the same **Memory Ram** rust allocates the heap at the end of the memory.

So the real Memory would look something like this:

| **Index**  | **Variable** | **Value**     |
| ---------- | ------------ | ------------- |
| *(2^30)-1* |              | 5             |
| ...        | ...          | ...           |
| *1*        | x            | 1             |
| *0*        | y            | *-> (2^30)-1* |

>[!faq] It's important to notice that even though the heap is allocated at the end of the Memory there's no real order of how they are stored **it could be gaps between values in the heap**.

Now since our memory is in the heap it can live longer than the function that invoke it.

*Spoiler alert* in this example it will not because of the **[[Rust - Drop Trait|Drop]]** function that the [[Rust - Box | Box]] has. That cleans the memory once nobody is pointing to itself.

This can be avoided by [[Rust - Ownership | borrowing the ownership of the variable]].

# 📦 References

---

- [[ultimate rust crash course - OWNERSHIP 2024-10-27]]
- [Rust Official Documentation](https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/the-stack-and-the-heap.html)
- [[Rust - Memory management Stack and Heap]]
- [[Rust - Box]]
- [[Rust - Drop Trait]]
- [[Rust - Ownership]]
