---
created:
  - 2024-10-26 17:46
aliases:
  - Coding
tags:
  - Programming/topic
language: Vim
---

**Topics:** [[vim]]

# 📃 Vim visual mode  26-10-2024

---
>[!tip] enter visual mode by hitting `v` in [[vim normal mode]]

When editing a text in Vim, visual mode is a great way to **select** text and manipulate it.

Vim's Visual mode has three versions:
1. Character mode (normal visual mode) `v`
2. Line mode: `shifth + v`
3. Block mode: `ctr + v`

**You can switch the side of the cursor between something selected using `o`**
## Character mode `v`
Is the normal way to access visual mode, it selects character by character use the normal movements ([[Vim jump List paragraphs and block jumps]]) to select things.
## Lime mode `shift + v`
Using linear mode will allow to **Select the entire lines** you can use movements to traverse as usual.

## Block mode `ctr + v`
This is like [[multi cursors visual code]] let you select different parts of a text is useful when commenting an entire block of code or editing at the beginning or end of a line

## Visual line mode
You can go into visual line mode with `shift+v` 

# 📦 References

---
- https://opensource.com/article/19/2/getting-started-vim-visual-mode
- https://vimdoc.sourceforge.net/htmldoc/visual.html
- [[Vim jump List paragraphs and block jumps]]
- [[Vim indentation]]