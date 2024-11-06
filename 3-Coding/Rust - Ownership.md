---
created:
  - 2024-10-27 21:05
aliases:
  - Ownership 27-10-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Ownership 27-10-2024

---
Ownership is what makes [[rust]] so unique. It enables security measures for the language ownership of memory.
It also prevents the use of a garbage collector.

I has 3 primordial rules:
- **Each value has an owner**
- **Each value has only one owner at a time**
- **Value is dropped if it's out of scope of an owner**

> [!tip] To understand better the next topic is worth to check [[Rust - Memory management Stack and Heap]]

## Scope
To talk about ownership is to talk about [[General - Scope| Scope]], the ownership of a variable is tied to the scope of where it's being used. For example:

```rust
fn main() {
  let x = 5;
  // do stuff
}// end of scope of main
```

The variable `x` is valid from the line 2 until the end of the scope of the function `main`.

## Transferring ownership 

Normally [[Rust - variables and types| Scalar types]] can be copied around when we assign them between variables. let's take for example this:

```rust
fn main() {
  let x = 4;
  let y = x;
}
```

When `x` is passed to `y` it's **value is copied** to the location of `y`. This is because Scalar types are stored in [[Rust - Memory - The Stack|The Stack]]  since they have a fixed length and concrete value.
But let's examine this example:

```rust
fn main() {
  let s1 = String::from("hello");
  let s2 = x;
  println!("{}", s1);
}
```

If we try to execute this code it will throw an error, saying `s1` is invalid and can't be used.
This is due how [[Rust - strings type| Strings]] are threated in rust. Rust strings are not allocated in the Stack since it's length and content could vary and it's unknown for the compiler, instead the full content of the String is stored in [[Rust - Memory - The Heap|The Heap]] while in the Stack we only store some references *(The pointer, the length and the capacity)*.

![[Pasted image 20241027230758.png]]

Since it's value it's contained in the Heap when we assign the string to another value, what we are copying is what is in the Stack.

![[Pasted image 20241027230846.png]]

Now as you may see in the last image, since we copied what was in the stack, we have **2 pointers to the same Heap direction** that indeed break the rule number 2:

- **EACH VALUE HAS ONE OWNER AT A TIME**

rust ensure this is meet and will invalidate all the content associated to the previous pointer. meaning it will pop from the stack the values of the variable `s1`.

When the whole Scope of the functions is over, then the stack will pop `s2` and with it it will call the [[Rust - Drop Trait| Drop Trait]]

## Moving between functions

The rules above apply also when we pass to functions or return from functions.

```rust
fn main() {
  let x = String::from("hello");
  give_ownership(x);
  println!("{}", x); // this will throw an error
}

fn give_ownership(some_string: String) {
  // do something
}
```

```rust
fn main() {
  let x = String::from("Hello");
  let y = give_and_back_ownership(x);
  println!("{}", y); // this will work
}

fn give_and_back_ownership(some_string: String){
  some_string // notice no ; meaning it will return
}
```

See: [[Rust - Implicit return| Implicit return]]
## References and borrowing:
better to see [[Rust - References and borrowing| References and borrowing]]
# 📦 References

---

- [[ultimate rust crash course - OWNERSHIP 2024-10-27]]
- [Rust Official documentation](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)
- [[Rust - Memory management Stack and Heap]]
- [[Rust - variables and types]]
- [[Rust - strings type]]
