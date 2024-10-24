---
created:
  - 2024-10-24 20:16
aliases:
  - Coding
tags:
  - Programming/learning
  - vim
language: Vim
---
# 📃 learning motions 2  24-10-2024

---
## Vertical motions

Now it's have to read very sexy vertical movements

- Get use to the `relative numbers` you idiot, also always use `<C-u>` and `<C-d>`
- Another cool way to move around is using the `%` symbol it will let you move to the closing bracket no matter where in the line is.
    - you can make a combo like `v%d` to delete everything between two brackets for example as long as your cursor is in the beginning bracket
- Another cool tip is the `=` which will make the things auto ident based on the LSP.
- Another cool tip is that on visual mode you can make the cursor switch places between start and end of the selection by using `o`
- You can use **paragraphs** by concatenating `p` to the commands you use in vim for example:
    - `vap` translates to **Visual Around Paragraph**
    - `dap` translates to **Delete Around Paragraph**
    - `yap` translates to **Yank Around Paragraph**

## Find & Replace
Now we will talk about the damn replace

**FIND**
- You can search for all occurrences of the word under the cursor by pressing `*`

**REPLACE**

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

## 📦 Resources
- https://www.youtube.com/watch?v=FrMRyXtiJkc&list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R&index=7