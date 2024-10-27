---
tags:
  - vimmaps
  - vimplugin
  - vim
type: Git
---
>[!tip] **File:** `git_integration.lua`

git integrations to add git highlight on changes and also blame check here https://github.com/lewis6991/gitsigns.nvim

and also **vim-fugitive** to show git blame and other git commands check here:
    https://github.com/tpope/vim-fugitive
  you can use the command
   (vimCmd::`:Git`)
  to use any git command you want


## Mappings

| Desc                                           | Mode | Command                   |
| ---------------------------------------------- | ---- | ------------------------- |
| (vimDesc::Show git blame for the current file) | `n`  | (vimKeymap::`<leader>gb`) |
