#!/bin/bash

# === CONFIGURATION ===
REPO_PATH="C:/Users/zachs/OneDrive/Desktop/CyberpunkRed/TerminalStrings"   # <- Change this to your actual repo path
COMMIT_MESSAGE="auto push"           # <- Change this if you'd like a different message

# === SCRIPT LOGIC ===
cd "$REPO_PATH" || {
  echo "❌ Repo path not found: $REPO_PATH"
  exit 1
}

echo "📁 In repo: $REPO_PATH"
git add .
echo "➕ Changes staged"

# Only commit if there are changes
if git diff --cached --quiet; then
  echo "✅ Nothing to commit"
else
  git commit -m "$COMMIT_MESSAGE"
  echo "✅ Committed with message: $COMMIT_MESSAGE"
  git push
  echo "🚀 Pushed to remote"
fi
