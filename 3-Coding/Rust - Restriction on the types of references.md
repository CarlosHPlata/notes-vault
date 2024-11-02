---
created:
  - 2024-10-28 23:57
aliases:
  - Restriction on the types of references 28-10-2024
  - rust data races
  - rust dangling references
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Restriction on the types of references 28-10-2024

---
There are several restrictions when we are talking about references. Here are they:
- **References must be always valid**
- **An either given time you can have exactly one mutable reference and nothing else**
- **If you don't have mutable reference you can have as many immutable references as you want**
## Only one mutable reference
Let's take for example this code:
```rust
fn main() {
  let mut s = String::from("hello");

  let r1 = &mut s; // no problem
  let r2 = &mut s;

  println!("{} and {}", r1, r2); // error
}
```

this code will fail because we are creating 2 mutable references of the same variable `s` in the [[General - Scope|Scope]]. The life cycle of `r1` is until is used by `println`, in the middle exists `r2` which make this piece of code unable to run.

This is called **data races** when 2 variables that will modify a value (*because both needs mutable reference*) are competing on who will modify first.
Rust wants to avoid this in compilation time.

You can always use curly brackets to create a new scope to fix this.

```rust
fn main() {
  let mut s = String::from("hello");
  {
    let r1 = &mut s; // no problem
  } // the scope of r1 ends here
  let r2 = &mut s;
}
```

## Only one mutable reference and no other reference
Rust will also ensure that users of an immutable reference don’t expect the value to suddenly change out from under them.

For example:
```rust
let mut s = String::from("hello");

let r1 = &s; // no problem
let r2 = &s; // no problem
let r3 = &mut s; // BIG PROBLEM

println!("{}, {}, and {}", r1, r2, r3);
```

This will throw as before

## Dangling references

In the same topic we can talk about dangling references, in languages with pointers it could happen that a pointer is no longer valid, meaning that the value it's referencing to is gone.

For example:
```rust
fn main() {
  let reference_to_nothing = dangle_reference();
}

fn dangle_reference() -> &String {
  let s = String::from("hello");
  &s
}
```
*see also: [[Rust - Implicit return|Implicit return]]*

Notice how in the function `dangle_reference` we are creating a string, that later we return in a reference. But wait remember [[Rust - Memory - The Stack]]. The values are popped as soon as the scope of the function ends.
That means that after it returns the reference the value is dropped.

Rust also wants to ensure this and will throw an error.
# 📦 References
---
- [[Rust crash course References and Borrowing 2024-10-28]]