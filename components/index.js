import Button from "./Button";
import Dialog from "./Dialog";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import RadioGroup from "./Radio-group";
import Switch from "./Switch";
import CheckboxGroup from "./Checkbox-group";
import FormItem from "./Form-item";
import Form from "./Form";
import Pagination from "./Pagination";
import Tree from "./Tree.vue";

import notice from "./notice.js";
import "./fonts/iconfont.css";

// 组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  FormItem,
  Form,
  Pagination,
  Tree,
];

// 全局方法列表
const globalMethods = [notice];

// 安装函数
const install = function(Vue) {
  // 注册全局组件
  components.forEach((item) => {
    Vue.component(item.name, item);
  });

  // 注册全局方法
  globalMethods.forEach((item) => {
    Vue.prototype[item.name] = item.method;
  });
};

// 如果为直接引入文件，则省去Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
