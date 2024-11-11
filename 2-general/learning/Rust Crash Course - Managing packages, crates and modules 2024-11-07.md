---
created:
  - 2024-11-07 23:40
aliases:
  - Managing packages
  - crates and modules 2024-11-07
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
# 🔥 Managing packages, crates and modules 2024-11-07 

---
## 📃Notes 
>you should organize code by splitting it into multiple modules and then multiple files.

> A package can contain multiple binary crates and optionally one library crate.

> The way you write code defines which parts are public for other code to use and which parts are private implementation details that you reserve the right to change.

- **Packages:** A Cargo feature that lets you build, test, and share crates
- **Crates:** A tree of modules that produces a library or executable
- **Modules** and **use:** Let you control the organization, scope, and privacy of paths
- **Paths:** A way of naming an item, such as a struct, function, or module

### Packages and crates

> A _crate_ is the smallest amount of code that the Rust compiler considers at a time.

>Crates can contain modules, and the modules may be defined in other files that get compiled with the crate, as we’ll see in the coming sections.

>A crate can come in one of two forms: a binary crate or a library crate.

>Each must have a function called `main`

>_Library crates_ don’t have a `main` function

>A _package_ is a bundle of one or more crates that provides a set of functionality.

>A package contains a _Cargo.toml_

>Cargo is actually a package that contains the binary crate for the command-line tool you’ve been using to build your code

>A package can contain as many binary crates as you like, but at most only one library crate.

>A package must contain at least one crate, whether that’s a library or binary crate.

### Modules to control scope and privacy

> how modules, paths, the `use` keyword, and the `pub` keyword work in the compiler

> - **Start from the crate root**: When compiling a crate, the compiler first looks in the crate root file (usually _src/lib.rs_ for a library crate or _src/main.rs_ for a binary crate) for code to compile.

- **Declaring modules**: In the crate root file, you can declare new modules; say you declare a “garden” module with `mod garden;`. The compiler will look for the module’s code in these places:
    - Inline, within curly brackets that replace the semicolon following `mod garden`
    - In the file _src/garden.rs_
    - In the file *src/garden/mod.rs*
- **Declaring submodules**: In any file other than the crate root, you can declare submodules. For example, you might declare `mod vegetables;` in _src/garden.rs_. The compiler will look for the submodule’s code within the directory named for the parent module in these places:
    - Inline, directly following `mod vegetables`, within curly brackets instead of the semicolon
    - In the file _src/garden/vegetables.rs_
    - In the file _src/garden/vegetables/mod.rs_
- **Paths to code in modules**: Once a module is part of your crate, you can refer to code in that module from anywhere else in that same crate, as long as the privacy rules allow, using the path to the code. For example, an `Asparagus` type in the garden vegetables module would be found at `crate::garden::vegetables::Asparagus`.
- **Private vs. public**: Code within a module is private from its parent modules by default. To make a module public, declare it with `pub mod` instead of `mod`. To make items within a public module public as well, use `pub` before their declarations.
- **The `use` keyword**: Within a scope, the `use` keyword creates shortcuts to items to reduce repetition of long paths. In any scope that can refer to `crate::garden::vegetables::Asparagus`, you can create a shortcut with `use crate::garden::vegetables::Asparagus;` and from then on you only need to write `Asparagus` to make use of that type in the scope.

```bash
backyard
├── Cargo.lock
├── Cargo.toml
└── src
    ├── garden
    │   └── vegetables.rs
    ├── garden.rs
    └── main.rs
```

# 📦References 
- [Rust Crash course managing growing projects with packages, crates, adn modules](https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html)