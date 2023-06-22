import { createApp, h } from 'vue';

import App from "./components/app.js";

const app = createApp({
    render: () => h(App)
});


app.mount("#app");