# Code Review Agent

An AI-powered code reviewer built with [Lyzr ADK](https://docs.lyzr.ai/lyzr-adk/overview) and packaged as a [GitAgent](https://github.com/open-gitagent/gitagent).

Reviews GitHub Pull Requests and raw code snippets for **quality**, **security vulnerabilities**, and **best practices** — giving structured, severity-rated feedback like a senior engineer would.

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Code Review Agent                  │
│              (Lyzr ADK · claude-sonnet-4-6)          │
│                                                      │
│  ┌──────────────────┐  ┌────────────────────────┐   │
│  │  fetch-github-pr │  │  analyze-code-quality  │   │
│  │  GitHub REST API │  │  static analysis rules │   │
│  └──────────────────┘  └────────────────────────┘   │
│                                                      │
│           ┌─────────────────────┐                   │
│           │   check-security    │                   │
│           │   OWASP / CWE rules │                   │
│           └─────────────────────┘                   │
│                                                      │
│  Knowledge Base: code-review-guidelines.md           │
└─────────────────────────────────────────────────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| `main.py` | Lyzr ADK agent setup + interactive CLI |
| `skills/fetch-github-pr/` | GitHub REST API integration — fetches PR diff + metadata |
| `skills/analyze-code-quality/` | Static analysis: function length, nesting, naming, magic numbers |
| `skills/check-security/` | OWASP Top 10 pattern scanner with CWE references |
| `knowledge/` | Code review principles + security guidelines (RAG seed) |

---

## Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd code-review-agent
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure environment

```bash
cp .env.example .env
```

Edit `.env`:
```
LYZR_API_KEY=your_lyzr_api_key_here   # Required
GITHUB_TOKEN=your_github_token_here   # Optional, increases rate limit
```

Get your Lyzr API key at [studio.lyzr.ai](https://studio.lyzr.ai/).

---

## Usage

### Interactive CLI

```bash
python main.py
```

```
Code Review Agent ready.
Commands:
  <GitHub PR URL>    — review a pull request
  file <path>        — review a local file
  <paste code>       — review raw code (end with '---' on its own line)
  quit / exit        — exit

>>> https://github.com/owner/repo/pull/42
Reviewing...

## Summary
...

## Issues Found
[CRITICAL] Hardcoded Secret Detected (CWE-798) — line 14
  → Store secrets in environment variables or a secrets manager...

## Verdict
Score: 6/10 — Address the hardcoded credential before merging.
```

### Review a specific PR

```bash
python main.py --pr https://github.com/owner/repo/pull/42
```

### Review a local file

```bash
python main.py --file src/auth.py
```

---

## Output Format

Every review is structured consistently:

```
## Summary
What the code does and overall impression.

## Issues Found
[CRITICAL] <title> — <location>
  Risk: <what can go wrong>
  Fix:  <how to fix it>

[WARNING] ...
[INFO] ...

## Suggestions
Optional improvements.

## Verdict
Score: N/10 — One-sentence recommendation.
```

**Severity levels:**

| Level | Meaning | Action |
|-------|---------|--------|
| `[CRITICAL]` | Security vulnerability or correctness bug | Block merge |
| `[WARNING]` | Likely future bug or serious maintainability issue | Fix before merge |
| `[INFO]` | Style, readability, minor improvement | Optional |

---

## Security Checks (OWASP Top 10 / CWE)

| Vulnerability | Severity | CWE |
|--------------|----------|-----|
| Hardcoded secrets | CRITICAL | CWE-798 |
| SQL injection | CRITICAL | CWE-89 |
| Command injection | CRITICAL | CWE-78 |
| `eval`/`exec` with input | CRITICAL | CWE-95 |
| Path traversal | CRITICAL | CWE-22 |
| Insecure deserialization | CRITICAL | CWE-502 |
| Weak hashing (MD5/SHA-1) | WARNING | CWE-326 |
| Debug mode in production | WARNING | CWE-489 |
| Missing input validation | WARNING | CWE-20 |

---

## GitAgent

This agent is packaged in the [GitAgent standard](https://github.com/open-gitagent/gitagent) for framework-agnostic portability.

### Validate

```bash
npm install -g gitagent
gitagent validate -d .
gitagent info
```

### Export for other frameworks

```bash
gitagent export --format openai
gitagent export --format crewai
gitagent export --format lyzr
```

---

## Built With

- [Lyzr ADK](https://docs.lyzr.ai/lyzr-adk/overview) — Agent Development Kit
- [GitAgent](https://github.com/open-gitagent/gitagent) — Open agent standard
- [GitHub REST API](https://docs.github.com/en/rest) — PR data fetching
- Claude Sonnet 4.6 — LLM backbone

---

## License

MIT