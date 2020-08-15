import { createApp } from './app';

const { app } = createApp();

//assiming App.vue template root element has `id="app"`
app.$mount('#app')