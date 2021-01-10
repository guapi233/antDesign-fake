import { defineComponent, renderSlot, computed, PropType } from "vue";
import "./index.scss";

const CButton = defineComponent({
  name: "CButton",
  props: {
    // 按钮类型
    type: {
      type: String as PropType<string>,
      default: "default",
    },
    // 是否为朴素按钮
    plain: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // 是否为圆角按钮
    round: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // 是否为原形按钮
    circle: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // 是否为icon按钮
    icon: {
      type: String as PropType<string>,
      default: "",
    },
    // 是否开启禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // 按钮加载状态
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // 适配父元素宽度
    block: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // 幽灵按钮
    ghost: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // 按钮尺寸
    size: {
      type: String as PropType<string>,
      default: "default",
    },
  } as Prop,
  setup(props, { emit, slots }) {
    const fullWidth = computed(() => {
      return props.block ? `width: "100%";` : "";
    });

    const showLoading = computed(() => {
      return props.loading ? (
        <div class="icon- loading-circle">
          <i class="icon-loading"></i>
        </div>
      ) : (
        ""
      );
    });
    const showIcon = computed(() => {
      return props.icon && !props.loading ? (
        <i class={`icon-${props.icon}`}></i>
      ) : (
        ""
      );
    });

    const handleClick = (event: Event) => {
      !props.loading && emit("c", event);
    };

    const classList = [
      "c-button",
      `c-button--${props.type}`,
      `c-button--size__${props.size}`,
      {
        "is-plain": props.plain,
        "is-ghost": props.ghost,
        "is-round": props.round,
        "is-circle": props.circle,
        "is-disabled": props.disabled || props.loading,
      },
    ];

    return () => {
      return (
        <button
          class={classList}
          style={fullWidth.value}
          disabled={props.disabled}
          onClick={handleClick}
        >
          {showLoading.value}
          {showIcon.value}

          {renderSlot(slots, "default")}
        </button>
      );
    };
  },
});

export default CButton;
