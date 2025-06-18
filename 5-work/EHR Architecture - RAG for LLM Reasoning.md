---
created:
  - 2025-06-18 12:04
tags: work
---
# 📃 RAG for LLM Reasoning 
---
The RAG of the architecture is based of course in the [[Ai - Retrieval-Augmented Generation (RAG)|Retrieval-Augmented Generation Technique]], so the AI Layers above can pull data that is shaped for generating content and actions.

In order to achieve that 3 process are key for it:
- [[EHR Architecture - RAG Embeddings|Embeddings:]] Allow shape data feed into for LLM reasoning
- [[EHR Architecture - Schemeless Queries via GPT Agents|Schemeless Queires:]] allow users to query by keywords in any Document or Property in the database (Ex: querying *BP* for *Blood Pressure* and get results based on context).
- [[EHR Architecture - Structured & Unestructured Data Ingestion|Semantic Enrichment:]] Consume Data from external sources, create and bind meaning relationships to data and store them into a vector database so it can be queried.
## The goals of the RAG:
#### 1. Smart Data Retrieval
The AI system pulls relevant data in real-time, shaped for easy use in generating content and guiding actions during user interactions.
#### 2. Modern Data Services:
Supports a seamless voice and search-driven interface. ensuring fast data queries and reliable updates to 3rd party systems.
#### 3. No Migration Needed:
For existing users, the system integrates smoothly with their current setup and works with legacy services day one.

# 📦 References
---
- [[5-work/Diagram - OCI Data Semantic Index.md#^pepYRP0D|Diagram - OCI Data Semantic Index - Rag]]