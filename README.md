# QA Forge 🔥

A personal learning tracker for my journey from **QA Engineer → AI Application Developer**.

Built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just open and use.

## Features

- **Dashboard** — streak, topics done, current phase, next topic
- **Curriculum** — all 3 phases with curated YouTube + docs links per topic
- **Practice** — simple checklist to mark each topic's practice problems as completed
- **Streak tracker** — 30-day activity grid, longest streak, daily log
- **Light / Dark theme toggle** — saved across sessions
- **Persistent progress** — saves to localStorage, survives browser close

## Roadmap

| Phase | Focus | Timeline |
|-------|-------|----------|
| 1 | Python OOP, REST APIs, FastAPI, Git, LLM APIs | Months 1–3 |
| 2 | RAG, LangChain, Streamlit, deploy, 3 real projects | Months 4–8 |
| 3 | Leetcode, resume, LinkedIn, mock interviews | Months 9–12 |

## How to use

**Option 1 — Open directly**
Just open `index.html` in your browser. No server needed.

**Option 2 — GitHub Pages**
1. Push this repo to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, `/ (root)`
4. Your site is live at `https://yourusername.github.io/qa-forge`

## Tech stack

- Vanilla HTML + CSS + JavaScript
- localStorage for progress and theme persistence
- Google Fonts (Inter)
- Zero dependencies, zero build step

## Practice problems

Full problem sets (15 per topic, description + expected output) for Phase 1 topics are in [`phase1-problems.md`](./phase1-problems.md). Use the **Practice** tab in the app to check off each topic once you've solved its problems.

## Coming soon

- [ ] AI explanations per topic (Claude API)
- [ ] Supabase sync for cross-device progress
- [ ] Per-problem checklist (currently per-topic)
