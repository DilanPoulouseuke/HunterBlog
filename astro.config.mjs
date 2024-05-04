import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'

export default defineConfig({
    site: 'https://hunterblog.netlify.app/',
    markdown: {
        remarkPlugins: [[remarkReadingTime, {}]], // Correct format for remarkPlugins
        drafts: true,
        shikiConfig: {
            theme: 'material-theme-palenight',
            wrap: true
        }
    },
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
    ]
})
