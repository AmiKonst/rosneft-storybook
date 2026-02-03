import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aK as createCommentVNode, aB as createBaseVNode, ax as createBlock, aP as createTextVNode, aG as toDisplayString, aM as normalizeClass, aN as reactive, aX as watch, ay as openBlock } from './vendor-rawnQjOC.js';

const _sfc_main = {
  __name: 'Toggler',
  props: {
    disabled: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
    name: { type: String, default: '' },
    icon: { type: [String, null], default: null }
},
  emits: ['onClick'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;

const emit = __emit;

const data = reactive({
    checked: props.checked
});

const onClick = () => {
    if (props.disabled) {
        return;
    }
    data.checked = !data.checked;
    emit('onClick', {
        name: props.name,
        value: data.checked
    });
};

watch(
    () => props.checked,
    () => {
        data.checked = props.checked;
    },
    { deep: true }
);

const __returned__ = { props, emit, data, onClick, reactive, watch };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["title"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    onClick: $setup.onClick,
    class: normalizeClass({ disabled: $setup.props.disabled })
  }, [
    ($setup.props.inline)
      ? (openBlock(), createElementBlock("span", _hoisted_1, [
          ($setup.props.icon)
            ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                icon: $setup.props.icon
              }, null, 8 /* PROPS */, ["icon"]))
            : createCommentVNode("v-if", true),
          createTextVNode(" " + toDisplayString($setup.props.name), 1 /* TEXT */)
        ]))
      : createCommentVNode("v-if", true),
    createBaseVNode("button", {
      class: normalizeClass({ checked: $setup.props.disabled ? $setup.props.checked : $setup.data.checked, inline: $setup.props.inline }),
      type: "button",
      title: $setup.props.name
    }, [
      (!$setup.props.inline)
        ? (openBlock(), createElementBlock("span", _hoisted_3, [
            ($setup.props.icon)
              ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  icon: $setup.props.icon
                }, null, 8 /* PROPS */, ["icon"]))
              : createCommentVNode("v-if", true),
            createTextVNode(" " + toDisplayString($setup.props.name), 1 /* TEXT */)
          ]))
        : createCommentVNode("v-if", true),
      _cache[0] || (_cache[0] = createBaseVNode("i", null, null, -1 /* CACHED */)),
      (!$setup.props.inline)
        ? (openBlock(), createElementBlock("span", _hoisted_4, [
            ($setup.props.icon)
              ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  icon: $setup.props.icon
                }, null, 8 /* PROPS */, ["icon"]))
              : createCommentVNode("v-if", true),
            createTextVNode(" " + toDisplayString($setup.props.name), 1 /* TEXT */)
          ]))
        : createCommentVNode("v-if", true)
    ], 10 /* CLASS, PROPS */, _hoisted_2)
  ], 2 /* CLASS */))
}
_sfc_main.__file = 'src/components/ui/Toggler.vue';
const Toggler = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-b66b2827"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Toggler.vue"]]);

export { Toggler as T };
