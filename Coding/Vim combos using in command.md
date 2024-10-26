---
created:
  - 2024-10-26 18:57
aliases:
  - Vim combos using in  26-10-2024
tags:
  - Programming/topic
language: Vim
---

**Topics:** [[vim]]

# 📃 Vim combos using in  26-10-2024

---
First you have to remember that in vim all motion commands can be used like: 

```bash
<number> <motion> <command> <seletor>
```

in this case it can be: `9viw` translated to **9 visual in word**

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

## Paragraphs
You can use **paragraphs** by concatenating `p` to the commands you use in vim for example:

- `vap` translates to **Visual Around Paragraph**
- `dap` translates to **Delete Around Paragraph**
- `yap` translates to **Yank Around Paragraph**

# 📦 References
---

- [[Vim visual mode]]
- [[Vim yank tricks]]
- [[vim delete tricks]]
