import Vue from "vue";
import Notice from "./Notice.vue";

// 创建Notice组件构造器
const NoticeConstructor = Vue.extend(Notice);

function notice(options) {
  // 实例化
  const instance = new NoticeConstructor({
    data: options,
  });

  // 实例化成DOM
  instance.$mount();

  // 挂载到DOM数
  document.body.appendChild(instance.$el);

  return instance;
}

// 遗留问题：无法向函数绑定静态属性
// notice.name = "$notice";

export default {
  method: notice,
  name: "$notice",
};
