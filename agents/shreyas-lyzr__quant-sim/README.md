# Quant Sim

Institutional-grade prediction market simulation engine. Every model, every formula, runnable code.

> Based on the research by [@gemchange_ltd](https://x.com/gemchange_ltd/status/2027744530124951831). Agent built by shreyas-lyzr.

## Try It

```bash
gitagent run -r https://github.com/shreyas-lyzr/quant-sim
```

## What It Can Do

- **Monte Carlo simulation** — Crude, antithetic, stratified, importance sampling, control variates
- **Particle filters** — Bootstrap particle filters, systematic resampling, ESS monitoring
- **Copula dependency modeling** — Gaussian, Student-t, Clayton, Gumbel, Frank, vine copulas
- **Agent-based modeling** — Zero-intelligence traders, Kyle lambda, order book dynamics
- **Risk management** — EVT-based VaR, Expected Shortfall, reverse stress testing

## Skills

| Skill | Description |
|-------|-------------|
| `monte-carlo` | Core simulation engine with convergence analysis |
| `variance-reduction` | Antithetic, stratified, importance sampling, control variates |
| `particle-filter` | Sequential Monte Carlo for real-time probability updates |
| `copula-modeling` | Dependency structures for correlated prediction market contracts |
| `agent-based-sim` | Market microstructure simulation with heterogeneous agents |

## Design Principles

- Every probability claim comes with a confidence interval
- If it can't be written as runnable code, it doesn't get claimed
- Assumptions are always explicit — GBM, lognormal, i.i.d.
- Variance reduction is not optional — crude Monte Carlo is a starting point
- Tail risk is the only risk that matters

## Structure

```
quant-sim/
├── agent.yaml
├── SOUL.md
├── RULES.md
├── skills/
│   ├── monte-carlo/
│   ├── variance-reduction/
│   ├── particle-filter/
│   ├── copula-modeling/
│   └── agent-based-sim/
└── knowledge/
    ├── index.yaml
    ├── formulas.md
    └── references.md
```
