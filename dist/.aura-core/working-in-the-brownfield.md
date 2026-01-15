# Working in the Brownfield (Courses): A Complete Guide

Brownfield for education = updating **existing courses** (new lessons, revisions, migrations to new tech, accessibility retrofits) without breaking what works.

---

## Two Approaches

### A. Outcome‑First (Recommended for major updates)
1. Update **Course Spec** outcomes and constraints
2. Refresh **O→A→T** outcomes map focusing on changed areas
3. Re‑shard lessons that are affected
4. Execute per‑lesson cycle with QA gates

### B. Inventory‑First (Good for scattered fixes)
1. Inventory current lessons, slides, assessments
2. Flag **risk areas** (outdated, low pass‑rate, accessibility issues)
3. Prioritize updates (P0/P1/P2) via **assessment‑priorities‑matrix**

---

## Brownfield QA Strategy

- Run `@qa *trace-learning {course_slug}` to see O→A→T coverage
- Apply `@qa *nfr-education` to validate clarity, inclusivity, maintainability
- Gate decisions: **PASS / CONCERNS / FAIL / WAIVED** with remediation notes

**Common Pitfalls & Fixes**  
- **Stale examples** → Replace with current, domain‑relevant scenarios  
- **Slide overload** → Split into sections; add worked→faded examples  
- **Assessment misalignment** → Re‑map to Bloom level; update rubrics  
- **Accessibility gaps** → Apply `.aura-core/data/accessibility-standards.md`

---

## Migration Playbook

- **Tech changes** (e.g., framework update): add comparison slide + changed APIs
- **Curriculum sequencing**: involve **learning‑curve‑specialist** to re‑ladder
- **Certification alignment**: map new vendor objectives into outcomes and L3/L4 tasks
- **Hybrid/online shift**: adapt activities to async + add micro‑formative (L1)

---

## Deliverables Checklist

- Updated lessons, slides, assessments, rubrics
- Revised outcomes map entries
- QA gate files with decision + remediation
- Versioned change log per lesson/module
