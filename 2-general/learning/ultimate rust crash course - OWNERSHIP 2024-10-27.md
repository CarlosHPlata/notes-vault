---
created:
  - 2024-10-27 18:50
aliases:
  - ultimate rust crash course - OWNERSHIP 2024-10-27
tags:
  - Programming/learning
language: rust
---
```meta-bind-button
label: Start adding topics
id: transcript
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
# 🔥 ultimate rust crash course - OWNERSHIP 2024-10-27 

---
## 📃Notes 
- Ownership is what makes rust so flexible
- There are 3 rules for ownership
  - Each value has an owner
  - Only one owner
  - Value gets dropped out of scope
  
```rust
let s1 = String::from("abc");
let s2 = s1; // this is not a copy the value is moved to s2
println!("{}", s1) //this will throw an error
```

- Rust has stack and heap
  - Stack
    - In order
    - Fixed-size
    - LIFO
    - Fast
  - Heap
    - Unordered
    - Variable-size
    - Unordered
    - slow
- Check minute `2:51` for how the value being passed from previous example work.
- The compiler will check for pointers to the heap and eliminate the ones that are no longer use.

- to make a copy you use `clone`
```rust
let s1 = String::from("abc");
let s2 = s1.clone()
```

- Rust reserves the copy to when only copying the stack data, but if the heap is also being copied then it uses clone.
- When a value is drop this wil happen
  - The destructor will be called
  - The heap space will be released
  - The stack will be poped

Another example:
```rust
let s1 = String::from("abc");
do_stuff(s1);
pringln!("{}", s1); // Error, moved!

fn do_stuff(s: String) {
  // do stuff
}
```

One way to fix it is by using mut
```rust
let mut s1 = String::from("abc");
s1 = do_stuff(s1);
pringln!("{}", s1);

fn do_stuff(s: String) -> String {
  // do stuff
  s
}
```

but this is not the best way to do it for it better to borrow information
# 📦References 
- https://www.udemy.com/course/ultimate-rust-crash-course/learn/lecture/17981901#overview
- https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html