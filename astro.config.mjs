import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kshitijsawarkar.github.io',
  base: '/profile',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
});
