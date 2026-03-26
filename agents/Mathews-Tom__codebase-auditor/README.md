# codebase-auditor

Multi-dimensional codebase quality assessment agent that orchestrates specialized reviewers in parallel — code quality, security vulnerabilities, secret detection, architecture integrity, and dependency health — and synthesizes findings into a single deduplicated, severity-ranked report with a binary PASS/FAIL verdict.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/Mathews-Tom/codebase-auditor
```

## What It Can Do

- **Scope Analysis** — determines audit scope from changed files, direct dependencies, or full repository inventory
- **Parallel Agent Spawning** — runs code quality, security, and secret detection reviews concurrently
- **Architecture Review** — assesses structural integrity, module boundaries, coupling, and scalability patterns
- **Dependency Audit** — checks for CVEs, license compliance, abandoned packages, and dependency bloat
- **Aggregation and Deduplication** — merges overlapping findings, preserves highest severity, eliminates report noise
- **Verdict Determination** — binary PASS (zero CRITICAL/HIGH) or FAIL with prioritized action items

## Structure

```
codebase-auditor/
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
    ├── audit-dimensions.md
    ├── report-template.md
    └── severity-classification.md
```

## Built with

Built for the [gitagent](https://gitagent.sh) ecosystem.
