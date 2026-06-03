# PAGE SPEC: EXPORT — PLUCK TOKYO
## Design System Input Document
### Version: 2026-06-02 | Status: DRAFT (PLUCK confirmation pending)

---

## META

```
Route:        /export
Nav label:    EXPORT
Nav position: Between WHOLESALE and PRODUCTS
Page title:   Global Supply — PLUCK TOKYO
Meta desc:    Japanese matcha for global B2B buyers. EU export track record, organic options, and full documentation support.
OG image:     [TBD — request from PLUCK: hero product shot or map visual]
```

---

## SECTION 1: HERO

### Layout
- Full-width, viewport-height or 80vh
- Background: dark overlay on high-quality matcha/field photography (or abstract texture if photo unavailable)
- Text: centered or left-aligned depending on design system default

### Copy

```
Eyebrow:   GLOBAL SUPPLY
Headline:  Trusted Japanese Matcha, Delivered Worldwide
Subhead:   B2B wholesale from verified Japanese origins. Organic certified. Documentation ready.
CTA:       Request a Sample  →  [links to /contact or #contact-anchor]
CTA sub:   First sample free. Minimum order 10kg.
```

### Data / State
- No dynamic data
- CTA button: primary variant
- [ ] PLUCK確認待ち: hero画像の使用許可

---

## SECTION 2: EXPORT TRACK RECORD

### Layout
- 2-column grid (desktop) / stacked (mobile)
- Left: headline + prose
- Right: country/region cards or icon grid

### Copy

```
Section label:  OUR REACH
Headline:       Supplying Markets Across 3 Continents
Body:           PLUCK sources from seven Japanese tea-growing regions and supplies B2B buyers in Europe, North America, the Middle East, and beyond.
                [以下は確認後に追記 — 現時点では記載しない]
```

### Country / Region Display

| Display | Icon | Business type label |
|---|---|---|
| Germany | DE flag | Distributor / Café |
| United Kingdom | GB flag | Distributor |
| United States | US flag | Distributor / Café |
| Argentina | AR flag | Distributor |
| UAE | AE flag | Distributor |
| Thailand | TH flag | [要確認] |

> **NOTE FOR DEVELOPER**: Country list is sourced from brochure map. Business type labels are inferred. Do NOT publish specific client names. Labels shown are generic — confirm with PLUCK before go-live.

### Component
- Component type: `StatGrid` or `RegionCard` (icon + country + label)
- State: static
- [ ] PLUCK確認待ち: 国ごとの取引先業態・月間取扱量の概算

---

## SECTION 3: CERTIFICATIONS & DOCUMENTATION

### Layout
- Full-width table or card grid
- 4 columns (desktop) / 2 columns (tablet) / 1 column (mobile)

### Copy

```
Section label:  DOCUMENTATION
Headline:       Export-Ready Paperwork
Body:           We support buyers with the documentation required for import compliance. Contact us to confirm availability per SKU.
```

### Certification Cards

| Card title | Status | Description | Action |
|---|---|---|---|
| EU Organic | [要確認 — 表示しないか「Available for select SKUs」] | Compliant with EU Regulation 2018/848 | Contact us |
| JAS Organic | [要確認] | Japan Agricultural Standard organic certification | Contact us |
| Certificate of Analysis (CoA) | [要確認 — yes/noのみ確認中] | Pesticide residue test results per lot | Contact us |
| Certificate of Origin (CoO) | [要確認] | Country of origin documentation for customs | Contact us |

> **NOTE FOR DEVELOPER**: すべての認証カードは PLUCK からの回答受領後に内容を確定すること。現時点では「Available — contact for details」という汎用表記に留めるか、セクション全体を非表示にすること。誤った認証表記は法的リスクあり。

### Component
- Component type: `CertCard` — title, status badge (Available / On Request / TBD), description, CTA link
- Status badge variants: `green = Available`, `yellow = On Request`, `gray = TBD`

---

## SECTION 4: PRODUCT OVERVIEW (Export Context)

### Layout
- Tabbed interface: 4 tabs
- Tab content: filterable card grid or table

### Copy

```
Section label:  PRODUCTS
Headline:       From Latte Grade to Ceremonial — We Have Your Spec
Body:           All products are sourced from named Japanese regions. Pricing is FOB Japan per kg. Contact us for volume pricing and current availability.
```

### Tab Structure

#### Tab 1: Matcha for Latte — Conventional

