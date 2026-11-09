# andrew-jian · developer portfolio

Single-page developer portfolio with a **Hyprland Caelestia / Unixporn rice** aesthetic.
Pure Astro static rendering + Tailwind CSS: zero framework hydration, vanilla JS only
for the keyboard-navigation layer.

## Stack

- [Astro](https://astro.build): static output, zero JS by default
- [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`) + `tailwind.config.mjs`
  (celestial colors, glows, fonts loaded via `@config`)
- [AstroAnimate](https://www.astroanimate.com) (`@astroanimate/core`): CSS-first
  animation components, zero-JS unless a component opts into `enhance`
- Inter Variable + JetBrains Mono (bundled locally via Fontsource)

## Animations (AstroAnimate)

Motion comes from `@astroanimate/core` components — all respect
`prefers-reduced-motion` and keep no-JS fallbacks.

| Where | Component | Mode |
| --- | --- | --- |
| Hero boot sequence (staggered entrance) | `FadeInText` | CSS-only |
| Rotating role line under the name | `TypewriterText` | `enhance` (tiny JS) |
| Marker sweeps on key hero phrases | `HighlightText` `trigger="load"` | CSS-only |
| Download CV shimmer | `AnimatedButton variant="shimmer"` | CSS-only |
| Hover highlights through the content | `HighlightText` `trigger="hover"` | CSS-only |
| About stat tiles (3.46 · 87.96% · 5 · 3) | `CountUp` | `enhance` (IntersectionObserver) |
| Tooltips (dock chip, socials, ✕ button) | `Tooltip` | CSS-only |
| Tech ticker at the bottom of the desktop | `InfiniteMarquee` | CSS-only |
| Sliding workspace pill in the dock | custom (indicator + `setActive()`) | vanilla JS |

**Window-open engine (`#17`)** — closed windows skip their panel contents
(`content-visibility: hidden`, flipped with `transition-behavior:
allow-discrete` after the close fade-out), so `IntersectionObserver`-driven
components like `CountUp` stay dormant until a window actually opens and
replay-friendly CSS entrances restart via the `.anim-reset` hook in the
window manager (`BaseLayout.astro`).

> **Note:** `@astroanimate/core` declares `peer astro@"^4 || ^5 || ^6"` while
> this site runs Astro 7 — the components are plain CSS-first `.astro` files
> and work fine; `.npmrc` sets `legacy-peer-deps=true` so `npm install` (and
> CI) accept the stale peer range without flags.

## Commands

```sh
npm install        # install dependencies
npm run dev        # dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
npm run cv:pdf     # regenerate public/andrew-kristofer-jian-cv.pdf (pdfkit)
```

## Structure

```
src/
  layouts/BaseLayout.astro      # shell, aurora/grain backdrop, keyboard script
  components/
    WaybarNav.astro             # floating top dock (workspace pills 1-5)
    GlassCard.astro             # Hyprland window-style glass card (optional repo link)
    KeybindingHUD.astro         # floating bottom-right shortcut HUD
    SectionHeader.astro         # Waybar pill kicker + heading
  pages/index.astro             # #home #about #experience #projects #certifications #skills
tailwind.config.mjs             # celestial theme tokens
scripts/generate-cv.mjs         # CV PDF generator
```

## Keyboard shortcuts (Hyprland-style)

The home section is your desktop; each section opens as a floating window.

| Key       | Action                                             |
| --------- | -------------------------------------------------- |
| `↓` / `↑` | Open next / previous window (cycles)               |
| `Z` + `Q` | Desktop: close all windows (`#home`)              |
| `Z` + `1` | Open `#about` window                               |
| `Z` + `2` | Open `#experience` window                          |
| `Z` + `3` | Open `#projects` window                            |
| `Z` + `4` | Open `#certifications` window                      |
| `Z` + `5` | Open `#skills` window                              |
| `Esc`     | Close the focused window                           |

The `Z` + `1…5` combos mirror the Waybar dock pills (1-5) in the top dock;
`Z` + `Q` closes everything back to the desktop. Clicking a
dock pill opens that window (click again to close); clicking the dimmed
backdrop or the ✕ button also closes. Deep links work too: `/#projects` opens
the projects window on load.

Hints are displayed in the floating HUD at the bottom of the viewport.
