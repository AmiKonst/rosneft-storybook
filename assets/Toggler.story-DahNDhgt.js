import { T as Toggler } from './Toggler-DQOuPx89.js';
import { L as LocalSettings } from './LocalSettings-CPPAeydY.js';
import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aO as logEvent, ay as openBlock, aA as createVNode, aK as createCommentVNode, aB as createBaseVNode } from './vendor-rawnQjOC.js';

const _sfc_main = {
  __name: 'Toggler.story',
  setup(__props, { expose: __expose }) {
  __expose();

    
const __returned__ = { Toggler, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "square" };
const _hoisted_2 = { class: "disabled" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Toggler Тогглер" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Стандартный переключатель без классов "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Toggler"], {
            name: "Тогглер",
            onOnClick: _cache[0] || (_cache[0] = $event => ($setup.logEvent('onClick', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Переключатель с checked = true "),
      createVNode(_component_Variant, { title: "Состояние checked" }, {
        default: withCtx(() => [
          createVNode($setup["Toggler"], {
            name: "Тогглер",
            checked: true,
            onOnClick: _cache[1] || (_cache[1] = $event => ($setup.logEvent('onClick', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Отключённый переключатель "),
      createVNode(_component_Variant, { title: "Отключённый (disabled)" }, {
        default: withCtx(() => [
          createVNode($setup["Toggler"], {
            name: "Отключён",
            disabled: true,
            onOnClick: _cache[2] || (_cache[2] = $event => ($setup.logEvent('onClick', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Переключатель с inline стилем "),
      createVNode(_component_Variant, { title: "Inline стиль" }, {
        default: withCtx(() => [
          createVNode($setup["Toggler"], {
            name: "Inline",
            inline: true,
            onOnClick: _cache[3] || (_cache[3] = $event => ($setup.logEvent('onClick', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Inline + checked "),
      createVNode(_component_Variant, { title: "Inline + checked" }, {
        default: withCtx(() => [
          createVNode($setup["Toggler"], {
            name: "Inline включён",
            inline: true,
            checked: true,
            onOnClick: _cache[4] || (_cache[4] = $event => ($setup.logEvent('onClick', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Inline + disabled "),
      createVNode(_component_Variant, { title: "Inline + отключённый" }, {
        default: withCtx(() => [
          createVNode($setup["Toggler"], {
            name: "Inline отключён",
            inline: true,
            disabled: true,
            onOnClick: _cache[5] || (_cache[5] = $event => ($setup.logEvent('onClick', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Отключённый + checked "),
      createVNode(_component_Variant, { title: "Отключённый + checked" }, {
        default: withCtx(() => [
          createVNode($setup["Toggler"], {
            name: "Отключён + включён",
            disabled: true,
            checked: true,
            onOnClick: _cache[6] || (_cache[6] = $event => ($setup.logEvent('onClick', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Дополнительно: кастомный класс 'square' на обёртке "),
      createVNode(_component_Variant, { title: "Класс square на контейнере" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["Toggler"], {
              name: "Square",
              onOnClick: _cache[7] || (_cache[7] = $event => ($setup.logEvent('onClick', $event)))
            })
          ])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Дополнительно: Cursor default "),
      createVNode(_component_Variant, { title: "Cursor default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["Toggler"], {
              inline: true,
              name: "Disabled wrapper",
              onOnClick: _cache[8] || (_cache[8] = $event => ($setup.logEvent('onClick', $event)))
            })
          ])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Toggler.story.vue';
const Toggler_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Toggler.story.vue"]]);

export { Toggler_story as default };
