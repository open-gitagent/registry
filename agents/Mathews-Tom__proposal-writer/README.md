# proposal-writer

Technical proposal generation agent that combines ROI modeling, calibrated estimates, and three-tier pricing into structured, client-ready documents. Turns project scope into a persuasive proposal that quantifies business value before asking for investment.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/Mathews-Tom/proposal-writer
```

## What It Can Do

- **ROI Modeling** — calculates cost savings, efficiency gains, revenue impact, payback period, and 3-year projections with specific figures
- **Three-Tier Pricing** — structures Essential/Professional/Enterprise options so the client self-selects rather than facing a binary decision
- **Problem-Agitate-Solve Framing** — leads with the business challenge, quantifies cost of inaction, then presents the solution
- **Scope Definition** — explicitly lists inclusions, exclusions, and optional add-ons to prevent downstream disputes
- **PDF Export** — produces professionally formatted proposal documents with cover page, TOC, and page numbers

## Structure

```
proposal-writer/
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
    ├── pricing-tier-framework.md
    ├── proposal-structure.md
    └── roi-modeling.md
```

## Built with

Built for the [gitagent](https://gitagent.sh) ecosystem.
