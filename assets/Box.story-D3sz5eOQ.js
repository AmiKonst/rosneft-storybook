import { av as _export_sfc, aC as createElementBlock, aB as createBaseVNode, aK as createCommentVNode, aL as renderSlot, ax as createBlock, aM as normalizeClass, aQ as useI18n, aN as reactive, aY as computed, ay as openBlock, aw as resolveComponent, az as withCtx, aO as logEvent, aA as createVNode } from './vendor-rawnQjOC.js';
import { B as Button, L as LocalSettings } from './LocalSettings-CPPAeydY.js';

const _sfc_main$1 = {
  __name: 'Box',
  props: {
	icon: { type: String, default: '' },
	clearable: { type: Boolean, default: false },
	collapsed: { type: Boolean, default: false },
	collapsable: { type: Boolean, default: true },
	right: { type: Boolean, default: false },
	hideBottomButton: { type: Boolean, default: false },
	clearable: { type: Boolean, default: true }
},
  emits: ['close', 'toggle', 'clear'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;

const { t } = useI18n();

const props = __props;

const data = reactive({
	collapsed: props.collapsed
});

const clear = () => {
	emit('clear');
};

const click = () =>{
	const clickActions = {
		clearable: clear,
		collapsable: toggle
	};

	Object.keys(clickActions).forEach(key => {
		if (props[key]) {
			clickActions[key]();
		}
	});

};

const visible = computed(() => {
	return props.hideBottomButton ? (data.collapsed && props.hideBottomButton) : true;
});

const toggle = () => {
	data.collapsed = !data.collapsed;
	emit('toggle', data.collapsed);
};

const __returned__ = { emit, t, props, data, clear, click, visible, toggle, computed, reactive, get useI18n() { return useI18n }, Button };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "content" };
const _hoisted_2 = {
  key: 0,
  class: "bottom"
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([{ collapsed: $setup.data.collapsed, right: $setup.props.right }, "box"])
  }, [
    createBaseVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "content", {}, undefined, true),
      ($setup.props.clearable)
        ? (openBlock(), createBlock($setup["Button"], {
            key: 0,
            class: "secondary clear-button",
            icon: "caret-right",
            title: $setup.t('ui.box.rollUp'),
            onClick: $setup.click
          }, null, 8 /* PROPS */, ["title"]))
        : createCommentVNode("v-if", true)
    ]),
    ($setup.props.collapsable)
      ? (openBlock(), createElementBlock("div", _hoisted_2, [
          ($setup.visible)
            ? (openBlock(), createBlock($setup["Button"], {
                key: 0,
                class: normalizeClass(["secondary", { small: !$setup.data.collapsed }]),
                icon: $setup.data.collapsed ? $setup.props.icon : 'arrow-down-left',
                title: $setup.data.collapsed ? $setup.t('ui.box.unwrap') : $setup.t('ui.box.rollUp'),
                onClick: $setup.toggle
              }, null, 8 /* PROPS */, ["class", "icon", "title"]))
            : createCommentVNode("v-if", true)
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}
_sfc_main$1.__file = 'src/components/ui/Box.vue';
const Box = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-79f457af"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Box.vue"]]);

const _sfc_main = {
  __name: 'Box.story',
  setup(__props, { expose: __expose }) {
  __expose();

    
const __returned__ = { Box, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Box Хранилище" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Базовый вариант: без иконок, кнопок и collapse-функциональности "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Box"], { icon: "burger-menu" }, {
            content: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("p", null, "Контент внутри Box по умолчанию", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С кнопкой очистки (clearable) "),
      createVNode(_component_Variant, { title: "С кнопкой очистки (clearable)" }, {
        default: withCtx(() => [
          createVNode($setup["Box"], {
            icon: "burger-menu",
            clearable: true,
            onClear: _cache[0] || (_cache[0] = $event => ($setup.logEvent('clear')))
          }, {
            content: withCtx(() => _cache[2] || (_cache[2] = [
              createBaseVNode("p", null, "Box с кнопкой \"Очистить\"", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Без возможности сворачивания (collapsable) "),
      createVNode(_component_Variant, { title: "Без возможности сворачивания (collapsable)" }, {
        default: withCtx(() => [
          createVNode($setup["Box"], { collapsable: false }, {
            content: withCtx(() => _cache[3] || (_cache[3] = [
              createBaseVNode("p", null, "Box с возможностью сворачивания", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Изначально свернутое состояние "),
      createVNode(_component_Variant, { title: "Свернутое состояние (collapsed)" }, {
        default: withCtx(() => [
          createVNode($setup["Box"], {
            icon: "burger-menu",
            collapsed: true,
            collapsable: true
          }, {
            content: withCtx(() => _cache[4] || (_cache[4] = [
              createBaseVNode("p", null, "Этот текст не должен отображаться в свернутом состоянии", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Модификатор right: кнопка сворачивания справа "),
      createVNode(_component_Variant, { title: "Кнопка справа (right)" }, {
        default: withCtx(() => [
          createVNode($setup["Box"], {
            icon: "burger-menu",
            right: true,
            collapsable: true
          }, {
            content: withCtx(() => _cache[5] || (_cache[5] = [
              createBaseVNode("p", null, "Кнопка разворота отображается справа", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Класс round-2 с закруглением углов "),
      createVNode(_component_Variant, { title: "Класс round-2 (скругление)" }, {
        default: withCtx(() => [
          createVNode($setup["Box"], {
            class: "round-2",
            collapsable: false
          }, {
            content: withCtx(() => _cache[6] || (_cache[6] = [
              createBaseVNode("p", null, "Box с более круглыми углами", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Box.story.vue';
const Box_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-f5a1953f"],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Box.story.vue"]]);

export { Box_story as default };
