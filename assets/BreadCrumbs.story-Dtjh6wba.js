import { av as _export_sfc, aC as createElementBlock, aK as createCommentVNode, aD as Fragment, aE as renderList, ay as openBlock, aB as createBaseVNode, aG as toDisplayString, aw as resolveComponent, ax as createBlock, az as withCtx, aA as createVNode } from './vendor-vzr5K0L1.js';
import { L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main$1 = {
  __name: 'BreadCrumbs',
  props: {
    items: { type: [Array, null], default: null }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { key: 0 };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return ($setup.props.items)
    ? (openBlock(), createElementBlock("ul", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.items, (item) => {
          return (openBlock(), createElementBlock("li", {
            key: item.property
          }, [
            createBaseVNode("span", null, toDisplayString(item.property), 1 /* TEXT */),
            createBaseVNode("b", null, toDisplayString(item.name), 1 /* TEXT */)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ]))
    : createCommentVNode("v-if", true)
}
_sfc_main$1.__file = 'src/components/ui/BreadCrumbs.vue';
const BreadCrumbs = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-4c54ae0c"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/BreadCrumbs.vue"]]);

const _sfc_main = {
  __name: 'BreadCrumbs.story',
  setup(__props, { expose: __expose }) {
  __expose();

    const defaultItems = [
        { property: 'Категория', name: 'Электроника' },
        { property: 'Подкатегория', name: 'Ноутбуки' },
        { property: 'Бренд', name: 'ASUS' }
    ];

    const longItems = [
        { property: 'Раздел каталога', name: 'Очень длинное наименование подкатегории, выходящее за рамки одной строки' },
        { property: 'Производитель', name: 'Технологическая компания с длинным названием' }
    ];

    const specialItems = [
        { property: 'Тип', name: 'Смартфон & Планшет' },
        { property: 'Размер', name: '13.3"' },
        { property: 'Символы', name: '<test> & "quotes"' }
    ];

const __returned__ = { defaultItems, longItems, specialItems, BreadCrumbs, LocalSettings };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/BreadCrumbs Хлебные крошки" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Пример: стандартный список хлебных крошек "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["BreadCrumbs"], { items: $setup.defaultItems })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/BreadCrumbs.story.vue';
const BreadCrumbs_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-945608c6"],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/BreadCrumbs.story.vue"]]);

export { BreadCrumbs_story as default };
