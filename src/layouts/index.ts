import type { App } from 'vue';

const layouts = import.meta.glob('./*.vue', { eager: true });

const registerLayouts = (app: App<Element>): void => {
  Object.entries(layouts).forEach(([path, config]) => {
    const name = path
      .split('/')
      .pop()
      ?.replace(/\.\w+$/, '') as string;

    app.component(name, (config as any).default);
  });
};

export { registerLayouts };
