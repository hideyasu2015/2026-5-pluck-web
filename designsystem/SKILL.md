---
name: pluck-design
description: Use this skill to generate well-branded interfaces and assets for PLUCK (株式会社PLUCK), a premium Japanese matcha wholesale company — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, iconography, and a website UI kit for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:
- `colors_and_type.css` — all color + typography tokens (base + semantic) and ready-to-use type classes.
- `assets/README.md` — iconography (Lucide) and the imagery-placeholder situation (no source photos/logo shipped — use placeholders, request real assets).
- `preview/` — spec cards for colors, type, spacing, components, and brand.
- `ui_kits/website/` — a hi-fi interactive recreation of the PLUCK marketing/wholesale site (React + Babel, no build). Reusable components: `Header`, `Footer`, `Icon`, `Eyebrow`, `SectionHeader`, `Photo`, `ProductCard`, page screens.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets/tokens out and
produce static HTML files for the user to view. If working on production code, copy assets and
read the rules here to become an expert in designing with this brand.

**Brand in one breath:** quiet, premium, ceremonial. Warm cream paper (`#f6f1e6`), deep tea-green
(`#0b3d2e`), one champagne-gold accent (`#c7a76c`). Cormorant Garamond serif display over light
Inter body. Gold uppercase eyebrows, hairline rules, generous air, soft slow motion, no emoji.
Voice: sincere, restrained, "we"; luxury through restraint.

If the user invokes this skill without other guidance, ask what they want to build or design,
ask a few focused questions, then act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.
