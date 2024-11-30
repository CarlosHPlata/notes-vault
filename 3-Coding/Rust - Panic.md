---
created:
  - 2024-11-27 22:42
aliases:
  - Rust Panic 27-11-2024
  - Rust Throw Error
  - Rus unchecked errors
tags:
  - Programming/topic
---

**Topics:** [[rust]]

# 📃 Panic 27-11-2024

---
The way Rust handle a throw is by panicking all the program. You can abort Rust by using the `panic` macro:

```rust
fn this_throws() {
  panic!("Throwing with this error text");
}
```

This is known as an unchecked error. It will directly abort it and throw everything. When panic occurs the program will start *unwinding* which means Rust walks back up the [[Rust - Memory management Stack and Heap|Stack and Heap]] and clean up the data from each function it encounters.

## Stack trace
> [!faq] by default Rust has no stack trace active

Rust has this feature turned off to turn it on you have to set the `RUST_BACKTRACE` to `1` environment variable to get a back trace of exactly what happened to cause the error.

You can set it from the Command Line:
```bash
RUST_BACKTRACE=1 cargo run
```

Or you can set it at your project level in your main [[Rust - Packages and Crates|Crate]] module.
```rust
use std::env;

fn main() {
  env::set_var("RUST_BACKTRACE", "1");
}
```

## Panic is slow
Since RUST don't use a garbage collector when Panic Rust will try to clean the memory for you, this process makes the panic process to be somehow slow. If you want to make it faster and lighter as possible, you can switch from unwinding to aborting upon a panic by adding `panic = 'abort'`.

# 📦 References

---
- [[Rust crash course Error handling 2024-11-26]]