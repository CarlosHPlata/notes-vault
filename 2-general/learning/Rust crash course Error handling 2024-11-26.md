---
created:
  - 2024-11-26 18:29
aliases:
  - Rust crash course Error handling 2024-11-26
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
# 🔥 Rust crash course Error handling 2024-11-26 

---
## 📃Notes 
### Panic
When you want to throw an error you can use `panic` macro.

> Via an environment variable, you can also have Rust display the call stack

> By default, when a panic occurs the program starts _unwinding_, which means Rust walks back up the stack and cleans up the data from each function it encounters.

>  If in your project you need to make the resultant binary as small as possible, you can switch from unwinding to aborting upon a panic by adding `panic = 'abort'`

> set the `RUST_BACKTRACE` environment variable to get a backtrace of exactly what happened to cause the error.

### Result

> Using `match` works well enough, but it can be a bit verbose and doesn’t always communicate intent well. The `Result<T, E>` type has many helper methods defined on it to do various, more specific tasks. The `unwrap` method is a shortcut method implemented just like the `match` expression we wrote in Listing 9-4. If the `Result` value is the `Ok` variant, `unwrap` will return the value inside the `Ok`. If the `Result` is the `Err` variant, `unwrap` will call the `panic!` macro for us. Here is an example of `unwrap` in action:

> f we run this code without a _hello.txt_ file, we’ll see an error message from the `panic!` call that the `unwrap` method makes

>  the `expect` method lets us also choose the `panic!` error message. Using `expect` instead of `unwrap` and providing good error messages can convey your intent and make tracking down the source of a panic easier. The syntax of `expect` looks like this:

> This pattern of propagating errors is so common in Rust that Rust provides the question mark operator `?` to make this easier.

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_username_from_file() -> Result<String, io::Error> { 
  let mut username_file = File::open("hello.txt")?;
  let mut username = String::new();
  username_file.read_to_string(&mut username)?; 
  Ok(username)
}
```

>  If the value of the `Result` is an `Ok`, the value inside the `Ok` will get returned from this expression, and the program will continue. If the value is an `Err`, the `Err` will be returned from the whole function as if we had used the `return` keyword so the error value gets propagated to the calling code.

> error values that have the `?` operator called on them go through the `from` function, defined in the `From` trait in the standard library, which is used to convert values from one type into another. When the `?` operator calls the `from` function, the error type received is converted into the error type defined in the return type of the current function.

>The `?` operator follows the `Result` value returned by `File::open`, but this `main` function has the return type of `()`, not `Result`. When we compile this code, we get the following error

>his error points out that we’re only allowed to use the `?` operator in a function that returns `Result`, `Option`, or another type that implements `FromResidual`.

> The `?` operator won’t automatically convert a `Result` to an `Option` or vice versa;

```rust
use std::eror::Error;
use std::fs::File;

fn main() -> Result<(), Box<dyn Error>> {
  let greeting_file = File::open("hello.txt");
  Ok(())
}
```

> The `Box<dyn Error>` type is a _trait objec_



# 📦References 
- [do rust lang org - Error Handling](https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html)