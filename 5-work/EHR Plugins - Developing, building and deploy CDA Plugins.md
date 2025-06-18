---
created:
  - 2025-06-19 00:48
tags: work
---


# 📃 Developing, building and deploy CDA Plugins 

---
CDA UI Plugins are developed as **independent micro frontends**, which can be locally tested, built in isolation, or packaged and released to an **object store** for integration into the full CDA Application Layer. This note summarizes the dev/build workflow, plugin JSON formats, and best practices.
___
## 🧰 Development Setup
To begin development:
1. Create or clone a plugin repository.
2. Use the CDA CLI tool to generate a **plugin skeleton** (workspace or panel template).
    - Repo: [`cda-application-framework`](https://bitbucket.oci.oraclecorp.com/projects/ODA/repos/cda-application-framework/browse)
    - CLI generates plugin scaffold and config files.
3. Add your plugin to the dev build system:
    - Go to `common-ui/plugin/devbuild/plugins.json`
    - Define your plugin as a local file entry:

___
## ⚙️ Building Plugins Locally
`plugins.json` drives the build:
- `"url"` can be either:
    - An **objectstore path** (e.g. `objectstorage:[product=ehrc,release=dev,version=latest]`)
    - A **local folder path** for active development
- You can comment out other plugins to speed up builds.
- Errors for missing plugins won’t crash the dev server — only relevant plugins are rendered.

>[!tip] 🔧 Use this to iterate quickly on just your plugin without waiting for the full app build.

### 🧪 Building Plugins in Isolation
Each plugin repo also contains its own `plugins.json`. This allows:
- **Standalone plugin builds**
- Targeting **remote source URLs** *(Bitbucket or repo URLS)* even if the plugin is not yet released
- Simplified local development and debugging

___
## 🔗 Proxy & Integration Settings
Inside `plugins.json`, you may also configure:

| Section       | Purpose                                                                        |
| ------------- | ------------------------------------------------------------------------------ |
| `proxy`       | Proxy frontend paths to remote URLs (e.g. mock services, backend APIs)         |
| `integration` | Override proxy with a gateway service (e.g. backend-for-frontend dev endpoint) |


___
## 🚀 Deployment to Object Store
Plugins are deployed as **artifacts to Oracle’s object storage**. Follow the [Plugin Lifecycle Management guide](https://confluence.oraclecorp.com/confluence/display/IBS/Plugin+Lifecycle+Management#PluginLifecycleManagement-NewPluginLifecycleManagement) to:
- Set up OCI access
- Push plugin builds to the object store
- Register plugins in the target environment

### 🧪 Sample Plugins & Templates

Explore these repos for examples:
- [`cda-application-plugins`](https://bitbucket.oci.oraclecorp.com/projects/ODA/repos/cda-application-plugins/browse)
- [`common-ui`](https://bitbucket.oci.oraclecorp.com/projects/OHAI_CLINICAL/repos/common-ui/browse)
# 📦 References

---

- [[EHR Plugins - UI Plugins as Micro Frontends in CDA Framework]]
- [[EHR Plugins - Modes, Drawers and Layouts in Panel Plugins]]
- [[EHR Plugins - Plugin Communication via Semantic Events and Context]]
- [[EHR Plugins - Ask Oracle bar, filters and Plugin Interactions]]