---
created:
  - 2024-10-26 18:31
aliases:
  - Coding
tags:
  - Programming/topic
language: Vim
---

**Topics:** [[vim]]

# 📃 Vim Combos with visual mode  26-10-2024

---
This is just a reference to various combos you can realize with visual mode:

## Commenting an entire block
You can enter visual block mode `ctr+v` [[Vim visual mode]] and then jump using `j` or `k` any number lines, then enter insert by using `shift+i` and comment that line with whatever you want

## Combine it with `in` command
[[Vim combos using in command]]

## Select everything between brackets
If you get to know with `%` ([[Vim basic vertical moving]]) you can do:
`v%d`
To for example delete everything between brackets.

# 📦 References

---
- [[Vim visual mode]]
- [[Vim basic horizontal moving]]
- [[Vim basic vertical moving]]
- [[Vim combos using in command]]