---
created:
  - 2025-05-23 21:32
aliases:
  - Stack Navigator 23-05-2025
tags:
  - Programming/topic
language: expo
---

**Topics:** [[Expo]]

# 📃 Stack Navigator 23-05-2025

---
A stack navigator is the foundation for navigating between different screens in an app.

**On Android**: a stacked route animates on top of the current screen.
**On iOS**:  a stacked route animates from the right.

Normally the stack is placed on the [[Expo - App directory|Layout]] file:
```
app/
    _layout.tsx
```

The Layout file using Stack could look something like this (*v5.08*)
```tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="inde" options={{title: "Home"}}/>
        </Stack>
    )
}
```

See: [[Expo - Router]]

# 📦 References

---
- [Stack Official Doc](https://docs.expo.dev/router/advanced/stack/)
- [What is a Stack Navigator](https://docs.expo.dev/tutorial/add-navigation/#what-is-a-stack)