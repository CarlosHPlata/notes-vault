---
created:
  - 2024-11-24 19:46
aliases:
  - Vectors 24-11-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Vectors 24-11-2024

---
> [!tip] is better for you to look to the [Api Documentation](https://doc.rust-lang.org/std/vec/struct.Vec.html) for better understanding of Vectors.

Vectors are like `ArrayLists` in other languages like Java or C#. It allow us to store more than one value in a single data structure that puts all the values next to each other in memory. *Vectors can only store values of the same type*

### To create a new vector:
You have 2 options:
- By using the struct `Vec`
```rust
let v: Vec<i32> = Vec::new();
```

- By using the macro `vec!`
```rust
let v = vec![1, 2, 3];
```

> [!faq] rust can infer the type of the vector if they are initialized directly or immediately after using `push`

### Pushing values into a vector
By using the method `push`
```rust
let mut v = Vec::new();
v.push(1);
v.push(2);
```

> [!faq] notice the instance should be mutable

### Accessing a value inside a vector:

You have 2 options of accessing the values inside a vector:
#### Use the `[]` operator
```rust
let v = vec![1, 2, 3, 4];

let third: &i32 = &v[2]
```

> [!tip] Notice it's using a pointer to the vector and returning a pointer of the value.

> [!faq] if value it's outside of bounds it will panic.
#### Use the `get` method
```rust
let v = vec![1, 2, 3, 4];

let third: Option<&i32>  = v.get(2);
```

> [!tip] notice it returns a reference of the type

> [!faq] If valuee it's outside of bounds it will return [[Rust - Option|None]].

### Iterating over a vector
To access each element you can use a for:
```rust
let v = vec![1, 2, 3];

for i in &v {
  println!("{i}")
}
```

> [!faq] it will always return a reference

**if you want to mutate the values you have to inverse the reference**, by using the `*` dereference operator.

```rust
let mut v = vec![1, 2, 3];

for i in &mut v {
  *i += 10;
}
```

# 📦 References
---

- [[Rust Common Collections 2024-11-23]]
- [Rust Vectors API DOC](https://doc.rust-lang.org/std/vec/struct.Vec.html)
- [[Rust - Option]]