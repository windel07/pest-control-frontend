import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { ViteAliases } from 'vite-aliases';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    ViteAliases({
      prefix: '@',
    }),
  ],
});
