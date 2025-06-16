---
created:
  - 2025-05-23 20:53
tags:
  - fleeting
---
```meta-bind-button
label: Start adding topics
id: transcript
style: primary
actions:
  - type: command
    command: quickadd:choice:8e31af9f-9c45-478a-8752-70858a79703f

```
# 🔷 Expo Router basics

> Expo Router is a file-based routing framework for React Native and web apps.

## Conventions
- App directory: containing only routes and their layouts. any file in the directory becomes a screen and a route inside the app.
- Root layout: The `app/_layout.tsx` file. it defines shared UI elements such as headers and tab bars so they are consistent between routes.
- File name conventions: Index file names, match their parent directory and do not add a path segment, layouts are normally called `_layout.tsx`.
- A route file exports a React component as **default**, It can use either .js, jsx, ts, tsx
