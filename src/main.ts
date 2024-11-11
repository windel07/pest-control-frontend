import '@assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

import { registerDirectives } from '@directives';
import { registerLayouts } from '@layouts';
import { registerModules } from '@modules';

const pinia = createPinia();
const app = createApp(App);

registerDirectives(app);
registerLayouts(app);
registerModules(app);

app.use(pinia);

app.mount('#app');
