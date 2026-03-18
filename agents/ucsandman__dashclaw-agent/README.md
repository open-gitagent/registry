# DashClaw Agent

The definitive expert on [DashClaw](https://github.com/ucsandman/DashClaw) — the decision infrastructure and policy firewall for AI agents.

## What it does

Helps developers integrate, configure, troubleshoot, and build DashClaw. Covers both using DashClaw (SDK integration, policies, approvals, compliance) and contributing to the DashClaw codebase.

**Meta twist:** This agent governs itself on DashClaw. An agent for the agent governance platform, governed by the platform it represents.

## Skills

| Skill | Description |
|-------|-------------|
| **instrument-agent** | Add DashClaw SDK to any agent (4-step governance loop) |
| **create-policies** | Create guard policies (risk thresholds, approval gates, guardrails) |
| **setup-dashclaw** | Set up DashClaw instance, CLI tool, and Claude Code hooks |
| **manage-approvals** | Human-in-the-loop approval workflows (dashboard, CLI, SSE) |
| **troubleshoot** | Debug errors (401/403/429/503), signals, and misconfigurations |
| **build-dashclaw** | Contribute to codebase (architecture, 12-step scaffold, tests, CI) |
| **compliance-drift-evals** | Compliance exports, drift detection, evaluations, scoring, learning |
| **register-on-dashclaw** | Register any agent as a governed entity on DashClaw |

## Knowledge

- Full API reference (7 core routes + extensions)
- V2 SDK reference (5-method surface, Node.js + Python)
- V1 Legacy SDK reference (187 methods, 31 categories)
- System architecture (3-tier, tech stack, database schema)

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/ucsandman/dashclaw-agent
```
