---
created:
  - 2025-06-17 15:09
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
# 🔷 EHR onboarding

Topics:
- High level architecture
- Logical stack of the architecture
- Semantic Index
- Method of building applications.
![[Pasted image 20250617151926.png]]
What is building is Oracle EHR, we are building a data plane, customers are onboarding in a series of control plane. Data Plane are in charge of all the services. Everything you see in the plugins and UI showing contents are via Airplane data plane EHR services.

Principle of tenancies.

AI natural language LLM technology is part of the multi tenancy is integrated.

Kubernetees cluster

The semantic index responsabilities
- Data layer for clinical data
- Is also responsible of bridging between the V500 database

![[Pasted image 20250617152213.png]]

The data layer (semantic index) is aimed to have data segregation.

![[Pasted image 20250617152343.png]]

GPT agents infuse AI into every layer of the stack. They operate on Semantic Objects which are data retrieved from the Milennium v500 database and transformed into JSON structures based on the FHIR standard then enriched with ontology and metadata.

The architecture have 3 layers:
- Application layer
- Service Layer
- Data Layer

Application Layer
UI Framework applications implemented in jet, is contained into shells, the shells participate in a AI layer through the Conversation Plugin.
We want that plugins that are written in the application can react to actions and events from the Conversation Plugin.

Service Layer
CDA framework service is the assistant, is an evolution of the clinical assistant, it plans and executions, is responsable of knowing which actions can be triggered on the Application layer.
And how it does it is through knowing the context on where the user is, the language, the UI gesture (semantic events).
In order to facilitate this planning, there's a subsequential stage called execution, where the planner communicate with several services like Organizer, Documentation, Messages etc. If a logical plan is deduced by the CDA framework is to call messages to produce a message, on the particular filter applied. Those actions will be dispatched to the Application Shell through a semantic event, telling the plugin application to communicate to the respective service.

The way is to reason about a plan is through communicating with the Data Layer and search through the semantic objects. Querying the Healthcare Data Layer and using the LLM to understand the semantic data.

Data Layer
Is not only relational data but also graph data stored, in techinche Retrieval augmented generation.
The data is consumed from V500 database but transformed in the format the rest of the AI layer can reason about.

![[Pasted image 20250617153939.png]]
Zoomed in into the AI Layer data layer

If we look at the three boxes in RAG FOR LLM REASONING semantic objects, those enable retrieval augmented generation (RAG). The AI Layers (CDA) can pull data that's is shape for generating content and actions. In order to achieve that, we need a keyword to format names, for example Blood Preassure search as BP the LLM can enrich future data so it can be found under that name.

Embeding is a way to shape clinical data not only database but documents, this is vectorized to be understandable and queried for the LLM. Semantic Index

![[Pasted image 20250617155241.png]]

Basically what this is allowing us to do is to build a semantic object model for AI consumption.
We use FIRE HR7V2 standard? represent the initial objec classes, and we highly enrich them and extend it.

![[Pasted image 20250617155649.png]]

In this diagram we go over how the planner execution engine and response engine of CDR interact

For example let's take the top message then communicates with the LLM through CDA routine.

The planner is responsible of get the metadata and take a set of steps that have to be performed, in the context of actions. Th planner is responsible to understand the prompt and produce a logical plan.

A logical plan is passed to the execution engine, which is responsible of executing the plan. Identify which agents (plugin teams) (create orders, messages), looks at the plan, agents and dispatch those actions to the plugin agents.
And finaly a response have to be gattered.

The action results are passed to the response engine, is passed to the LLM to create a response message.
## capabilities

![[Pasted image 20250617155241.png]]

The other part of the application data service, is the synchronization and the new EHR transactional records.
All data ingested from other schemas are stored in the ATP with Vectors DB. UI can subscribe to classification of data and be notified when new data is available if they need to consume it to present it.

![[Pasted image 20250617193158.png]]

This is how data is being ingested into the Semantic Index Data Integration

- Golden gate used to replicate raw table updates from Milennium v500 database to a stage replica database in the same infrastructure already used to support relational database for the semantic Index.
- Golden Gate provides a signaling mechanism (via OCI Streaming) used by "Materializers" for each semantic Object
- Relational joins project a JSON document that contains the maximal data describing a clinical concept such as an Order etc.
- The Enrichment stage then proceeds to create and update Vector embeddings needed by the data layer to provide for semantic/similarity.


### Finaly UI
![[Pasted image 20250617200922.png]]

If you remember we talked about a data plane, and oke cluster with some service, individual teams building UI are also responsible of building UI dedicated services.
CDA isn't necesary logic to the service, the service only need to provide UX Backend for frontend.

When the CDA lives? it could be outside of the service layer through a direct connection to the UI Plugins to the CDA and Data Layer.

Blue Boxes are the one teams need to build.

![[Pasted image 20250617201732.png]]

You building your plugins
you think about how the SO are materialized and available
You build the connection to the Concept Service.
# UI Stack
- React
- Redwood experience
- OJet