---
created:
  - 2024-11-23 20:49
aliases:
  - Rust Common Collections 2024-11-23
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
# 🔥 Rust Common Collections 2024-11-23 

---
## 📃Notes 
### Vectors
Vectors keyword is `Vec<T>`.
Vectors allow you to store more than one value in a single data structure that puts all the values next to each other in memory.

> Vectors can only store values of the same type

To create a new vector:

```rust
let v: Vec<i32> = Vec::new();
```

>More often, you’ll create a `Vec<T>` with initial values and Rust will infer the type of value you want to store

```rust
let v = vec![1, 2, 3]; // vecttor of <i32>
```

Pushing into a vector:
```rust
let mut v = Vec::new();
v.push(5);
v.push(6);
v.push(7);
```

>There are two ways to reference a value stored in a vector: via indexing or by using the `get` method.

```rust
let v = vec![1, 2, 3, 4, 5];

let third: &i32 = &v[2];

let third: Option<&i32> = v.get(2);
match third {
  Some(third) => println!("third el {}", third),
  None => println!("No element")
}
```

When using `[]` Rust will cause the program to panic if outside bounds.
When using `get` Rust will return `None` if outside of bounds.

#### Iterating over a vector
To access each element you can iterate over the indices with a for loop:
```rust
let v = vec![100, 32, 57];
for i in &v {
  println!("{i}")
}
```

Or with mutable:
```rust
let mut v = vec![1, 2, 3];
for i in &mut v {
  *i += 50;
}
```

> To change the value that the mutable reference refers to, we have to use the `*` dereference operator to get to the value in `i` before we can use the `+=` operator.

#### Using an Enum to Store multiple types

```rust
enum SpreadshetCell {
  Int(i32),
  Text(String),
}

let row = vec![
  SpreadsheetCell:Int(2),
  SpreadsheetCell:Text(String::from("hello world")),
]
```

Vectors and elements are dropped at the end of the scope.

### Strings
>  Rust has only one string type in the core language, which is the string slice `str`

> The `String` type, which is provided by Rust’s standard library rather than coded into the core language, is a growable, mutable, owned, UTF-8 encoded string type.

> Many of the same operations available with `Vec<T>` are available with `String` as well because `String` is actually implemented as a wrapper around a vector

> For that, we use the `to_string` method,  which is available on any type that implements the `Display` trait

> Remember that strings are UTF-8 encoded, so we can include any properly encoded data in them

> Often, you’ll want to combine two existing strings. One way to do so is to use the `+` operator

The string `s3` will contain `Hello, world!`. The reason `s1` is no longer valid after the addition, and the reason we used a reference to `s2`, has to do with the signature of the method that’s called when we use the `+` operator. The `+` operator uses the `add` method, whose signature looks something like this:

`fn add(self, s: &str) -> String {`

> A `String` is a wrapper over a `Vec<u8>`

> The best way to operate on pieces of strings is to be explicit about whether you want characters or bytes. For individual Unicode scalar values, use the `chars`

### Hash Maps

> The last of our common collections is the _hash map_. The type `HashMap<K, V>`

> One way to create an empty hash map is to use `new` and to add elements with `insert`

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(String::from("blue"), 10);
```

> Just like vectors, hash maps store their data on the heap.

> hash maps are homogeneous: all of the keys must have the same type

> We can get a value out of the hash map by providing its key to the `get` method,

```rust
use std::collections::HashMap

let mut scores = HashMap::new();
socres.insert(String::from("blue"), 10);

let team_name = String::from("blue");
let score = scores.get(&team_name).copied().unwrap_or(0);
```

>The `get` method returns an `Option<&V>`

> This program handles the `Option` by calling `copied` to get an `Option<i32>` rather than an `Option<&i32>`

>  then `unwrap_or` to set `score` to zero if `scores` doesn’t have an entry for the key.

> We can iterate over each key–value pair in a hash map in a similar manner as we do with vectors, using a `for` loop:

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("blue"), 10);

for (key, value) in &scores {
  println!("{key}: {value}")
}
```

>  iterating over a hash map happens in an arbitrary order

> For types that implement the `Copy` trait, like `i32`, the values are copied into the hash map. For owned values like `String`, the values will be moved and the hash map will be the owner of those values

> Hash maps have a special API for this called `entry` that takes the key you want to check as a parameter.

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("blue"), 10);

scores.entry(String::from("blue")).or_insert(50);
```

> The `or_insert` method on `Entry` is defined to return a mutable reference to the value for the corresponding `Entry` key if that key exists, and if not, it inserts the parameter as the new value for this key and returns a mutable reference to the new value.

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("blue"), 10);

let score = map.entry(word).or_insert(0);
*count += 1;
```

> By default, `HashMap` uses a hashing function called _SipHash_ that can provide resistance to denial-of-service (DoS) attacks

> you can switch to another function by specifying a different hasher. A _hasher_ is a type that implements the `BuildHasher` trait.


# 📦References 
- [The Rust Programming Lnaguage](https://doc.rust-lang.org/book/ch08-01-vectors.html)