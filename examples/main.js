import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import CUI from "../components";
import Blockarea from "./Blockarea.vue";

Vue.config.productionTip = false;

Vue.use(CUI);
Vue.component(Blockarea.name, Blockarea);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
