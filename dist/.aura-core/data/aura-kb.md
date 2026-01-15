# AURA™ Knowledge Base

AURA (Agentic Unified Reinforcement for Academics) is a framework that combines **specialized AI agents** with **evidence-based pedagogy** to design, develop, and assure quality of learning programs.

## Key Principles
1. **Outcomes First** — Every artifact traces back to measurable learning outcomes.
2. **Agent Specialization** — Designers design, Developers draft content, Assessments are engineered by specialists, QA ensures alignment & accessibility.
3. **Progressive Scaffolding** — Design difficulty ramps that respect prerequisites and cognitive load.
4. **Feedback Loops** — Formative checks > actionable feedback > revision.
5. **Traceability** — Outcomes → Activities → Assessments (O→A→T) matrix is mandatory.
6. **Accessibility by Default** — All materials meet accessibility standards.
7. **Iteration** — Pilot, measure, refine.

## Dual Environment
- **Web Planning**: generate course plans, outcomes maps, high-level curricula.
- **IDE Execution**: shard into lessons; create slides, content, assessments; run QA gates.

## Standard Artifacts
- `docs/courses/{course_slug}.md` — Course spec
- `docs/outcomes/{course_slug}-map.md` — O→A→T matrix
- `docs/lessons/{course_slug}/{lesson_id}.md` — Lesson script
- `docs/slides/{course_slug}/{lesson_id}.md` — Slides
- `docs/assessments/{course_slug}/{lesson_id}-assessment.md` — Assessment
- `docs/rubrics/{course_slug}/{lesson_id}-rubric.md` — Rubric
- `docs/qa/gates/{course_slug}-{lesson_id}.yml` — Gate decision
