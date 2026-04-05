# framework-translator-agent

Translates AI agent code between 8 major frameworks: LangGraph, CrewAI, OpenAI Agents SDK, AutoGen, Semantic Kernel, Haystack, Agno/Phidata, and Google ADK. Analyzes source agent structure, produces a canonical intermediate representation, generates idiomatic target framework code, and validates translation fidelity with web search for unknown APIs.


## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/shreyas-lyzr/framework-translator-agent
```

## Skills

- `analyze`
- `translate`
- `validate`

## Built with

[gitagent](https://github.com/open-gitagent/gitagent) — a git-native, framework-agnostic open standard for AI agents.
