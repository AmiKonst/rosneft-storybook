import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aB as createBaseVNode, ax as createBlock, aK as createCommentVNode, aM as normalizeClass, aG as toDisplayString, aD as Fragment, aE as renderList, aV as Teleport, aA as createVNode, aW as withModifiers, aH as ref, aN as reactive, aY as computed, aI as onMounted, aX as watch, aZ as placeOptionList, ay as openBlock, aL as renderSlot, aS as withDirectives, aP as createTextVNode, a_ as vShow } from './vendor-vzr5K0L1.js';
import { B as Button } from './LocalSettings-CmLMbIsG.js';

const _sfc_main = {
  __name: 'Select',
  props: {
    isError: { type: Boolean, default: false },
    icon: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: [Number, String, Boolean], default: null },
    position: { type: Number, default: 0 },
    optionList: {
        type: Array,
        default: () => []
    },
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true }
},
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const field = ref(null);

const props = __props;

const data = reactive({
    selected: null,
    isOpenDropdown: false
});

const valueTitle = computed(() =>
    data.selected === null ? '' : props.optionList.find((option) => option.code === data.selected)?.name
);

const valueIcon = computed(() =>
    data.selected === null ? '' : props.optionList.find((option) => option.code === data.selected)?.icon
);

const emit = __emit;

const clean = () => {
    field.value.value = '';
    data.selected = null;
    emit('change', {
        name: props.name,
        value: null,
        position: props.position
    });
};

const toggleOpened = () => {
    if (props.disabled) {
        return;
    }

    data.isOpenDropdown = !data.isOpenDropdown;

    if (!data.isOpenDropdown) {
        return false;
    }

    placeOptionList({
        container: field.value,
        options: '.select-options-list'
    });
};

onMounted(() => {
    data.selected = props.value;
});

watch(
    () => props.value,
    (value) => {
        if (value === null && data.selected) {
            data.selected = null;
            return;
        }

        data.selected = value;
    }
);

const hide = () => (data.isOpenDropdown = false);

const onChoose = (event, payload) => {
    data.selected = payload.code;
    data.isOpenDropdown = false;

    emit('change', {
        name: props.name,
        value: payload.code,
        position: props.position
    });
};

const __returned__ = { field, props, data, valueTitle, valueIcon, emit, clean, toggleOpened, hide, onChoose, computed, onMounted, reactive, ref, watch, Button, get placeOptionList() { return placeOptionList } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = ["placeholder", "value", "disabled"];
const _hoisted_2 = ["title"];
const _hoisted_3 = {
  key: 1,
  class: "select-options-list"
};
const _hoisted_4 = ["value", "onClick"];
const _hoisted_5 = { class: "actions-block" };
const _hoisted_6 = { class: "error" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
            $setup.props.icon ? 'with-icon' : '',
            $setup.props.isError ? 'with-error' : '',
            $setup.data.isOpenDropdown ? 'opened' : '',
            'select-field'
        ])
  }, [
    createBaseVNode("div", { onClick: $setup.toggleOpened }, [
      createBaseVNode("input", {
        ref: "field",
        autocomplete: "off",
        placeholder: $setup.props.placeholder,
        value: $setup.valueTitle,
        disabled: $setup.props.disabled,
        class: normalizeClass({
                    'without-placeholder': !$setup.props.placeholder,
                    clearable: $setup.props.clearable && $setup.data.selected
                })
      }, null, 10 /* CLASS, PROPS */, _hoisted_1),
      createBaseVNode("span", {
        class: "placeholder",
        title: $setup.props.placeholder
      }, toDisplayString($setup.props.placeholder), 9 /* TEXT, PROPS */, _hoisted_2),
      ($setup.props.icon)
        ? (openBlock(), createBlock(_component_Icon, {
            key: 0,
            icon: $setup.valueIcon || $setup.props.icon
          }, null, 8 /* PROPS */, ["icon"]))
        : createCommentVNode("v-if", true),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        ($setup.data.isOpenDropdown)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "options-background",
              onClick: $setup.toggleOpened
            }))
          : createCommentVNode("v-if", true),
        ($setup.data.isOpenDropdown)
          ? (openBlock(), createElementBlock("ul", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.optionList, (option) => {
                return (openBlock(), createElementBlock("li", {
                  value: option.code,
                  key: option.code,
                  onClick: withModifiers($event => ($setup.onChoose($event, option)), ["stop"]),
                  class: normalizeClass({ selected: $setup.data.selected === option.code })
                }, [
                  renderSlot(_ctx.$slots, "default", { option: option }, () => [
                    createTextVNode(toDisplayString(option.name), 1 /* TEXT */)
                  ]),
                  withDirectives(createVNode(_component_Icon, { icon: "check" }, null, 512 /* NEED_PATCH */), [
                    [vShow, $setup.data.selected === option.code]
                  ])
                ], 10 /* CLASS, PROPS */, _hoisted_4))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : createCommentVNode("v-if", true)
      ])),
      createBaseVNode("div", _hoisted_5, [
        ($setup.props.clearable && $setup.data.selected)
          ? (openBlock(), createBlock($setup["Button"], {
              key: 0,
              tabindex: "-1",
              icon: "clean",
              class: "input-action minimal small",
              onClick: withModifiers($setup.clean, ["stop"])
            }))
          : createCommentVNode("v-if", true),
        createVNode(_component_Icon, {
          icon: "arrow-down",
          class: "arrow-down"
        })
      ])
    ]),
    createBaseVNode("span", _hoisted_6, toDisplayString($setup.props.error), 1 /* TEXT */)
  ], 2 /* CLASS */))
}
_sfc_main.__file = 'src/components/ui/Select.vue';
const Select = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Select.vue"]]);

export { Select as S };
