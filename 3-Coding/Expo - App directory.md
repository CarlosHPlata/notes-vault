---
created:
  - 2025-05-23 21:17
aliases:
  - App directory 23-05-2025
tags:
  - Programming/topic
language: expo
---

**Topics:** [[Expo]]

# 📃 App directory 23-05-2025

---
App directory is a special directory containing only routes and their layouts. Any files added to this directory become a screen inside our native app and a page on the web.

**Root layout**: Normally a directory inside app contains a layout file, layout files are written by convention as `_layout.tsx`. They declare the layout components for this specific directory, like bars, headers and so on.

**Directories inside**: Directories inside create sub domains, for example if your directories look like:
```
-- app \
    -- help \
        -- howTo.tsx
        -- index.tsx
    index.tsx
```

Then the routes `help/howTo` will exists.

**index files:** index files *do not create path segments*, instead they match the path of the parent directory, in the last example the file `app/help/index` will be used for the route `help/`.
# 📦 References

---
- [[Expo - Router]]
- [Expo tutorial - add navigation](https://docs.expo.dev/tutorial/add-navigation/)
- [[Expo - Not found page]]