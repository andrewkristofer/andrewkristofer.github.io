# andrew-jian · developer portfolio

Single-page developer portfolio with a **Hyprland Caelestia / Unixporn rice** aesthetic.
Pure Astro static rendering + Tailwind CSS: zero framework hydration, vanilla JS only
for the keyboard-navigation layer.

## Stack

- [Astro](https://astro.build): static output, zero JS by default
- [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`) + `tailwind.config.mjs`
  (celestial colors, glows, fonts loaded via `@config`)
- Inter Variable + JetBrains Mono (bundled locally via Fontsource)

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
