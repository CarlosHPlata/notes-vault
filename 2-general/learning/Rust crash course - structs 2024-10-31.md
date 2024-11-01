---
created:
  - 2024-10-31 21:57
aliases: [Rust crash course - structs 2024-10-31]
tags:
  - Programming/learning
  - "#new"
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
# 🔥 Rust crash course - structs 2024-10-31 

---
## 📃Notes 
- In other langs you have classes in Rust there are structs
>A struct’s name should describe the significance of the pieces of data being grouped together.

```rust
struct StructName { //this is how we define a struct in rust
  enemy: bool, // notice that is a comma you idiot
  life: u8,
}

// this is how a type in Typescript
```

- You can instance a struct like:
```rust
fn main() {
  let fox = StructName {
    enemy: true,
    life: 100,
  }
}
```

> if the instance is mutable, we can change a value by using the dot notation and assigning into a particular field.

> Rust doesn’t allow us to mark only certain fields as mutable

- Field init shorthand
> Because the parameter names and the struct field names are exactly the same in Listing 5-4, we can use the _field init shorthand_ syntax to rewrite `build_user` so it behaves exactly the same but doesn’t have the repetition of `username` and `email`, as shown in Listing 5-5.

- Rust also have spread operator for structs

```rust
fn main() {
    // --snip--

    let user2 = User {
        email: String::from("another@example.com"),
        ..user1
    };
}
```

>  The `..user1` must come last to specify that any remaining fields should get their values from the corresponding fields in `user1`

>Note that the struct update syntax uses `=` like an assignment; this is because it moves the data, just as we saw in the [“Variables and Data Interacting with Move”](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#variables-and-data-interacting-with-move) section. In this example, we can no longer use `user1` as a whole after creating `user2`
[[Rust - Structs]][[Rust - Spread operator on Structs]]

[[Rust - Passing variables with same name to Structs]][[Rust - Tuple Structs]][[Unit-Like Structs]][[Inheritance]][[Rust - Implementation Keyword for Structs]][[Rust - Traits]]
```rust
fn build_user(email: String, username: String) -> User {
    User {
        active: true,
        username, // check thus
        email, // check this
        sign_in_count: 1,
    }
}
```

- Structs are just the definition, to declare methods you have to use the `impl` keyword
```rust
impl StructName {
  fn new() -> Self { 
    Self {
      enemny: true,
      life: 70,
    }
  }
}
```
- in Rust exists associate function
- Self is making reference to the struct itself
- scope operator `::`
```rust
let fox = StructName::new();
let life_left = fox.life()
fox.enemy = false;
fox.some_method();
```
- this is how we define a new variable of type struct
- scope operator is used to access parts of namespaces
- Methods are also defined in the `impl` block
```rust
impl StructName {
  fn some_method(self) {
    //
  }

  fn some_method2(&self) {
    //
  }

  fn some_method3(%mut self) {
    //
  }
}
```
- Methods always receive `self` in any form as first argument

## Class inheritance or better Struct Inheritance

- NO STRUCT INHERITANCE

# Notes from the source

>A struct’s name should describe the significance of the pieces of data being grouped together.



# 📦References 
- [Rust official docs](https://doc.rust-lang.org/book/ch05-01-defining-structs.html)
- https://www.udemy.com/course/ultimate-rust-crash-course/learn/lecture/17981931#overview