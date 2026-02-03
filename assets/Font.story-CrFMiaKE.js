import { av as _export_sfc, aw as resolveComponent, ax as createBlock, ay as openBlock, az as withCtx, aA as createVNode, aB as createBaseVNode, aC as createElementBlock, aD as Fragment, aE as renderList, aF as normalizeStyle, aG as toDisplayString, aH as ref, aI as onMounted } from './vendor-rawnQjOC.js';

const _sfc_main = {
  __name: 'Font.story',
  setup(__props, { expose: __expose }) {
  __expose();

const fontTokens = ref({});

function collectFontVariables() {
    const vars = {};
    for (const sheet of document.styleSheets) {
        try {
            for (const rule of sheet.cssRules) {
                if (rule.selectorText === ':root') {
                    const style = rule.style;
                    for (let i = 0; i < style.length; i++) {
                        const name = style[i];
                        if (name.includes('font')) {
                            const value = style.getPropertyValue(name).trim();
                            vars[name] = value;
                        }
                    }
                }
            }
        } catch (e) {
            // Игнорировать стили с CORS
        }
    }
    return vars
}

onMounted(() => {
    fontTokens.value = collectFontVariables();
});

const __returned__ = { fontTokens, collectFontVariables, ref, onMounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "list" };
const _hoisted_2 = { class: "meta" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "Assets/Шрифтовые токены" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Демонстрация шрифтов" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.fontTokens, (value, name) => {
              return (openBlock(), createElementBlock("div", {
                class: "font-item",
                key: name,
                style: normalizeStyle({ font: value })
              }, [
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "preview" }, "Съешь ещё этих мягких французских булок...", -1 /* CACHED */)),
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("code", null, toDisplayString(name), 1 /* TEXT */),
                  createBaseVNode("span", null, toDisplayString(value), 1 /* TEXT */)
                ])
              ], 4 /* STYLE */))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/assets/Font.story.vue';
const Font_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-688f80c9"],['__file',"C:/MarineTech/rosneft-front/src/stories/assets/Font.story.vue"]]);

export { Font_story as default };
