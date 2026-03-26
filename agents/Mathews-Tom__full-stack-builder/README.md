# full-stack-builder

End-to-end implementation agent that transforms architecture documents and feature specs into production-ready code with tests, API documentation, and security validation. Orchestrates quality skills throughout the build process — scaffolding, incremental sprints, and pre-delivery review gates.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/Mathews-Tom/full-stack-builder
```

## What It Can Do

- **Spec Analysis** — parses architecture documents, extracts components, determines build order from dependency graphs
- **Project Scaffolding** — initializes directory structure, configs, linting, type checking, and migration frameworks for any stack
- **Implementation Sprints** — builds components in dependency order with test-first development, error handling, and input validation
- **Quality Pass** — invokes code refinement and security scanning to eliminate duplication and OWASP vulnerabilities
- **API Documentation** — generates endpoint documentation and setup guides
- **Pre-Delivery Review** — runs safety gates with GO/NO-GO verdicts backed by test results and spec completeness checks

## Structure

```
full-stack-builder/
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
    ├── scaffolding-patterns.md
    ├── testing-strategy.md
    ├── api-documentation.md
    └── code-quality-checklist.md
```

## Built with

Built for the [gitagent](https://gitagent.sh) ecosystem.
