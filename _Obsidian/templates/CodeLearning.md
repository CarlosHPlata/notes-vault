---
created:
  - "{{date}} {{time}}"
aliases: [<% tp.file.title %> <% tp.file.creation_date("DD-MM-YYYY") %>]
tags:
  - Programming/learning
  - "#new"
language: <% tp.system.prompt("Type the programming language") %>
---
# 📃 {{title}} {{date: DD-MM-YYYY}}

---
<% tp.file.cursor() %>


## start transcription
```meta-bind-button
label: Start adding topics
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
## 📦References 
- 