# Agent Designer

A meta-agent that helps developers build better AI agents by designing their action space. Draws on lessons from building Claude Code — how to pick the right tools, when to add and remove them, how to make agents ask good questions, and how to let agents build their own context through progressive disclosure.

## Try It

```bash
gitagent run -r https://github.com/shreyas-lyzr/agent-designer
```

## What It Can Do

- **Tool design** — Choose between bash-only, specialized tools, and hybrid approaches
- **Elicitation design** — Structured question tools, plan-mode flows, multi-option UIs
- **Progressive disclosure** — Layered context through skill files, recursive references, subagents
- **Search interface design** — RAG vs. grep-based search, letting agents build their own context
- **Tool audit** — Evaluate existing tool sets, find redundancies, identify gaps

## Skills

| Skill | Description |
|-------|-------------|
| `tool-design` | Action space architecture for AI agents |
| `elicitation-design` | How agents ask good questions |
| `progressive-disclosure` | Layered context instead of prompt stuffing |
| `search-interface-design` | RAG vs. grep, agent-driven context building |
| `tool-audit` | Evaluate and refine existing tool sets |

## Design Principles

- **See like an agent** — consider how the model interprets and uses a tool
- **Fewer tools, better tools** — every tool is one more decision the model has to make
- **Read the outputs** — ground design decisions in actual model behavior
- **Progressive disclosure over prompt stuffing** — let agents discover context
- **Revisit assumptions** — what worked for one model may constrain the next

## Structure

```
agent-designer/
├── agent.yaml
├── SOUL.md
├── RULES.md
├── skills/
│   ├── tool-design/
│   ├── elicitation-design/
│   ├── progressive-disclosure/
│   ├── search-interface-design/
│   └── tool-audit/
└── knowledge/
    ├── index.yaml
    └── design-principles.md
```
