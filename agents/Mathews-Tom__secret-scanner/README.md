# secret-scanner

Pre-commit credential detection agent that scans staged files for hardcoded API keys, passwords, tokens, connection strings, private key material, and high-entropy strings. Operates as a fast, zero-false-negative gate between your code and version control.

## Run

```bash
npx @open-gitagent/gitagent run -r https://github.com/Mathews-Tom/secret-scanner
```

## What It Can Do

- **Provider Key Detection** — recognizes exact patterns for AWS, GitHub, Slack, Stripe, Google, Azure, and other provider credentials
- **Private Key Scanning** — detects PEM-encoded RSA, EC, OPENSSH, PGP, DSA, and PKCS8 private key material
- **Connection String Detection** — finds database and service connection strings with embedded credentials (PostgreSQL, MySQL, MongoDB, Redis, AMQP, SMTP)
- **High-Entropy Analysis** — calculates Shannon entropy to flag suspicious strings assigned to credential-like variables
- **Environment Variable Leakage** — detects .env values leaked into source code and hardcoded fallbacks in os.environ/process.env calls
- **Redacted Reporting** — outputs findings with redacted secrets (first 4 / last 4 characters only) to prevent the scan report itself from becoming a leak vector

## Structure

```
secret-scanner/
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
    ├── provider-key-patterns.md
    ├── high-entropy-detection.md
    └── remediation-guide.md
```

## Built with

Built for the [gitagent](https://gitagent.sh) ecosystem.
