---
tags:
  - vimplugin
  - vimmaps
  - vim
type: vim motion
---
>[!tip] **FIle:** `ctrl_p_fuzzy_find.lua`

**Telescope** Let you fuzzy find and greep your files as like the ctrl-p from visual studio code here: https://github.com/nvim-telescope/telescope.nvim

the second plugin **telescope-ui-select.nvim** is just a theme to support telescope ui when triggering ui-select here:
  https://github.com/nvim-telescope/telescope-ui-select.nvim

## Keymaps

| Desc                                                 | Mode | Command                   |
| ---------------------------------------------------- | ---- | ------------------------- |
| (vimDesc::Telescope find files)                      | `n`  | (vimKeymap::`<C-p>`)      |
| (vimDesc::Telescope live greep, parse files content) | `n`  | (vimKeymap::`<leader>fg`) |
| (vimDesc::Telescope find vim buffers)                | `n`  | (vimKeymap::`<leader>fb`) |
