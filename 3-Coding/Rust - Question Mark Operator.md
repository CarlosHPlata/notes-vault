---
created:
  - 2024-12-01 00:29
aliases:
  - Rust - Question Mark Operator 01-12-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Question Mark Operator 01-12-2024

---
The question mark operator (`?`) [[Rust - unwrap|unwraps]] valid values or returns erroneous values, propagating them to the calling function.

> [!faq] It's an unary postfix operator that can only be applied to [[Rust - Result Enum|Result]] and [[Rust - Option|Option]].

> [!tip] we are only allowed to use the `?` operator in a function that returns the same type as where it was used (`Result` or `Option`).
### Applied to Result 
For example:
```rust
fn read_file() -> Result<(), Box<dyn Error>> {
  let file = File::open("Helo.txt")?; // ? operator here
  Ok(())
}
```

- If the value of the `Result` is an `Ok`, the value inside the `Ok` will get returned from this expression, and the program will continue
- If the value is an `Err` the `Err` will be returned from the whole function *as if we had used the `return` keyword*.

### Applied to Option
When applied to values of the `Option` type, it propagates `None` if the value is `None`. If the value is `Some(x)` then it will [[Rust - unwrap|unwrap]] the value to evaluate to `x`.

```rust
fn try_this() -> Option<u8> {
  let val: Option<u8> = Some(1)?;
  Some(val);
}
```



# 📦 References

---

- [Rust Question Mark Operator reference](https://doc.rust-lang.org/reference/expressions/operator-expr.html#:~:text=The%20question%20mark%20operator%20(%20%3F%20),%3E%20type%2C%20it%20propagates%20errors.)
- [[Rust - unwrap]]
- [[Rust - Option]]
- [[Rust - Result Enum]]