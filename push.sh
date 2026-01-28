#!/bin/bash

# Quick push script for Growth Home Sprint prototype
# Usage: ./push.sh "Your commit message"

cd "$(dirname "$0")"

# Add all changes
git add -A

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "No changes to commit"
    exit 0
fi

# Use provided message or default
COMMIT_MSG="${1:-Update prototype}"

# Commit and push
git commit -m "$COMMIT_MSG" && git push

echo "✅ Changes pushed to GitHub"
echo "🌐 Live at: https://stephencalvillo-stripe.github.io/growth-dash-home-sprint/"
