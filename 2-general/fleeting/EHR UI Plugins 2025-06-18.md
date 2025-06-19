---
created:
  - 2025-06-18 22:13
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
# 🔷 UI Plugins
Plugins are micro front ends.
They live on the application layer.

There are 2 types of plugin types, workspace are components that exists under a tab in the application, and panel plugins that are little bits of UI embebed into a workspace. Unless you know is a tab plugin then create a panel plugin, we have a re-usable component library.

![[Pasted image 20250618221857.png]]
[Patient Sub Service Design - Confluence](https://confluence.oraclecorp.com/confluence/display/OCRNM/Patient+Chart+Sub+Service+Design)

When a plugin is merge we push into an articafct object store.

A plugin may use services dependencies

A plugin can have semantic actions, they are declared in a plugin-manifest.json, semantic actions are the describe which functions an assistant can call and which properties they can pass on.

UI have Built-in Events, events that are triggered when the agents trigger something, for example initialize when the conversation assistant initialized with the patient ID, and it pass with the event a semantic object like Patient.

Another things are Custom Events, custom events are events that every plugin can declare and trigger, they send a semantic object.

Every Plugin is a Micro Front end, web tag Module Federation, which runs inside CDA Framework, one issue it would be that it doesn't perform like a typical react application, this type of working, so we cannot pass properties normally to Plugin components due CDA Framework not allowing re-renders constantly. this is by design. Instead we have to fire custom events to communicate between plugins. Normal react components can manage internal state, this restriction is only to plugin levels, so isolation is ensured.

When a plugin is created it gets a context pass, and it has freezed properties, that's how Plugins get properties from between each other, to notify a Plugin one original property from the context has changed we manage it by custom events. This context is called Plugin Context.
![[Pasted image 20250618223809.png]]

We want to share components between plugins we have a shared repossitory called common-ui
https://bitbucket.oci.oraclecorp.com/projects/OHAI_CLINICAL/repos/common-ui/browse, common-ui are deployed to component exchance, this is a repository to get OJet components.

Panel plugins can have different modes, for example large, medium, small mode for different screen sizes or to adapt where the Micro front End is being rendered. There's also a drawer mode to render a drawer.

Some of the re-usable components are created to template and contain those modes for example we have `oj-ehrc-medium-plugin-box` to render plugin in medium mode.

Note: To open a drawer you have to fire an event. For example:
```js
// Construct the event
const eventData = {
  eventName: EventIds.PATIENT_CHART_OPEN_DRAWER,
  auxiliaryProps: {
    pluginName: 'myplugin', // Name of plugin to be instantiated
    preferredWidth: '35%',  // Preferred width property of the drawer
    pluginParameters: {     // Pass in plugin specific data
      data: {
        viewMode: 'ADD_PROBLEM'
      }
    }
  }
};

// Fire the event on the plugin context
context.dispatchEvent(context.PluginCustomEvent.CUSTOM, eventData);

```

Plugin communication:
Good practice is that custom events are prefixed with the name of your plugin.
![[Pasted image 20250618224751.png]]
In the top of the UI it's consistent with a search bar, that is enriched with AI based, this search bar is the Oracle EHR Search bar, this can also have filter that are used as context for the LLM model or actions when something is typed in the bar.
The patient chart has a single instance of the Ask Oracle conversation component in the header of the workspace. This component is shared amongst the child plugins in order to allow users to set filters and filter chips when the plugin has focus. A plugin can fire an event to the patient chart to set filters/filterchips in the Ask Oracle search component. it is recommended to do this when your plugin is in large mode. The patient chart will automatically clear any set filters when a plugin is minimized.
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

In order to have consistent text styling and spacing across plugins, a global stylesheet has been created that is automatically available to all plugins. Text styles for medium mode plugins are defined in this stylesheet and should be used by plugins being rendered in medium mode.

[ehrc.css](https://confluence.oraclecorp.com/confluence/display/OCRNM/EHRC+Global+Stylesheet)


To build a Plugin components
the recomended way is to go to common-ui repository then in plugin/devbuild forlder there's a readme to know how to build.
Worth mention inside there's a plugins.json that define the list of objects that will be build, this sets urls to the objectstore where the plugin itself are released.
You can also build a Plugin pointing to an URL that is local copy, when coding and doing local development, you want to build some plugins from the object store, and the ones that I'm working on I put in the "url" field the path to the local folder where the plugin repository lives, relative to the common-ui repository folder, for example:
```json
"plugins": [
		{ // external Plugin
			"name": "allergies",
			"url": "objectstorage:[product=ehrc,release=dev,version=latest]",
			"skipDownloadIfPluginExistsInDistDirectory": false
		},
		{ // local plugin
    	"name": "chart",
    	"url": "file:../../plugins/chart"
		}
	]
```
To speed up the build you can comment out plugins that are not needed, it will show an error on those parts but it will still render the plugins that are possible to render.

In the same plugins.json in the proxy section, you can define URLs it defines url paths that are target to other urls proxied, usefull when hitting backend urls

There's another section called integration, which bassically describes the frontEndServices (Backend for fronted and gateway) will override the proxy and route everything through that service, this is usefull when building locally trying to test against dev server.

There's another way of building, inside each plugin repository project, you have a plugins.json, that can be used to build it in isolation, the advantage of this approach is that you can point out to the repo URL instead of the object store, so it downloads and build the remote code even if it's not released yet.


**CDA Application Plugins**
The CDA team from the CDA Framework has put some sample plugins on the https://bitbucket.oci.oraclecorp.com/projects/ODA/repos/cda-application-plugins/browse
You can also go to the CDA Framework which has a CLI that can help you to generate new UI Plugin https://bitbucket.oci.oraclecorp.com/projects/ODA/repos/cda-application-framework/browse The CDA generates the skeleton based on the template you can use (workspace or panel)

There's a Visual Builder plugin to build a plugin from the visual Builder (not recommended for devs iugh).

**Where to put your plugins**
You have to create a repo, there's this documentation of how to deploy to the object store
https://confluence.oraclecorp.com/confluence/display/IBS/Plugin+Lifecycle+Management#PluginLifecycleManagement-NewPluginLifecycleManagement
It will guide you to how to gain access to object store through OCI.