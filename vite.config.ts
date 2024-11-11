import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import Components from 'unplugin-vue-components/vite';
import { ViteAliases } from 'vite-aliases';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueRouter({
      dts: 'src/typed-router.d.ts',
      exclude: ['**/components/*'],
    }),
    ViteAliases({
      prefix: '@',
    }),
    Components({
      dts: 'src/components.d.ts',
      dirs: ['src/components/base'],
    }),
  ],
});