| Display name | Origin | Price (JPY/kg) | Monthly cap | Highlight |
|---|---|---|---|---|
| OIS-1 | Yame, Fukuoka | ¥16,000 | 250kg (spot: 3,000kg) | Best value |
| NIS-Fuku Uji | Uji, Kyoto | ¥18,000 | SOLD OUT | — |
| CKR-CJM | Japan | ¥19,000 | 100kg | — |
| NIS-Zui | Japan | ¥20,000 | 50kg | — |
| UJE-K5 | Uji, Kyoto | ¥20,000 | 100kg | — |
| CHE-NsoB | Nishio, Aichi | ¥21,000 | 100kg | — |
| SKE-LBE | Shizuoka | ¥21,000 | 100kg | — |
| OIS-2 | Yame, Fukuoka | ¥23,000 | 200kg (spot: 2,000kg) | High volume |
| SBE-1 | Japan | ¥24,000 | 100kg (spot: 1,000kg) | — |
| KOU-1 | Nara | ¥25,000 | 100kg | — |
| NIS-Kei | Japan | ¥30,000 | 100kg | — |
| IMM-Pre A | Kagoshima | ¥30,000 | 100kg | — |

#### Tab 2: Premium Matcha — Conventional

| Display name | Origin | Price (JPY/kg) | Monthly cap |
|---|---|---|---|
| KWH-1 | Mie | ¥35,000 | 100kg |
| IMM-TA | Kagoshima | ¥40,000 | 100kg |
| NIS-Kei Uji | Uji, Kyoto | ¥50,000 | 100kg |
| KOU-2 | Nara | ¥50,000 | 100kg |

#### Tab 3: Organic Matcha for Latte

| Display name | Origin | Price (JPY/kg) | Monthly cap | Note |
|---|---|---|---|---|
| OIS-1 Bio | Japan | ¥18,000 | 450kg (spot: 5,000kg) | High volume |
| CHE-Starter Bio | Kagoshima | ¥23,000 | 100kg | — |
| SGE-B Bio | Kagoshima | — | SOLD OUT | — |
| SGE-C Bio | Kagoshima | ¥25,000 | 100kg (spot: 1,000kg) | — |
| MRB-1 Bio | Shizuoka | ¥27,000 | spot: 600kg only | Spot only |
| IMM-Pre Bio | Kagoshima | ¥35,000 | 100kg | — |
| CHE-KgoA Bio | Kagoshima | ¥40,000 | 100kg | — |

#### Tab 4: Premium Organic Matcha

| Display name | Origin | Price (JPY/kg) |
|---|---|---|
| MRF-1 Bio | Shizuoka | ¥37,000 |
| CHE-NsoA Bio | Nishio, Aichi | ¥40,000 |
| IMM-TA Bio | Kagoshima | ¥40,000 |

### Component
- Component type: `TabbedProductTable`
- Row states: `available` / `sold-out` (grayed, "SOLD OUT" badge)
- Pricing disclaimer (below table): "Prices are FOB Japan and subject to change. Contact us for current quotes and volume discounts."
- [ ] PLUCK確認待ち: 価格・在庫の最新化（パンフレット情報のため陳腐化リスクあり）

---

## SECTION 5: HOW IT WORKS

### Layout
- Horizontal 4-step flow (desktop) / vertical stepper (mobile)
- Numbered steps with icon or illustration

### Copy

```
Section label:  PROCESS
Headline:       Simple Steps to Your First Order
```

| Step | Label | Description |
|---|---|---|
| 1 | Inquiry | Tell us your volume, grade, and certification requirements via our contact form. |
| 2 | Sample | We send a free sample of matched SKUs. One time per company. |
| 3 | Quote | We provide a formal quotation with FOB pricing and documentation list. |
| 4 | Order | Confirm your order. We coordinate shipping and export paperwork. |

### Component
- Component type: `StepFlow` — number, icon slot, label, description
- No dynamic state

---

## SECTION 6: CTA / CONTACT

### Layout
- Full-width band, high contrast background
- Centered text + single CTA button

### Copy

```
Headline:   Ready to Source Japanese Matcha?
Subhead:    Whether you're a distributor, café chain, or food manufacturer — we're open to discussion.
CTA:        Contact Us  →  [links to /contact]
Note:       First sample free. Minimum order from 10kg. Response within 2 business days.
```

### Component
- Component type: `CTABand`
- CTA: primary button variant

---

## GLOBAL NOTES FOR DEVELOPER

### Confirmation-gated content
The following sections MUST NOT go live until written confirmation received from PLUCK (endo-t@pluck.co.jp):

- Section 2: Business type labels per country, export volumes
- Section 3: All certification card statuses
- Section 4: Current pricing and availability (brochure may be stale)

### Recommended approach
Build with a feature flag or `draft: true` front-matter so the page can be staged internally without being indexed. Remove flag after PLUCK confirmation.

### Legal caution
- Do not claim EU Organic or JAS certification without SKU-level confirmation
- Do not claim pesticide test availability without explicit PLUCK approval
- Do not name specific overseas clients

### Pricing note
All prices are approximate FOB Japan. JPY fluctuation and market conditions (e.g., 2026 Uji harvest shortfall) mean prices shown may already be outdated. Add disclaimer prominently near Section 4.

---
END OF SPEC
