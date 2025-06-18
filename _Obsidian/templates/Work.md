---
created:
  - <% tp.file.creation_date() %>
tags: work
---

<%* tp.hooks.on_all_templates_executed(async () => {
  let prefix =  await tp.system.prompt("The prefix for the note")
  const file = tp.file.find_tfile(tp.file.path(true));

  tp.file.rename(prefix.charAt(0).toUpperCase() + prefix.slice(1) + " - " + tp.file.title)
}) %>
# 📃 <% tp.file.title %> 

---
<% tp.file.cursor(1) %>

# 📦 References

---

-<% tp.file.cursor(2) %>