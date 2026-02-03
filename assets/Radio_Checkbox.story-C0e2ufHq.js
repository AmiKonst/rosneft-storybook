import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, ay as openBlock, aA as createVNode, aB as createBaseVNode } from './vendor-rawnQjOC.js';

const _sfc_main = {
  __name: 'Radio&Checkbox.story',
  setup(__props, { expose: __expose }) {
  __expose();

// без скрипта

const __returned__ = {  };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "Assets/Radio и Checkbox" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Checkboxes" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "demo-group" }, [
            createBaseVNode("div", { class: "custom-input" }, [
              createBaseVNode("input", {
                type: "checkbox",
                id: "checkbox1",
                checked: ""
              }),
              createBaseVNode("label", { for: "checkbox1" }, "Чекбокс 1 (выбран)")
            ]),
            createBaseVNode("div", { class: "custom-input" }, [
              createBaseVNode("input", {
                type: "checkbox",
                id: "checkbox2"
              }),
              createBaseVNode("label", { for: "checkbox2" }, "Чекбокс 2")
            ]),
            createBaseVNode("div", { class: "custom-input" }, [
              createBaseVNode("input", {
                type: "checkbox",
                id: "checkbox3",
                disabled: ""
              }),
              createBaseVNode("label", { for: "checkbox3" }, "Чекбокс 3 (disabled)")
            ])
          ], -1 /* CACHED */)
        ])),
        _: 1 /* STABLE */,
        __: [0]
      }),
      createVNode(_component_Variant, { title: "Radio buttons" }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createBaseVNode("div", { class: "demo-group" }, [
            createBaseVNode("div", { class: "custom-input" }, [
              createBaseVNode("input", {
                type: "radio",
                id: "radio1",
                name: "demo-radio",
                checked: ""
              }),
              createBaseVNode("label", { for: "radio1" }, "Радио 1 (выбран)")
            ]),
            createBaseVNode("div", { class: "custom-input" }, [
              createBaseVNode("input", {
                type: "radio",
                id: "radio2",
                name: "demo-radio"
              }),
              createBaseVNode("label", { for: "radio2" }, "Радио 2")
            ]),
            createBaseVNode("div", { class: "custom-input" }, [
              createBaseVNode("input", {
                type: "radio",
                id: "radio3",
                name: "demo-radio-disabled",
                disabled: ""
              }),
              createBaseVNode("label", { for: "radio3" }, "Радио 3 (disabled)")
            ])
          ], -1 /* CACHED */)
        ])),
        _: 1 /* STABLE */,
        __: [1]
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/assets/Radio&Checkbox.story.vue';
const Radio_Checkbox_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-097c2c90"],['__file',"C:/MarineTech/rosneft-front/src/stories/assets/Radio&Checkbox.story.vue"]]);

export { Radio_Checkbox_story as default };
