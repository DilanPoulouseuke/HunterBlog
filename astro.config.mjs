import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkReadingTime from 'remark-reading-time'; // Ensure this import is correct

export default defineConfig({
  site: 'https://hunterblog.netlify.app/',
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight',
        },
        wrap: true
      },
      drafts: true
    }),
    sitemap(),
    tailwind()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    markdownItOptions: {
      html: true,
    },
    shiki: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
});
