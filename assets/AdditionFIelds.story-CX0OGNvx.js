import { av as _export_sfc, aC as createElementBlock, aK as createCommentVNode, aD as Fragment, aE as renderList, aN as reactive, aQ as useI18n, ay as openBlock, ax as createBlock, aG as toDisplayString, aw as resolveComponent, az as withCtx, aO as logEvent, aA as createVNode } from './vendor-vzr5K0L1.js';
import { D as DateField } from './DateField-D7CrHLSh.js';
import { B as Button, L as LocalSettings } from './LocalSettings-CmLMbIsG.js';
import { T as Toggler } from './Toggler-C-6RmGrn.js';

const _sfc_main$1 = {
  __name: 'AdditionFields',
  props: {
    fields: { type: [Array, null], default: () => [] }
},
  setup(__props, { expose: __expose }) {

const props = __props;

const validate = () => {
    if (props.fields?.length) {
        if (!props.fields.every((item) => !item.validate || item.validate(item))) {
            return;
        }
    }

    return true;
};

__expose({
    validate
});

const __returned__ = { props, validate, reactive, get useI18n() { return useI18n }, DateField, Button, Toggler };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = {
  key: 0,
  class: "addition-fields"
};
const _hoisted_2 = { key: 1 };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return ($setup.props.fields?.length)
    ? (openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.fields, (item) => {
          return (openBlock(), createElementBlock("div", {
            key: item.name
          }, [
            (!item.required)
              ? (openBlock(), createBlock($setup["Toggler"], {
                  key: 0,
                  onOnClick: $event => (item.checked = !item.checked),
                  name: item.name,
                  inline: true,
                  checked: item.checked
                }, null, 8 /* PROPS */, ["onOnClick", "name", "checked"]))
              : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(item.name), 1 /* TEXT */)),
            (item.type === 'period' && item.checked)
              ? (openBlock(), createBlock($setup["DateField"], {
                  key: 2,
                  locale: "ru",
                  class: "light",
                  autoApply: true,
                  range: true,
                  textInput: true,
                  enableTimePicker: !!item.enableTimePicker,
                  placeholder: item.placeholder || 'dd.MM.yyyy - dd.MM.yyyy',
                  format: item.format || 'dd.MM.yyyy',
                  modelValue: item.values,
                  "onUpdate:modelValue": $event => ((item.values) = $event)
                }, null, 8 /* PROPS */, ["enableTimePicker", "placeholder", "format", "modelValue", "onUpdate:modelValue"]))
              : createCommentVNode("v-if", true)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ]))
    : createCommentVNode("v-if", true)
}
_sfc_main$1.__file = 'src/components/ui/AdditionFields.vue';
const AdditionFields = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-6ed9e069"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/AdditionFields.vue"]]);

// Пример поля с необязательным периодом
    
const _sfc_main = {
  __name: 'AdditionFIelds.story',
  setup(__props, { expose: __expose }) {
  __expose();

    const fieldsWithOptionalPeriod = reactive([
        {
            name: 'Период действия',
            type: 'period',
            checked: true,
            required: false,
            values: null,
            enableTimePicker: false,
            placeholder: 'Выберите период',
        }
    ]);

    // Пример поля с обязательным периодом
    const fieldsWithRequiredPeriod = reactive([
        {
            name: 'Срок подписки',
            type: 'period',
            checked: true,
            required: true,
            values: null,
            enableTimePicker: true,
            format: 'dd.MM.yyyy HH:mm',
        }
    ]);

    // Комбинированный пример: обязательное и необязательное поле
    const fieldsMixed = reactive([
        {
            name: 'Активность',
            type: 'period',
            checked: false,
            required: false,
            values: null,
        },
        {
            name: 'Регистрация',
            type: 'period',
            checked: true,
            required: true,
            values: null,
        }
    ]);

const __returned__ = { fieldsWithOptionalPeriod, fieldsWithRequiredPeriod, fieldsMixed, AdditionFields, LocalSettings, reactive, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/AdditionFields Доп поле при подтверждении" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Пример с необязательным полем и периодом "),
      createVNode(_component_Variant, { title: "Период - необязательное поле" }, {
        default: withCtx(() => [
          createVNode($setup["AdditionFields"], { fields: $setup.fieldsWithOptionalPeriod }, null, 8 /* PROPS */, ["fields"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пример с обязательным полем (без тогглера) "),
      createVNode(_component_Variant, { title: "Период - обязательное поле" }, {
        default: withCtx(() => [
          createVNode($setup["AdditionFields"], { fields: $setup.fieldsWithRequiredPeriod }, null, 8 /* PROPS */, ["fields"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пример с двумя полями: обязательное и необязательное "),
      createVNode(_component_Variant, { title: "Комбинация обязательного и необязательного поля" }, {
        default: withCtx(() => [
          createVNode($setup["AdditionFields"], { fields: $setup.fieldsMixed }, null, 8 /* PROPS */, ["fields"])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/AdditionFIelds.story.vue';
const AdditionFIelds_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/AdditionFIelds.story.vue"]]);

export { AdditionFIelds_story as default };
