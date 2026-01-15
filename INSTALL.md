# Quick Install

## Option 1: npx (Recommended)

```bash
cd your-project
npx aura-core
```

Done! Start using AURA agents.

## Option 2: Global Install

```bash
npm install -g aura-core
```

Then in any project:

```bash
cd your-project
aura-core
```

## What Gets Installed

```
your-project/
├── .aura-core/       # AURA framework (agents, templates, workflows)
└── opencode.jsonc    # IDE configuration
```

## Start Using

After installation, use these commands with your AI assistant:

```
@ed-orchestrator *shard-course      # Start a new course
@content *develop-lesson L01        # Write a lesson
@slides *slides L01                 # Create slides
@qa *review L01                     # Quality check
```

## Requirements

- Node.js 18+

## Need Help?

See the [User Guide](.aura-core/user-guide.md) after installation.
