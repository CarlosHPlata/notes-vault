---
created:
  - 2024-10-28 23:47
aliases:
  - Mutable references 28-10-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Mutable references 28-10-2024

---
Let's start with the following example:
```rust
fn main() {
    let s = String::from("hello");
    give_ownership(&s);
    println!("{}", s); 
}

fn give_ownership(s: &String) {
    s.push_str(", world"); // error
}
```

this previous code will throw an error, that's because *we are trying to modify a non mutable reference*.

To fix this we will have to make a **mutable reference**. The steps to fix this code are:
1. Make `s` a mutable variable.
2. Make the function `give_ownership` receives a mutable reference.

> [!tip] as with [[Rust - variables and types| variables]] the syntax to declare a mutable reference is: `&mut`

So fixing this code is:
```rust
fn main() {
    let mut s = String::from("hello"); //notice the mut
    give_ownership(&mut s); // notice the &mut
    println!("{}", s); 
}

fn give_ownership(s: &mut String) { // notice the &mut
    s.push_str(", world"); 
}
```

Notice how we first declare `s` as a mutable string and how we will pass it to the rest of the code.

## Restrictions
Mutable reference has one big restriction: **If you have a mutable reference already you can have NO OTHER references to that value**.

see more in deep in the [[Rust - Restriction on the types of references|Restriction on the types of references 28-10-2024]]
# 📦 References
---

- [[Rust crash course References and Borrowing 2024-10-28]]
- [[Rust - References and borrowing]]
- [[Rust - variables and types]]
- [[Rust - Restriction on the types of references|Restriction on the types of references 28-10-2024]]
