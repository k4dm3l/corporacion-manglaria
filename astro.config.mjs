import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_API_URL: envField.string({ context: "client", access: "public" }),
    }
  },
  output: 'server',
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    }
  }),
});
