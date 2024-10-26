---
created:
  - 2024-10-26 19:01
aliases:
  - vim yank tricks  26-10-2024
tags:
  - Programming/topic
language: Vim
---

**Topics:** [[vim]]

# 📃 vim yank tricks  26-10-2024

---
this trick will prevent you to put content when you copy something
```lua
xnoremap("<leader>p", "\"_dP")
nnoremap("<leader>d", "\"_dp")
vnoremap("<leader>d", "\"_dp")
```

To understand this remap we will have to visit [[Coding/Vim/registers]]
But basically it moves the content that was deleted to the underscore register, which is the void register, so to the thrash.

# 📦 References

---

- [[Coding/Vim/registers]]
