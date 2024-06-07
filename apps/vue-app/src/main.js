import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { ComponentLibrary } from 'wc-vue-lib';

createApp(App).use(ComponentLibrary).mount('#app');
