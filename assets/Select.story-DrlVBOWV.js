import { S as Select } from './Select-CJjRzUE1.js';
import { L as LocalSettings } from './LocalSettings-CPPAeydY.js';
import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aO as logEvent, ay as openBlock, aA as createVNode, aK as createCommentVNode } from './vendor-rawnQjOC.js';

// Пример базовых опций без иконок
    
const _sfc_main = {
  __name: 'Select.story',
  setup(__props, { expose: __expose }) {
  __expose();

    const options = [
        { code: 'option1', name: 'Опция 1' },
        { code: 'option2', name: 'Опция 2' },
        { code: 'option3', name: 'Опция 3' },
    ];

    // Пример опций с иконками
    const optionsWithIcons = [
        { code: 'moscow', name: 'Москва', icon: 'air' },
        { code: 'piter', name: 'Санкт-Петербург', icon: 'water' },
        { code: 'kazan', name: 'Казань', icon: 'ers' },
    ];

const __returned__ = { options, optionsWithIcons, Select, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Select Селект" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Стандартный селект "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Select"], {
            "option-list": $setup.options,
            placeholder: "Выберите элемент",
            onChange: _cache[0] || (_cache[0] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С выбранным значением "),
      createVNode(_component_Variant, { title: "С выбранным значением" }, {
        default: withCtx(() => [
          createVNode($setup["Select"], {
            "option-list": $setup.options,
            value: 'option2',
            placeholder: "Выберите элемент",
            onChange: _cache[1] || (_cache[1] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Отключённый селект "),
      createVNode(_component_Variant, { title: "Отключённое состояние (disabled)" }, {
        default: withCtx(() => [
          createVNode($setup["Select"], {
            "option-list": $setup.options,
            value: 'option1',
            disabled: true,
            placeholder: "Недоступно",
            onChange: _cache[2] || (_cache[2] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С иконкой "),
      createVNode(_component_Variant, { title: "С иконкой" }, {
        default: withCtx(() => [
          createVNode($setup["Select"], {
            "option-list": $setup.optionsWithIcons,
            icon: "ais",
            placeholder: "Город",
            onChange: _cache[3] || (_cache[3] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С ошибкой "),
      createVNode(_component_Variant, { title: "С ошибкой (isError)" }, {
        default: withCtx(() => [
          createVNode($setup["Select"], {
            "option-list": $setup.options,
            "is-error": true,
            placeholder: "Ошибка выбора",
            error: "Поле обязательно",
            onChange: _cache[4] || (_cache[4] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Лёгкий стиль с иконкой и без ошибок "),
      createVNode(_component_Variant, { title: "Лёгкий стиль + иконка (class='light with-icon noerror')" }, {
        default: withCtx(() => [
          createVNode($setup["Select"], {
            "option-list": $setup.optionsWithIcons,
            icon: "water",
            class: "light with-icon noerror",
            placeholder: "Пользователь",
            onChange: _cache[5] || (_cache[5] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Невозможность очистки "),
      createVNode(_component_Variant, { title: "Запрет на очистку выбора (clearable)" }, {
        default: withCtx(() => [
          createVNode($setup["Select"], {
            "option-list": $setup.options,
            value: 'option3',
            clearable: false,
            placeholder: "Очистите выбор (нет)",
            onChange: _cache[6] || (_cache[6] = $event => ($setup.logEvent('change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Select.story.vue';
const Select_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Select.story.vue"]]);

export { Select_story as default };
