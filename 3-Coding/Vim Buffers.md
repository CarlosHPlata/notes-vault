---
created:
  - 2024-10-20 22:30
aliases:
  - Coding
tags:
  - vim
  - Programming/topic
language: Vim
---
**Topics:** [[vim]]
# 📃 Buffers 20-10-2024

---

>[!tip] A Buffer is an **im memory representation of a file opened**

Buffers are the way VIM present the GUI. by default you are always in a buffer.
Every time you run (vimCmd::`:e namefile` ) it will open a new buffer.

### Movement between buffers
- use (vimCmd::`:bp`) to move forward
- use (vimCmd::bn) to move to previous buffer
- You can list all the buffers with (vimCmd::`buffers`)
- You can init an empty buffer with (vimCmd::`enew`)

# 📃 Buffers 21-10-2024

- A buffer is a view of a file system
- A buffer is contained in a window.

Buffers act as a view **per file** meaning that 2 windows opening the same file are viewing **the same buffer**.

## 📜 Notes and Ideas
---

If you have installed [[Vim plugin - Telescope|Vim plugin - Telescope]] it will help you to navigate through buffers

## 📦References 
- [[Vim plugin - Telescope]]
- [[tmux]]
- [[Vim jump List paragraphs and block jumps]]
- [[VIm Personal Keymaps]]
- [[Vim plugin - Tmux navigation]]