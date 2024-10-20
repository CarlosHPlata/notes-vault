---
tags:
  - vim
---
For plugins since I moved from my previous vim configuration I started using lua. [[Lua]] is a powerful language.

## Package manager
for package manager I'm using [Lazy](https://github.com/folke/lazy.nvim). #Lazy is a simple package manager that listen to all files allocated in the `plugins` directory.

You can use the command:
(vimCmd::`:Lazy`)
to know the status of the plugins and if any one needs updating

## List of plugins
```dataview
LIST rows.file.link FROM #vimplugin 
GROUP BY type
```
