import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aH as ref, aI as onMounted, ay as openBlock, aA as createVNode, aC as createElementBlock, aD as Fragment, aE as renderList, aB as createBaseVNode, aG as toDisplayString, aF as normalizeStyle } from './vendor-vzr5K0L1.js';
import { L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main = {
  __name: 'Token.story',
  setup(__props, { expose: __expose }) {
  __expose();

const groupedColorTokens = ref({});

const collectAllCSSVariables = () => {
    const vars = {};
    for (const sheet of document.styleSheets) {
        try {
            for (const rule of sheet.cssRules) {
                if (rule.selectorText === ':root') {
                    const style = rule.style;
                    for (let i = 0; i < style.length; i++) {
                        const name = style[i];
                        if (
                            name.startsWith('--') &&
                            !['--color-scheme', 'filter', 'font'].some(item =>
                                name.toLowerCase().includes(item)
                            )
                        ) {
                            vars[name] = style.getPropertyValue(name).trim();
                        }
                    }
                }
            }
        } catch (e) {
            // Игнорировать CORS-проблемные стили
        }
    }
    return vars
};

const groupTokens = (tokens) => {
    const grouped = {};
    for (const [name, value] of Object.entries(tokens)) {
        // Получаем первую часть токена (после -- и до первого "-")
        const key = name.replace(/^--/, '').split('-')[0];
        const groupName = key.charAt(0).toUpperCase() + key.slice(1);
        if (!grouped[groupName]) {
            grouped[groupName] = {};
        }
        grouped[groupName][name] = value;
    }
    return grouped
};

onMounted(() => {
    const tokens = collectAllCSSVariables();
    groupedColorTokens.value = groupTokens(tokens);
});

const __returned__ = { groupedColorTokens, collectAllCSSVariables, groupTokens, ref, onMounted, LocalSettings };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "group-title" };
const _hoisted_2 = { class: "grid" };
const _hoisted_3 = { class: "label" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "Assets/Цветовые токены" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createVNode(_component_Variant, { title: "Токены" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.groupedColorTokens, (tokens, group) => {
            return (openBlock(), createElementBlock("div", {
              key: group,
              class: "group"
            }, [
              createBaseVNode("h3", _hoisted_1, toDisplayString(group), 1 /* TEXT */),
              createBaseVNode("div", _hoisted_2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(tokens, (value, name) => {
                  return (openBlock(), createElementBlock("div", {
                    class: "token",
                    key: name
                  }, [
                    createBaseVNode("div", {
                      class: "swatch",
                      style: normalizeStyle({ backgroundColor: `var(${name})` })
                    }, null, 4 /* STYLE */),
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("code", null, toDisplayString(name), 1 /* TEXT */),
                      createBaseVNode("span", null, toDisplayString(value), 1 /* TEXT */)
                    ])
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/assets/Token.story.vue';
const Token_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-495184f8"],['__file',"C:/MarineTech/rosneft-front/src/stories/assets/Token.story.vue"]]);

export { Token_story as default };
