| Description                                                         | Mode | LHS       | RHS                                      |
|---------------------------------------------------------------------|------|-----------|------------------------------------------|
| Enclose word with double quotes in normal mode                      | n    | "         | mmbi"<Esc>ea"<Esc>`m<Right>              |
| :help &-default                                                     | n    | &         | :&&<CR>                                  |
| Enclose word with single quotes in normal mode                      | n    | '         | mmbi'<Esc>ea'<Esc>`m<Right>              |
| Enclose word with parentheses in normal mode                        | n    | (         | mmbi(<Esc>ea)<Esc>`m<Right>              |
| Search for a session [rmagatti/auto-session]                        | n    | ,ls       |                                          |
| Rename the symbol under the cursor                                  | n    | ,rn       |                                          |
| Open the code actions pane to help fix errors in your code          | n    | ,ca       |                                          |
| Go to implementation of symbol under cursor                         | n    | ,gi       |                                          |
| Go to definition of symbol under cursor                             | n    | ,gt       |                                          |
| Open documentation pane for symbol under cursor                     | n    | ,d        |                                          |
| Visit the last test file [vim-test]                                 | n    | ,g        | :TestVisit<CR>                           |
| Run the last test [vim-test]                                        | n    | ,l        | :TestLast<CR>                            |
| Run the entire test suite [vim-test]                                | n    | ,a        | :TestSuite<CR>                           |
| Run all tests in the current file [vim-test]                        | n    | ,T        | :TestFile<CR>                            |
| Run the nearest test [vim-test]                                     | n    | ,t        | :TestNearest<CR>                         |
| Format the code of the current file using LSP [none-ls]             | n    | ,fc       |                                          |
| Ask copilot for a help [CopilotC-Nvim/CopilotChat.nvim]             | n    | ,coh      |                                          |
| Ask copilot for a file [CopilotC-Nvim/CopilotChat.nvim]             | n    | ,cof      |                                          |
| Ask copilot [CopilotC-Nvim/CopilotChat.nvim]                        | n    | ,cop      |                                          |
| Telescope live grep [telescope.vim]                                 | n    | ,fg       |                                          |
| Toggle Neotree file explorer [neo-tree.nvim]                        | n    | ,nt       | :Neotree toggle<CR>                      |
| Preview Git hunk [gitsigns.nvim]                                    | n    | ,gp       | :Gitsigns preview_hunk<CR>               |
| Show Git blame for the current file [vim-fugitive]                  | n    | ,gb       | :Git blame<CR>                           |
| Edit the vim configuration file                                     | n    | ,ve       | <Cmd>e $MYVIMRC<CR>                      |
| Source the vim configuration file                                   | n    | ,vs       | <Cmd>source $MYVIMRC<CR>                 |
| Insert comma at the end of the line in normal mode                  | n    | ,,        | mlA,<Esc>`l                              |
| Insert semicolon at the end of the line in normal mode              | n    | ,;        | mlA;<Esc>`l                              |
| :help Y-default                                                     | n    | Y         | y$                                       |
| Enclose word with square brackets in normal mode                    | n    | [         | mmbi[<Esc>ea]<Esc>`m<Right>              |
| Jump to the previous diagnostic                                     | n    | [d        |                                          |
| Jump to the next diagnostic                                         | n    | ]d        |                                          |
| Toggle comment line                                                 | n    | gcc       |                                          |
| Toggle comment                                                      | n    | gc        |                                          |
| Opens filepath or URI under cursor with the system handler          | n    | gx        |                                          |
| Enclose word with curly braces in normal mode                       | n    | {         | mmbi{<Esc>ea}<Esc>`m<Right>              |
| Navigate to the previous tmux pane [vim-tmux-navigator]             | n    | <C-Bslash>| <Cmd>TmuxNavigatePrevious<CR>            |
| Telescope find files [telescope.nvim]                               | n    | <C-P>     |                                          |
| LuaSnip: Repeat last node expansion                                 | n    | <Plug>luasnip-expand-repeat |            |
| LuaSnip: Removes current snippet from jumplist                      | n    | <Plug>luasnip-delete-check |            |
| Navigate to the left tmux pane [vim-tmux-navigator]                 | n    | <C-H>     | <Cmd>TmuxNavigateLeft<CR>                |
| Navigate to the bottom tmux pane [vim-tmux-navigator]               | n    | <C-J>     | <Cmd>TmuxNavigateDown<CR>                |
| Navigate to the top tmux pane [vim-tmux-navigator]                  | n    | <C-K>     | <Cmd>TmuxNavigateUp<CR>                  |
| Show diagnostics under the cursor                                   | n    | <C-W><C-D>| <C-W>d                                   |
| Show diagnostics under the cursor                                   | n    | <C-W>d    |                                          |
| Navigate to the right tmux pane [vim-tmux-navigator]                | n    | <C-L>     | <Cmd>TmuxNavigateRight<CR>               |
| Enclose selection with double quotes in visual mode                 | v    | "         | <Esc><lt>i"<Esc>>a<Right>"<Esc>          |
| :help v_#-default                                                   | v    | #         |                                          |
| Enclose selection with single quotes in visual mode                 | v    | '         | <Esc><lt>i'<Esc>>a<Right>'<Esc>          |
| Enclose selection with parentheses in visual mode                   | v    | (         | <Esc><lt>i(<Esc>>a<Right>)<Esc>          |
| :help v_star-default                                                | v    | *         |                                          |
| Ask copilot for a help [CopilotC-Nvim/CopilotChat.nvim]             | v    | ,coh      |                                          |
| Ask copilot for a file [CopilotC-Nvim/CopilotChat.nvim]             | v    | ,cof      |                                          |
| Ask copilot [CopilotC-Nvim/CopilotChat.nvim]                        | v    | ,cop      |                                          |
| :help v_@-default                                                   | v    | @         | mode() ==# 'V' ? ':normal! @'.getcharstr().'<CR>' : '@' |
| :help v_Q-default                                                   | v    | Q         | mode() ==# 'V' ? ':normal! @<C-R>=reg_recorded()<CR><CR>' : 'Q' |
| Enclose selection with square brackets in visual mode               | v    | [         | <Esc><lt>i[<Esc>>a<Right>]<Esc>          |
| Toggle comment                                                      | v    | gc        |                                          |
| Opens filepath or URI under cursor with the system handler          | v    | gx        |                                          |
| Enclose selection with curly braces in visual mode                  | v    | {         | <Esc><lt>i{<Esc>>a<Right>}<Esc>          |
| LuaSnip: Jump to the previous node                                  | v    | <Plug>luasnip-jump-prev |                |
| LuaSnip: Jump to the next node                                      | v    | <Plug>luasnip-jump-next |                |
| LuaSnip: Change to the previous choice from the choiceNode          | v    | <Plug>luasnip-prev-choice |            |
| LuaSnip: Change to the next choice from the choiceNode              | v    | <Plug>luasnip-next-choice |            |
| LuaSnip: Expand the current snippet                                 | v    | <Plug>luasnip-expand-snippet |          |
| LuaSnip: Expand or jump in the current snippet                      | v    | <Plug>luasnip-expand-or-jump |          |
| LuaSnip: Repeat last node expansion                                 | v    | <Plug>luasnip-expand-repeat |          |
| cmp.utils.keymap.set_map                                            | i    | <C-Y>     |                                          |
| cmp.utils.keymap.set_map                                            | i    | <Down>    |                                          |
| cmp.utils.keymap.set_map                                            | i    | <C-Space> |                                          |
| cmp.utils.keymap.set_map                                            | i    | <C-P>     |                                          |
| cmp.utils.keymap.set_map                                            | i    | <C-F>     |                                          |
| cmp.utils.keymap.set_map                                            | i    | <C-B>     |                                          |
| cmp.utils.keymap.set_map                                            | i    | <C-E>     |                                          |
| cmp.utils.keymap.set_map                                            | i    | <C-N>     |                                          |
| cmp.utils.keymap.set_map                                            | i    | <Up>      |                                          |
| LuaSnip: Repeat last node expansion                                 | i    | <Plug>luasnip-expand-repeat |          |
| LuaSnip: Removes current snippet from jumplist                      | i    | <Plug>luasnip-delete-check |            |
| LuaSnip: Jump to the previous node                                  | i    | <Plug>luasnip-jump-prev |                |
| LuaSnip: Jump to the next node                                      | i    | <Plug>luasnip-jump-next |                |
| LuaSnip: Change to the previous choice from the choiceNode          | i    | <Plug>luasnip-prev-choice |            |
| LuaSnip: Change to the next choice from the choiceNode              | i    | <Plug>luasnip-next-choice |            |
| LuaSnip: Expand the current snippet                                 | i    | <Plug>luasnip-expand-snippet |          |
| LuaSnip: Expand or jump in the current snippet                      | i    | <Plug>luasnip-expand-or-jump |          |
| :help i_CTRL-W-default                                              | i    | <C-W>     | <C-G>u<C-W>                              |
| :help i_CTRL-U-default                                              | i    | <C-U>     | <C-G>u<C-U>                              |
| cmp.utils.keymap.set_map                                            | i    | <CR>      |                                          |
| Auto-close double quotes                                            | i    | "         |                                          |
| Auto-close single quotes                                            | i    | '         |                                          |
| Auto-close parentheses                                              | i    | (         | ()<Left>                                 |
| Auto-close parentheses with newline                                 | i    | (<CR>     | (<CR>)<C-O>O                             |
| Overwrite closing parenthesis if already closed                     | i    | )         |                                          |
| Insert comma at the end of the line in insert mode                  | i    | ,,        | <Esc>mlA,<Esc>`la                        |
| Insert semicolon at the end of the line in insert mode              | i    | ,;        | <Esc>mlA;<Esc>`la                        |
| Auto-close angle brackets                                           | i    | <lt>      | <lt>><Left>                              |
| Auto-close angle brackets with newline                              | i    | <lt><CR>  | <lt><CR>><C-O>O                          |
| Overwrite closing angle bracket if already closed                   | i    | >         |                                          |
| Auto-close square brackets                                          | i    | [         | []<Left>                                 |
| Auto-close square brackets with newline                             | i    | [<CR>     | [<CR>]<C-O>O                             |
| Overwrite closing square bracket if already closed                  | i    | ]         |                                          |
| Auto-close backticks                                                | i    | `         |                                          |
| Auto-close curly braces                                             | i    | {         | {}<Left>                                 |
| Auto-close curly braces with newline                                | i    | {<CR>     | {<CR>}<C-O>O                             |
| Overwrite closing curly brace if already closed                     | i    | }         |                                          |
