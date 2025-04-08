// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

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
  adapter: netlify(),
  build: {
    inlineStylesheets: 'always',
  },

  experimental: {
    svg: true
   },
  integrations: [react(), sitemap()],
  site: 'https://www.corporacionmanglaria.org/'
});