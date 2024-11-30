---
created:
  - 2024-11-27 23:37
aliases:
  - Rust Result Enum 27-11-2024
  - Rust checked errors
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Result Enum 27-11-2024

---
Result is a built in Enum designed to handle checked errors unlike [[Rust - Panic|panic]] macro. When something fails you want your consumer to try to handle that error without having to abort the entire program.

This is the official definition:
```rust
enum Result<T, R> {
  Ok(T),
  Err(R),
}
```

The easiest way to control is with [[Rust - Match Control Flow|Match keyword]]:
```rust
fn throw_something(): Result<(), String> {
  Err("Throwing something")
}

fn main() {
  match throw_something() {
    Ok(result) => do_something_on_ok(result)
    Err(e) => do_something_on_err(e)
  }
}
```
> [!tip] [[Rust - Implicit return|see Implicit return]]

## Helper functions
Using `match` works well enough, but it can be a bit verbose and doesn't always communicate intent well, the `Result` type has many helper functions defined to do more specific tasks.

### Unwrap
`unwrap` , `unwrap_or_default` and  `unwrap_or` ([[Rust - unwrap|see here]]) are shortcuts methods implemented that will try to get the value inside Result.

```rust
let my_result: Result<i32, String> =  Ok(2);

let value = my_result.unwrap();
assert_eq!(value, 2); // will pass
```

```rust
let my_result: Result<i32, String> = Err("this throws");

let value = my_result.unwrap(); //this will panic
```

### Expect
> [!faq] Rust discourage the use of expect.

Expect is like `unwrap` but since Rust does not have [[Rust - Overloading Methods|Overloading]] it needed a function that **in case of error, panic with a custom message**.

```rust
let my_result: Result<i32, String> = Err("emergency error");

let value = my_result.expect("This is not expected");
// This will panic with:
// Testing is not expected: emergency error
```

### The question mark operator
The pattern of propagating errors is so common in Rust that Rust provides the question mark operator `?` to make this easier.

```rust
fn do_something() -> Result<i32, String> {
  let my_result: Result<i32, String> = Ok(2);
  let value = my_Result?;

  Ok(value)
}
```

> [!tip] is better to check [[Rust - Question Mark Operator|This information to know more about the question mark operator]]

# 📦 References

---
- [[Rust - Enums]]
- [[Rust crash course Error handling 2024-11-26]]
- [[Rust - Option]]
- [[Rust - unwrap]]
- [[Rust - Match Control Flow]]
