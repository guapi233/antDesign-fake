import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CUI from "../components";
import Blockarea from "@/Blockarea.vue";

createApp(App)
  .use(router)
  .use(CUI)
  .component("blockarea", Blockarea)
  .mount("#app");
