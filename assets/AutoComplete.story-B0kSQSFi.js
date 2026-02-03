import { av as _export_sfc, aw as resolveComponent, aR as resolveDirective, aC as createElementBlock, aS as withDirectives, aB as createBaseVNode, aK as createCommentVNode, ax as createBlock, aT as withKeys, aM as normalizeClass, aU as vModelText, aG as toDisplayString, aD as Fragment, aE as renderList, aV as Teleport, aA as createVNode, aW as withModifiers, aH as ref, aN as reactive, aX as watch, aY as computed, aZ as placeOptionList, ay as openBlock, aL as renderSlot, aP as createTextVNode, a_ as vShow, az as withCtx, aO as logEvent } from './vendor-vzr5K0L1.js';
import { B as Button, L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main$1 = {
  __name: 'AutoComplete',
  props: {
    name: { type: String, default: '' },
    values: { type: Array, default: () => [] },
    icon: { type: String, default: '' },
    maxValuesCount: { type: [Number, null], default: null },
    position: { type: Number, default: 0 },
    optionList: {
        type: Array,
        default: () => []
    },
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    prefix: { type: String, default: null },
    isError: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true }
},
  emits: ['change', 'search', 'clean'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const field = ref(null);

const props = __props;

const data = reactive({
    values: props.values,
    searchStr: props.maxValuesCount === 1 && props.values.length ? props.values[0].name : '',
    isOpenDropdown: false
});


const emit = __emit;

const clean = () => {
    field.value.value = '';
    data.searchStr = '';

    if (props.maxValuesCount && data.values.length === props.maxValuesCount) {
        data.values = [];
        emit('change', {
            name: props.name,
            values: [],
            position: props.position
        });
    }

    emit('search', '');
    emit('clean', '');
};

const toggleOpened = () => {
    if (props.disabled) {
        return;
    }

    data.isOpenDropdown = !data.isOpenDropdown;

    if (!data.isOpenDropdown) {
        return false;
    }

    placeOptionList({
        container: field.value,
        options: '.autocomplete-options-list'
    });
};

watch(
    () => props.values,
    (values) => {
        data.values = values || [];
    }
);

const hide = () => (data.isOpenDropdown = false);

const onChoose = (event, payload) => {
    if (data.values.find((item) => item.code === payload.code)) {
        data.values.splice(data.values.indexOf(data.values.find((item) => item.code === payload.code)), 1);
    } else {
        if (props.maxValuesCount && data.values.length === props.maxValuesCount) {
            data.values.pop();
        }

        data.values.unshift(payload);
    }

    emit('change', {
        name: props.name,
        values: data.values,
        position: props.position
    });

    if (props.maxValuesCount === 1 && data.values.length === 1) {
        data.searchStr = data.values[0].name;
        data.isOpenDropdown = false;
    }
};

const removeValue = (value) => {
    if (data.values.indexOf(value) === -1) {
        return;
    }

    data.values.splice(data.values.indexOf(value), 1);

    emit('change', {
        name: props.name,
        values: data.values,
        position: props.position
    });
};

const onInput = (evn) => {
    if (data.values.length && props.maxValuesCount === data.values.length) {
        return;
    }

    data.isOpenDropdown = true;
    emit('search', evn.target.value);
};

const __returned__ = { field, props, data, emit, clean, toggleOpened, hide, onChoose, removeValue, onInput, computed, reactive, ref, watch, Button, get placeOptionList() { return placeOptionList } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = ["placeholder", "disabled"];
const _hoisted_2 = ["title"];
const _hoisted_3 = {
  key: 1,
  class: "autocomplete-options-list"
};
const _hoisted_4 = ["value", "onClick"];
const _hoisted_5 = { class: "actions-block" };
const _hoisted_6 = { class: "error" };
const _hoisted_7 = {
  key: 0,
  class: "values"
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _directive_click_outside = resolveDirective("click-outside");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
            $setup.props.icon ? 'with-icon' : '',
            $setup.props.isError ? 'with-error' : '',
            $setup.data.isOpenDropdown ? 'opened' : '',
            'autocomplete-field'
        ])
  }, [
    withDirectives((openBlock(), createElementBlock("div", { onClick: $setup.toggleOpened }, [
      withDirectives(createBaseVNode("input", {
        autocomplete: "off",
        ref: "field",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.data.searchStr) = $event)),
        placeholder: $setup.props.placeholder,
        disabled: $setup.props.disabled,
        class: normalizeClass({
                    clearable: $setup.props.clearable && $setup.data.searchStr && !$setup.props.disabled,
                    'pointer-events-none': $setup.props.maxValuesCount === 1 && $setup.data.values.length === 1,
                    'without-placeholder': !$setup.props.placeholder
                }),
        onInput: $setup.onInput,
        onKeyup: withKeys($setup.onInput, ["enter"])
      }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1), [
        [vModelText, $setup.data.searchStr]
      ]),
      createBaseVNode("span", {
        class: "placeholder",
        title: $setup.props.placeholder
      }, toDisplayString($setup.props.placeholder), 9 /* TEXT, PROPS */, _hoisted_2),
      ($setup.props.icon)
        ? (openBlock(), createBlock(_component_Icon, {
            key: 0,
            icon: $setup.props.icon
          }, null, 8 /* PROPS */, ["icon"]))
        : createCommentVNode("v-if", true),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        ($setup.data.isOpenDropdown)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "options-background",
              onClick: $setup.toggleOpened
            }))
          : createCommentVNode("v-if", true),
        ($setup.data.isOpenDropdown)
          ? (openBlock(), createElementBlock("ul", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.optionList, (option) => {
                return (openBlock(), createElementBlock("li", {
                  value: option.code,
                  key: option.code,
                  onClick: withModifiers($event => ($setup.onChoose($event, option)), ["stop"]),
                  class: normalizeClass({ selected: $setup.data.values.find((item) => item.code === option.code) })
                }, [
                  renderSlot(_ctx.$slots, "default", { option: option }, () => [
                    createTextVNode(toDisplayString(option.name), 1 /* TEXT */)
                  ]),
                  withDirectives(createVNode(_component_Icon, { icon: "check" }, null, 512 /* NEED_PATCH */), [
                    [vShow, $setup.data.values.find((item) => item.code === option.code)]
                  ])
                ], 10 /* CLASS, PROPS */, _hoisted_4))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : createCommentVNode("v-if", true)
      ])),
      createBaseVNode("div", _hoisted_5, [
        ($setup.props.clearable && $setup.data.searchStr && !$setup.props.disabled)
          ? (openBlock(), createBlock($setup["Button"], {
              key: 0,
              tabindex: "-1",
              icon: "clean",
              class: "input-action minimal small",
              title: _ctx.$t('common.clear'),
              onClick: withModifiers($setup.clean, ["stop"])
            }, null, 8 /* PROPS */, ["title"]))
          : createCommentVNode("v-if", true),
        createVNode(_component_Icon, {
          icon: "arrow-down",
          class: "arrow-down"
        })
      ])
    ])), [
      [_directive_click_outside, $setup.hide]
    ]),
    createBaseVNode("span", _hoisted_6, toDisplayString($setup.props.error), 1 /* TEXT */),
    ($setup.props.maxValuesCount !== 1 && !!$setup.data.values.length)
      ? (openBlock(), createElementBlock("ul", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.data.values, (item) => {
            return (openBlock(), createElementBlock("li", {
              key: item.code
            }, [
              createBaseVNode("span", null, toDisplayString(item.name), 1 /* TEXT */),
              createVNode($setup["Button"], {
                tabindex: "-1",
                icon: "clean",
                class: "minimal light",
                onClick: withModifiers($event => ($setup.removeValue(item)), ["stop"])
              }, null, 8 /* PROPS */, ["onClick"])
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}
_sfc_main$1.__file = 'src/components/ui/AutoComplete.vue';
const AutoComplete = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__file',"C:/MarineTech/rosneft-front/src/components/ui/AutoComplete.vue"]]);

// Пример списка опций
    
const _sfc_main = {
  __name: 'AutoComplete.story',
  setup(__props, { expose: __expose }) {
  __expose();

    const optionList = [
        { code: '1', name: 'Опция 1' },
        { code: '2', name: 'Опция 2' },
        { code: '3', name: 'Опция 3' },
        { code: '4', name: 'Опция 4' }
    ];

    const selectedValues = ref([optionList[0]]);

const __returned__ = { optionList, selectedValues, AutoComplete, LocalSettings, ref, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/AutoComplete Автокомплит" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" По умолчанию, без значений и без классов "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["AutoComplete"], {
            placeholder: "Выберите опцию",
            optionList: $setup.optionList,
            onSearch: _cache[0] || (_cache[0] = $event => ($setup.logEvent('search', $event))),
            onChange: _cache[1] || (_cache[1] = $event => ($setup.logEvent('change', $event))),
            onClean: _cache[2] || (_cache[2] = $event => ($setup.logEvent('clean', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С классом noerror "),
      createVNode(_component_Variant, { title: "С классом noerror" }, {
        default: withCtx(() => [
          createVNode($setup["AutoComplete"], {
            placeholder: "Без ошибки",
            class: "noerror",
            optionList: $setup.optionList,
            onSearch: _cache[3] || (_cache[3] = $event => ($setup.logEvent('search', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С классом light + значения "),
      createVNode(_component_Variant, { title: "С классом light и предустановленными значениями" }, {
        default: withCtx(() => [
          createVNode($setup["AutoComplete"], {
            placeholder: "Выбрано несколько",
            class: "noerror light",
            optionList: $setup.optionList,
            values: [$setup.optionList[0], $setup.optionList[1]],
            onChange: _cache[4] || (_cache[4] = $event => ($setup.logEvent('change', $event))),
            onSearch: _cache[5] || (_cache[5] = $event => ($setup.logEvent('search', $event)))
          }, null, 8 /* PROPS */, ["values"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Отключённый "),
      createVNode(_component_Variant, { title: "Отключённый" }, {
        default: withCtx(() => [
          createVNode($setup["AutoComplete"], {
            placeholder: "Отключён",
            class: "noerror light",
            disabled: "",
            optionList: $setup.optionList
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С ошибкой "),
      createVNode(_component_Variant, { title: "С ошибкой" }, {
        default: withCtx(() => [
          createVNode($setup["AutoComplete"], {
            placeholder: "Ошибка ввода",
            class: "noerror",
            optionList: $setup.optionList,
            isError: "",
            error: "Произошла ошибка"
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С иконкой "),
      createVNode(_component_Variant, { title: "С иконкой" }, {
        default: withCtx(() => [
          createVNode($setup["AutoComplete"], {
            placeholder: "С иконкой",
            class: "noerror",
            icon: "search",
            optionList: $setup.optionList
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" maxValuesCount = 1 (выбор только одного значения) "),
      createVNode(_component_Variant, { title: "Максимум одно значение (maxValuesCount=1)" }, {
        default: withCtx(() => [
          createVNode($setup["AutoComplete"], {
            placeholder: "Выберите одно",
            class: "noerror light",
            optionList: $setup.optionList,
            maxValuesCount: 1,
            onChange: _cache[6] || (_cache[6] = $event => ($setup.logEvent('change', $event))),
            onSearch: _cache[7] || (_cache[7] = $event => ($setup.logEvent('search', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С иконкой и !clearable "),
      createVNode(_component_Variant, { title: "С иконкой и отсутствием возможностью очистки (clearable)" }, {
        default: withCtx(() => [
          createVNode($setup["AutoComplete"], {
            placeholder: "С иконкой и очисткой",
            class: "noerror",
            icon: "search",
            maxValuesCount: 1,
            clearable: false,
            optionList: $setup.optionList,
            onChange: _cache[8] || (_cache[8] = $event => ($setup.logEvent('change', $event))),
            onClean: _cache[9] || (_cache[9] = $event => ($setup.logEvent('clean', $event))),
            onSearch: _cache[10] || (_cache[10] = $event => ($setup.logEvent('search', $event)))
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/AutoComplete.story.vue';
const AutoComplete_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/AutoComplete.story.vue"]]);

export { AutoComplete_story as default };
