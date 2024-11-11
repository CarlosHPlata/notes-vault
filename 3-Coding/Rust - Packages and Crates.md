---
created:
  - 2024-11-11 22:06
aliases:
  - Packages and Crates 11-11-2024
tags:
  - Programming/topic
---

**Topics:** [[rust]]

# 📃 Packages and Crates 11-11-2024

---
## Crates
Crates are the smallest amount of code that the rust compiler considers at a given time. Crates are used to contain modules together.
Crates would contain modules, and the modules may be defined in other files that get compiled with the crate.

Crates come in 2 forms:
1. *Binary Crate:* these are programs you can compile to an executable that you can run. Each Binary Crate should have a `main` function.
   This is for Rust to know what to execute when your binary runs.
   
1. *Library Crate:* these don't have `main` function, and they don't compile to an executable. Instead they define functionality to be shared.

## Packages
Packages is a bundle of one or more crates that provides a set of functionality.
A package contains a **`Cargo.toml`** file that describes how to build the crate.
*Cargo* is actually a package that contains the binary crate for the CLI tool to create your project.

Running with Cargo it will use the convention to execute your program trough putting your files in `src`.
- For binary crates it will check `src/main.rs` for the default crate and name it with the same name as the package
- For library crates it will check `src/lib.rs` the package contains a library crate with the same name as the package.

> [!faq] A package must contain at least one crate, whether that's a library or binary crate.

A package can have multiple binary crates by placing files in the `src/bin` directory.

# 📦 References

---
- [[Rust - Managing packages, crates and modules]]
- [[Rust Crash Course - Managing packages, crates and modules 2024-11-07]]