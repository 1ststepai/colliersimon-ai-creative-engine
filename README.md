# colliersimon-ai-creative-engine

Spec Creative Technologist prototype showing an AI-enabled creative production workflow: brief intake, brand context, variant generation, human QA, documentation, and production handoff.

AI Creative Engine is a portfolio-quality microsite and static prototype by Evan Pancis. It is a spec concept / candidate prototype inspired by the Creative Technologist role requirements at Collier.Simon.

This is not client work, not an official Collier.Simon project, and not affiliated with or approved by Collier.Simon.

## What This Is

The site demonstrates a practical operating model for turning creative briefs into repeatable, QA-ready AI production workflows. It combines an editorial concept-board feel with an internal production tool mockup called the Campaign Variant Console.

The prototype is intentionally static and demo-safe:

- No backend
- No paid APIs
- No secrets
- No live AI calls
- Deployable to Vercel

## Why It Was Built

The project is designed to show how a Creative Technologist can translate ambiguity into working systems for creative teams. Rather than presenting AI as a magic output generator, it frames AI as one layer inside a controlled workflow with brand context, variant generation, human QA, documentation, and production handoff.

## Role Alignment

The prototype maps to the Creative Technologist role in several ways:

- Designs AI-powered workflows for creative teams
- Turns briefs and production needs into repeatable systems
- Uses prompt engineering, context management, and output optimization concepts
- Shows guardrails for brand consistency, legal/compliance review, and human approval
- Demonstrates documentation and production handoff habits
- Separates useful AI workflow design from AI theater

## Working Method / Skills

This repo includes a documented `.agents/skills` folder that explains the working methods behind the prototype:

- AI creative production systems
- Brand context systems
- Creative QA
- Prototype handoff
- AI guardrails
- Next.js polish
- Accessibility QA
- Repo presentation

The goal is to show not only the finished prototype, but also how the system was thought through, built, reviewed, and prepared for handoff.

## AI-Assisted Development Workflow

This project includes two documentation layers for AI-assisted development and review:

- `.agents/skills` documents the build standards, implementation methods, creative technology process, QA expectations, and handoff rules used to create the prototype.
- `.claude/skills` documents review frameworks for role alignment, context engineering, AI output QA, handoff quality, repo presentation, and visual polish.

Together, these folders show how the project was not only designed and built, but also reviewed as a practical Creative Technologist artifact.

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.
4. Deploy.
5. Update the live URL in any portfolio, resume, or application materials.

## Manual Replacement Checklist

- Replace `public/concept-pdf.pdf` with the final concept PDF.
- Update `metadataBase` in `app/layout.tsx` after the final Vercel URL exists.
- Replace `public/og-placeholder.svg` with a final branded OG image if desired.
- Confirm footer links and email before sharing.
- Run a final mobile and desktop QA pass after deployment.

## Disclaimer

This repository is a speculative candidate prototype created for portfolio and role consideration purposes. It should not be interpreted as commissioned, endorsed, reviewed, or approved by Collier.Simon.
