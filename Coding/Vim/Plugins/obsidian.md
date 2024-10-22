---
id: obsidianvim
aliases:
  - Coding
tags:
  - Programming/topic
  - vimplugin
created:
  - 2024-10-22 12:32
language: Vim
type: obsidian
---

# 📃 obsidian 2024-10-22

---

> [!tip] **File:** `obsidian.lua`

Obsidian nvim is a plugin designed for NeoVim that allow you to run obsidian actions in your vault is kinda hard to configure but is worth if you cannot install the true application.

## Worth to know commands:

### Create a note

- `:ObsidianFromtemplate [TITLE]` to create a new note from a template in the templates folder, it will pop up [[Telescope|telescope]].
- `:ObsidianSearch [Name]` to search for or create notes in your vault using `ripgrep` and [[Telescope|telescope]]
- `:ObsidianNew [TITLE]` To open a new note in obsidian.
- `:Obsidiantoday [OFFSET]` for opening or create today's note, or if `offset` it will create that day note.
- `:ObsidianYesterday` to go to the yesterday's note
- `:ObsidianTomorrow` to open/create the tomorrow's note
- `:ObsidianExtractNote [Title]` to extract the visual selected text into a new note and link to it.

### Movement

- `:ObsidianQuickSwitch` to quickly switch to (or open) another note in your vault, _Note: is better to use [[Telescope|telescope]]_, it has it's integration with the plugin.
- `:ObsidianFollowLink [vsplit|hsplit]` To follow a note backlink under the cursor, _Note: I already mapped `<leader>gf`_
- `:ObsidianTags [TAG ...]` for getting a picker list of all ocurrences of the fiven tags, _it open [[Telescope|telescope]]_
- `:ObsidianDailies [OFFSET...]` to open a picker list of daily notes for example `:ObsidianDailies -2 1` will open a list of daily notes from 2 days ago until tomorrow, _it will use [[Telescope|telescope]]_

### Templates

- `:ObsidianTemplate [NAME]` to insert the template into the current note
- `:ObsidianFromtemplate [TITLE]` to create a new note from a template in the templates folder, it will pop up [[Telescope|telescope]].

### Other commands

- `:ObsidianBackLinks` for getting a picker list of references to the current buffer, _it open [[Telescope|telescope]]_
- `:ObsidianLink [Query]` to link an inline visual selection of a text to a note.
- `:ObsidianLinkNew [Title]` to create a new note and link it to an inline visual selection of text.
- `:ObsidianLinks` to collect all links within the current buffer into a picker [[Telescope|telescope]].
- `:ObsidianWorkspace [Title]` To switch to another workspace or vault.
- `:ObsidianPasteImg [Imgname]` to paste an image from the clipboard into the note at the cursor position.
- `:ObsidianRename [NEWNAME] [--dry-run]` to rename the note of the current buffer or reference under the cursor, updating all backlinks across the vault.
- `:ObsidianToggleCheckbox` to cucle though chekcbox options _NOTE: it's already mapped to `<cr>`_.

### configuration

in order to this file to work you need to configure it properly check the resource to check how to do it

this is my configuration:

```lua
return {
	"epwalsh/obsidian.nvim",
	version = "*", -- recommended, use latest release instead of latest commit
	lazy = true,
	ft = "markdown",
	-- Replace the above line with this if you only want to load obsidian.nvim for markdown files in your vault:
	-- event = {
	--   -- If you want to use the home shortcut '~' here you need to call 'vim.fn.expand'.
	--   -- E.g. "BufReadPre " .. vim.fn.expand "~" .. "/my-vault/*.md"
	--   -- refer to `:h file-pattern` for more examples
	--   "BufReadPre path/to/my-vault/*.md",
	--   "BufNewFile path/to/my-vault/*.md",
	-- },
	dependencies = {
		"nvim-lua/plenary.nvim",
	},
	opts = {
		workspaces = {
			{
				name = "personal",
				path = "~/Projects/notes-vault",
			},
		},
		daily_notes = {
			folder = "dailyNotes",
			template = "DailyLog.md",
		},
		templates = {
			folder = "1Obsidian/templates",
		},
    picker = {
      name = "telescope.nvim",
    }
	},
}
```

# 📦 Resources

---

- https://github.com/epwalsh/obsidian.nvim
