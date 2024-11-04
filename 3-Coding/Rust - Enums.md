---
created:
  - 2024-11-04 23:34
aliases:
  - Enums 04-11-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Enums 04-11-2024

---
Enums have a great power in Rust. Enums give you a way of saying a value is one of a possible set of values.

## Basic Enum

To declare an Enum you can use:
```rust
enum IpAddress {
  V4,
  V6,
}
```

To use an Enum:
```rust
let four = IpAddress::V4;
```

## Enums with values
Rust has the ability to initialize every option of the Enum with some values, this is like Java but more flexible:

```rust
enum IpAddress {
  V4(String),
  V6(String),
}

let home = IpAddress:V4(String::from("127.0.0.1"));
```

Notice how we initialize the Enum as with a function, this function constructs an instance of the Enum, just like [[Rust - Associated Functions for Structs|Associated Functions]]

## Enum with different types

There's another advantage of using Enums, each variant can have  different types and amounts of associated data.

```rust
struct Body {
  //...
}

enum Message {
  Quit,
  Move { x: i32, y: i32 },
  Write(String),
  ChangeColor(i32, i32, i32),
  Send(Body),
}
```

This Enum has four variants with different types:
- `Quit` has no data associated with it at all.
- `Move` has named fields, like a struct does.
- `Write` includes a single `String`.
- `ChangeColor` includes three `i32` values.
- `Send` has an struct inside.

## Enums can have functions
Just as we're able to define methods on [[Rust - Structs|Structs]] using [[Rust - Implementation Block|The implementation block]], we're also able to define methods on Enums.

```rust
impl Message {
  fn call(&self) {
    // method for an enum
  }
}

let m = Message::Write(String::from("hello"));
m.call();
```


# 📦 References

---

- [[Rust - Implementation Block]]
- [[Rust - Structs]]
- [[Rust crash course - Enums 2024-11-04]]