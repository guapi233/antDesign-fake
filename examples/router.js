import Vue from "vue";
import Router from "vue-router";
import ComponentList from "./ComponentList.vue";
import Button from "./test/Button.vue";
import Input from "./test/Input.vue";
import Radio from "./test/Radio.vue";
import Checkbox from "./test/Checkbox.vue";
import Switch from "./test/Switch.vue";
import Form from "./test/Form.vue";
import Pagination from "./test/Pagination.vue";

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
  {
    path: "/Checkbox",
    component: Checkbox,
    name: "Checkbox",
  },
  {
    path: "/Switch",
    component: Switch,
    name: "SwitchTest",
  },
  {
    path: "/Form",
    component: Form,
    name: "Form",
  },
  {
    path: "/Pagination",
    component: Pagination,
    name: "Pagination",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
