import { L as LocalSettings, B as Button, K as KebabMenu } from './LocalSettings-CmLMbIsG.js';
import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aH as ref, aO as logEvent, ay as openBlock, aA as createVNode, aK as createCommentVNode, aB as createBaseVNode, aC as createElementBlock, aD as Fragment, aE as renderList, aG as toDisplayString } from './vendor-vzr5K0L1.js';

const _sfc_main = {
  __name: 'KebabMenu.story',
  setup(__props, { expose: __expose }) {
  __expose();

    const theme = ref('light');
    const themes = ['light', 'dark', 'system'];

const __returned__ = { theme, themes, KebabMenu, Button, LocalSettings, ref, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = ["onClick"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/KebabMenu Кебаб меню" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Простой пример с иконкой и двумя пунктами "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["KebabMenu"], {
            leftAuto: false,
            rightAuto: true,
            onToggle: _cache[0] || (_cache[0] = $event => ($setup.logEvent('toggle', $event)))
          }, {
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_Icon, { icon: "tile-service" }),
                  _cache[5] || (_cache[5] = createBaseVNode("span", null, "Первый пункт", -1 /* CACHED */))
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_Icon, { icon: "tile-service" }),
                  _cache[6] || (_cache[6] = createBaseVNode("span", null, "Второй пункт", -1 /* CACHED */))
                ])
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Вторичный стиль (secondary) "),
      createVNode(_component_Variant, { title: "С кнопкой в стиле secondary" }, {
        default: withCtx(() => [
          createVNode($setup["KebabMenu"], {
            icon: "tile-service",
            secondary: true,
            leftAuto: false,
            rightAuto: true,
            onToggle: _cache[1] || (_cache[1] = $event => ($setup.logEvent('toggle', $event)))
          }, {
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_Icon, { icon: "tile-service" }),
                  _cache[7] || (_cache[7] = createBaseVNode("span", null, "Опция 1", -1 /* CACHED */))
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_Icon, { icon: "tile-service" }),
                  _cache[8] || (_cache[8] = createBaseVNode("span", null, "Опция 2", -1 /* CACHED */))
                ])
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кнопка минимального стиля "),
      createVNode(_component_Variant, { title: "Минимальный стиль кнопки" }, {
        default: withCtx(() => [
          createVNode($setup["KebabMenu"], {
            minimal: true,
            leftAuto: false,
            rightAuto: true,
            onToggle: _cache[2] || (_cache[2] = $event => ($setup.logEvent('toggle', $event)))
          }, {
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_Icon, { icon: "tile-service" }),
                  _cache[9] || (_cache[9] = createBaseVNode("span", null, "Элемент 1", -1 /* CACHED */))
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_Icon, { icon: "tile-service" }),
                  _cache[10] || (_cache[10] = createBaseVNode("span", null, "Элемент 2", -1 /* CACHED */))
                ])
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Маленькая иконка + secondary стиль "),
      createVNode(_component_Variant, { title: "Кнопка small + secondary" }, {
        default: withCtx(() => [
          createVNode($setup["KebabMenu"], {
            icon: "tile-service",
            secondary: true,
            small: true,
            leftAuto: false,
            rightAuto: true,
            onToggle: _cache[3] || (_cache[3] = $event => ($setup.logEvent('toggle', $event)))
          }, {
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createVNode(_component_Icon, { icon: "tile-service" }),
                  _cache[11] || (_cache[11] = createBaseVNode("span", null, "Опция A", -1 /* CACHED */))
                ]),
                createBaseVNode("li", null, [
                  createVNode(_component_Icon, { icon: "tile-service" }),
                  _cache[12] || (_cache[12] = createBaseVNode("span", null, "Опция B", -1 /* CACHED */))
                ])
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кастомный слот trigger "),
      createVNode(_component_Variant, { title: "Кастомная кнопка через слот trigger" }, {
        default: withCtx(() => [
          createVNode($setup["KebabMenu"], {
            secondary: true,
            leftAuto: false,
            rightAuto: true,
            onToggle: _cache[4] || (_cache[4] = $event => ($setup.logEvent('toggle', $event)))
          }, {
            trigger: withCtx(() => [
              createVNode($setup["Button"], { name: 'Кебаб' })
            ]),
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.themes, (item) => {
                  return createBaseVNode("li", {
                    key: item,
                    onClick: $event => ($setup.theme = item)
                  }, [
                    (item === $setup.theme)
                      ? (openBlock(), createElementBlock("span", _hoisted_2, [
                          createBaseVNode("b", null, toDisplayString(item), 1 /* TEXT */)
                        ]))
                      : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(item), 1 /* TEXT */))
                  ], 8 /* PROPS */, _hoisted_1)
                }), 64 /* STABLE_FRAGMENT */))
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/KebabMenu.story.vue';
const KebabMenu_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/KebabMenu.story.vue"]]);

export { KebabMenu_story as default };
