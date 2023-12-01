import { createApp } from "vue";
import { createRouter, createWebHistory} from "vue-router";
import App from "./App.vue";
import routes from "./routes";
import store from "@store/store.js";

// Font awesome icons
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store)
app.mount("#root");