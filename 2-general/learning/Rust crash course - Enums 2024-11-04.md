---
created:
  - 2024-11-04 15:50
aliases:
  - Rust crash course - Enums 2024-11-04
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
# 🔥 Rust crash course - Enums 2024-11-04 

---
## 📃Notes 

>enums give you a way of saying a value is one of a possible set of values.

To declare an enum we can use:
```rust
enum IpAddrKind {
  V4,
  V6,
}
```

To use an enum:
```rust
let four = IpAddrKind::V4;
```

We can pass things to the enums like in Java:
```rust
enum IpAddr {
  V4(String),
  V6(String),
}

let home = IpAddr::V4(String::from("127.0.0.1"));
```

>he name of each enum variant that we define also becomes a function that constructs an instance of the enum.

>There’s another advantage to using an enum rather than a struct: each variant can have different types and amounts of associated data.

```rust
enum IpAddr {
  V4(u8, u8, u8, u8),
  V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);
let other = IpAddr::V6("::1");
```

> you can put any kind of data inside an enum variant

```rust
struct Ipv4Addr {
    // --snip--
}

struct Ipv6Addr {
    // --snip--
}

enum IpAddr {
    V4(Ipv4Addr),
    V6(Ipv6Addr),
}
```

There are more varians

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}
```
This enum has four variants with different types:

- `Quit` has no data associated with it at all.
- `Move` has named fields, like a struct does.
- `Write` includes a single `String`.
- `ChangeColor` includes three `i32` values.

> just as we’re able to define methods on structs using `impl`, we’re also able to define methods on enums.
# 📦References 
- [Rust docs](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html)