# idea-scout

Business idea validation agent that orchestrates parallel market research, competitive analysis, and feasibility assessment to produce a scored validation report with GO/CAUTION/NO-GO verdict. Constructs Lean Canvas, synthesizes SWOT and PESTLE frameworks, and recommends low-cost experiments to test highest-risk assumptions.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/Mathews-Tom/idea-scout
```

## What It Can Do

- **Idea Intake** — extracts problem, solution, target customer, value proposition, and revenue model from rough descriptions
- **Lean Canvas Construction** — populates all nine blocks and identifies riskiest assumptions
- **Market Research** — sizes TAM/SAM/SOM with sourced data, identifies growth trends and timing signals
- **Competitive Analysis** — maps direct/indirect competitors, applies Porter's Five Forces, assesses competitive moats
- **Feasibility Assessment** — models unit economics (CAC, LTV, margins), estimates technical complexity and MVP cost
- **SWOT/PESTLE Integration** — synthesizes cross-dimensional findings into structured strategic frameworks
- **Validation Scorecard** — scores across six weighted dimensions with quantified GO/CAUTION/NO-GO verdict
- **Experiment Design** — proposes 3-5 low-cost experiments with quantified success criteria ordered by risk reduction per dollar

## Structure

```
idea-scout/
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
    ├── experiment-design.md
    ├── lean-canvas-guide.md
    ├── swot-pestle-framework.md
    └── validation-scorecard.md
```

## Built with

Built for the [gitagent](https://gitagent.sh) ecosystem.
