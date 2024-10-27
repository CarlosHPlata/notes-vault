---
tags:
  - literature/note
  - "#new"
created:
  - "{{date}} {{time}}"
---
# 📕 <% tp.file.title %> <% tp.file.creation_date("DD-MM-YYYY") %>

## 🔥 Review
<% tp.file.cursor(2) %>

## 🧾 Notes
<% tp.file.cursor(3) %>

## Start review
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

#  📦 Reference
<% tp.file.cursor(1) %>