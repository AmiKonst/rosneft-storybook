import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, ax as createBlock, aK as createCommentVNode, aG as toDisplayString, ay as openBlock, az as withCtx, aO as logEvent, aA as createVNode } from './vendor-vzr5K0L1.js';
import { L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main$1 = {
  __name: 'Link',
  props: {
    target: { type: String, default: '_blank' },
    href: { type: String, default: '' },
    icon: { type: String, default: '' },
    name: { type: String, default: '' }
},
  emits: ['onClick'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;
const emit = __emit;

const onClick = () => {
    emit('onClick');
};

const __returned__ = { props, emit, onClick };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = ["href", "target"];
const _hoisted_2 = { key: 1 };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("a", {
    href: $setup.props.href,
    target: $setup.props.target
  }, [
    ($setup.props.icon)
      ? (openBlock(), createBlock(_component_Icon, {
          key: 0,
          icon: $setup.props.icon
        }, null, 8 /* PROPS */, ["icon"]))
      : createCommentVNode("v-if", true),
    ($setup.props.name)
      ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($setup.props.name), 1 /* TEXT */))
      : createCommentVNode("v-if", true)
  ], 8 /* PROPS */, _hoisted_1))
}
_sfc_main$1.__file = 'src/components/ui/Link.vue';
const Link = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-d41d871c"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Link.vue"]]);

const _sfc_main = {
  __name: 'Link.story',
  setup(__props, { expose: __expose }) {
  __expose();

    
const __returned__ = { Link, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Link Компонент" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Базовая ссылка без иконки "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Link"], {
            href: `./${Math.random() * 1000}`,
            name: "Ссылка по умолчанию",
            class: "link",
            onOnClick: _cache[0] || (_cache[0] = $event => ($setup.logEvent('click', $event)))
          }, null, 8 /* PROPS */, ["href"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Отключённая ссылка "),
      createVNode(_component_Variant, { title: "Отключено (class='link', disabled)" }, {
        default: withCtx(() => [
          createVNode($setup["Link"], {
            href: `./${Math.random() * 1000}`,
            name: "Недоступная ссылка",
            class: "link",
            disabled: "",
            onOnClick: _cache[1] || (_cache[1] = $event => ($setup.logEvent('click', $event)))
          }, null, 8 /* PROPS */, ["href"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Ссылка с иконкой "),
      createVNode(_component_Variant, { title: "С иконкой (class='link')" }, {
        default: withCtx(() => [
          createVNode($setup["Link"], {
            href: `./${Math.random() * 1000}`,
            name: "С иконкой",
            icon: "tile-service",
            class: "link",
            onOnClick: _cache[2] || (_cache[2] = $event => ($setup.logEvent('click', $event)))
          }, null, 8 /* PROPS */, ["href"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Иконка справа (reverse) "),
      createVNode(_component_Variant, { title: "С иконкой справа (class='link reverse')" }, {
        default: withCtx(() => [
          createVNode($setup["Link"], {
            href: `./${Math.random() * 1000}`,
            name: "Иконка справа",
            icon: "tile-service",
            class: "link reverse",
            onOnClick: _cache[3] || (_cache[3] = $event => ($setup.logEvent('click', $event)))
          }, null, 8 /* PROPS */, ["href"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Отключённая ссылка с иконкой "),
      createVNode(_component_Variant, { title: "Отключена + reverse + иконка" }, {
        default: withCtx(() => [
          createVNode($setup["Link"], {
            href: `./${Math.random() * 1000}`,
            name: "Недоступно",
            icon: "tile-service",
            class: "link reverse",
            disabled: "",
            onOnClick: _cache[4] || (_cache[4] = $event => ($setup.logEvent('click', $event)))
          }, null, 8 /* PROPS */, ["href"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Посещённая ссылка "),
      createVNode(_component_Variant, { title: "Посещённая (visited)" }, {
        default: withCtx(() => [
          createVNode($setup["Link"], {
            href: "./",
            name: "Посещённая",
            icon: "tile-service",
            class: "link reverse",
            onOnClick: _cache[5] || (_cache[5] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Link.story.vue';
const Link_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Link.story.vue"]]);

export { Link_story as default };
