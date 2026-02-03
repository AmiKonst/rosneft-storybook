import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aK as createCommentVNode, aB as createBaseVNode, aG as toDisplayString, aA as createVNode, aM as normalizeClass, ay as openBlock, ax as createBlock, az as withCtx } from './vendor-vzr5K0L1.js';
import { L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main$1 = {
  __name: 'Loader',
  props: {
    title: { type: String, default: '' }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1$1 = { key: 0 };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass({ 'with-title': $props.title })
  }, [
    ($props.title)
      ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString($setup.props.title), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createBaseVNode("label", null, [
      createVNode(_component_Icon, { icon: "happy" }),
      _cache[0] || (_cache[0] = createBaseVNode("span", null, null, -1 /* CACHED */))
    ])
  ], 2 /* CLASS */))
}
_sfc_main$1.__file = 'src/components/ui/Loader.vue';
const Loader = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-b0983379"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Loader.vue"]]);

const _sfc_main = {
  __name: 'Loader.story',
  setup(__props, { expose: __expose }) {
  __expose();

    
const __returned__ = { Loader, LocalSettings };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "story-wrapper" };
const _hoisted_2 = { class: "story-wrapper" };
const _hoisted_3 = { class: "story-wrapper" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Loader Лоадер" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Вариант по умолчанию: только анимация загрузки без текста "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["Loader"])
          ])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С заголовком: добавляется текст и смещение вверх "),
      createVNode(_component_Variant, { title: "С заголовком" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["Loader"], { title: "Загрузка данных..." })
          ])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Лёгкий вариант (light): без текста и иконки "),
      createVNode(_component_Variant, { title: "Light модификатор" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["Loader"], { class: "light" })
          ])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Loader.story.vue';
const Loader_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-d6799046"],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Loader.story.vue"]]);

export { Loader_story as default };
