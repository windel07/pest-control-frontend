import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

export default {
  install: (app: App) => {
    const router = createRouter({
      routes,
      history: createWebHistory(),
      linkActiveClass: 'active',
      scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
      },
    });

    app.use(router);
  },
};
