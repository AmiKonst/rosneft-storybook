import { F as Field } from './Field-B6xLDoec.js';
import { L as LocalSettings } from './LocalSettings-CPPAeydY.js';
import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aO as logEvent, ay as openBlock, aA as createVNode, aK as createCommentVNode } from './vendor-rawnQjOC.js';

const _sfc_main = {
  __name: 'Field.story',
  setup(__props, { expose: __expose }) {
  __expose();

    
const __returned__ = { Field, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Field Поле ввода" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Базовое поле "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите текст",
            name: "default",
            onChange: _cache[0] || (_cache[0] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[1] || (_cache[1] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[2] || (_cache[2] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С иконкой "),
      createVNode(_component_Variant, { title: "С иконкой" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            icon: "tile-service",
            name: "with-icon",
            onChange: _cache[3] || (_cache[3] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[4] || (_cache[4] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[5] || (_cache[5] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С информацией "),
      createVNode(_component_Variant, { title: "С иконкой и подсказкой (info)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            icon: "tile-service",
            name: "with-info",
            info: "Это подсказка",
            onChange: _cache[6] || (_cache[6] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[7] || (_cache[7] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[8] || (_cache[8] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С ошибкой "),
      createVNode(_component_Variant, { title: "С ошибкой (isError)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            icon: "tile-service",
            name: "with-error",
            isError: true,
            error: "Ошибка ввода",
            onChange: _cache[9] || (_cache[9] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[10] || (_cache[10] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[11] || (_cache[11] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Light стиль "),
      createVNode(_component_Variant, { title: "Лёгкий стиль (light)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            icon: "tile-service",
            name: "light",
            class: "light",
            onChange: _cache[12] || (_cache[12] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[13] || (_cache[13] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[14] || (_cache[14] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Light + error "),
      createVNode(_component_Variant, { title: "Лёгкий стиль с ошибкой" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            icon: "tile-service",
            name: "light-error",
            class: "light",
            isError: true,
            error: "Ошибка!",
            onChange: _cache[15] || (_cache[15] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[16] || (_cache[16] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[17] || (_cache[17] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Light + error + значение "),
      createVNode(_component_Variant, { title: "Лёгкий стиль с ошибкой и значением" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            icon: "tile-service",
            name: "light-error-value",
            class: "light",
            isError: true,
            error: "Ошибка!",
            value: "asdsad",
            onChange: _cache[18] || (_cache[18] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[19] || (_cache[19] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[20] || (_cache[20] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Light + error + disabled "),
      createVNode(_component_Variant, { title: "Лёгкий стиль с ошибкой, значением и disabled" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            icon: "tile-service",
            name: "light-error-disabled",
            class: "light",
            isError: true,
            error: "Ошибка!",
            value: "asdsad",
            disabled: "",
            onChange: _cache[21] || (_cache[21] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[22] || (_cache[22] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[23] || (_cache[23] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Только info "),
      createVNode(_component_Variant, { title: "Только подсказка (info)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            name: "info-only",
            info: "Инфо-подсказка",
            onChange: _cache[24] || (_cache[24] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[25] || (_cache[25] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[26] || (_cache[26] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Light + info "),
      createVNode(_component_Variant, { title: "Light + info" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите логин",
            name: "light-info",
            class: "light",
            info: "Инфо-подсказка",
            onChange: _cache[27] || (_cache[27] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[28] || (_cache[28] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[29] || (_cache[29] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Только placeholder "),
      createVNode(_component_Variant, { title: "Только placeholder" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите что-нибудь",
            name: "placeholder-only",
            onChange: _cache[30] || (_cache[30] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[31] || (_cache[31] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[32] || (_cache[32] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Только placeholder + light "),
      createVNode(_component_Variant, { title: "Только placeholder (light)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите что-нибудь",
            name: "placeholder-light",
            class: "light",
            onChange: _cache[33] || (_cache[33] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[34] || (_cache[34] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[35] || (_cache[35] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Отключённое поле "),
      createVNode(_component_Variant, { title: "Disabled" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Нельзя редактировать",
            name: "disabled",
            disabled: "",
            onChange: _cache[36] || (_cache[36] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[37] || (_cache[37] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[38] || (_cache[38] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Disabled + value "),
      createVNode(_component_Variant, { title: "Disabled с текстом" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Нельзя редактировать",
            name: "disabled-value",
            disabled: "",
            value: "qweqwe",
            onChange: _cache[39] || (_cache[39] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[40] || (_cache[40] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[41] || (_cache[41] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Поле с паролем "),
      createVNode(_component_Variant, { title: "Пароль (password)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Введите пароль",
            name: "password",
            type: "password",
            onChange: _cache[42] || (_cache[42] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[43] || (_cache[43] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[44] || (_cache[44] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Очищаемое поле "),
      createVNode(_component_Variant, { title: "Очищаемое поле (clearable)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Можно очистить",
            name: "clearable",
            clearable: true,
            onChange: _cache[45] || (_cache[45] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[46] || (_cache[46] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[47] || (_cache[47] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Без placeholder "),
      createVNode(_component_Variant, { title: "Без placeholder" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            name: "no-placeholder",
            onChange: _cache[48] || (_cache[48] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[49] || (_cache[49] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[50] || (_cache[50] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" 🔹 Новый вариант: without-active-placeholder "),
      createVNode(_component_Variant, { title: "Без активного placeholder (without-active-placeholder)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            placeholder: "Плейсхолдер исчезает при фокусе/вводе",
            name: "without-active-placeholder",
            class: "without-active-placeholder",
            onChange: _cache[51] || (_cache[51] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[52] || (_cache[52] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[53] || (_cache[53] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кастомная иконка info (например, search) + без ошибки + без активного плейсхолдера "),
      createVNode(_component_Variant, { title: "Кастомная иконка подсказки (infoIcon) без ошибки и с отключённым активным плейсхолдером" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            infoIcon: "search",
            info: 'Введите текст для поиска',
            class: "noerror without-active-placeholder",
            placeholder: 'Введите текст для поиска',
            name: "searchStr",
            onChange: _ctx.onSearchChange,
            onPressEnter: _cache[54] || (_cache[54] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[55] || (_cache[55] = $event => ($setup.logEvent('blur', $event)))
          }, null, 8 /* PROPS */, ["onChange"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Маска для ввода телефона "),
      createVNode(_component_Variant, { title: "Маска ввода телефона" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            mask: { mask: '+{7} (000) 000-00-00' },
            placeholder: "+7 (___) ___-__-__",
            name: "phone",
            class: "without-active-placeholder",
            info: "Введите номер телефона",
            onChange: _cache[56] || (_cache[56] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[57] || (_cache[57] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[58] || (_cache[58] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Маска с ограничением чисел "),
      createVNode(_component_Variant, { title: "Маска с числовыми ограничениями" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            mask: { mask: Number, min: 1, max: 100 },
            placeholder: "Введите число от 1 до 100",
            name: "range",
            class: "without-active-placeholder",
            info: "Допустимое значение: 1–100",
            onChange: _cache[59] || (_cache[59] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[60] || (_cache[60] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[61] || (_cache[61] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Маска для кода "),
      createVNode(_component_Variant, { title: "Маска буквенно-цифрового кода (ABC-123)" }, {
        default: withCtx(() => [
          createVNode($setup["Field"], {
            mask: {
                    mask: 'AAA-000',
                    definitions: {
                        'A': /[A-Za-z]/,
                        '0': /[0-9]/
                    }
                },
            placeholder: "ABC-123",
            name: "code",
            class: "without-active-placeholder",
            info: "Введите код в формате ABC-123",
            onChange: _cache[62] || (_cache[62] = $event => ($setup.logEvent('change', $event))),
            onPressEnter: _cache[63] || (_cache[63] = $event => ($setup.logEvent('pressEnter', $event))),
            onBlur: _cache[64] || (_cache[64] = $event => ($setup.logEvent('blur', $event)))
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Field.story.vue';
const Field_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Field.story.vue"]]);

export { Field_story as default };
