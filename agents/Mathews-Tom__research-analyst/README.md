# research-analyst

Multi-source research agent that decomposes complex questions into investigatable sub-questions, dispatches parallel investigations across web, academic, video, and competitive sources, and synthesizes findings into structured reports with citations and confidence ratings.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/Mathews-Tom/research-analyst
```

## What It Can Do

- **Question Framing** — decomposes research topics into structured sub-questions with source type selection before investigation begins
- **Parallel Source Investigation** — spawns concurrent research agents across web, academic, video, and competitive sources for comprehensive coverage
- **Cross-Reference Analysis** — merges findings from multiple sources, identifies corroboration and contradictions, assigns evidence-based confidence ratings
- **Gap Detection** — explicitly flags what the research could not answer and why, preventing false completeness
- **Synthesis Reports** — produces structured deliverables with executive summary, cited findings, comparison matrices, and actionable recommendations

## Structure

```
research-analyst/
├── .gitignore
├── LICENSE
├── README.md
├── RULES.md
├── SOUL.md
├── agent.yaml
├── assets/
│   ├── icon.png
│   └── banner.png
└── knowledge/
    ├── research-methodology.md
    ├── source-evaluation.md
    └── synthesis-framework.md
```

## Built with

Built for the [gitagent](https://gitagent.sh) ecosystem.
