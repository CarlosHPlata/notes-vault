---
created:
  - 2025-06-17 23:27
aliases:
  - Semantic Index 17-06-2025
tags:
  - Programming/topic
language: ia
---

**Topics:** [[Artificial Intelligence & Machine Learning]]

# 📃 Semantic Index 17-06-2025

---
A **Semantic Index** is a data structure that organizes and retrieves information based on **meaning** rather than just keywords and tokens.

It's central in systems that deal with semantic search, natural language understanding, knowledge graphs and large LLMs.

A semantic index maps [[General - Semantic Object | Semantic Objects]] into a **vector** representation for enriching search features.

## Relationship with graphs
Semantic Indexes often work in **tandem with graphs**, especially in knowledge representation or **retrieval-augmented generation (RAG)**.

The graphs let's the agents to scan through [[General - Semantic Object|Semantic Objects]] and their relationship and closeness in their meaning for example in the next sentence:

> I have to take my pet to the doctor since it's a _________  with four legs

The blank space can be filled by different objects like: *cat, dog or chair*. What is the difference between those concepts, if all have four legs. The graph would be helpful here by scoring their relationship in the context of proximity of their context, in this case *cat* and *dog* are the words that are more close together and would be good options to fill the sentence.

## Their use
Semantic indexes can be useful when dealing with large LLM's models to give more detailed and fast responses, it can also help a lot in preventing [[Ai - Hallucinations]].

# 📦 References

---

- [Integrating Knowledge Graphs and Vector RAG for efficient information extraction - Arxiv](https://arxiv.org/html/2408.04948v1)