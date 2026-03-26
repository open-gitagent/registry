# media-producer

Visual and video asset creation agent with intelligent format routing. Analyzes what needs to be communicated, selects the optimal output format — static image, architecture diagram, animated explainer, motion graphic, interactive dashboard, or slide deck — and produces a polished visual through the appropriate production skill.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/Mathews-Tom/media-producer
```

## What It Can Do

- **Format Routing** — classifies concepts by visual type (topology, sequence, comparison, narrative, abstract) and routes to the right production skill
- **Architecture Diagrams** — produces system topology, infrastructure, and data flow visualizations
- **Animated Explainers** — generates Manim-based step-by-step reveals for technical and educational content
- **Motion Graphics** — creates React/Remotion-based branded video for marketing and product demos
- **Interactive Visualizations** — builds HTML dashboards, infographics, and data explorations
- **Presentation Design** — produces slide decks with one-idea-per-slide discipline and speaker notes

## Structure

```
media-producer/
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
    ├── format-selection-matrix.md
    ├── tool-routing-guide.md
    └── visual-design-principles.md
```

## Built with

Built for the [gitagent](https://gitagent.sh) ecosystem.
