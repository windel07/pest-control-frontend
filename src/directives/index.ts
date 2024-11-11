import type { App } from 'vue';

import Loading from './LoadingDirective';

const registerDirectives = (app: App<Element>): void => {
  app.directive('loading', Loading);
};

export { Loading, registerDirectives };
