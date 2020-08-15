import { createApp } from './app';
import { Router } from 'express';

const { app } = createApp();

//assiming App.vue template root element has `id="app"`
Router.onReady(() => {
    app.$mount('#app');
})