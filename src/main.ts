import '@assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import { registerModules } from '@modules';

const app = createApp(App);

registerModules(app);

app.mount('#app');
