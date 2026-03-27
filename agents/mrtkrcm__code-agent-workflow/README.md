# code-agent-workflow

**Multi-platform AI agent command generator** — generates, validates, and atomically deploys agent configurations, skills, and tools across Claude Code, Pi, OpenCode, Gemini, Codex, and Factory from a single source of truth.

## What it does

- Generates agent commands from Jinja2 templates via `caw generate`
- Syncs configurations atomically across 6 platforms via `caw sync apply`
- Manages 73 reusable skills with gitagent-compatible frontmatter
- Validates tool definitions across platforms via `caw tools validate`
- Provides specialized dev agents: `developer`, `reviewer`, `architect`

## Agents included

| Agent | Role | Skills |
|---|---|---|
| `developer` | Primary caw development | checkpoint, codemap, caw-generate, caw-sync, caw-validate, caw-extension |
| `reviewer` | Code + PR review | code-review, security-smell-detection, test-quality-inspector, dependency-analysis, type-safety-auditor, architectural-smells |
| `architect` | System design | software-architecture, dependency-analysis, architectural-smells, performance-bottleneck, duplication-hunter, refactor-plan |

## Usage

```bash
# Run the developer agent
gitagent run -d ./agents/developer -a claude

# Run the reviewer on a PR
gitagent run -d ./agents/reviewer -a claude -p "Review the changes in the last commit"

# Validate gitagent compliance
gitagent validate
```

## Requirements

- Python 3.11+
- Node.js 20+ (for Pi extensions and gitagent CLI)
- `uv` for Python dependency management

## Installation

```bash
git clone https://github.com/mrtkrcm/code-agent-workflow
cd code-agent-workflow
uv sync
```

## Links

- [Repository](https://github.com/mrtkrcm/code-agent-workflow)
- [Documentation](https://github.com/mrtkrcm/code-agent-workflow/blob/main/README.md)
