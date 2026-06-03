# PLUCK — Brand Assets

## ⚠️ Source imagery is unavailable
The provided codebase is a Next.js **static export**. All photographs and the logo
are served through the `/_next/image` optimizer, so **no source image files exist on
disk** — not the logo roundel, not product jars, not the lifestyle photography.

**What this means for design work:**
- Use the **placeholder pattern** wherever brand photography belongs:
  a `pearl-white` / `matcha-light` tinted block (or an `<image-slot>` drop zone),
  with `object-fit: cover`, the brand's signature gradient scrim on dark heroes,
  and a short caption of what photo goes there.
- For the **logo**, use the serif **`PLUCK`** wordmark (the site's textual logo) with
  `letter-spacing: var(--tracking-widest)`. A simple matcha-deep circle stands in for
  the roundel until the real `green.webp` is supplied.

### 🙏 Please send us
1. `green.webp` — the circular green PLUCK logo roundel (and any SVG/mono variants).
2. `favicon.ico`
3. Hero/lifestyle photography (tea fields, whisking, lattes) — the warm editorial set.
4. Product jar photos (`tea powder/*.JPG`: OIS-1, NIS-Fuku Uji, CKR-CJM, UJE-K5 …).
5. `newvideo-1.mp4` is referenced as the homepage hero video (also not on disk).

Once supplied, drop files here and swap the placeholders for real `<img>`/`<video>`.

---

## Iconography

**System:** [Lucide](https://lucide.dev) — the only icon set in the product.
- Stroke width **2**, round line-cap & line-join, `24×24` viewBox, `currentColor`.
- Outline (not filled), consistent with the calm, editorial tone.
- **CDN (used by the UI kit):**
  `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`,
  or per-icon SVG from https://lucide.dev.

**Icons observed in the product** (map to real usage):
| Icon | Used for |
|---|---|
| `globe` | EN/JA language toggle |
| `mail` | contact email |
| `building-2` | company / corporate (wholesale "For Business", about table) |
| `users` | CEO / directors rows |
| `briefcase` | business line |
| `banknote` | capital |
| `map-pin` | address |
| `store` | wholesale "For Cafés" |
| `utensils-crossed` | wholesale "For Restaurants" |
| `cake-slice` | wholesale "For Baking" |
| `arrow-right` | "Explore" card links, CTAs |

**Custom marks:** the mobile hamburger is a hand-rolled 3-line SVG (white, 2px round caps).

**No emoji** is ever used. Typographic accents (gold hairline rules `▬`, em-dashes,
Japanese glyphs 極上 / 抹茶) play the decorative role icons might elsewhere.
