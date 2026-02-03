import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aD as Fragment, aE as renderList, aN as reactive, aX as watch, ay as openBlock, aM as normalizeClass, ax as createBlock, aK as createCommentVNode, aB as createBaseVNode, aG as toDisplayString } from './vendor-rawnQjOC.js';

const _sfc_main = {
  __name: 'Menu',
  props: {
    value: { type: String, default: '' },
    items: { type: Array, default: () => [] }
},
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;
const props = __props;

const data = reactive({
    value: props.value || (props.items.length ? props.items[0].code : '')
});

const setActive = (item) => {
    if (item.disabled) {
        return;
    }

    data.value = item.code;
    emit('change', data.value);
};

watch(
    () => props.value,
    (newValue, oldValue) => {
        if (newValue && oldValue) {
            data.value = props.value;
        }
    },
    { deep: true }
);

const __returned__ = { emit, props, data, setActive, reactive, watch };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = ["onClick"];
const _hoisted_2 = { key: 1 };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("ul", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
      return (openBlock(), createElementBlock("li", {
        class: normalizeClass({ active: $setup.data.value === item.code, disabled: item.disabled }),
        key: item.code,
        onClick: $event => ($setup.setActive(item))
      }, [
        (item.icon)
          ? (openBlock(), createBlock(_component_Icon, {
              key: 0,
              icon: item.icon
            }, null, 8 /* PROPS */, ["icon"]))
          : createCommentVNode("v-if", true),
        createBaseVNode("span", null, toDisplayString(item.name), 1 /* TEXT */),
        (item.count)
          ? (openBlock(), createElementBlock("small", _hoisted_2, toDisplayString(item.count), 1 /* TEXT */))
          : createCommentVNode("v-if", true)
      ], 10 /* CLASS, PROPS */, _hoisted_1))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}
_sfc_main.__file = 'src/components/ui/Menu.vue';
const Menu = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-581b2b2a"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Menu.vue"]]);

export { Menu as M };
