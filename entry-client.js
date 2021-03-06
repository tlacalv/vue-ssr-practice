import { createApp } from './app';

const { app, router, store } = createApp();

if(window.__INITIAL_STATE__) {
    // we initialize the store state with the data injected from the server
    store.replaceState(window.__INITIAL_STATE__);
}
router.onReady(() => {
    //assiming App.vue template root element has `id="app"`
    app.$mount('#app', true);
})