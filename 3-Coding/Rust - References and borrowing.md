---
created:
  - 2024-10-27 23:17
aliases:
  - References and borrowing 27-10-2024
tags:
  - Programming/topic
  - todo
language: rust
---

**Topics:** [[rust]]

# 📃 References & borrowing 27-10-2024

---
> [!tip] You have to learn previously [[Rust - Ownership]] to understand better this topic.

Let's start by this example:
```rust
fn main() {
    let s = String::from("hello");
    give_ownership(s);
    println!("{}", s); // error
}

fn give_ownership(s: String) {
    println!("{}", s);
}

```
We know that based on the [[Rust - Ownership | Ownership]] rules; rust will ensure only one owner is given at a time. The previous code will throw an error because ownership of variable `s` is passed to the function `give_ownership` in the line `3`.

To solve that we can instead pass **a reference**.

## References
A reference is like a pointer, it creates in  [[Rust - Memory - The Stack | The Stack]] a pointer that serves as reference to the actual variable we wanna use.

>[!tip] references are created using the symbol `&`

Let's take now this example:
```rust
fn main() {
    let s = String::from("hello");
    give_ownership( &s ); // <-- note how whe pass it
    println!("{}", s); 
}

fn give_ownership(s: &String) { // <-- note the type
    println!("{}", s);
}
```

> [!tip] please note the type that the variable `s` is in the function *line `7`*, and how we are passing it in the *line `3`*

In the previous example we will not have any error because we are passing a reference of the variable.
Let's see how it looks in the stack:

![[Pasted image 20241028234433.png]]

We call this action of creating and passing a reference **BORROWING**.

## Other topics
- [[Rust - Mutable references]]
- [[Rust - Restriction on the types of references]]

# 📦 References

---

- [[Rust crash course References and Borrowing 2024-10-28]]
- [[Rust - Ownership]]