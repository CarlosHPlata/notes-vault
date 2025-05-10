---
created:
  - 2025-04-14 00:25
Course: Architecture in Practice
---

# 🧙‍♂️ LoosCode: Coding Dojo Platform
*Cause entering FANG is not about memorizing 500 coding exercises... right?.*

| Stat               | Value   |
| ------------------ | ------- |
| 🧠Difficulty       | **High** |
| 🧰Tech Agnosticism | ⭐⭐⭐⭐     |

> [!info] **Stat Guide**
> - **Difficulty**:
>   - Easy: Suitable for students new to software development
>   - Mid: Assumes working knowledge of a programming language and framework
>   - High: Designed for students with experience in backend development and some infrastructure concepts
>   - Expert: Intended for those with industry experience and familiarity with microservice architectures
> - **Tech Agnosticism**: How much knowledge teams would have to choose tools and technologies _(more stars = more knowledge)_ meaning they have to have before hand tech related topics, like language advantages, risks, db models, patterns, frameworks.


---

## 🧭 Problem Statement

Coding platforms are widely used by developers to practice problems, prepare for interviews, and take part in competitive programming. However, they are deceptively complex behind the scenes. Your mission is to build a distributed platform where users can solve programming challenges, submit code for validation, and view ranked results — all while maintaining safety, speed, and fairness.

## 🌟 Vision

LoosCode provides a challenge board where users can attempt problems in real time. Code is executed in isolated environments, and submissions are evaluated asynchronously. Users gain points for solving problems, which updates a global leaderboard. Admins and instructors can upload new problems or update challenge specs.

## 👥 User Roles
- **Coder** – Browses challenges, submits code, views results.
- **Admin/Instructor** – Manages challenge database, updates test cases.
- **System Runner** – Executes code in isolation and reports results.

## ✅ Core Use Cases
- Browse challenge catalog by topic and difficulty.
- Submit code against test cases.
- Receive async results and pass/fail feedback.
- Earn points and rank on the leaderboard.
- Admins add or update challenges.

---

## 🔍 Constraints & Expectations
- Submissions must be evaluated in isolated, secure environments.
- Execution may take time and should not block user interaction.
- Users should be able to view submission history and retry failed challenges.
- Leaderboard and scoring must remain consistent and tamper-proof.
- Teams must integrate clearly-defined API contracts.

---

## 🧠 Architectural Prompts
- How do you design a safe and scalable code execution pipeline?
- Should execution results be pushed to users or pulled from history?
- What tradeoffs exist between using containers vs external runners?
- How do you ensure that submissions are not lost or duplicated?
- What metrics would you expose to track runner health and system load?

---

> *"In the Dojo, only the prepared coder survives."*

---

