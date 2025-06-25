---
created:
  - <% tp.file.creation_date() %>
aliases:
  - <% tp.file.title %>
tags:
---
<%* tp.user.topic(tp) %>
**Topics:** <% tp.file.cursor(1) %>

# 📃 <% tp.file.title %> <% tp.file.creation_date("DD-MM-YYYY")%>

---
<% tp.file.cursor(3) %>

# 🔗 Relevant Notes

---
- <% tp.file.cursor(4) %>
# 📦 References

---

-<% tp.file.cursor(2) %>