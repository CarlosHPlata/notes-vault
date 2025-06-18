---
created:
  - 2025-06-18 23:26
tags: work
---

# 📃 UI Plugins as Micro Frontends in CDA Framework 

---
## Overview
In the CDA [[EHR Architecture - Application Layer|Application Layer]], **UI Plugins** are modular, sandboxed micro frontends built using **[[Javascript - Module Federation|Module Federation]]** built inside [[EHR Architecture - CDA Assistant Framework|CDA Assistant Framework]]. Each plugin encapsulates its own logic, styling, and event dispatch system. Plugins do not behave like traditional React components and instead rely on a controlled, decoupled communication system.

## Plugin Types
There are two plugin types:
1. **Workspace Plugins:** Rendered as full-page tabs in the main workspace area.
2. **Panel Plugins:** Smaller UI components embedded into existing workspaces. These may appear as drawer or panels.

> [!tip] If plugin type is unclear, default to building **panel plugins**

## Isolation and scope
Plugins **don't receive React props** from the host or other plugins, instead they operate under:
- A **frozen Plugin Context** (inmutable at creation time).
- A system of **[[EHR Plugins - Plugin Communication via Semantic Events and Context|Custom semantic events]]**.
This ensures high isolation and predictable behavior. especially important in an environment with multiple independently deployed micro frontends.

## Semantic integration
Plugins declare available **semantic actions** in their `plugin-manifest.json`, these actions describe:
- What an assistant can call.
- What parameters are accepted.
This enables rich integration with the **LLM Assistant system**, enabling semantic reasoning over the interface.

# 📦 References
---
- [[EHR Plugins - Plugin Communication via Semantic Events and Context]]
- [[EHR Architecture - CDA Assistant Framework]]