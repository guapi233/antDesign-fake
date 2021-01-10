import { shallowMount } from "@vue/test-utils";
import Button from "../../components/Button";

describe("UI测试", () => {
  it("基础结构测试", () => {
    const wrapper = shallowMount(Button);

    expect(wrapper).toMatchSnapshot();
  });

  it("不同种类的按钮测试", () => {
    const types = ["primary", "success", "info", "danger"];

    for (let type of types) {
      const wrapper = shallowMount(Button, {
        props: {
          type,
        },
      });

      expect(wrapper).toMatchSnapshot();
    }
  });

  it("朴素按钮测试", () => {
    const wrapper = shallowMount(Button, {
      props: { plain: true },
    });

    expect(wrapper).toMatchSnapshot();
  });
});

describe("功能测试", () => {
  it("点击测试", () => {
    const wrapper = shallowMount(Button);

    wrapper.trigger("click");
    expect(wrapper.emitted().c).toBeTruthy();
  });
});
