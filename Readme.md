---
id: Readme
aliases: 
tags: 
cssclasses:
  - dashboard
banner: "![[minimalist-black-hole.png]]"
banner_y: 0.52
---

> [!tip] Why this file is named README you idiot?
> Because Github automatically take the README as the file to show when checking the repository you dumb ass
## 📃 Todo list
- 🛒Shopping list
  - [ ] regalo de vicky
  - [ ] globos feliz cumple
  - [ ] pastel
  
- 💼 To complete 
 `$=dv.taskList(dv.pages('"1-log"').file.tasks.where(t => !t.completed), false)`

- 📕Interesting books to start reading
  - [Filosofía para Mentes Inquietas"](https://amzn.to/4ebkT5J)
  - ["Meditaciones" de Marco Aurelio]( https://amzn.to/3z30cbR)
  - ["El Mito de Sísifo" de Albert Camus]( https://amzn.to/3KwtiDf)
  - ["El Principe" de Maquiavelo]( https://amzn.to/4ba1y2d)
 
## 👩🏻‍💻Explore Notes
- 👑 Coding Super Topics 
 `$=dv.list(dv.pages('#Topic and #Programming').sort(f => f.file.name.length, "desc").file.link)`
 
- 🐦‍⬛ Topics to expand
 `$=dv.list(dv.pages('#todo').file.link)`
  
- 🗑️ Untreated notes 
 `$=const lol = dv.list(dv.pages('#new').filter(p => p.file.path.match(/2-general\/.*\/.*/)).sort(p => p.file.ctime, 'asc').map(p => p.file.link + (p.language ? "- " + p.language : "")));`