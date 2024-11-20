---
created: <% tp.file.creation_date() %>
tags:
- Project/definition
---
<%* tp.hooks.on_all_templates_executed(async () => {
  const project = await tp.system.prompt("Project")
  const project_parsed = project.toLowerCase().replaceAll(" ", "_")

  const file = tp.file.find_tfile(tp.file.path(true))
  await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter['project'] = project_parsed
  })

  tp.file.rename('PROJECT - ' + project.charAt(0).toUpperCase() + language.slice(1))
}) %>
# 🚀 Project - <% tp.file.title %>
___
## 🧾 Project Description
- 
---
## 📢 Project information
Created:: <% tp.file.creation_date() %> 
Deadline:: 
Hibernating:: 
Completion date expected:: 
Completed:: 
Type:: 
Tags:: 
Platform:: 

## ✅ Tasks 

## 📦 Resources 

## 📂 Project Logs 