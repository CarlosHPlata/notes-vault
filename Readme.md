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


