import { createRouter, createWebHistory } from "vue-router";
import ComponentList from "../ComponentList.vue";
// import Button from "./test/Button.vue";
// import Input from "./test/Input.vue";
// import Radio from "./test/Radio.vue";
// import Checkbox from "./test/Checkbox.vue";
// import Switch from "./test/Switch.vue";
// import Form from "./test/Form.vue";
// import Pagination from "./test/Pagination.vue";
// import Notice from "./test/Notice.vue";
// import Tree from "./test/Tree.vue";
// import Collapse from "./test/Collapse.vue";
// import Carousel from "./test/Carousel.vue";

const routes = [
  {
    path: "/",
    component: ComponentList,
  },
  // {
  //   path: "/button",
  //   component: Button,
  //   name: "Button",
  // },
  // {
  //   path: "/input",
  //   component: Input,
  //   name: "Input",
  // },
  // {
  //   path: "/Radio",
  //   component: Radio,
  //   name: "Radio",
  // },
  // {
  //   path: "/Checkbox",
  //   component: Checkbox,
  //   name: "Checkbox",
  // },
  // {
  //   path: "/Switch",
  //   component: Switch,
  //   name: "SwitchTest",
  // },
  // {
  //   path: "/Form",
  //   component: Form,
  //   name: "Form",
  // },
  // {
  //   path: "/Pagination",
  //   component: Pagination,
  //   name: "Pagination",
  // },
  // {
  //   path: "/Notice",
  //   component: Notice,
  //   name: "Notice",
  // },
  // {
  //   path: "/Tree",
  //   component: Tree,
  //   name: "Tree",
  // },
  // {
  //   path: "/Collapse",
  //   component: Collapse,
  //   name: "Collapse",
  // },
  // {
  //   path: "/Carousel",
  //   component: Carousel,
  //   name: "Carousel",
  // },
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});

export default router;
