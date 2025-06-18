---
created:
  - 2025-06-19 00:40
tags: work
---

# 📃 Modes, Drawers and Layouts in Panel Plugins 

---
Panel plugins in the CDA Framework are designed to be flexible and responsive. Depending on their use context (side panel, workspace main view, drawer), they support **multiple rendering modes**, allowing consistent UI behavior across a range of interaction patterns.

| Mode     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| `small`  | Embedded panel or minimal footprint.                                      |
| `medium` | Standard side panel or partial overlay with moderate space                |
| `large`  | Full panel (e.g., expanded view within workspace tab or modal experience) |
| `drawer` | Temporary side drawer; slides in from edge, used for focused workflows    |
## Layout templates & shared components
To streamline design consistency, CDA provides **prebuilt containers** in the `common-ui` [repository](https://bitbucket.oci.oraclecorp.com/projects/OHAI_CLINICAL/repos/common-ui/browse). These are layout templates for each mode.

## Styling and consistency
In order to have consistent text styling and spacing across plugins, a global stylesheet has been created that is automatically available to all plugins. Text styles for medium mode plugins are defined in this stylesheet and should be used by plugins being rendered in medium mode.
[ehrc.css](https://confluence.oraclecorp.com/confluence/display/OCRNM/EHRC+Global+Stylesheet)

# 📦 References

---

- [[EHR Plugins - UI Plugins as Micro Frontends in CDA Framework]]
- [[EHR Plugins - Plugin Communication via Semantic Events and Context]]
- [[EHR Plugins - Developing, building and deploy CDA Plugins]]
- [[EHR Plugins - Ask Oracle bar, filters and Plugin Interactions]]