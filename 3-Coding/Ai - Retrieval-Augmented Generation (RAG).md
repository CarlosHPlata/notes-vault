---
created:
  - 2025-06-18 01:53
aliases:
  - Retrieval-Augmented Generation (RAG) 18-06-2025
tags:
  - Programming/topic
language: ia
---

**Topics:** [[Artificial Intelligence & Machine Learning]]

# 📃 Retrieval-Augmented Generation (RAG)

---
## The core idea of RAG
LLMs that use [[Ai - Parametric Models|Parametric Models]] tend to [[Ai - Hallucinations|Hallucinate]] when dealing with large data, since this prevented LLMs models to work under more specialized fields like Healthcare or Engineering a solution had to be found.

RAG or **Retrieval-Augmented Generation** improves it by combining two systems:
1. **Retriever:** finds relevant chunks of information.
2. **Generator:** uses that info as extra context to produce grounded answers.

## How it works at architecture level
### 1. Retriever (Non-parametric memory)
- Data is processed into chunks and turned into [[General - Semantic Object|Semantic Objects]].
- Each chunk now is turned into a **vector** using an embedding model like for example [text-embedding-3-small from Open AI](https://platform.openai.com/docs/models/text-embedding-3-small)
- Stored in a **Vector Database** (like FAISS, Weaviate or Pinecone).
- When user asks a question, it's also embedded; then, top-k semantic matches are retrieved

### 2. Generator (Parametric model)
- The question + retrieved chunks are passed as input to a **Language Model**.
- The LLM generates answer **conditionet on that retrieved data**.
- This is often done using **propmt templates** with retrieved context inserted into system message or imputs.
# 📦 References

---

- [Retrieval-Augmented Generation for Kowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [Vector Embedding Model: text-embedding-3-small - OpenAI](https://platform.openai.com/docs/models/text-embedding-3-small)
- [FAISS Vector Database - Meta](https://faiss.ai/index.html)
- [Weaviate Vector Database - Weaviate](https://weaviate.io/)
- [Pinecone Vector Database - Pinecone](https://www.pinecone.io/)