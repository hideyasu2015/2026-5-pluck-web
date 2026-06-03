# PLUCK — Website UI Kit

A hi-fi, interactive recreation of the **PLUCK marketing / wholesale website**
(`www.pluck-tokyo.com`). Cosmetic-fidelity React components you can recompose into
new pages, mocks, and prototypes. Open `index.html` to use the click-through.

## Run
Open `index.html` directly (no build). React 18 + Babel-standalone are loaded from CDN
and JSX is transpiled in-browser. Google Fonts (Cormorant Garamond, Inter, Noto Sans/Serif JP)
load from CDN.

## Interactive flows
- **Home** — cinematic matcha-deep hero (PLUCK · TOKYO lockup), philosophy, "Our Commitment"
  triptych, supply-chain split, glass CTA band.
- **Story** — branded story hero + three graded-green article cards (mincho headings).
- **About** — company intro, name-origin cards, full corporate-info table (icon rows).
- **Wholesale** — use-case tiles, "OUR MATCHA" full-bleed divider, grade rows, inquiry form.
- **Products** — category filter pills (live filtering) over a 3-up SKU grid → click any card.
- **Product detail** — large product view, attribute table, sample/inquiry CTAs.
- **Contact** — working (fake) inquiry form with success state.

Navigate via the header, footer links, product cards, and CTAs. The header is transparent
over dark heroes (cream text) and gains a frosted cream background on scroll (dark text).

## Files
| File | Role |
|---|---|
| `index.html` | Mounts everything; loads fonts, styles, scripts in order. |
| `styles.css` | Tokens (mirrors `../../colors_and_type.css`) + chrome, buttons, cards, grain. |
| `data.js` | Real product catalog (`window.PLUCK_PRODUCTS`), categories, nav. |
| `components.jsx` | `Icon` (Lucide), `Eyebrow`, `SectionHeader`, `Photo`, `Header`, `Footer`. |
| `screens-main.jsx` | `Home`, `Story`, `About`, `PageHero`, `CtaBand`, `useReveal`. |
| `screens-commerce.jsx` | `Wholesale`, `Products`, `ProductCard`, `ProductDetail`, `Contact`. |
| `app.jsx` | `App` shell + simple state router. |

Components export onto `window` (Babel scripts don't share scope) — see the bottom of
each `.jsx` for the `Object.assign(window, …)` / `window.PLUCK_*` exports.

## Fidelity notes & caveats
- **Imagery is placeholder.** No source photos/logo exist in the export, so the kit uses the
  brand's placeholder pattern: `pearl-white` product tiles with a tinted "jar", and
  matcha-deep hero blocks with a subtle textured stand-in + the signature gradient scrim.
  The logo roundel is a CSS circle with a serif "P" beside the `PLUCK` wordmark.
  **Swap these for real `<img>`/`<video>` when assets are supplied.**
- Routing is in-memory (no URL changes) — this is a visual kit, not production code.
- Forms are non-functional (show a success state on submit).
- The film-grain/vignette overlays from the live site are applied per dark-section only
  (a full-viewport `mix-blend-mode` layer breaks static capture/print).
