import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { ViteAliases } from 'vite-aliases';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueRouter(),
    ViteAliases({
      prefix: '@',
    }),
  ],
});
