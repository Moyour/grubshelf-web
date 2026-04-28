# GrubShelf marketing site — design spec (Phase 1 web)

Concise sitemap, information architecture, copy deck, and CSS variable naming aligned with [GRUBSHELF-IMPLEMENTATION-PHASE1.md](../GRUBSHELF-IMPLEMENTATION-PHASE1.md).

## Sitemap

| Route       | Purpose                                      |
| ----------- | -------------------------------------------- |
| `/`         | Landing: hero, features, optional proof, footer |
| `/privacy`  | Privacy policy stub (replace before launch)  |
| `/terms`    | Terms stub (replace before launch)           |

## Information architecture (home)

Top to bottom:

1. **Header**: wordmark link (home), nav links (Features, anchor), primary CTA “Plan your shelf”, theme toggle.
2. **Hero**: overline-style kicker, headline, supporting line, accent CTA + secondary link to feature section.
3. **Features**: four tiles — pantry, expiring soon, meal planning, shopping list (placeholders for future screenshots).
4. **Social proof** (optional placeholder): quote or stat block; can ship as muted placeholder copy.
5. **Footer**: wordmark, legal links, copyright.

## Copy deck (GrubShelf voice)

Principles: confident, warm, brief; sentence case; no corporate or wellness jargon.

| Placement        | Copy |
| ---------------- | ---- |
| Hero kicker      | Pantry, uncluttered |
| Hero headline    | See the shelf. Skip the guesswork. |
| Hero body        | Open the door. Know what’s hiding. Pantry, dates, meals, and the shop — one calm dashboard. Less waste, fewer surprises hiding behind the cereal. |
| Hero primary CTA | Plan your shelf |
| Hero secondary   | Why it exists |
| Feature 1 title  | Your pantry |
| Feature 1 body   | Glance once. Stop excavating the back row. |
| Feature 2 title  | Expiring soon |
| Feature 2 body   | Rescue the yogurt before it becomes a science project. |
| Feature 3 title  | Meals this week |
| Feature 3 body   | Sketch the week. Cook without the 6pm scramble. |
| Feature 4 title  | Shopping list |
| Feature 4 body   | Pull ingredients from meals — or start a clean list in seconds. |
| Proof headline   | Built for real kitchens |
| Proof body       | Placeholder for quotes or numbers when you have them. |
| Footer tag       | GrubShelf — your kitchen, sorted. |

## Semantic token → CSS variable map

iOS token names from §2.2 map to `--gs-*` kebab-case in `globals.css`:

| iOS / spec token   | CSS variable |
| ------------------ | ------------ |
| background         | `--gs-background` |
| surface            | `--gs-surface` |
| surfaceSecondary   | `--gs-surface-secondary` |
| textPrimary        | `--gs-text-primary` |
| textSecondary      | `--gs-text-secondary` |
| textTertiary       | `--gs-text-tertiary` |
| textInverse        | `--gs-text-inverse` |
| border             | `--gs-border` |
| borderSecondary    | `--gs-border-secondary` |
| brandPrimary       | `--gs-brand-primary` |
| brandPrimaryBg     | `--gs-brand-primary-bg` |
| accent             | `--gs-accent` |
| accentText         | `--gs-accent-text` |
| accentSurface      | `--gs-accent-surface` |
| success            | `--gs-success` |
| successSurface     | `--gs-success-surface` |
| warning            | `--gs-warning` |
| warningSurface     | `--gs-warning-surface` |
| danger             | `--gs-danger` |
| dangerSurface      | `--gs-danger-surface` |
| navActive          | `--gs-nav-active` |
| navInactive        | `--gs-nav-inactive` |
| inputBackground    | `--gs-input-background` |
| inputBorder        | `--gs-input-border` |
| inputBorderFocus   | `--gs-input-border-focus` |
| inputPlaceholder   | `--gs-input-placeholder` |
| shimmer            | `--gs-shimmer` |

Light values are set on `:root`; dark values on `.dark` (class on `html`).

## Typography (web)

- **Display / headings / body**: DM Sans (weights 400, 500, 600, 700 per scale).
- **Data-style accents** (optional on marketing): Space Mono for small numerals or labels.
- Rough scale alignment with §3.2: hero headline ≈ 32px bold; sections ≈ 24–20px; body 15–17px.

## Components (radii from §2.5)

- Buttons: 12px radius; vertical 14px / horizontal 28px (default).
- Cards: 14px radius; 1px border `border`; padding 16px vertical, 20px horizontal.
