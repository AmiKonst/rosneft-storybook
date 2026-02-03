import { B as Button, L as LocalSettings } from './LocalSettings-CPPAeydY.js';
import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aA as createVNode, aB as createBaseVNode, aL as renderSlot, aK as createCommentVNode, aG as toDisplayString, aM as normalizeClass, ay as openBlock, ax as createBlock, az as withCtx, aO as logEvent } from './vendor-rawnQjOC.js';

const _sfc_main$1 = {
  __name: 'EmptyLabel',
  props: {
    createButtonShowed: { type: Boolean, default: false },
    createButtonTitle: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    horizontal: { type: Boolean, default: true }
},
  emits: ['onClick'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;
const emit = __emit;

const onClick = () => {
    emit('onClick');
};

const __returned__ = { props, emit, onClick, Button };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "description"
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass({
        'with-title': $setup.props.title,
        light: !$setup.props.createButtonShowed,
        'horizontal': $setup.props.horizontal
    })
  }, [
    createVNode(_component_Icon, { icon: "empty-products" }),
    createBaseVNode("span", null, [
      ($setup.props.title)
        ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString($setup.props.title), 1 /* TEXT */))
        : createCommentVNode("v-if", true),
      ($setup.props.description)
        ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($setup.props.description), 1 /* TEXT */))
        : createCommentVNode("v-if", true)
    ]),
    renderSlot(_ctx.$slots, "button", {}, () => [
      createVNode($setup["Button"], {
        onClick: $setup.onClick,
        title: $setup.props.horizontal ? $props.createButtonTitle : null,
        name: !$setup.props.horizontal ? $props.createButtonTitle : null,
        icon: "plus",
        class: "secondary border"
      }, null, 8 /* PROPS */, ["title", "name"])
    ], true)
  ], 2 /* CLASS */))
}
_sfc_main$1.__file = 'src/components/ui/EmptyLabel.vue';
const EmptyLabel = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-8c96e83a"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/EmptyLabel.vue"]]);

const _sfc_main = {
  __name: 'EmptyLabel.story',
  setup(__props, { expose: __expose }) {
  __expose();

    function handleClick(source) {
        logEvent('onClick', { source, timestamp: Date.now() });
    }

const __returned__ = { handleClick, EmptyLabel, Button, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/EmptyLabel Загружка на пустоту" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Вариант по умолчанию с заголовком и описанием "),
      createVNode(_component_Variant, { title: "По умолчанию с кнопкой, заголовком и описанием" }, {
        default: withCtx(() => [
          createVNode($setup["EmptyLabel"], {
            title: "Нет данных",
            description: "Добавьте новый элемент, чтобы начать работу",
            createButtonShowed: true,
            createButtonTitle: "Создать",
            onOnClick: _cache[0] || (_cache[0] = $event => ($setup.handleClick('default')))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Вариант с выключенной кнопкой (light класс) "),
      createVNode(_component_Variant, { title: "Без кнопки" }, {
        default: withCtx(() => [
          createVNode($setup["EmptyLabel"], {
            title: "Пусто",
            description: "Нечего отобразить",
            createButtonShowed: false,
            onOnClick: _cache[1] || (_cache[1] = $event => ($setup.handleClick('light')))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Вариант с вертикальным отображением "),
      createVNode(_component_Variant, { title: "Вертикальный режим (по умолчанию)" }, {
        default: withCtx(() => [
          createVNode($setup["EmptyLabel"], {
            title: "Здесь ничего нет",
            description: "Попробуйте создать новый",
            createButtonShowed: true,
            horizontal: false,
            createButtonTitle: "Добавить",
            onOnClick: _cache[2] || (_cache[2] = $event => ($setup.handleClick('vertical')))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Слотовая кнопка "),
      createVNode(_component_Variant, { title: "Слот кастомной кнопки" }, {
        default: withCtx(() => [
          createVNode($setup["EmptyLabel"], {
            title: "Слот кнопки",
            description: "Кнопка вставлена через слот",
            createButtonShowed: true,
            horizontal: false,
            onOnClick: _cache[4] || (_cache[4] = $event => ($setup.handleClick('slot')))
          }, {
            button: withCtx(() => [
              createVNode($setup["Button"], {
                icon: "plus",
                name: "Новая сущность",
                onClick: _cache[3] || (_cache[3] = $event => ($setup.handleClick('slot'))),
                class: "primary large"
              })
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
_sfc_main.__file = 'src/stories/ui/EmptyLabel.story.vue';
const EmptyLabel_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/EmptyLabel.story.vue"]]);

export { EmptyLabel_story as default };
