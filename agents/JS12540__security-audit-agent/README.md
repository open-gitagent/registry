# security-audit-agent

[![Category](https://img.shields.io/badge/category-security-red)](https://registry.gitagent.sh)
[![License](https://img.shields.io/badge/license-MIT-green)](agent.yaml)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](agent.yaml)
[![Spec](https://img.shields.io/badge/gitagent-v0.1.0-purple)](https://github.com/open-gitagent/gitagent)

AI security engineer that audits code for OWASP Top 10 vulnerabilities, detects hardcoded secrets and credentials, and scans dependency files for known CVEs. Give it a GitHub URL or local path — it clones, discovers and triages files by risk, scans every file, delivers a full structured report, then permanently deletes the cloned repo from disk.

## Run

###  Using gitagent CLI

```bash
npx @open-gitagent/gitagent@latest run -r https://github.com/JS12540/security-audit-agent -a claude
```

## Skills

| Skill | What It Does |
|-------|-------------|
| `codebase-scanner` | 5-phase scan: discover all source files → triage by risk pattern (SQL concat, eval, pickle, secrets) → per-file OWASP analysis → consolidated report with CVEs → auto-delete cloned repo |
| `owasp-scanner` | Scans a single file or snippet for all OWASP Top 10 (2021) categories — A01 broken access control through A10 SSRF — with severity, line number, evidence, and exact fix |
| `secrets-detector` | Finds hardcoded AWS keys, GitHub tokens, Stripe keys, Slack tokens, JWTs, private keys, and DB connection strings. Reports as [REDACTED] — never outputs the actual value |
| `dep-auditor` | Audits requirements.txt, package.json, go.mod, and pom.xml against known CVE ranges for Python, Node, and general ecosystems. Flags unpinned versions and abandoned packages |

## What to ask

```
Scan this repo for all security vulnerabilities: https://github.com/owner/repo

Audit this Python file for OWASP issues: <paste code>

Check this repo for hardcoded secrets: https://github.com/owner/repo

Scan this requirements.txt for CVEs: <paste file>

Full security audit: https://github.com/owner/repo on the develop branch
```

## Example output

```
# Security Audit Report
Repository: https://github.com/ShiftLeftSecurity/flask-webgoat
Files scanned: 18 (15 Python, 3 config)
Files with findings: 7

---

## Critical Findings

### [CRITICAL] Remote Code Execution
File: app/views.py:84
Category: A03:2021 — Injection
Evidence:
    os.system(user_input)
Why exploitable: Attacker executes arbitrary OS commands on the server
Fix: Use subprocess with a fixed command list, never pass user input to shell

### [CRITICAL] SQL Injection
File: app/models.py:31
Category: A03:2021 — Injection
Evidence:
    query = "SELECT * FROM users WHERE name = '" + username + "'"
Fix:
    cursor.execute("SELECT * FROM users WHERE name = ?", (username,))

---

## Dependency Vulnerabilities
| Package  | Installed | CVE              | Severity | Fix      |
|----------|-----------|------------------|----------|----------|
| Flask    | 0.12.2    | CVE-2018-1000656 | HIGH     | >=1.0    |
| Werkzeug | 0.14.1    | CVE-2023-25577   | HIGH     | >=2.2.3  |

---

## Summary
| Severity | Count | Files Affected      |
|----------|-------|---------------------|
| CRITICAL | 3     | views.py, models.py |
| HIGH     | 4     | requirements.txt    |
| MEDIUM   | 2     | config.py           |
| Total    | 9     | 7 files             |

Overall risk: CRITICAL
Most urgent fix: Remove os.system() in views.py — live RCE exposure

Scan complete. Cloned repository permanently deleted from /tmp/security-scan-flask-webgoat.
No files from the scanned repository remain on disk.
```

## Structure

```
security-audit-agent/
├── agent.yaml
├── SOUL.md
├── RULES.md
├── README.md
└── skills/
    ├── codebase-scanner/SKILL.md
    ├── owasp-scanner/SKILL.md
    ├── secrets-detector/SKILL.md
    └── dep-auditor/SKILL.md
```

---

Built with [gitagent](https://github.com/open-gitagent/gitagent) — the open standard for git-native AI agents.
