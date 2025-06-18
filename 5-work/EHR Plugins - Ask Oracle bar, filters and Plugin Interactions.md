---
created:
  - 2025-06-19 00:55
tags: work
---


# 📃 Ask Oracle bar, filters and Plugin Interactions 

---
The **Ask Oracle search bar** sits at the top of the patient chart workspace and acts as a key interface between user interaction and the LLM-powered assistant. It supports **AI-enriched search**, **semantic filters**, and **plugin-triggered events**, allowing plugins to both _consume_ and _influence_ the assistant’s reasoning context.

## Search bar as shared component
Ask Oracle is a **singleton component** embedded in the **header** of the workspace, it is **shared across plugins**, meaning all active plugins interact with the same search instance.
When a plugin gains focus (e.g. in `large` mode), it can:
- Set filters
- Pass semantic context
- Influence search suggestions

## ## Setting Filters from Plugins
Plugins can fire an event to apply filters and filter chips in the search bar:
```js
filters: {
  ColorTypeFilter: {
    type: 'oj-sp/smart-search/default-filters/SelectSingleFilter',
    label: '[[ $search.filters.ColorTypeFilter.label ]]',
    options: {
      field: 'color',
      optionsData: '[[ $search.filters.ColorTypeFilter.options.optionsData ]]',
      optionsKeys: '[[ $search.filters.ColorTypeFilter.options.optionsKeys ]]'
    }
  }
}

```

## Assistant context via search
Filters applied through Ask Oracle are automatically translated into **semantic input** for LLMs, the assistant uses them to:
- Disambiguate queries
- Constrain search scope (e.g. to labs, notes, diagnoses)
- Pre-fill or guide agent [[Diagram - OCI AI Conversation Flow|planning steps]]
This creates a **tight loop between user gestures and model reasoning**.
# 📦 References

---

- [[EHR Plugins - UI Plugins as Micro Frontends in CDA Framework]]
- [[EHR Plugins - Modes, Drawers and Layouts in Panel Plugins]]
- [[EHR Plugins - Plugin Communication via Semantic Events and Context]]
- [[EHR Architecture - RAG for LLM Reasoning]]