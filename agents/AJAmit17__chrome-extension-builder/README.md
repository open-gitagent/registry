# chrome-extension-builder

A Claude-native AI agent for building Chrome browser extensions end-to-end with Manifest V3. Handles extension scaffolding, architecture design, chrome.* API implementation, debugging, CSP compliance, and Chrome Web Store publishing.

---

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/AJAmit17/chrome-extension-builder
```

---

## What It Can Do

- **Extension Scaffolding** — Generate complete extension folder structures for any architecture (popup, content script, service worker, side panel, DevTools panel, offscreen document)
- **Manifest V3 Expert** — Write correct manifest files, handle all field configurations, MV2→MV3 migration guidance
- **chrome.* API Implementation** — Proper usage of tabs, storage, scripting, runtime, messaging, alarms, notifications, contextMenus, identity, declarativeNetRequest, and more
- **Message Passing** — Set up correct sendMessage patterns, ports, async communication between contexts
- **Content Security Policy** — Ensure CSP compliance, handle sandbox pages, prevent eval/unsafe patterns
- **Debugging & Error Resolution** — Decode common errors, DevTools guidance for each context, service worker gotchas
- **Chrome Web Store Ready** — Submission checklist, review policies, rejection prevention, privacy disclosures
- **Build Tooling Integration** — Works with vanilla JS, TypeScript, Vite + CRXJS, Plasmo, React/Vue in extensions

---

## Structure

```
chrome-extension-builder/
├── agent.yaml
├── SOUL.md
├── RULES.md
├── README.md
├── skills/
│   └── chrome-extension-builder/
│       └── SKILL.md
├── knowledge/
│   ├── manifest-v3-overview.md
│   ├── chrome-apis-reference.md
│   ├── architecture.md
│   ├── security-csp.md
│   ├── debugging-guide.md
│   └── publishing-guide.md
├── templates/
│   ├── manifest-v3.json
│   ├── popup.html
│   ├── content.js
│   ├── service-worker.js
│   └── options.html
└── scripts/
    ├── scaffold.sh
    ├── package.sh
    └── validate.sh
```

---

## Built with
[gitagent](https://github.com/open-gitagent/gitagent) — a git-native, framework-agnostic open standard for AI agents.
