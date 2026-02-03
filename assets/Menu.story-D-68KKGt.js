import { M as Menu } from './Menu-CCVTCfoR.js';
import { L as LocalSettings } from './LocalSettings-CPPAeydY.js';
import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aO as logEvent, ay as openBlock, aA as createVNode, aK as createCommentVNode } from './vendor-rawnQjOC.js';

// Пример базовых элементов меню
    
const _sfc_main = {
  __name: 'Menu.story',
  setup(__props, { expose: __expose }) {
  __expose();

    const menuItems = [
        { code: 'overview', name: 'Обзор' },
        { code: 'analytics', name: 'Аналитика' },
        { code: 'settings', name: 'Настройки' }
    ];

    // Пример с иконками
    const iconItems = [
        { code: 'confirm', name: 'Главная', icon: 'confirm' },
        { code: 'water', name: 'Графики', icon: 'water' },
        { code: 'settings', name: 'Настройки', icon: 'settings' }
    ];

    // Пример со счетчиками
    const countItems = [
        { code: 'inbox', name: 'Входящие', count: 3 },
        { code: 'notifications', name: 'Уведомления', count: 1 },
        { code: 'archive', name: 'Архив' }
    ];

const __returned__ = { menuItems, iconItems, countItems, Menu, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Menu Меню" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Пример: стандартное меню "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Menu"], {
            items: $setup.menuItems,
            onChange: _cache[0] || (_cache[0] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пример: активный элемент по умолчанию "),
      createVNode(_component_Variant, { title: "С заданным активным элементом" }, {
        default: withCtx(() => [
          createVNode($setup["Menu"], {
            items: $setup.menuItems,
            value: "analytics",
            onChange: _cache[1] || (_cache[1] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пример: все элементы с иконками "),
      createVNode(_component_Variant, { title: "С иконками" }, {
        default: withCtx(() => [
          createVNode($setup["Menu"], {
            items: $setup.iconItems,
            onChange: _cache[2] || (_cache[2] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пример: элементы со счетчиком "),
      createVNode(_component_Variant, { title: "Со счетчиками" }, {
        default: withCtx(() => [
          createVNode($setup["Menu"], {
            items: $setup.countItems,
            onChange: _cache[3] || (_cache[3] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пример: модификация с классом solid "),
      createVNode(_component_Variant, { title: "С классом 'solid'" }, {
        default: withCtx(() => [
          createVNode($setup["Menu"], {
            items: $setup.menuItems,
            class: "solid",
            onChange: _cache[4] || (_cache[4] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пример: модификация с классом light-buttons "),
      createVNode(_component_Variant, { title: "С классом 'light-buttons'" }, {
        default: withCtx(() => [
          createVNode($setup["Menu"], {
            items: $setup.menuItems,
            class: "light-buttons",
            onChange: _cache[5] || (_cache[5] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пример: модификация с классом solid light-buttons "),
      createVNode(_component_Variant, { title: "С классом 'solid light-buttons'" }, {
        default: withCtx(() => [
          createVNode($setup["Menu"], {
            items: $setup.menuItems,
            class: "solid light-buttons",
            onChange: _cache[6] || (_cache[6] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Menu.story.vue';
const Menu_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Menu.story.vue"]]);

export { Menu_story as default };
