import Vue from "vue";
import Router from "vue-router";
import ComponentList from "./ComponentList.vue";
import Button from "./test/Button.vue";
import Input from "./test/Input.vue";
import Radio from "./test/Radio.vue";

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
  {
    path: "/input",
    component: Input,
    name: "Input",
  },
  {
    path: "/Radio",
    component: Radio,
    name: "Radio",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
