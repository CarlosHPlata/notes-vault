---
tags:
  - vimmaps
  - vim
---
here are all my personal keymaps. All of those mappings are mapped on the [[Vim Lua Configuration]]
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

Mappings to move between vim panes with just ctrl and movement keys hjkl.
### Mappings:

| Description                              | Mode | Command |
| ---------------------------------------- | ---- | ------- |
| (vimDesc::Move to the pane above)        | `n`  | `<c-k>` |
| (vimDesc::Move to the pane below)        | `n`  | `<c-j>` |
| (vimDesc::Move to the pane to the left)  | `n`  | `<c-h>` |
| (vimDesc::Move to the pane to the right) | `n`  | `<c-l>` |
## Vim source and editing
> [!tip] **File**: `vim_pane_movements.lua`

Allow to open the init.lua configuration or source it.
### Mappings:

| Description                                  | Mode | Command      |
| -------------------------------------------- | ---- | ------------ |
| (vimDesc::Source the vim configuration file) | `n`  | `<leader>vs` |
| (vimDesc::Edit the vim configuration file)   | `n`  | `<leader>ve` |
## Auto close brackets
> [!tip] **File**: `auto_close_brackets.lua`

this is for autoclosing all types of brackets and string literals.
It get help from my own lua function that I created to also detect if the closing bracket or string literal is already there to not writte it 2 times.
### Mappings:
| Description                                                      | Mode | Command |
| ---------------------------------------------------------------- | ---- | ------- |
| (vimDesc::Auto-close curly braces with newline)                  | `i`  | `{<cr>` |
| (vimDesc::Auto-close parentheses with newline)                   | `i`  | `(<cr>` |
| (vimDesc::Auto-close square brackets with newline)               | `i`  | `[<cr>` |
| (vimDesc::Auto-close angle brackets with newline)                | `i`  | `<<cr>` |
| (vimDesc::Auto-close parentheses)                                | `i`  | `(`     |
| (vimDesc::Auto-close curly braces)                               | `i`  | `{`     |
| (vimDesc::Auto-close square brackets)                            | `i`  | `[`     |
| (vimDesc::Auto-close angle brackets)                             | `i`  | `<`     |
| (vimDesc::Auto-close single quotes)                              | `i`  | `'`     |
| (vimDesc::Auto-close double quotes)                              | `i`  | `"`     |
| (vimDesc::Auto-close backticks)                                  | `i`  | `` ` `` |
| (vimDesc::Overwrite closing parenthesis if already closed)       | `i`  | `)`     |
| (vimDesc::Overwrite closing curly brace if already closed)       | `i`  | `}`     |
| (vimDesc::Overwrite closing square bracket if already closed)    | `i`  | `]`     |
| (vimDesc::Overwrite closing angle bracket if already closed)     | `i`  | `>`     |
| (vimDesc::Enclose word with single quotes in normal mode)        | `n`  | `'`     |
| (vimDesc::Enclose word with double quotes in normal mode)        | `n`  | `"`     |
| (vimDesc::Enclose word with parentheses in normal mode)          | `n`  | `(`     |
| (vimDesc::Enclose word with curly braces in normal mode)         | `n`  | `{`     |
| (vimDesc::Enclose word with square brackets in normal mode)      | `n`  | `[`     |
| (vimDesc::Enclose selection with single quotes in visual mode)   | `v`  | `'`     |
| (vimDesc::Enclose selection with double quotes in visual mode)   | `v`  | `"`     |
| (vimDesc::Enclose selection with parentheses in visual mode)     | `v`  | `(`     |
| (vimDesc::Enclose selection with curly braces in visual mode)    | `v`  | `{`     |
| (vimDesc::Enclose selection with square brackets in visual mode) | `v`  | `[`     |
