---
tags:
  - vim
  - vimmaps
  - vimplugin
type: lsp
---
> [!tip] **File:** `linter-and_formatter.lua`

> [!faq]- Warning: For this to work first you have to install what is in [[LSP Configurations and formatting - Mason]]

this will make your life easier, is just a linter integrated with vim it also does auto indentation is best than the old CoC that was difficult to configure.
Check here:
    https://github.com/nvimtools/none-ls.nvim

If you are using #Mason you can install first the formatters and linters (Mason is installed from the [[LSP Configurations and formatting - Mason]] file, no need to add it)

add diagnostics like:
  null_ls.builtins.diagnostics.stylua

  >[!FAQ] Deprecated linters:
  >there was a deprecation of unmantained lsp formatters check this thread
 https://github.com/nvimtools/none-ls.nvim/discussions/81
 You can install those deprecated by installing the extras: https://github.com/nvimtools/none-ls-extras.nvim

## How to install new linters or formatters
  
1. check with `:Mason` the available formatters or linters
2. add it to the `null_ls.builtins` for setup
*3*. Check that was not deprecated otherwise look for other solution


## Keymaps

| Desc                                                                | Mode | Command                   |
| ------------------------------------------------------------------- | ---- | ------------------------- |
| (vimDesc::Format the code of the current file using none-ls linter) | `n`  | (vimKeymap::`<leader>fc`) |
