// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: true
  },

  // 你原来的 vite 配置不动
  vite: {
    plugins: [tailwindcss()]
  }
});