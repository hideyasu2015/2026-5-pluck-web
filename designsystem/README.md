# PLUCK — Design System

Premium Japanese matcha, sourced with integrity and supplied to the world.
This folder is the brand & UI source-of-truth for **PLUCK Inc. (株式会社PLUCK)** — a Tokyo-based B2B/wholesale matcha company — so design agents can produce on-brand interfaces, decks, and assets.

> **Tagline:** *Delivering authentic matcha, with care.*
> **Promise:** *Premium Japanese matcha. Sourced with integrity, crafted with courage.*

---

## 1. Company & Product Context

**PLUCK Inc.** operates a domestic and international matcha sales business — wholesale (卸売り), bulk supply, and OEM — selling **100+ premium matcha varieties** to cafés, restaurants, bakeries, and corporate/global partners. They are *not* tea farmers; they position themselves as a **neutral, trusted gateway** that connects buyers directly with Japan's leading tea gardens (Uji · Yame · Nishio · Shizuoka · Nara · Kagoshima).

**Name origin** — a deliberate double meaning:
- *Physical:* **to pluck** tea leaves by hand — the origin of matcha.
- *Spiritual:* **LUCK → PLUCK** — the luck you are given, plus the courage to claim it. (Reflects the founders' intent.)

**Corporate facts** (from `about`):
- Company: PLUCK Inc. · CEO: Takahiro Endo · Directors: Yosuke Oikawa / Takeaki Fukuoka
- Capital: 1,000,000 JPY · Business: Domestic & international matcha sales
- Address: R-Cube Aoyama 3F, 1-3-1 Kita-Aoyama, Minato-ku, Tokyo
- Contact: info@pluck.co.jp · Site built by HerozTech

**Future vision** (from `story`): beyond B2B wholesale toward owned brands & shops that bring matcha — and a "calm, healthy way of living" — directly to end consumers worldwide.

### The single product surface
There is **one product**: the **marketing / wholesale website** (`www.pluck-tokyo.com`). It is the only digital surface and the basis of the UI kit. Pages:
`Home` · `Story` · `About` · `Wholesale` · `Products` (catalog + per-product detail pages) · `Contact`.

### Product catalog model
Each matcha SKU has: a **code name** (e.g. `OIS-1`, `NIS-Fuku Uji`, `CKR-CJM`, `UJE-K5`, `CHE-NsoB`, `KOU-1`, `IMM-Pre A`), a **category tag** (Matcha for Latte · Premium Selected Matcha · Organic Matcha for Latte · Premium Organic Matcha), a **2-line tasting description**, and an **origin region**. Grade language: *Ceremonial (極上)*, *Premium*, *Culinary*.

---

## 2. Sources

- **Codebase (read-only):** `www.pluck-tokyo.com/` — a Next.js 15 / React static export, Tailwind CSS v4. Color tokens and font-faces extracted from `_next/static/css/4a067411995c623a.css`. Page copy extracted from the page HTML.
- **Live site:** https://www.pluck-tokyo.com
- **Figma:** none provided.

> ⚠️ **Image assets are NOT in the export.** The static export serves all photography/logo through Next.js's `/_next/image` optimizer, so no source `.webp/.jpg/.png` files (including the circular **`green.webp`** logo roundel and product-jar photos) are on disk. Everything visual in this system therefore uses **placeholders** (drop-zones / tinted blocks) where brand photography belongs. **Please re-share the logo + key photography** so we can wire in the real imagery. See `assets/README.md`.

---

## 3. Content Fundamentals

The voice is **quiet, premium, and sincere** — luxury through restraint, never hype. It reads like a refined tea house that happens to run a global supply chain.

- **Person & address:** Brand speaks as **"we"**; addresses partners warmly but formally ("please reach out at your convenience"). Rarely uses "you" directly.
- **Register:** Elevated, calm, lightly poetic — *"one bowl of matcha can restore quiet to the mind."* Sentences are measured, often with em-dashes and the occasional fragment for cadence.
- **Casing:**
  - **Section eyebrows** are ALL-CAPS with wide tracking — `STORY`, `NAME ORIGIN`, `GLOBAL SUPPLY CHAIN`.
  - **Nav** is ALL-CAPS — `HOME STORY ABOUT WHOLESALE PRODUCTS`.
  - **Headings** are Title/sentence case in serif — *"Our Commitment"*, *"From Japan to the World, Trusted Quality, Delivered."*
  - **The brand name is always `PLUCK`** (all caps), often with `TOKYO` beneath at 0.38em tracking.
- **Bilingual:** Japanese (ja-JP) is primary in metadata; the front-end shown is English with an `EN` globe toggle. Japanese editorial appears in *mincho* serif. Honor both — Japanese terms (極上, 抹茶) appear inline as accents.
- **Numbers/claims:** Sparing and concrete — *"over 100 varieties," "100% Japan-Grown," "Your first sample is complimentary."* No invented stats.
- **Emoji:** **Never.** None anywhere. Accent marks are typographic (gold hairline rules, em-dashes, Japanese glyphs), not emoji.
- **CTA style:** gentle and generous — *"Explore Wholesale," "Our Story," "Let's get started," "Explore →."*
- **Vibe words:** authentic · authenticity · integrity · courage · stillness · clarity · umami · richness · trust.

**Representative copy:**
> "Today, matcha is attracting attention worldwide. However, the reality is that matcha differing from its original quality… is in circulation. Our mission is not merely to sell products, but to pass on the *authentic matcha culture* that Japan is proud of."
>
> "We are not tea farmers—and that is precisely why we are not bound by one region's habits… For business partners worldwide who want authentic Japanese matcha, PLUCK becomes the most honest and resilient gateway of trust."

---

## 4. Visual Foundations

A **warm, editorial, ceremonial** aesthetic: cream paper, deep tea-green, and a single champagne-gold accent. Lots of air; serif display over light sans body. Reads like a premium print catalog brought online.

**Color** — see `colors_and_type.css`.
- Light pages sit on **cream-silk `#f6f1e6`** (warm paper, not white). White is reserved for *cards*.
- Dark / immersive sections use **matcha-deep `#0b3d2e`** with cream text — heroes, footer, CTA bands.
- **Gold-champagne `#c7a76c`** is the *only* accent: eyebrows, hairline dividers, hover fills. Used sparingly.
- Secondary text is `charcoal-light` at **60–90% opacity**, never pure black on cream.
- Story sections step through a graded green ladder (`#cfe8d4 → #b8dcc4 → #9fcea8`).

**Typography**
- **Cormorant Garamond** (serif) for all display & headings — light/medium weights, tight tracking on big sizes.
- **Inter** for body & UI, usually **font-light (300)** at relaxed line-height — airy and quiet.
- **Noto Serif JP (mincho)** for Japanese editorial headings in the Story.
- **Noto Sans JP** for Japanese UI/body. **Dancing Script** exists for rare decorative cursive (seldom used).
- Hero brand lockup: huge serif `PLUCK` (tracking-tighter) + hairline rule + `TOKYO` at 0.38em.

**Backgrounds & texture**
- A persistent **film-grain overlay** (fractal-noise SVG, ~opacity 0.04, `mix-blend-overlay`) over the whole page, plus a soft **vignette** — gives a tactile, analog warmth.
- Dark sections add an extra noise layer at ~opacity 0.10.
- Full-bleed **photographic heroes**: image at `opacity-40 mix-blend-overlay` over matcha-deep, with a top-down `from-matcha-deep/80 via-transparent to-matcha-deep/90` gradient for legibility.
- Full-width **image divider bands** (e.g. "OUR MATCHA") with `bg-black/20` scrim and centered bold tracked caps flanked by hairline rules.
- Soft "wholesale" radial-tint gradient washes behind content sections.

**Imagery vibe:** warm, natural light; emerald-green matcha against ceramic/wood/linen; ceremonial whisking; calm and editorial — **not** cool, clinical, or high-saturation. Product jars shot on near-white (`pearl-white`) tiles, `object-contain`.

**Motion**
- Entrance: gentle **fade + translateY(20–40px)** reveals on scroll; hero scales up from 0.92. Durations 0.3–0.7s, eased `ease-out` / `cubic-bezier(0,0,.2,1)`.
- A brand **splash** (logo + PLUCK on matcha-deep) fades on first load.
- **No bounces, no springy/playful motion.** Everything is slow, soft, intentional. Decorative scroll-hint line animates subtly.

**Hover states**
- Nav links: a gold/white **hairline underline grows** from width 0 → full (`after:` pseudo).
- Buttons: cream→gold fill swaps, or a white sheen; CTA on dark gains a soft white glow.
- Cards: **shadow grows** (`shadow-sm → shadow-xl`), inner image **scales 1.03–1.05**, dark photo scrim fades out.
- Icons: `scale-110`. "Explore" row: **gap widens** and arrow nudges right.
- Transitions are color/opacity/shadow/scale — never harsh.

**Press / active:** subtle — relies on color shift; no aggressive shrink.

**Borders, radii, cards**
- Hairline borders at low opacity (`charcoal-light/10`, `matcha-deep/10`, `cream-silk/15` on dark).
- Radii: `1rem` (default card) · `1.5rem` (feature/image) · `pill` (buttons/chips) · occasional **asymmetric petal corners** (`rounded-tr-3xl rounded-bl-3xl`, `rounded-tl-[100px]`) for editorial flair.
- **Card pattern:** white surface · `rounded-2xl` · hairline border · `shadow-sm` resting → `shadow-xl` hover. On dark: `bg-white/5` + `backdrop-blur-md` + `border-white/10` (glass).

**Transparency & blur:** used for glass CTA panels on dark (`bg-white/5 backdrop-blur-md`) and frosted cards over photos (`bg-white/55 backdrop-blur-[2px]`). Sparing, always purposeful.

**Layout rules**
- Fixed transparent header that gains a cream/blur background on scroll; cream text over heroes.
- Centered max-widths: hero copy `656px`; content containers step `40→48→64→80rem`.
- Very generous vertical rhythm: `py-24`/`py-32`/`py-[100px]` between sections.
- Hairline gold rules (`w-12/16/20 h-px`) as quiet section separators.

---

## 5. Iconography — see `assets/README.md` for detail

- **Lucide** (https://lucide.dev), stroke-width **2**, rounded caps/joins, 24×24 — the brand's icon language. Seen: `globe, mail, building-2, users, briefcase, banknote, map-pin, store, utensils-crossed, cake-slice, arrow-right`. Linked from CDN in the UI kit.
- **No emoji, ever.** Decorative "icons" are typographic: hairline gold rules, em-dashes, and Japanese glyphs (極上, 抹茶).
- **Logo:** a circular green roundel (`green.webp`) paired with the serif `PLUCK` wordmark. *The roundel file is not in the export* — the wordmark is used as the textual logo; a placeholder stands in for the roundel until the asset is supplied.

---

## 6. Index — what's in this folder

| Path | What |
|---|---|
| `README.md` | This file — context, voice, visual foundations, manifest. |
| `colors_and_type.css` | All color + type tokens (base + semantic) and ready-to-use type classes. |
| `SKILL.md` | Agent-Skill entry point (Claude Code compatible). |
| `assets/` | Brand asset notes + iconography doc. *(No source imagery available — see note.)* |
| `preview/` | Design-system spec cards (colors, type, components) shown in the Design System tab. |
| `ui_kits/website/` | Hi-fi recreation of the PLUCK marketing/wholesale site — JSX components + interactive `index.html`. |

**Quick start for agents:** read this README → pull tokens from `colors_and_type.css` → compose screens from `ui_kits/website/` components → drop in real photography when supplied (until then use the placeholder pattern).
