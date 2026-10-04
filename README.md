# CareerAI — AI Career Recommendation Website

A responsive frontend prototype for a career recommendation product.

## Run it

1. Open `index.html` directly in a browser, or use the VS Code Live Server extension.
2. Enter a name, skills, interest and experience level.
3. Click **Analyze my career**.
4. The dashboard is generated from the local JavaScript recommendation profiles.

## Current version

This is a **frontend prototype**. It does not call a real AI model or database yet.

### Current flow

User → HTML/CSS/JavaScript → Local recommendation logic → Dashboard

## Hackathon upgrade path

Replace the local recommendation logic with:

User → React frontend → Flask/FastAPI backend → AI API → Supabase/PostgreSQL → response → frontend.

Possible AI features:
- LLM-powered career explanation
- Skill-gap extraction
- Personalized roadmap generation
- Resume analysis
- Job-description matching

## Suggested project structure for the full version

```text
career-ai/
├── frontend/
├── backend/
├── ai/
├── database/
└── README.md
```
