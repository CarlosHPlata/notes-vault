---
tags:
  - vimmaps
  - "#vimplugin"
  - vim
type: lsp
---
> [!tip] **File** `lsp_config.lua`

Language Server Protocol ( #LSP ) is a powerful tool that evaluates your file against a language server in the background,
providing instant feedback about compilation or language errors.

this will let us see errors, suggestion to those errors, and also the documentation of the function we are using.
## Mason Plugin

#Mason is package provides the #LSP parsers. You can use:
  (vimCmd::`:Mason`)
to check and install LSP parsers.

More information can be found here: https://github.com/williamboman/mason.nvim

## mason-lspconfig
This package allows mason to communicate with the #LSP configuration servers. It also ensures that the language servers are installed before proceeding further.
More information can be found here: https://github.com/williamboman/mason-lspconfig.nvim 

It contains a useful property `ensure_installed` that allows you have the right formatters for lsp servers ready and installed

## nvim-lspconfig
This package lets Neo vim communicate with the language servers installed in the background. It serves as a communication channel so Neo vim can send messages to the language servers.
- You can check LSP configuration by using: (vimCmd::`:LspInfo`)
- You can check extended functionality of available functions with vim bindings by using: (vimCmd::`:h vim.lsp.buf`) More information can be found here: https://github.com/neovim/nvim-lspconfig

## TO INSTALL A NEW LSP CONFIGURATION:
1. Check the list of available language servers at:
    https://github.com/williamboman/mason-lspconfig.nvim?tab=readme-ov-file#available-lsp-servers
2. Add the server to the `mason-lspconfig.nvim` configuration `ensure_installed` list.
3. Add the required configuration setup to nvim-lspconfig.
  
## Mappings

| Description                                                           | mode | command                   |
| --------------------------------------------------------------------- | ---- | ------------------------- |
| (vimDesc::Open documentation pane for symbol under cursor)            | `n`  | (vimKeymap::`<leader>d`)  |
| (vimDesc::Go to definition of symbol under cursor)                    | `n`  | (vimKeymap::`<leader>gt`) |
| (vimDesc::Go to implementation of symbol under cursor)                | `n`  | (vimKeymap::`<leader>gi`) |
| (vimDesc::Open the code actions pane to help fix errors in your code) | `n`  | (vimKeymap::`<leader>ca`) |
| (vimDesc::Rename the symbol under the cursor)                         | `n`  | (vimKeymap::`<leader>rn`) |
