#!/usr/bin/env npx tsx

/**
 * Generate index.json from all agent folders in agents/.
 *
 * Usage: npx tsx scripts/build-index.ts
 *
 * Reads each agents/<author>__<name>/metadata.json, enriches with
 * icon URL, readme URL, added_at date, and GitHub repo stats.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "fs";
import { resolve, join } from "path";
import { execSync } from "child_process";

const ROOT = resolve(import.meta.dirname, "..");
const AGENTS_DIR = resolve(ROOT, "agents");
const INDEX_PATH = resolve(ROOT, "index.json");

const RAW_BASE = "https://raw.githubusercontent.com/open-gitagent/registry/main";

interface AgentMetadata {
  name: string;
  author: string;
  description: string;
  repository: string;
  path?: string;
  version: string;
  category: string;
  tags: string[];
  license: string;
  model: string;
  adapters: string[];
  icon?: boolean;
  banner?: boolean;
}

interface GitHubStats {
  stars: number;
  forks: number;
  issues: number;
  language: string | null;
  avatar: string;
  description: string | null;
}

interface IndexEntry extends Omit<AgentMetadata, "icon" | "banner"> {
  icon: string | null;
  banner: string | null;
  github: GitHubStats | null;
  readme: string;
  added_at: string;
}

interface Index {
  agents: IndexEntry[];
  total: number;
  generated_at: string;
}

function getFirstCommitDate(folderPath: string): string {
  try {
    const date = execSync(
      `git log --diff-filter=A --format=%aI -- "${folderPath}" | tail -1`,
      { cwd: ROOT, encoding: "utf-8" }
    ).trim();
    if (date) {
      return date.split("T")[0];
    }
  } catch {
    // fallback
  }
  return new Date().toISOString().split("T")[0];
}

function fetchGitHubStats(repoUrl: string): GitHubStats | null {
  const repoPath = repoUrl.replace("https://github.com/", "");
  try {
    const json = execSync(
      `curl -sL "https://api.github.com/repos/${repoPath}"`,
      { encoding: "utf-8", timeout: 15_000 }
    );
    const data = JSON.parse(json);
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      issues: data.open_issues_count ?? 0,
      language: data.language ?? null,
      avatar: data.owner?.avatar_url ?? "",
      description: data.description ?? null,
    };
  } catch {
    return null;
  }
}

function buildIndex(): Index {
  const agents: IndexEntry[] = [];

  if (!existsSync(AGENTS_DIR)) {
    console.log("No agents/ directory found. Creating empty index.");
    return { agents: [], total: 0, generated_at: new Date().toISOString() };
  }

  const folders = readdirSync(AGENTS_DIR).filter((f) => {
    const fullPath = join(AGENTS_DIR, f);
    return statSync(fullPath).isDirectory() && f.includes("__");
  });

  for (const folder of folders) {
    const folderPath = join(AGENTS_DIR, folder);
    const metadataPath = join(folderPath, "metadata.json");

    if (!existsSync(metadataPath)) {
      console.warn(`  Skipping ${folder}: no metadata.json`);
      continue;
    }

    let metadata: AgentMetadata;
    try {
      metadata = JSON.parse(readFileSync(metadataPath, "utf-8"));
    } catch (e) {
      console.warn(`  Skipping ${folder}: invalid metadata.json — ${(e as Error).message}`);
      continue;
    }

    const hasIcon = metadata.icon === true && existsSync(join(folderPath, "icon.png"));
    const hasBanner = metadata.banner === true && existsSync(join(folderPath, "banner.png"));
    const addedAt = getFirstCommitDate(folderPath);

    console.log(`  Fetching GitHub stats for ${metadata.repository}...`);
    const github = fetchGitHubStats(metadata.repository);

    const entry: IndexEntry = {
      name: metadata.name,
      author: metadata.author,
      description: metadata.description,
      repository: metadata.repository,
      version: metadata.version,
      category: metadata.category,
      tags: metadata.tags,
      license: metadata.license,
      model: metadata.model,
      adapters: metadata.adapters,
      icon: hasIcon ? `${RAW_BASE}/agents/${folder}/icon.png` : null,
      banner: hasBanner ? `${RAW_BASE}/agents/${folder}/banner.png` : null,
      github,
      readme: `${RAW_BASE}/agents/${folder}/README.md`,
      added_at: addedAt,
    };

    if (metadata.path) {
      entry.path = metadata.path;
    }

    agents.push(entry);
    console.log(`  + ${metadata.author}/${metadata.name} (stars:${github?.stars ?? '?'} forks:${github?.forks ?? '?'})`);
  }

  // Sort by name
  agents.sort((a, b) => a.name.localeCompare(b.name));

  return {
    agents,
    total: agents.length,
    generated_at: new Date().toISOString(),
  };
}

// Main
console.log("Building index.json...\n");
const index = buildIndex();
writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2) + "\n");
console.log(`\nDone. ${index.total} agents written to index.json`);
