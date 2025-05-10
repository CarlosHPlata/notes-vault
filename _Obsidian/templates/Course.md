---
created:
  - <% tp.file.creation_date() %>
tags:
  - Programming/topic
course:
---
<%* tp.hooks.on_all_templates_executed(async () => {
  let name = await tp.system.prompt("Note name")
  let course_name =  await tp.system.prompt("course name")
  course_name = course_name.toLowerCase();
  
  const file = tp.file.find_tfile(tp.file.path(true));
  await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["course"] = course_name;
  });

  tp.file.rename("Course - " + name)
}) %>
# 📃 <% tp.file.creation_date("DD-MM-YYYY")%>

---
<% tp.file.cursor(3) %>

# 📦 References

---

-<% tp.file.cursor(2) %>