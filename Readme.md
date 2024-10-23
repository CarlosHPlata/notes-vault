
> [!tip] Why this file is named README you idiot?
> Because Github automatically take the README as the file to show when checking the repository you dumb ass
# 📃 Todo list
```dataview
TASK FROM "dailyNotes" 
WHERE !completed
```

# 👩🏻‍💻 Coding 

## Topics captured
```dataview
LIST rows.file.link FROM #Programming/topic 
WHERE language
GROUP BY language
```
## learnings lessons
```dataview
LIST rows.file.link
FROM #Programming/learning
WHERE language
GROUP BY language
SORT rows.file.ctime ASC
```


