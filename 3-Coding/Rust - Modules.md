---
created:
  - 2024-11-11 22:53
aliases:
  - Modules 11-11-2024
  - Rust - Use Keyword
  - Rust - Private and Public modules
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Modules 11-11-2024

---
## Modules
Modules let us organize code within a crate for readability and easy reuse. Modules also allow us to control the privacy of the items.
### How modules work
**Start from the [[Rust - Packages and Crates|Crate]] root:** when compiling a crate, the compiler first looks in the crate root file (`src/main.rs` or `src/lib.rs`) for code to compile.

**Declaring a module:** In the crate root file, you can declare new modules using the keyword `mod` for example: `mod garden;`.
The compiler will look for the module's code in these places:
  - inline, within curly brackets `mod garden { //here }`
  - In `src/garden.rs`
  - in `src/garden/mod.rs`
  
**Declaring a submodule:** In any file other than the crate root, you can declare submodules. For example, you can create `mod vegetables;` in `src/garden.rs`.
The compiler will look for the submodule's code in these places:
- inline, within curly brackets `mod vegetables { //here }`
- In the file `src/garden/vegetables.rs`
- in the file `src/garden/vegetables/mod.rs`

### Paths to code in modules:
Once a module is part of your crate, you can refer to code in that module from anywhere else in the same crate (*as long as they are public*).
Using the path to the code, for example, if we want to use the `Asparagus` type in the garden/vegetables module:
`crate::garden::vegetables::Asparagus`.
## Private vs Public

> [!danger] Code in modules is private from it's parent modules by default.

To make a module **Public**, declare it with `pub mod` instead. To make just certain **items public**, declare it with `pub` before their declaration
## Use keyword
Here we will explain how the `use` keyword and the `pub` keywork work in the compiler.

Within a scope, the `use` keyword creates shortcuts to items to reduce repetition of long paths.
In any scope that can refer to for example `use crate::garden::vegetables::Asparagus` and for now on just use `Asparagus` to make use of that type.
# 📦 References

---
- [[Rust - Managing packages, crates and modules|Managing packages, crates and modules 11-11-2024]]
- [[Rust Crash Course - Managing packages, crates and modules 2024-11-07]]