---
created:
  - <% tp.file.creation_date() %>
aliases:
  - <% tp.file.title %> <% tp.file.creation_date("DD-MM-YYYY") %>
tags:
  - Programming/topic
language: 
---
<%* tp.hooks.on_all_templates_executed(async () => {
  let language =  await tp.system.prompt("The programming language")
  language = language.toLowerCase();
  
  const file = tp.file.find_tfile(tp.file.path(true));
  await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["language"] = language;
  });

  tp.file.rename(language.charAt(0).toUpperCase() + language.slice(1) + " - " + tp.file.title)
}) %>
**Topics:** <% tp.file.cursor(1) %>

# 📃 <% tp.file.title %> <% tp.file.creation_date("DD-MM-YYYY")%>

---
<% tp.file.cursor(3) %>

# 📦 References

---

-<% tp.file.cursor(2) %>
