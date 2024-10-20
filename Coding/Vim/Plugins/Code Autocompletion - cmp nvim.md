---
tags:
  - vimplugin
  - vim
type: lsp
---
> [!tip] **file:** `auto_completion.lua`

> [!faq]- Warning: For this to work first you have to install what is in [[LSP Configurations and formatting - Mason]]

Auto completion is magnificent tool it uses built in #LSP for this we will require multiple plugins

The configuration sets up `nvim-cmp` with the following features:
- Snippet expansion using `LuaSnip`.
- Bordered windows for completion and documentation.
- Key mappings for navigating and confirming completions.
- Sources for `LuaSnip`, LSP, and buffer completions.
- `Cmdline` completion for search ("/", "?") and command mode (":").
- LSP configuration (commented out) for integrating with `nvim-cmp`.

Note: Ensure you have the required plugins installed and configured properly.

Note2: ensure you have the lsp_config file first in your plugins and additionally there's a couple lines in that file commented out required

This file is complicated to explain better to see [this video](https://www.youtube.com/watch?v=iXIwm4mCpuc&list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn&index=5)

