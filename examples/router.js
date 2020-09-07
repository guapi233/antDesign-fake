import Vue from "vue";
import Router from "vue-router";
import ComponentList from "./ComponentList.vue";
import Button from "./test/Button.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: ComponentList,
  },
  {
    path: "/button",
    component: Button,
    name: "Button",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;