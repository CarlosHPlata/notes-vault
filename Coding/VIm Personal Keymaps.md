---
id: Personal Keymaps
aliases: []
tags:
  - vimmaps
  - vim
  - Programming/topic
language: Vim
---
**Topics:** [[vim]], [[vimplugins]]
here are all my personal keymaps. All of those mappings are mapped on the [[Vim Lua Configuration]]

>[!faq] **THIS MAY BE OUTDATED INSTEAD OF THIS CHECK THE NEXT**

 - use `:map` in vim
 - [check my own cheatset plugin for neovim](https://github.com/CarlosHPlata/vimconfig/blob/main/luavim/lua/personal/mappings/my_own_plugin.lua)

---
## Add Semicolons

> [!tip] **File**: `add_semicolons.lua`

automatically closes all the brackets and string literals, it detect any bracket or string character and provide functionality for auto close

### Mappings:

| Description                                                       | Mode           | Command                         |
| ----------------------------------------------------------------- | -------------- | ------------------------------- |
| (vimDesc::Insert semicolon at the end of the line in normal mode) | (vimMode::`n`) | (vimKeymap::`<leader>;`)        |
| (vimDesc::Insert semicolon at the end of the line in insert mode) | (vimMode::`i`) | (vimKeymap::`<leader>;`)        |
| (vimDesc::Insert comma at the end of the line in normal mode)     | (vimMode::`n`) | (vimKeymap::`<leader><leader>`) |
| (vimDesc::Insert comma at the end of the line in insert model)    | (vimMode::`i`) | (vimKeymap::`<leader><leader>`) |

## Vim Pane movements

> [!tip] **File**: `vim_pane_movements.lua`

## Vertical movements

| Description                                      | Mode           | Command              |
| ------------------------------------------------ | -------------- | -------------------- |
| (vimDesc::center after moving down)              | (vimMode::`n`) | (vimKeymap::`<C-d>`) |
| (vimDesc::Center after moving up)                | (vimMode::`i`) | (vimKeymap::`<C-u>`) |
| (vimDesc::Center after searching next)           | (vimMode::`n`) | (vimKeymap::`n`)     |
| (vimDesc::Center after searching next backwards) | (vimMode::`n`) | (vimKeymap::`N`)     |

Mappings to move between vim panes with just ctrl and movement keys hjkl.

### Mappings:

| Description                              | Mode | Command              |
| ---------------------------------------- | ---- | -------------------- |
| (vimDesc::Move to the pane above)        | `n`  | (vimKeymap::`<c-k>`) |
| (vimDesc::Move to the pane below)        | `n`  | (vimKeymap::`<c-j>`) |
| (vimDesc::Move to the pane to the left)  | `n`  | (vimKeymap::`<c-h>`) |
| (vimDesc::Move to the pane to the right) | `n`  | (vimKeymap::`<c-l>`) |

## Vim source and editing

> [!tip] **File**: `vim_pane_movements.lua`

Allow to open the init.lua configuration or source it.

### Mappings:

| Description                                  | Mode | Command                   |
| -------------------------------------------- | ---- | ------------------------- |
| (vimDesc::Source the vim configuration file) | `n`  | (vimKeymap::`<leader>vs`) |
| (vimDesc::Edit the vim configuration file)   | `n`  | (vimKeymap::`<leader>ve`) |

## Auto close brackets

> [!tip] **File**: `auto_close_brackets.lua`

this is for autoclosing all types of brackets and string literals.
It get help from my own lua function that I created to also detect if the closing bracket or string literal is already there to not writte it 2 times.

### Mappings:

| Description                                                      | Mode | Command              |
| ---------------------------------------------------------------- | ---- | -------------------- |
| (vimDesc::Auto-close curly braces with newline)                  | `i`  | (vimKeymap::`{<cr>`) |
| (vimDesc::Auto-close parentheses with newline)                   | `i`  | (vimKeymap::`(<cr>`) |
| (vimDesc::Auto-close square brackets with newline)               | `i`  | (vimKeymap::`[<cr>`) |
| (vimDesc::Auto-close angle brackets with newline)                | `i`  | (vimKeymap::`<<cr>`) |
| (vimDesc::Auto-close parentheses)                                | `i`  | (vimKeymap::`(`)     |
| (vimDesc::Auto-close curly braces)                               | `i`  | (vimKeymap::`{`)     |
| (vimDesc::Auto-close square brackets)                            | `i`  | (vimKeymap::`[`)     |
| (vimDesc::Auto-close angle brackets)                             | `i`  | (vimKeymap::`<`)     |
| (vimDesc::Auto-close single quotes)                              | `i`  | (vimKeymap::`'`)     |
| (vimDesc::Auto-close double quotes)                              | `i`  | (vimKeymap::`"`)     |
| (vimDesc::Auto-close backticks)                                  | `i`  | (vimKeymap::`` ` ``) |
| (vimDesc::Overwrite closing parenthesis if already closed)       | `i`  | (vimKeymap::`)`)     |
| (vimDesc::Overwrite closing curly brace if already closed)       | `i`  | (vimKeymap::`}`)     |
| (vimDesc::Overwrite closing square bracket if already closed)    | `i`  | (vimKeymap::`]`)     |
| (vimDesc::Overwrite closing angle bracket if already closed)     | `i`  | (vimKeymap::`>`)     |
| (vimDesc::Enclose word with single quotes in normal mode)        | `n`  | (vimKeymap::`'`)     |
| (vimDesc::Enclose word with double quotes in normal mode)        | `n`  | (vimKeymap::`"`)     |
| (vimDesc::Enclose word with parentheses in normal mode)          | `n`  | (vimKeymap::`(`)     |
| (vimDesc::Enclose word with curly braces in normal mode)         | `n`  | (vimKeymap::`{`)     |
| (vimDesc::Enclose word with square brackets in normal mode)      | `n`  | (vimKeymap::`[`)     |
| (vimDesc::Enclose selection with single quotes in visual mode)   | `v`  | (vimKeymap::`'`)     |
| (vimDesc::Enclose selection with double quotes in visual mode)   | `v`  | (vimKeymap::`"`)     |
| (vimDesc::Enclose selection with parentheses in visual mode)     | `v`  | (vimKeymap::`(`)     |
| (vimDesc::Enclose selection with curly braces in visual mode)    | `v`  | (vimKeymap::`{`)     |
| (vimDesc::Enclose selection with square brackets in visual mode) | `v`  | (vimKeymap::`[`)     |
