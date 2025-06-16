---
created:
  - 2025-05-24 22:02
aliases:
  - Bottom tab navigator 24-05-2025
tags:
  - Programming/topic
language: expo
---

**Topics:** [[Expo]]

# 📃 Bottom tab navigator 24-05-2025

---
Bottom tabs are a way to navigate between different sections, it creates a bottom menu that you can extend to add more tabs on it.

You can use a [[Expo - App directory|File-based]] [[Expo - Router|routing]] to create a tabs layout.
```
- app /
    - (tabs) /
        - _layout.tsx
        - index.tsx
    _layout.tsx
```

> [!warn] yes the folder have to be named `(tabs)` with the parenthesys.

## Tabs Layout
in order to use the tabs, in the `app/(tabs)/_layout.tsx`, import the `Tabs` component and start using it like:

```tsx
import {Tabs} from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" />
        </Tabs>
    )
}
```

## Root Layout
Don't forget too edit also `app/_layout.tsx` to include the tabs navigation through [[Expo - Stack Navigator|Stack navigation]]

```tsx
import { Stack } from 'expo-router';

export default function TabLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
}
```
# 📦 References

---

- [Bottom Tab Navigator](https://docs.expo.dev/router/advanced/tabs/)