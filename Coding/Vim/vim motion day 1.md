---
created:
  - 2024-10-21 21:45
aliases:
  - Coding
tags:
  - Programming/learning
language: Vim
---
# 📃 vim motion day 1  21-10-2024

---

You will have to remember that you always can:
```
<command> <count> <movement>
```
## Noob moving
You can check the motion of  vim by using
```
hjkl
ldur
```

You can go to insert mode by pressing `a` or `i`, `o`

You can go into line visual mode by going `shift+v`

## Horizontal moving

`_` goes to the beginning `$` goes to the end, `0` goes to the beginning character

Move around using `f` or `F` or `t` or `T`

>[!tip] super tip you can use `;` to repeat the movement 

Check expanded knowledge about [[Buffers]]

## Vertical moving
You can move by paragraph with `{` check this: [[Jump List]]

The best way to move in the opinion of the author *ThePrimaegen* is using `Ctrl + d` or `Ctrl + u`
in fact he has mapped as:
```lua
vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("n", "<C-u>", "<C-u>zz")
```

- `zz` will center the cursor to the middle of the screen
- `Ctrl+d` jumps half page down
- `Ctrl+u` jumps half page up

`G` will go to the bottom, and `gg` to go to the top of the file

If you **known the line you wanna jump** just writte it as a command `:<lineNumber>`

## Searching

You can search things back use `/`
Then you can jump to the next using `n` or `N`

You can do reverse search with `?`
it works the same

The author also have it remapped:
```lua
vim.keymap.set("n", "n", "nzzv")
vim.keymap.set("n", "N", "Nzzv")
```

If you have a word that repeats itself through your file you can use:
- `*` to automatically put that word into search forward
- `#` will put it in reverse search

## Advance horizontal movements
### horizontal
Time for the combos 👊🏻💥 this will be like DBZ sparkling zero.

**VI Visual mode In between Character**
this is the holly grail that I learned today `i` when using it after a edition command like:
- `v` visual selection mode
- `y` yank or copy mode
- `d` deletion mode

You can follow any of those commands with an `i` followed by a character you wanna enclose with.
 >[!tip] vim actually knows the close brackets so you can do `vi{` to enclose everything between `{ ... }`

Another cool thing **If you are not in the character you want** new versions of vim actually jump to the next iteration of that character you are looking for.

**VIW the holly grail of selecting words**

Another cool thing is the `viw` combo this will always select the entire word no matter where in the word you are.
You can also do `viW` capital `W` to select all the word until space.

## paste not override the copied register
this trick will prevent you to put content when you copy something
```lua
xnoremap("<leader>p", "\"_dP")
nnoremap("<leader>d", "\"_dp")
vnoremap("<leader>d", "\"_dp")
```

To understand this remap we will have to visit [[Coding/Vim/registers]]
But basically it moves the content that was deleted to the underscore register, which is the void register, so to the thrash.

# 📜 Notes and Ideas
---
- [Investigate Harpoon](https://github.com/ThePrimeagen/harpoon)
- [Install the get good vim game](https://github.com/ThePrimeagen/vim-be-good)

**Start using viw ciw diw viW ciW diW**

## 📦 Resources
- https://www.youtube.com/watch?v=KfENDDEpCsI&list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R&index=3