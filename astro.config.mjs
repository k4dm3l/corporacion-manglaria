// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      PUBLIC_API_URL: envField.string({ context: "client", access: "public" }),
      PUBLIC_API_TOKEN: envField.string({ context: "client", access: "public" }),
    }
  },
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24, // 24 hours
    }
  }),
  build: {
    inlineStylesheets: 'always',
  },
  experimental: {
    svg: true
  },
  integrations: [react(), sitemap()],
  site: 'https://www.corporacionmanglaria.org/'
});