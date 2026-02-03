import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aH as ref, aO as logEvent, ay as openBlock, aA as createVNode, aK as createCommentVNode } from './vendor-vzr5K0L1.js';
import { D as DateField } from './DateField-D7CrHLSh.js';
import { L as LocalSettings, B as Button } from './LocalSettings-CmLMbIsG.js';

// reactive refs для всех вариантов

const _sfc_main = {
  __name: 'DateField.story',
  setup(__props, { expose: __expose }) {
  __expose();

const defaultValue = ref(null);
const iconValue = ref(null);
const timePickerValue = ref(null);
const rangeValue = ref([]);
const customTriggerValue = ref(null);
const monthValue = ref(null);
const yearValue = ref(null);
const incrementValue = ref(null);
const noMinutesValue = ref(null);
const styledValue = ref(null);
const clearableValue = ref(null);

// функция обновления значения и логгирования
function updateValue(key, val) {
    logEvent('update:modelValue', val);
    switch (key) {
        case 'defaultValue': defaultValue.value = val; break
        case 'iconValue': iconValue.value = val; break
        case 'timePickerValue': timePickerValue.value = val; break
        case 'rangeValue': rangeValue.value = val; break
        case 'customTriggerValue': customTriggerValue.value = val; break
        case 'monthValue': monthValue.value = val; break
        case 'yearValue': yearValue.value = val; break
        case 'incrementValue': incrementValue.value = val; break
        case 'noMinutesValue': noMinutesValue.value = val; break
        case 'styledValue': styledValue.value = val; break
        case 'clearableValue': clearableValue.value = val; break
    }
}

const __returned__ = { defaultValue, iconValue, timePickerValue, rangeValue, customTriggerValue, monthValue, yearValue, incrementValue, noMinutesValue, styledValue, clearableValue, updateValue, ref, DateField, Button, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/DateField Выбор дат" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" По умолчанию "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "Выберите дату",
            modelValue: $setup.defaultValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = val => $setup.updateValue('defaultValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С кастомной иконкой "),
      createVNode(_component_Variant, { title: "С кастомной иконкой" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "С иконкой",
            icon: "clock",
            modelValue: $setup.iconValue,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = val => $setup.updateValue('iconValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С таймпикером "),
      createVNode(_component_Variant, { title: "С таймпикером (autoApply)" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "С выбором времени",
            autoApply: true,
            enableTimePicker: true,
            modelValue: $setup.timePickerValue,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = val => $setup.updateValue('timePickerValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Диапазон дат "),
      createVNode(_component_Variant, { title: "Диапазон дат" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "Выбор периода",
            range: true,
            enableTimePicker: true,
            autoApply: false,
            modelValue: $setup.rangeValue,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = val => $setup.updateValue('rangeValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кастомный триггер "),
      createVNode(_component_Variant, { title: "Кастомный триггер (кнопка)" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "С кнопкой-триггером",
            autoApply: true,
            enableTimePicker: false,
            range: false,
            modelValue: $setup.customTriggerValue,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = val => $setup.updateValue('customTriggerValue', val))
          }, {
            trigger: withCtx(() => [
              createVNode($setup["Button"], {
                icon: "calendar",
                title: "Открыть календарь",
                class: "secondary small"
              })
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Month picker "),
      createVNode(_component_Variant, { title: "Выбор месяца" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "Месяц",
            monthPicker: true,
            yearPicker: false,
            autoApply: true,
            modelValue: $setup.monthValue,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = val => $setup.updateValue('monthValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Year picker "),
      createVNode(_component_Variant, { title: "Выбор года" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "Год",
            enableTimePicker: false,
            monthPicker: false,
            yearPicker: true,
            autoApply: true,
            modelValue: $setup.yearValue,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = val => $setup.updateValue('yearValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Шаг 30 минут "),
      createVNode(_component_Variant, { title: "Шаг 30 минут" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "Шаг времени",
            enableTimePicker: true,
            minutesIncrement: 30,
            autoApply: true,
            modelValue: $setup.incrementValue,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = val => $setup.updateValue('incrementValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Без выбора минут "),
      createVNode(_component_Variant, { title: "Без выбора минут" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "Без минут",
            enableTimePicker: true,
            noMinutesOverlay: true,
            minutesIncrement: 60,
            autoApply: true,
            modelValue: $setup.noMinutesValue,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = val => $setup.updateValue('noMinutesValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Кастомные классы "),
      createVNode(_component_Variant, { title: "Стилизация (class)" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "Стили: light",
            class: "light",
            modelValue: $setup.styledValue,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = val => $setup.updateValue('styledValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Очистка "),
      createVNode(_component_Variant, { title: "Очистка значения" }, {
        default: withCtx(() => [
          createVNode($setup["DateField"], {
            locale: "ru",
            placeholder: "Нельзя очистить",
            clearable: false,
            modelValue: $setup.clearableValue,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = val => $setup.updateValue('clearableValue', val))
          }, null, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/DateField.story.vue';
const DateField_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/DateField.story.vue"]]);

export { DateField_story as default };
