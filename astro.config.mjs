// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// On GitHub Pages this is a project site served from /Portofolio.
// The deploy workflow sets GITHUB_PAGES=true; locally we stay at the root.
const onPages = process.env.GITHUB_PAGES === 'true';

// Tailwind v4 is wired up through PostCSS (postcss.config.mjs) rather than the
// @tailwindcss/vite plugin, which currently mis-binds against Astro 6's
// rolldown-vite.
export default defineConfig({
  site: 'https://twod97.github.io',
  base: onPages ? '/Portofolio' : '/',
  integrations: [icon(), sitemap()],
});
