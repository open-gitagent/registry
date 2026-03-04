# skill-creator-agent

An AI agent that helps you create, test, improve, and optimize skills for Claude Code and other AI assistants. It guides you through the full skill development lifecycle — from drafting SKILL.md to running evaluations, benchmarking, and optimizing trigger descriptions.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/shreyas-lyzr/skill-creator-agent
```

## Capabilities

- Draft new skills from scratch based on your intent
- Write SKILL.md with proper frontmatter, instructions, and bundled resources
- Generate realistic test prompts and run evaluations
- Launch an interactive eval viewer for qualitative human review
- Run quantitative benchmarks with variance analysis
- Perform blind A/B comparisons between skill versions
- Optimize skill descriptions for better triggering accuracy
- Package skills for distribution

## Built with

[gitagent](https://github.com/open-gitagent/gitagent)
