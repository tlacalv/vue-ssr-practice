import Vue from 'vue';
import App from './App.vue';


module.exports = createApp = () => {
    const app = new Vue({
        render: h=> h(App)
    });
    return { app }
}