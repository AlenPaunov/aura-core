# AURA Core

**Agentic Unified Reinforcement for Academics**

A multi-agent AI framework for designing, developing, and quality-assuring educational content at scale.

## The Problem

Educational course development is fragmented across multiple specialties—curriculum design, content writing, presentation creation, assessment design, and quality assurance. This leads to:

- Misalignment between learning outcomes, activities, and assessments
- Inconsistent quality and accessibility standards
- Difficulty coordinating specialized expertise
- No systematic quality gates before delivery

## The Solution

AURA provides an orchestrated multi-agent system where **7 specialized AI agents** work in sequence, each with defined responsibilities, built-in quality gates, and evidence-based pedagogical frameworks.

```
┌─────────────────────────────────────────────────────────────────┐
│                    AURA Execution Flow                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Orchestrator ──► Content Developer ──► Presentation Creator   │
│        │                                        │               │
│        │                                        ▼               │
│        │              ◄── QA Educator ◄── Assessment Architect  │
│        │                      │                                 │
│        │                      ▼                                 │
│        └──────────────► Quality Gate ──► Ready for Delivery     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Installation

```bash
# Run directly in your project
npx aura-edu-core

# Or install globally
npm install -g aura-edu-core
```

This copies the `.aura-core/` framework and installs Claude Code slash commands.

## The 7 Specialized Agents

| Agent | Role | Focus |
|-------|------|-------|
| **Educational Orchestrator** | Coordinates end-to-end workflows | Progress tracking, stage transitions |
| **Educational Designer** | Structures courses and outcomes | Bloom's alignment, scaffolding |
| **Content Developer** | Drafts lessons, examples, exercises | Practice-first, worked examples |
| **Presentation Creator** | Creates slides and visuals | Dual-coding, accessibility |
| **Assessment Architect** | Designs tests and rubrics | Validity, reliability, Bloom levels |
| **Learning Curve Specialist** | Optimizes difficulty progression | Pacing, spacing, scaffolding |
| **QA Educator** | Quality assurance gate | O→A→T traceability, accessibility |

## Core Workflows

### 1. Course Planning
```
Research → Outcomes Map → Curve Analysis → Assessment Strategy → QA Gate
```

### 2. Course Execution (per lesson)
```
Shard Course → Draft Lesson → Create Slides → Build Assessment → QA Review
```

## Artifact Standard Paths

All outputs follow consistent file paths:

```
docs/courses/{course_slug}.md              # Course specification
docs/outcomes/{course_slug}-map.md         # O→A→T matrix
docs/lessons/{course_slug}/{lesson_id}.md  # Lesson scripts
docs/slides/{course_slug}/{lesson_id}.md   # Presentations
docs/assessments/{course_slug}/{id}.md     # Assessments
docs/rubrics/{course_slug}/{id}.md         # Rubrics
docs/qa/gates/{course_slug}-{id}.yml       # QA decisions
```

## Project Structure

```
.aura-core/
├── agents/          # 7 agent role definitions
├── workflows/       # Planning & execution orchestration
├── templates/       # YAML/MD blueprints for artifacts
├── checklists/      # Quality & accessibility criteria
├── tasks/           # Executable task guides
├── data/            # Pedagogical frameworks & knowledge base
└── docs/            # User guides & documentation
```

## Embedded Pedagogical Frameworks

- **Bloom's Taxonomy** — 6 cognitive levels with measurable verbs
- **Assessment Levels** — L1 (micro-formative) to L4 (capstone)
- **Instructional Patterns** — Worked examples, retrieval practice, dual coding
- **Cognitive Load Theory** — Chunking, signaling, modality principles
- **Accessibility Standards** — WCAG AA equivalent baseline
- **O→A→T Traceability** — Outcomes → Activities → Tests alignment

## Quality Gates

Every lesson passes through a QA gate before delivery:

| Status | Meaning |
|--------|---------|
| **PASS** | Ready for delivery |
| **CONCERNS** | Minor issues noted, can proceed |
| **FAIL** | Must address issues before delivery |
| **WAIVED** | Exception granted with justification |

## Claude Code Slash Commands

After installation, use these commands in Claude Code:

| Command | Agent | Description |
|---------|-------|-------------|
| `/orchestrator` | Educational Orchestrator | Start workflows, shard courses |
| `/designer` | Educational Designer | Design courses, create outcome maps |
| `/content` | Content Developer | Draft lessons, examples, exercises |
| `/slides` | Presentation Creator | Create slide decks and visuals |
| `/assessment` | Assessment Architect | Design tests and rubrics |
| `/curve` | Learning Curve Specialist | Analyze difficulty progression |
| `/qa` | QA Educator | Quality review, gate decisions |

### Example Usage

```
/orchestrator start the python-basics course workflow
/content develop lesson L01 on variables
/slides create presentation for L01
/assessment design quiz for L01
/qa review L01 and issue gate decision
```

## Key Principles

1. **Outcomes First** — Everything traces back to learning outcomes
2. **Agent Specialization** — Each agent has a focused responsibility
3. **Progressive Scaffolding** — Content builds systematically
4. **Feedback Loops** — Continuous quality checks
5. **Accessibility by Default** — Inclusive design from the start

## Requirements

- Node.js 18+
- npm or npx

## License

MIT

---

Built for educators who want AI assistance without sacrificing pedagogical quality.
