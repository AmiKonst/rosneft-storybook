import { av as _export_sfc, aw as resolveComponent, ax as createBlock, a$ as createSlots, az as withCtx, aL as renderSlot, aB as createBaseVNode, aA as createVNode, aG as toDisplayString, aC as createElementBlock, aK as createCommentVNode, b0 as normalizeProps, b1 as guardReactiveProps, b2 as useSlots, aQ as useI18n, aX as watch, aN as reactive, b3 as onBeforeMount, aY as computed, b4 as timePeriodPreview, ay as openBlock } from './vendor-rawnQjOC.js';
import { B as Button } from './LocalSettings-CPPAeydY.js';

const _sfc_main = {
  __name: 'DateField',
  props: {
    placeholder: { type: String, default: '' },
    icon: { type: String, default: 'calendar' }
},
  setup(__props, { expose: __expose }) {
  __expose();

const slots = useSlots();
const { t } = useI18n();

const props = __props;

const __returned__ = { slots, t, props, computed, onBeforeMount, reactive, watch, get useI18n() { return useI18n }, Button, get timePeriodPreview() { return timePeriodPreview }, useSlots };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = {
  key: 0,
  class: "placeholder"
};
const _hoisted_2 = { class: "calendar-action-row" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Datepicker = resolveComponent("Datepicker");

  return (openBlock(), createBlock(_component_Datepicker, normalizeProps(guardReactiveProps($setup.props)), createSlots({
    "input-icon": withCtx(() => [
      ($setup.props.placeholder)
        ? (openBlock(), createElementBlock("label", _hoisted_1, toDisplayString($setup.props.placeholder), 1 /* TEXT */))
        : createCommentVNode("v-if", true),
      createVNode(_component_Icon, {
        icon: $setup.props.icon
      }, null, 8 /* PROPS */, ["icon"])
    ]),
    "clear-icon": withCtx(({ clear }) => [
      createVNode($setup["Button"], {
        icon: "close",
        class: "icon-mode minimal small",
        onClick: clear
      }, null, 8 /* PROPS */, ["onClick"])
    ]),
    "clock-icon": withCtx(() => [
      createVNode(_component_Icon, { icon: "clock" })
    ]),
    "calendar-icon": withCtx(() => [
      createVNode(_component_Icon, { icon: "calendar" })
    ]),
    "action-preview": withCtx(({ value }) => []),
    "action-buttons": withCtx(() => [
      createVNode($setup["Button"], {
        name: $setup.t('ui.data-field.save')
      }, null, 8 /* PROPS */, ["name"])
    ]),
    "action-row": withCtx(({ internalModelValue, selectDate }) => [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("span", null, toDisplayString($setup.timePeriodPreview(internalModelValue)), 1 /* TEXT */),
        createVNode($setup["Button"], {
          class: "light",
          name: $setup.t('common.apply'),
          onClick: selectDate
        }, null, 8 /* PROPS */, ["name", "onClick"])
      ])
    ]),
    _: 2 /* DYNAMIC */
  }, [
    ($setup.slots.trigger)
      ? {
          name: "trigger",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "trigger", {}, undefined, true)
          ]),
          key: "0"
        }
      : undefined
  ]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */))
}
_sfc_main.__file = 'src/components/ui/DateField.vue';
const DateField = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-4712dcea"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/DateField.vue"]]);

export { DateField as D };
