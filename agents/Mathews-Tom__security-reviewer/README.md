# security-reviewer

OWASP Top 10 vulnerability scanner that maps attack surfaces, traces untrusted data flows from entry points to dangerous sinks, and produces severity-ranked findings with exploit scenarios and remediation code. Thinks like an attacker, reports like an auditor.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/Mathews-Tom/security-reviewer
```

## What It Can Do

- **Attack Surface Mapping** — identifies entry points (HTTP handlers, CLI parsers, file uploads, webhooks) and traces data flows to dangerous sinks (SQL, filesystem, shell, templates)
- **Injection Analysis** — detects SQL injection, command injection, NoSQL injection, and template injection vectors with concrete data flow evidence
- **XSS Detection** — finds reflected, stored, and DOM-based cross-site scripting vulnerabilities including framework-specific patterns (React dangerouslySetInnerHTML, Jinja2 unescaped output)
- **Auth & Session Review** — flags broken authentication, IDOR, session fixation, JWT misuse, and missing access control checks
- **Deserialization & SSRF** — catches insecure deserialization (pickle, YAML, Java ObjectInputStream) and server-side request forgery patterns
- **Security Misconfiguration** — identifies debug mode in production, CORS misconfig, missing security headers, and verbose error exposure

## Structure

```
security-reviewer/
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
    ├── owasp-top-10-reference.md
    ├── injection-patterns.md
    ├── xss-patterns.md
    ├── auth-vulnerabilities.md
    └── security-headers.md
```

## Built with

Built for the [gitagent](https://gitagent.sh) ecosystem.
