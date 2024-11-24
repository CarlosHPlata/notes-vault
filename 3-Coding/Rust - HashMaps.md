---
created:
  - 2024-11-24 22:26
aliases:
  - Rust HashMaps 24-11-2024
tags:
  - Programming/topic
language: rust
---

**Topics:** [[rust]]

# 📃 Hash Maps 24-11-2024

---
Like in other languages Hash maps are implemented too into Rust, By default rust Hash Maps use the [Sip Hash](https://en.wikipedia.org/wiki/SipHash) algorithm which is safe but slower.
Hash Maps are implementing to the standard library by importing the following module:

```rust
use std::collections::HashMap;
```

### Create the new hash map
You can create a new Hash Map by using `new`:

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
```

### Insert into hash map
You can insert into the hash map by using `insert`, remember to make the Hash Map `mut`.

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();

scores.insert(Sring::from("blue"), 10);
```

 For types that implement the `Copy` trait, like `i32`, the values are copied into the hash map. For owned values like `String`, the values will be moved and the hash map will be the owner of those values
 
### Get value from Hash Map
You can access the values using `get`. *Get resolves a [[Rust - Option|Option]]*.

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(Sring::from("blue"), 10);

let socre = scores.get(&String::from("blue")).copied().unwrap_or(0);
```
> [!tip] look that this code is using several options from Rust using the [[Rust - Copy trait]] to copy a value of `i32` from `&i32`.
> This only works if the values extend the `Copy`  trait.

> [!tip] Another thing to look is the use of the [unwrap_or](https://doc.rust-lang.org/core/?search=unwrap_or) a method present in most core Structs like [[Rust - Option]] or [[Rust - strings type]].



### Iterating over values
We can iterate over each key–value pair in a hash map in a similar manner as we do with vectors, using a `for` loop:

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(Sring::from("blue"), 10);

for (key, value) in &scores { //look the &scores
  println!("{key}: {value}");
}
```

> [!danger] terating over a hash map happens in an arbitrary order


### The Entry
 Hash maps have a special API for this called `entry` that takes the key you want to check as a parameter.

For example one use could be trying to insert only if entry does not exists:

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(Sring::from("blue"), 10);

scores.entry(String::from("red")).or_insert(10); // will insert
scores.entry(String::from("blue")).or_insert(10); // will not insert
```

The `or_insert` method on `Entry` is defined to return a mutable reference to the value for the corresponding `Entry` key if that key exists, and if not, it inserts the parameter as the new value for this key and returns a mutable reference to the new value.

Another use case could be to update a value if exists:

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(Sring::from("blue"), 10);

let score = map.entry(String::from("blue")).orInsert(0);
*count += 1;
```

# 📦 References

---

- [[Rust Common Collections 2024-11-23]]