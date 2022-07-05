import "reflect-metadata";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/tailwind.css";
import "@/assets/main.css";
import { Icon } from "@iconify/vue";

createApp(App)
  .use(store)
  .use(router)
  .component("Icon", Icon)
  .mount("#app");
