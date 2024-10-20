# Vim Plugins
**Here a section of all my installed plugins:**
```dataview
LIST rows.file.link FROM #vimplugin 
GROUP BY type
```
# Useful commands
```dataview
TABLE vimCmd as "Command" FROM #vim
WHERE vimCmd 
```
# Vim Keymaps

This section contains a list of custom key mappings for Vim, tailored to enhance productivity and streamline common tasks. Each key mapping is described with its functionality, the mode in which it operates, the key combination (LHS), and the resulting action (RHS).
This can be divided into 2 types of my combinations that can be used
## List of all Plugin Mappings
```dataview
TABLE vimDesc as "Map Description", vimKeymap as "keymap" FROM #vimmaps 
WHERE row.file.name != "Personal Keymaps"
```

## List of all My Personal mappings
```dataview
TABLE vimDesc as "Map Description" FROM #vimmaps 
WHERE row.file.name = "Personal Keymaps"
```