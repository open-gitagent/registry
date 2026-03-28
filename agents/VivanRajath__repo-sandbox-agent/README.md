# Repo Sandbox Agent

**Repo Sandbox Agent** is an advanced, hierarchical multi-agent developer system. Built 100% compliant with the Open GitAgent standard, it acts as a fully autonomous software engineering orchestrator—all natively powered by the **Lyzr ADK**.

##  What It Does
Unlike basic chatbot agents, this system integrates natively into your local filesystem to read code, track state, write edits, and execute complete `git` lifecycles on your behalf.

### Core Capabilities:
1. **Dynamic Repository Scanning:** Automatically extracts runtime environments, frameworks, ports, and run-commands (e.g., Python, Flask, Node) from any codebase and stores the structural layout into the GitAgent `memory/` tracker.
2. **Autonomous Bug Resolution:** Equipped with Junior and Senior persona sub-agents, it intelligently analyzes errors, drafts detailed markdown bug reports, and physically edits the source code files.
3. **Multi-Tool Native Integration:** Built with Lyzr ADK, the agent possesses physical tool access:
   - `file-read` & `file-write` for patching source code natively.
   - `shell-exec` for executing clones, compilations, and tests.
4. **Zero-Leak Secret Management & Autonomous Git:** Features a securely engineered `git_push` proxy tool. The agent automatically retrieves GitHub Personal Access Tokens from your `.env` file and executes authenticated `git add`, `git commit`, and `git push` commands behind the scenes—completely preventing secret leakage into Language Model token logs.

##  How It Works
1. You provide a natural language prompt (e.g., *"Patch the logic error in server.js and push the fix"*).
2. The Lyzr ADK **Orchestrator** processes the `SOUL.md` identity and routes the request to the `repo-scanner`.
3. The scanner deposits technical context into `memory/MEMORY.md`.
4. The `code-editor` agent reads the memory, accesses the physical files, writes the patch, and triggers the `git_push` tool to seamlessly update your GitHub repository.

*Built for the Lyzr GitAgent AI Challenge*
