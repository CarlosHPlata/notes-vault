---
id: Rust language loops
aliases:
  - Coding
tags:
  - Programming/topic
created:
  - 2024-10-20 23:27
language: Rust
---

**Topics:** [[rust]]

# 📃 Loops 20-10-2024

---

## Loops

Loops in rust are weird you can create infinite loops by:

```rust
loop {

}
```

To exit a loop use the always trusty `break`

But what if you wanna exit a nested loop?
Rust has the ability to **tag topics** with a string to differentiate them

```rust
'bob: loop {
  loop {
  }
}
```

This is nuts to be honest WTH never saw it in other languages. Some people say it **Tick identifiers**
Now let's say you wanna exit, just do:

```rust
'bob: loop {
  loop {
    break 'bob
  }
}
```

`continue` is very similar

```rust
'bob: loop {
  loop {
    continue 'bob
  }
}
```

## While

While loops are equal to loops but with a condition

```rust
'bob while(true) {

}
```

## For loops and Iterate over arrays

Like modern languages you can iterate over arrays by using `iter()`

```rust
for num in [1,2,3].iter() {
  //do stuff
}
```

The `iter` method is the most common iterator, but you can also stack `map` etc.. after the `iter`

### ranges

But let's say you wanna iterate from 0 to 10 you can use ranges like [[Python]]

```Rust
for num in 0..10 {
  //do stuff until 9
}
```

> [!tip] the start part is inclusive

> [!tip] the end part is exclusive

But you can actually make the end **inclusive** by using = sign

```rust
for num in 0..=10 {
  //do stuff until 10 inclusive
}
```

## References
- [[Rust variables and types]]