---
created:
  - <%tp.file.creation_date()%>
aliases: [<% tp.file.title %>]
tags:
  - Programming/learning
  - "#new"
language: <% tp.system.prompt("Type the programming language") %>
---
```meta-bind-button
label: Start adding topics
id: transcript
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
# 🔥 <%tp.file.title%> 

---
## 📃Notes 
<% tp.file.cursor(2) %>

# 📦References 
- <% tp.file.cursor(1) %>