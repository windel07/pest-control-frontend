import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ViteAliases } from 'vite-aliases';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), ViteAliases()],
});
