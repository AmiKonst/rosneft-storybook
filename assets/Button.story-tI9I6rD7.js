import { L as LocalSettings, B as Button } from './LocalSettings-CPPAeydY.js';
import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aO as logEvent, ay as openBlock, aA as createVNode, aK as createCommentVNode } from './vendor-rawnQjOC.js';

const iconName = 'confirm';

const _sfc_main = {
  __name: 'Button.story',
  setup(__props, { expose: __expose }) {
  __expose();

    
const __returned__ = { iconName, Button, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Button Кнопка" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Пример кнопки по умолчанию "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Кнопка',
            onClick: _cache[0] || (_cache[0] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кнопка с иконкой и текстом "),
      createVNode(_component_Variant, { title: "С иконкой и текстом (with-icon)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            icon: $setup.iconName,
            name: 'Готово',
            onClick: _cache[1] || (_cache[1] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кнопка только с иконкой "),
      createVNode(_component_Variant, { title: "Только иконка (icon-mode)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            icon: $setup.iconName,
            class: "icon-mode",
            onClick: _cache[2] || (_cache[2] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кнопка только с иконкой минималистичная маленькая "),
      createVNode(_component_Variant, { title: "Только иконка минималистичная маленькая (icon-mode + minimal + small)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            icon: $setup.iconName,
            class: "icon-mode minimal small",
            onClick: _cache[3] || (_cache[3] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Состояние загрузки "),
      createVNode(_component_Variant, { title: "Загрузка (loading)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Загружается",
            loading: true,
            onClick: _cache[4] || (_cache[4] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Disabled кнопка "),
      createVNode(_component_Variant, { title: "Отключено (disabled)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Недоступно',
            disabled: "",
            onClick: _cache[5] || (_cache[5] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Вторичная кнопка "),
      createVNode(_component_Variant, { title: "Вторичная (secondary)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Отмена',
            class: "secondary",
            onClick: _cache[6] || (_cache[6] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Вторичная легкая кнопка "),
      createVNode(_component_Variant, { title: "Вторичная легкая (secondary + light)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Отмена',
            class: "secondary light",
            onClick: _cache[7] || (_cache[7] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кнопка с границей "),
      createVNode(_component_Variant, { title: "С границей (border)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'С границей',
            class: "border",
            onClick: _cache[8] || (_cache[8] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Вторичная с границей "),
      createVNode(_component_Variant, { title: "Вторичная с границей (secondary + border)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Назад',
            class: "secondary border",
            onClick: _cache[9] || (_cache[9] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кнопка с reverse (иконка справа) "),
      createVNode(_component_Variant, { title: "Обратный порядок (reverse)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            icon: $setup.iconName,
            name: 'Назад',
            class: "reverse",
            onClick: _cache[10] || (_cache[10] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Light кнопка "),
      createVNode(_component_Variant, { title: "Легкая (light)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            icon: $setup.iconName,
            name: 'Ночь',
            class: "light",
            onClick: _cache[11] || (_cache[11] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Small кнопка "),
      createVNode(_component_Variant, { title: "Маленькая (small)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Еще',
            class: "small",
            onClick: _cache[12] || (_cache[12] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Вторичная Small кнопка с границей "),
      createVNode(_component_Variant, { title: "Вторичная маленькая с границей (secondary + small + border)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Еще',
            class: "secondary small border",
            onClick: _cache[13] || (_cache[13] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Minimal кнопка "),
      createVNode(_component_Variant, { title: "Минималистичная (minimal)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Инфо',
            class: "minimal",
            onClick: _cache[14] || (_cache[14] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Minimal small кнопка "),
      createVNode(_component_Variant, { title: "Минималистичная маленькая (minimal + small)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Инфо',
            class: "minimal + small",
            onClick: _cache[15] || (_cache[15] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Ссылка-кнопка "),
      createVNode(_component_Variant, { title: "Ссылка (link)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: 'Перейти',
            class: "link",
            onClick: _cache[16] || (_cache[16] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Комбинации классов "),
      createVNode(_component_Variant, { title: "Минималистичная + загрузка + граница" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            icon: "loader",
            name: 'Загрузка',
            class: "minimal border",
            loading: true,
            onClick: _cache[17] || (_cache[17] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Хайлайт "),
      createVNode(_component_Variant, { title: "Выделенная" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Выделить",
            class: "hightlighted"
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Активная кнопка по умолчанию "),
      createVNode(_component_Variant, { title: "Активная кнопка (active)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Активная",
            class: "active",
            onClick: _cache[18] || (_cache[18] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Active + secondary "),
      createVNode(_component_Variant, { title: "Вторичная активная (secondary + active)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Secondary",
            class: "secondary active",
            onClick: _cache[19] || (_cache[19] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Active + minimal "),
      createVNode(_component_Variant, { title: "Минималистичная активная (minimal + active)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Minimal",
            icon: $setup.iconName,
            class: "minimal active",
            onClick: _cache[20] || (_cache[20] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Active + link "),
      createVNode(_component_Variant, { title: "Ссылка активная (link + active)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Link",
            class: "link active",
            onClick: _cache[21] || (_cache[21] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Active + light "),
      createVNode(_component_Variant, { title: "Компактная активная (light + active)" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Light",
            class: "light active",
            onClick: _cache[22] || (_cache[22] = $event => ($setup.logEvent('click', $event)))
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Button.story.vue';
const Button_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Button.story.vue"]]);

export { Button_story as default };
