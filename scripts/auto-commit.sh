#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

BRANCH="$(git rev-parse --abbrev-ref HEAD)"

# Optional: keep local refs fresh (does not fail if no upstream)
git fetch --prune origin >/dev/null 2>&1 || true

# Only commit when there are real changes
if [[ -z "$(git status --porcelain)" ]]; then
  exit 0
fi

# Safety: don’t commit auto-generated/empty changeset
# If there is nothing to stage, bail.
git add -A

if [[ -z "$(git diff --cached --name-only)" ]]; then
  exit 0
fi

# Commit message (exact format requested)
TS="$(date '+%Y-%m-%d %H:%M')"
MSG="Auto-commit: ${TS}"

# Avoid failing on merge conflicts/unmerged paths
if [[ -n "$(git ls-files -u)" ]]; then
  echo "Unmerged paths present; refusing to commit." >&2
  exit 1
fi

# Commit and push
# If commit already exists with same message (rare), still proceed.
git commit -m "$MSG" >/dev/null

git push origin "$BRANCH" >/dev/null

