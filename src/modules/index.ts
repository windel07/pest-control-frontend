import type { App } from 'vue';

const modules = import.meta.glob('./*.ts', { eager: true });

const registerModules = (app: App<Element>): void => {
  Object.entries(modules).forEach(([_, config]) => {
    app.use((config as any).default);
  });
};

export { registerModules };
