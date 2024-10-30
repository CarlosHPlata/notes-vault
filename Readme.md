---
id: Readme
aliases: []
tags: []
---

> [!tip] Why this file is named README you idiot?
> Because Github automatically take the README as the file to show when checking the repository you dumb ass

This worked
# 📃 Shopping List
- [x] tapas de empanada
- [x] regalo de Nahuel
- [ ] regalo de vicky
- [x] Imprimir fotos para día de muertos
- [x] Comprar cosas para día de muertos
- [x] comprar flores 
- [ ] cerveza
- [ ] vino
- [ ] pan dulce

# 📃 Todo list

```dataview
TASK FROM "1-log"
WHERE !completed
```

# 👩🏻‍💻Indexes 

## Coding 
```dataview
LIST FROM #Topic and #Programming 
```
# Topics to expand 
```dataview
LIST from #todo 
```
# Untreated notes

```dataview
LIST WITHOUT ID file.link 
  + choice(language != null, " - " + language, "")
FROM  #new
WHERE regexmatch("2-general/.*/.*", file.path) = true
SORT rows.file.ctime ASC
```

## interesting books to start philosophy:

Filosofía para Mentes Inquietas": https://amzn.to/4ebkT5J
"Meditaciones" de Marco Aurelio: https://amzn.to/3z30cbR
"El Mito de Sísifo" de Albert Camus: https://amzn.to/3KwtiDf
"Meditaciones Metafísicas" de Descartes: https://amzn.to/3XahgXF
"El Principe" de Maquiavelo: https://amzn.to/4ba1y2d