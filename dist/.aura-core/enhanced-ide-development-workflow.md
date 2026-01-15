# Enhanced IDE Course Development Workflow (AURA)

This guide shows the **AURA** way to build educational artifacts inside an IDE, tailored to **courses, lessons, slides, and assessments**. If something isn’t covered here, see the **[User Guide](user-guide.md)**.

---

## Create Course Branch

1. **Create a new branch** for the course or module you’re working on.
2. Pull the latest changes for shared templates and checklists in `.aura-core/`.

---

## Lesson Story Creation (Orchestrator)

1. **New chat** → load **ed‑orchestrator**
2. **Execute**: `*shard-course` (if not already sharded) to create lesson stubs
3. Pick next lesson to develop from `docs/lessons/{course_slug}/index.md`
4. Confirm **learning outcomes** & dependencies

---

## Lesson Development (Content Developer)

1. **New chat** → load **content‑developer**
2. **Execute**: `*develop-lesson {lesson_id}`
3. Draft instructional script, examples, activities, and formative quiz
4. Validate against **Educational Design Checklist** and **Learning Curve Checklist**
5. Update Lesson **File List** and mark subtasks as complete

**Quick commands**  
```bash
@content *draft {lesson_id}      # script + activities
@content *expand {section}       # add examples / analogies
@content *refine                 # tighten clarity & pacing
@content *explain                # document rationale
```

---

## Slides Production (Presentation Creator)

1. **New chat** → load **presentation‑creator**
2. **Execute**: `*slides {lesson_id}`
3. Apply **Presentation** and **Accessibility** checklists
4. Save to `docs/slides/{course_slug}/{lesson_id}.md`

---

## Assessments & Rubrics (Assessment Architect)

1. **New chat** → load **assessment‑architect**
2. **Execute**: `*test-design {lesson_id}` (alias: `*assessment {outcome}`)
3. Produce aligned **assessment** + **rubric** per Bloom level
4. Save to:
   - `docs/assessments/{course_slug}/{lesson_id}-assessment.md`
   - `docs/rubrics/{course_slug}/{lesson_id}-rubric.md`

---

## QA Gate (QA Educator)

1. **New chat** → load **qa‑educator**
2. **Execute**: `*review {lesson_id}` → applies all checklists
3. Issues gate decision file: `docs/qa/gates/{course_slug}-{lesson_id}.yml`
4. If **CONCERNS/FAIL**, route back to responsible agent, then re‑review
5. If **PASS/WAIVED**, mark **Ready for Delivery**

**QA quick commands**  
```bash
@qa *review {lesson_id}           # full review
@qa *trace-learning {course_slug} # O→A→T coverage matrix check
@qa *nfr-education                # clarity, inclusivity, maintainability
@qa *gate {lesson_id}             # update final gate decision
```

---

## Commit & Deliver

1. Commit all artifacts and gate files
2. Push branch and open a PR for instructional review
3. Delivery package typically includes:
   - Lesson script, slides, assessments, rubric
   - Accessibility checklist confirmations
   - Gate decision + remediation notes if any
