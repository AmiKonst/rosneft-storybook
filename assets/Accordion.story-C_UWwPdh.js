import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aB as createBaseVNode, aK as createCommentVNode, ax as createBlock, aA as createVNode, aL as renderSlot, aM as normalizeClass, aN as reactive, ay as openBlock, az as withCtx, aO as logEvent, aP as createTextVNode } from './vendor-vzr5K0L1.js';
import { L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main$1 = {
  __name: 'Accordion',
  props: {
    type: String,
    icon: String,
    title: String,
    isOpen: { type: Boolean, default: false }
},
  emits: ['update:isOpen','change'],
  setup(__props, { expose: __expose, emit: __emit }) {


const data = reactive({
    open: __props.isOpen
});

const emit = __emit;

const toggleAccordion = (e) => {
    e.stopPropagation();
    data.open = !data.open;
    emit('change');
	emit('update:isOpen');
};

__expose({
	toggle: toggleAccordion,
	open: () => {
		if (!data.open) {
			data.open = true;
			emit('change');
			emit('update:isOpen', true);
		}
	},
	close: () => {
		if (data.open) {
			data.open = false;
			emit('change');
			emit('update:isOpen', false);
		}
	},
	isOpen: () => data.open
});




const __returned__ = { data, emit, toggleAccordion, reactive };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { class: "close" };
const _hoisted_3 = {
  key: 0,
  class: "accordion-content"
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["accordion", [$setup.data.open ? 'open' : '', $props.type]])
  }, [
    createBaseVNode("div", {
      class: "head",
      onClick: $setup.toggleAccordion
    }, [
      ($props.icon)
        ? (openBlock(), createBlock(_component_Icon, {
            key: 0,
            icon: $props.icon,
            class: "icon"
          }, null, 8 /* PROPS */, ["icon"]))
        : createCommentVNode("v-if", true),
      createBaseVNode("span", { innerHTML: $props.title }, null, 8 /* PROPS */, _hoisted_1),
      createBaseVNode("div", _hoisted_2, [
        createVNode(_component_Icon, { icon: "arrow-show" })
      ])
    ]),
    ($setup.data.open)
      ? (openBlock(), createElementBlock("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "content", {}, undefined, true)
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}
_sfc_main$1.__file = 'src/components/ui/Accordion.vue';
const Accordion = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-f49fcfac"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Accordion.vue"]]);

const _sfc_main = {
  __name: 'Accordion.story',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { Accordion, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Accordion Аккордеон" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Базовый пример: без стиля, по умолчанию закрыт "),
      createVNode(_component_Variant, { title: "Базовый (закрыт)" }, {
        default: withCtx(() => [
          createVNode($setup["Accordion"], {
            title: "Базовый заголовок",
            onChange: _cache[0] || (_cache[0] = $event => ($setup.logEvent('toggle', 'basic')))
          }, {
            content: withCtx(() => _cache[5] || (_cache[5] = [
              createBaseVNode("p", null, "Контент базового аккордеона", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Открыт по умолчанию "),
      createVNode(_component_Variant, { title: "Базовый (открыт)" }, {
        default: withCtx(() => [
          createVNode($setup["Accordion"], {
            title: "Открытый по умолчанию",
            isOpen: true,
            onChange: _cache[1] || (_cache[1] = $event => ($setup.logEvent('toggle', 'basic-open')))
          }, {
            content: withCtx(() => _cache[6] || (_cache[6] = [
              createBaseVNode("p", null, "Содержимое открытого аккордеона", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С типом simple "),
      createVNode(_component_Variant, { title: "Тип: simple" }, {
        default: withCtx(() => [
          createVNode($setup["Accordion"], {
            title: "Простой стиль",
            type: "simple",
            onChange: _cache[2] || (_cache[2] = $event => ($setup.logEvent('toggle', 'simple')))
          }, {
            content: withCtx(() => _cache[7] || (_cache[7] = [
              createBaseVNode("p", null, "Контент простого аккордеона", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С типом group "),
      createVNode(_component_Variant, { title: "Тип: group" }, {
        default: withCtx(() => [
          createVNode($setup["Accordion"], {
            title: "Групповой стиль",
            type: "group",
            onChange: _cache[3] || (_cache[3] = $event => ($setup.logEvent('toggle', 'group')))
          }, {
            content: withCtx(() => _cache[8] || (_cache[8] = [
              createBaseVNode("p", null, "Контент группового аккордеона", -1 /* CACHED */)
            ])),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С иконкой и типом group "),
      createVNode(_component_Variant, { title: "Иконка + group" }, {
        default: withCtx(() => [
          createVNode($setup["Accordion"], {
            title: "С иконкой",
            icon: "ais",
            type: "group",
            isOpen: true,
            onChange: _cache[4] || (_cache[4] = $event => ($setup.logEvent('toggle', 'icon-group')))
          }, {
            content: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode(" Контент группы с иконкой ")
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
_sfc_main.__file = 'src/stories/ui/Accordion.story.vue';
const Accordion_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-5a2f0f7d"],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Accordion.story.vue"]]);

export { Accordion_story as default };
