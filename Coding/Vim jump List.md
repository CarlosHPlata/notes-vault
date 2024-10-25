---
created:
  - 2024-10-20 21:01
aliases:
  - Coding
tags:
  - vim
  - vimtopic
  - Programming/topic
language: Vim
---
**Topics:** [[vim]]
# 📃 Understanding Vim Jump List 20-10-2024

---
(vimCmd::`:help jumplist`)

>Jumps are remembered in a jump list.  With the CTRL-O and CTRL-I command you
can go to cursor positions before older jumps, and back again.  Thus you can
move up and down the list.  There is a separate jump list for each window.
The maximum number of entries is fixed at 100.

To understand which command qualify as jumps you can use:

| Key            | What id does                     |
| -------------- | -------------------------------- |
| (vimKey::`G`)  | Jump to the line preceeded by G  |
| (vimKey::`}`)  | jump to the next blank line      |
| (vimKey::`{`)  | jump to prev blank line          |
| (vimKey::`[{`) | jump to the begin of block       |
| (vimKey::`]}`) | Jump to end of block             |
| (vimKey::`M`)  | Jump to the middle of the window |

You can view the entire jump list at anytime by typing (vimCmd::`:jumps`)
You can also clear the list by typing (vimCmd::`:clearjumps`)
You can also explicitly add a jump by setting a mark with (vimKey::`m`)

One of the hidden benefits is you can quick navigate within your project using (vimKey::`<C-i>`) or (vimKey::`<C-o>`)

You can move to a specific jump using letter (vimKey::`g`) preceded by a number

---

## 📜 Notes and Ideas
- I think this is a re-topic of what markers are combined with what it can be done with the jumplist in general
## 📦References 
- https://medium.com/@kadek/understanding-vims-jump-list-7e1bfc72cdf0
- [[vim motion day 1]]
- [[learning vim motions 2]]