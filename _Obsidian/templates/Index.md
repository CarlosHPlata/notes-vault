---
aliases:
  - "{{title}}"
tags:
  - Topic
---

# {{title}} Index

---

## 1️⃣ Quick {{title}} topics 

```dataview
LIST FROM #Programming/topic 
WHERE language = "mytag"
OR contains(language, "mytag")
SORT title ASC
```