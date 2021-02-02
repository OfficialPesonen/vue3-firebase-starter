import { createApp } from "vue";
import App from "./App.vue";

import router from "@/services/router.js";
import store from "@/services/store";

import "./utils/serviceWorker";
import "@/assets/scss/index.scss";

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
