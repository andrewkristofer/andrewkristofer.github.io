// @ts-check
/**
 * @file        astro.config.mjs
 * @description Project-level Astro configuration for the Andrew Kristofer Jian
 *              portfolio site. Registers the Tailwind CSS v4 Vite plugin and
 *              supplies the canonical deployment URL used for canonical/OG links.
 * @see         https://astro.build/config — official Astro configuration reference.
 */
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Central Astro configuration object.
 *
 * @description Defines build, styling-integration, and site-metadata options
 *              consumed by the Astro compiler and dev/build tooling.
 * @see https://astro.build/config
 */
export default defineConfig({
  /**
   * Disable Astro's default HTML whitespace compressor.
   *
   * @description The default compressor trims whitespace at tag boundaries, which
   *              glues words to inline <span> elements (e.g. renders "KristoferJian"
   *              instead of "Kristofer Jian"). Retaining source whitespace preserves
   *              the intended spacing of the rendered copy.
   */
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://andrewkristofer.github.io',
});
