---
created:
  - 2024-11-01 00:34
aliases:
  - Implementation Keyword for Structs 01-11-2024
  - Rust - Impl
  - Rust - Methods
tags:
  - Programming/topic
language: rust
---
**Topics:** [[rust]]

# 📃 Implementation block for Structs 01-11-2024

---
[[Rust - Structs|Structs]] are just definitions of properties for a given type. if we want to implement **methods** we have to combine them with the `impl` block.

Let's take for example the next piece of code:
```rust
struct Rectangle {
  width: u32,
  height: u32,
}

fn calculate_area(rectangle: &Rectangle) -> u32 {
  rectangle.width * rectangle.height
}

fn main() {
  let rect = Rectangle {
    width: 30,
    height: 50,
  };

  let area = calculate_area(&rect);
}
```

We have a function called `calculate_area` let's imagine we want to add this method to the struct definition.
For this we will have to declare an `impl` block with the same name as the struct we have defined, in this case `Rectangle`

```rust
struct Rectangle {
  width: u32,
  height: u32,
}

// impl block ------------
impl Rectangle {
  fn area(&self) -> u32 {
    self.width * self.height
  }
}
// ----------------------

fn main() {
  let rect = Rectangle {
    width: 30,
    height: 50,
  };

  let area = rect.area();
}
```

As you see in the code above from line *6* till line *10* is what we call **Impl block** everything within this `impl` block will be associated with the struct type (*Rectangle*).

## The self keyword

> [!tip] Within an `impl` block the type `Self` is an alias for the type that the `impl` block is for.

> [!faq] All methods inside the `impl` block should receive a `self` variance as first parameter.

notice the previous example of `impl` block:
```rust
impl Rectangle {
  fn area(&self) -> u32 {
    self.width * self.height
  }
}
```

The `&self` **is actually a short for** `self: &Self`. Notice that we are using the `&` reference since we only want to **[[Rust - References and borrowing|Borrow]]** the properties inside the `self` instance but not [[Rust - Ownership|Take Ownership]] of the instance itself.

If we wanted to write or change some data in the instance we'd use `&mut self` instead.
```rust
impl Rectangle {
  fn set_width(&mut self, width: u32) {
    self.width = width;
  }
}
```

> [!danger] Having a method that takes ownership
> Having a method that uses just `self`  as the first parameter **is rare**; this technique is usually used only when method transforms `self` into something else and you **want to prevent the caller from using the original instance**.

## Methods and properties with the same name

Rust let's you define methods with the same name as the properties defined. For example:
```rust
struct Person {
  name: Stirng,
}

impl Person {
  fn name(&self) -> bool {
    return true;
  }
}

fn main() {
  let ppl = Person {
    name: String::from("carlos");
  };

  if (ppl.name()) { //notice the difference
    println!("The name is {}", ppl.name)
  }
}
```

> [!tip] Rust will automatically know the difference when using `()` and not using it to know if call the method or the property.

## Associated functions and Constructors
All methods are associated to a struct so all of them can be called **Associated Functions** however, when the function does not receive `self` as first parameter then is **not a method**. So that's what we reference as pure **Associated Function**.

See more here: [[Rust - Associated Functions for Structs]]

## Multiple implementation blocks
Rust does not limit the number of implementations for a given struct type, so you can split your methods in different implementation blocks.

> [!faq] Most of the time there's no reason to separate the methods into multiple `impl` blocks, for convention please try to use just one `impl`.

```rust
impl Rectanlge {
  fn area(&self) -> u32 {
    self.width * self.height
  }
}

impl Rectangle {
  fn perimeter(&self) -> u32 {
    self.width*2 + self.height*2
  }
}
```
# 📦 References

---
- [[Rust - Structs]]
- [[Rust - Associated Functions for Structs]]
- [[Rust - Overloading Methods]]
- [[Rust - Ownership]]
- [[Rust - References and borrowing]]
- [[Rust crash course - structs 2024-10-31]]