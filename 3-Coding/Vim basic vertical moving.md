---
created:
  - 2024-10-26 18:44
aliases:
  - Vim basic vertical moving  26-10-2024
tags:
  - Programming/topic
language: Vim
---

**Topics:** [[vim]]

# 📃 Vim basic vertical moving  26-10-2024

---
There are multiple ways to move around:
- `j` and `k`  is the basic movement you can combine it with numbers to repeat the action like `9k` to jump 9 lines above.
- `{`  and `}` to jump to the next/previous blank line.
- `[{` and `]}` to jump to the beginning or end of a block of code.
- `M` moves the [[Vim Buffers]] to the center of the screen.
- `ctrl + d` moves the cursor half page down.
- `ctrl + u` moves the cursor half page up.
- `G` and `g` to move to the beginning, end or to specific line.
- Another cool way to move around is using the `%` symbol it will let you move to the closing bracket no matter where in the line is.
- **Jump to specific line** by using `:lineNo`.

## worth to map
>[!tip] check [[VIm Personal Keymaps]] to check my maps.

The best way to move in the opinion of the author *ThePrimaegen* is using `Ctrl + d` or `Ctrl + u`
in fact he has mapped as:
```lua
vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("n", "<C-u>", "<C-u>zz")
```


# 📦 References
---
- [[Vim jump List paragraphs and block jumps]]
- [[Vim Buffers]]
- [[Vim basic horizontal moving]]
