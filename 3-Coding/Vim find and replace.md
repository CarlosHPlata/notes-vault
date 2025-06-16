---
created:
  - 2024-10-26 18:53
aliases:
  - Vim find and search  26-10-2024
tags:
  - Programming/topic
language: Vim
---

**Topics:** [[vim]]

# 📃 Vim find and search  26-10-2024

---
>[!faq] do not confuse with `f` or `t` for that check [[Vim basic horizontal moving]]

## Basic search
You can search things back use `/`
Then you can jump to the next using `n` or `N`

You can do reverse search with `?`
it works the same

The author also have it remapped:
```lua
vim.keymap.set("n", "n", "nzz")
vim.keymap.set("n", "N", "Nzz")
```

If you have a word that repeats itself through your file you can use:
- `*` to automatically put that word into search forward
- `#` will put it in reverse search
## REPLACE

>[!tip] to initiate the search do `:s%` to search and replace in the whole file

- Using the visual mode you can click `:s` to replace in the selection
- **Trick:** if you want to just append something use the movements to append it:
    - You can use `$` to append something at the end for example `:s/$/this will end`
    - You can use `^` to append something at the beggining for example `:s/^/this at start`
    
>[!faq] **this will be your next holy grail `\(.*\)`**
> this previous command will let you get the content of what you are selecting as a content to use after see next example

Let's pretend you want to replace all content of the next paragraph:
```bash
Foo
Bar
Far
```

First let's use the previous things we learned and use `vip` to visually select all the content in the paragraph.
Then use `:s` will start the search and replate, followed by `/\(.*\)` will get the content of every line as an item for you to use after replace. so for example if we do:

```vim
:s/\(.*\)/let myVar = [\1];
```

you will end with:

```js
let myVar = [Foo]
let myVar = [Bar]
let myVar = [Far]
```

# 📦 References

---
- [[Vim basic horizontal moving]]
- [[Vim basic vertical moving]]
- [[Vim combos using in command]]
- [[Vim Combos with visual mode]]