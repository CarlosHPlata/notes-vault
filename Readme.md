---
id: Readme
aliases: []
tags: []
---

> [!tip] Why this file is named README you idiot?
> Because Github automatically take the README as the file to show when checking the repository you dumb ass

# 📃 Shopping List
- [x] tapas de empanada
- [x] regalo de Nahuel
- [ ] regalo de vicky
- [ ] Imprimir fotos para día de muertos
- [ ] Comprar cosas para día de muertos 

# 📃 Todo list

```dataview
TASK FROM "log"
WHERE !completed
```

# 👩🏻‍💻 Coding

## Indexes
```dataview
LIST FROM #Topic and #Programming 
```
## Untreated learning notes

```dataview
LIST rows.file.link
FROM #Programming/learning and #new
WHERE language
GROUP BY language
SORT rows.file.ctime ASC
```