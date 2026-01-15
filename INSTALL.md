# Quick Install

## Option 1: npx (Recommended)

```bash
cd your-project
npx aura-edu-core
```

Done! Start using AURA agents.

## Option 2: Global Install

```bash
npm install -g aura-edu-core
```

Then in any project:

```bash
cd your-project
aura-edu-core
```

## What Gets Installed

```
your-project/
├── .aura-core/           # AURA framework (agents, templates, workflows)
├── .claude/commands/     # Claude Code slash commands
└── opencode.jsonc        # IDE configuration
```

## Start Using

After installation, use these slash commands in Claude Code:

```
/orchestrator    # Coordinate workflows, shard courses
/designer        # Design courses, create outcome maps
/content         # Draft lessons and exercises
/slides          # Create presentations
/assessment      # Design tests and rubrics
/curve           # Analyze learning progression
/qa              # Quality review and gate decisions
```

### Example

```
/orchestrator start python-basics course
/content develop lesson L01
/qa review L01
```

## Requirements

- Node.js 18+

## Need Help?

See the [User Guide](.aura-core/user-guide.md) after installation.
