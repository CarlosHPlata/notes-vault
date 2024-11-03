---
created:
  - 2024-11-03 18:55
aliases:
  - Rust - Crash course slices 2024-11-03
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
# 🔥 Rust - Crash course slices 2024-11-03 

---
## 📃Notes 
>_Slices_ let you reference a contiguous sequence of elements in a [collection](https://doc.rust-lang.org/book/ch08-00-common-collections.html) rather than the whole collection.

> it does not have ownership.

>  write a function that takes a string of words separated by spaces and returns the first word it finds in that string.

```rust
fn main() {
    let s = String::from("hello world");

    let word_index = first_word(&s);
    println!("{}", word_index);
}

fn first_word(s: &String) -> usize {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return i;
        }
    }

    s.len()
}
```
According to the book this method is wrong cause it return an unrelated number from what we are looking from.

## String slice
>A _string slice_ is a reference to part of a `String`

```rust
let s = String::from("hello world");

let hello = &s[0..5];
let world = &s[6..11];
```

Start is inclusive end is exclusive

> Internally, the slice data structure stores the starting position and the length of the slice, which corresponds to `ending_index` minus `starting_index`

> With Rust’s `..` range syntax, if you want to start at index 0, you can drop the value before the two periods.
> By the same token, if your slice includes the last byte of the `String`, you can drop the trailing number.
> You can also drop both values to take a slice of the entire string.

> Note: String slice range indices must occur at valid UTF-8 character boundaries. If you attempt to create a string slice in the middle of a multibyte character, your program will exit with an error.

```rust
fn main() {
    let s = String::from("hello world");

    let word = first_word(&s);
    println!("{}", word);
}

fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[..i];
        }
    }

    &s[..]
}
```

## Other Slices

> String slices, as you might imagine, are specific to strings. But there’s a more general slice type too. Consider this array

```rust
let a = [1, 2, 3, 4, 5];
let slice = &a[1..3];
assert_eq!(slice, &[2, 3]);
```

# 📦References 
- [Rust Official Documentation](https://doc.rust-lang.org/book/ch04-03-slices.html)