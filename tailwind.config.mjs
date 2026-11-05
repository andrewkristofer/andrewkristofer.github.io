/**
 * Hyprland Caelestia / Unixporn "rice" theme
 * Loaded via `@config` from src/styles/global.css (Tailwind CSS v4).
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        celestial: {
          void: '#090a10', // deep void obsidian
          deep: '#0b0f19', // celestial dark
          panel: '#131722', // glass panel base
          raised: '#1a2030', // elevated surface
          violet: '#a855f7', // hyprland active border (neon violet)
          cyan: '#06b6d4', // hyprland active border (cyan)
        },
        ink: {
          DEFAULT: '#f1f5f9', // crisp off-white
          muted: '#94a3b8', // muted slate
          faint: '#64748b',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        nerd: ['"Symbols Nerd Font Mono"', '"JetBrainsMono Nerd Font"', '"JetBrains Nerd Font"', 'ui-monospace', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      boxShadow: {
        panel: '0 24px 64px -24px rgba(0, 0, 0, 0.8)',
        'glow-sm': '0 0 12px -2px rgba(168, 85, 247, 0.45)',
        glow:
          '0 0 24px -4px rgba(168, 85, 247, 0.5), 0 0 48px -12px rgba(6, 182, 212, 0.35)',
        'glow-cyan': '0 0 24px -4px rgba(6, 182, 212, 0.45)',
      },
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
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        float: 'float 16s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
};
