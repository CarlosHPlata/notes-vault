---
created:
  - 2025-06-18 18:08
tags: work
---


# 📃 Structured & Unstructured Data Ingestion 

---
Clinical Data from multiple sources and domains (EHR Records, external knowledge bases, messages, etc.) is continuously ingested through the system.

- This data is transformed later into [[EHR Architecture - RAG Embeddings|Embeddings]] using domain-adapted models.
- Then is stored in an **Oracle-integrated Vector DB**, which supports:
    - Multiple indexes.
    - Approximate Nearest neighbor (ANN) retrieval.

This forms the [[Ai - Retrieval-Augmented Generation (RAG)|Retrieval layer of RAG]]


# 📦 References

---

-<% tp.file.cursor(2) %>