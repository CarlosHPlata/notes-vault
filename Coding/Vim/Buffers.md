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
# 📃 Buffers 20-10-2024

---

Buffers are the way VIM present the GUI. by default you are always in a buffer.
Every time you run (vimCmd::`:e namefile` ) it will open a new buffer.

### Movement between buffers
- use (vimCmd::`:bp`) to move forward
- use (vimCmd::bn) to move to previous buffer
- You can list all the buffers with (vimCmd::`buffers`)
- You can init an empty buffer with (vimCmd::`enew`)


## 📜 Notes and Ideas
---

If you have installed [[Coding/Vim/Plugins/Telescope|Telescope]] it will help you to navigate through buffers

## 📦 Resources
- 