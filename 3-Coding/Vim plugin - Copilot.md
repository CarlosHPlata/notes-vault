---
tags:
  - vimplugin
  - vimmaps
  - vim
type: copilot
---
> [!tip] **File:** `copilot.lua`

As the name suggest let's add copilot to nvim first of the pluggins of course is Github copilot is just what you expect autocompletion of code and detection
check here: https://github.com/github/copilot.vim
After installation remember to run
  (vimCmd::`:Copilot setup`)
The second pluggin is CopilotChat which is a chat for copilot check here: https://github.com/CopilotC-Nvim/CopilotChat.nvim

### Mappings

| Desc                                                            | Mode    | Command                    |
| --------------------------------------------------------------- | ------- | -------------------------- |
| (vimDesc::Ask copilot about current selection)                  | `n` `i` | (vimKeymap::`<leader>cop`) |
| (vimDesc::Ask copilot about the entire file)                    | `n` `i` | (vimKeymap::`<leader>cof`) |
| (vimDesc::Ask copilot for help like fix or doc using telescope) | `n` `i` | (vimKeymap::`<leader>coh`) |
