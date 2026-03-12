# exa-lead-gen-agent

Generate enriched lead lists using Exa deep search with ICP scoring, micro-vertical expansion, parallel batch subagents, and CSV output.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/shreyas-lyzr/exa-lead-gen-agent
```

## Prerequisites

Requires an [Exa API key](https://dashboard.exa.ai/api-keys). Add the MCP server first:

```bash
claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=deep_search_exa&exaApiKey=YOUR_EXA_API_KEY"
```

## What It Can Do

- ICP research and validation from a single company name
- Micro-vertical query expansion for maximum coverage
- Parallel batch subagents for fast lead generation
- Structured enrichment with ICP fit scores (1-10)
- Deduplication, normalization, and clean CSV output
