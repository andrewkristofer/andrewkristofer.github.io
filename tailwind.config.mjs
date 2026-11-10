/**
 * @file        tailwind.config.mjs
 * @description Design-token configuration for the "Hyprland Caelestia / Unixporn rice"
 *              theme used throughout the portfolio. Declares the celestial/ink colour
 *              ramps, font stacks, glass shadows, and keyframe animations.
 * @remarks     Loaded through the `@config` directive from src/styles/global.css (Tailwind CSS v4).
 * @see         https://tailwindcss.com/docs/configuration
 */
/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        celestial: {
          /** @description Deep void obsidian — darkest base background. */
          void: '#090a10',
          /** @description Celestial dark — secondary background layer. */
          deep: '#0b0f19',
          /** @description Glass panel base — translucent card surfaces. */
          panel: '#131722',
          /** @description Raised surface — elevated / focused panels. */
          raised: '#1a2030',
          /** @description Neon violet — Hyprland active-border accent. */
          violet: '#a855f7',
          /** @description Cyan — secondary Hyprland active-border accent. */
          cyan: '#06b6d4',
        },
        ink: {
          /** @description Crisp off-white — primary foreground text. */
          DEFAULT: '#f1f5f9',
          /** @description Muted slate — secondary foreground text. */
          muted: '#94a3b8',
          /** @description Faint slate — tertiary / low-emphasis text. */
          faint: '#64748b',
        },
      },
      /**
       * Font stacks used across the UI.
       * sans → body copy, mono → code/labels, nerd → icon glyphs.
       */
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        nerd: ['"Symbols Nerd Font Mono"', '"JetBrainsMono Nerd Font"', '"JetBrains Nerd Font"', 'ui-monospace', 'monospace'],
      },
      /** @description Extended backdrop-blur steps for layered glassmorphism. */
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      /** @description Elevation and glow shadows for panels and accent states. */
      boxShadow: {
        panel: '0 24px 64px -24px rgba(0, 0, 0, 0.8)',
        'glow-sm': '0 0 12px -2px rgba(168, 85, 247, 0.45)',
        glow:
          '0 0 24px -4px rgba(168, 85, 247, 0.5), 0 0 48px -12px rgba(6, 182, 212, 0.35)',
        'glow-cyan': '0 0 24px -4px rgba(6, 182, 212, 0.45)',
      },
      /** @description Keyframe definitions backing the `animation` utilities below. */
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2rem, -1.5rem, 0) scale(1.08)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(-2.5rem, 2rem, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      /** @description Named animation utilities mapped to the keyframes above. */
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        float: 'float 16s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
};
