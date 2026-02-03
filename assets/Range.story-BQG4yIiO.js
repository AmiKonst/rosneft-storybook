import { av as _export_sfc, aC as createElementBlock, aB as createBaseVNode, aF as normalizeStyle, aM as normalizeClass, aW as withModifiers, aH as ref, aN as reactive, aY as computed, bb as onBeforeUnmount, ay as openBlock, aw as resolveComponent, ax as createBlock, az as withCtx, aO as logEvent, aA as createVNode, aK as createCommentVNode } from './vendor-vzr5K0L1.js';
import { L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main$1 = {
  __name: 'Range',
  props: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    value: { type: Number, default: 50 },
    decimalCount: { type: Number, default: 0 },
    disabled: { type: Boolean, default: false }
},
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;
const range = ref(null);

const props = __props;

const data = reactive({
    value: props.value,
    oldValue: props.value,
    pageX: 0,
    width: 1
});

const updatePosition = (clientX) => {
    const rect = range.value.getBoundingClientRect();

    let relativeX = clientX - rect.left;

    const percentage = props.min + (props.max - props.min) * Math.max(0, Math.min(1, (relativeX / rect.width)));

    data.value = +percentage.toFixed(props.decimalCount);

    emit('change', data.value);
};


const onMouseUp = (e) => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
};

const onMouseMove = (e) => {
    updatePosition(e.clientX);
};

const onMouseDown = (e) => {
    if (props.disabled) {
        return;
    }

    updatePosition(e.clientX);

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
};

const pos = computed(() => {
    return (props.max - props.min) ? `${100 * (data.value - props.min) / (props.max - props.min)}%` : 0;
});

onBeforeUnmount(() => {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
});

const __returned__ = { emit, range, props, data, updatePosition, onMouseUp, onMouseMove, onMouseDown, pos, computed, reactive, ref, onBeforeUnmount };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
    onMousedown: $setup.onMouseDown,
    class: normalizeClass(["range", { disabled: $setup.props.disabled }]),
    ref: "range"
  }, [
    createBaseVNode("span", {
      style: normalizeStyle({ width: $setup.pos })
    }, _cache[1] || (_cache[1] = [
      createBaseVNode("i", null, null, -1 /* CACHED */)
    ]), 4 /* STYLE */)
  ], 34 /* CLASS, NEED_HYDRATION */))
}
_sfc_main$1.__file = 'src/components/ui/Range.vue';
const Range = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-e4db0282"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Range.vue"]]);

const _sfc_main = {
  __name: 'Range.story',
  setup(__props, { expose: __expose }) {
  __expose();

    
const __returned__ = { Range, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Range Диапазон" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Стандартный range "),
      createVNode(_component_Variant, { title: "По умолчанию (значение 50)" }, {
        default: withCtx(() => [
          createVNode($setup["Range"], {
            value: 50,
            onChange: _cache[0] || (_cache[0] = $event => ($setup.logEvent('change', {value: $event})))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Диапазон от 0 до 200 "),
      createVNode(_component_Variant, { title: "Диапазон от 0 до 200" }, {
        default: withCtx(() => [
          createVNode($setup["Range"], {
            min: 0,
            max: 200,
            value: 100,
            onChange: _cache[1] || (_cache[1] = $event => ($setup.logEvent('change', {value: $event})))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С дробным значением и округлением до 1 знака "),
      createVNode(_component_Variant, { title: "Дробное значение (шаг 0.1)" }, {
        default: withCtx(() => [
          createVNode($setup["Range"], {
            value: 25.5,
            "decimal-count": 1,
            onChange: _cache[2] || (_cache[2] = $event => ($setup.logEvent('change', {value: $event})))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Минимальное значение 10, максимальное 30 "),
      createVNode(_component_Variant, { title: "Произвольные границы (10–30)" }, {
        default: withCtx(() => [
          createVNode($setup["Range"], {
            min: 10,
            max: 30,
            value: 20,
            onChange: _cache[3] || (_cache[3] = $event => ($setup.logEvent('change', {value: $event})))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Disabled "),
      createVNode(_component_Variant, { title: "Отключено (disabled)" }, {
        default: withCtx(() => [
          createVNode($setup["Range"], {
            value: 50,
            onChange: _cache[4] || (_cache[4] = $event => ($setup.logEvent('change', {value: $event}))),
            disabled: ""
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Range.story.vue';
const Range_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-319b4621"],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Range.story.vue"]]);

export { Range_story as default };
