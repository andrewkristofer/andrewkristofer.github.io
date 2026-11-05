// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Keep source whitespace: the default compressor trims whitespace at tag
  // boundaries, which glues words to inline <span>s (e.g. "KristoferJian").
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://andrewkristofer.github.io',
});
