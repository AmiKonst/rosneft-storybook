import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aB as createBaseVNode, aK as createCommentVNode, ax as createBlock, aT as withKeys, aM as normalizeClass, aG as toDisplayString, aQ as useI18n, aH as ref, aN as reactive, aI as onMounted, bb as onBeforeUnmount, aX as watch, bc as IMask, ay as openBlock } from './vendor-rawnQjOC.js';
import { B as Button } from './LocalSettings-CPPAeydY.js';

const _sfc_main = {
  __name: 'Field',
  props: {
    isError: { type: Boolean, default: false },
    icon: { type: String, default: '' },
    infoIcon: { type: String, default: '' },
    value: { type: [String, Number, Object], default: '' },
    name: { type: [String, Number], default: '' },
    id: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    maxlength: { type: [Number, null], default: null },
    max: { type: Number, default: null },
    min: { type: Number, default: null },
    position: { type: Number, default: 0 },
    disabled: { type: Boolean, default: false },
    error: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
    readonly: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    info: { type: [String, Boolean], default: false },
    mask: { type: [Object, null], default: null },
    displayFormatter: { type: [Function, null], default: null },
	displayError: { type: Boolean, default:true }
},
  emits: ['change', 'pressEnter', 'blur','keydown','keyup','clean'],
  setup(__props, { expose: __expose, emit: __emit }) {

const props = __props;

const { t } = useI18n();

const field = ref(null);

const data = reactive({
    type: props.type
});

const emit = __emit;

const showPassword = () => {
    data.type = 'text';
};

const hidePassword = () => {
    data.type = 'password';
};

const clean = () => {
    delete data.typedValue;

    field.value.value = '';
    setTimeout(() => {
        onInput({ target: field.value });
        field.value.focus();

        setTimeout(() => {
            if (data.maskInstance) {
                emit('change', { target: data.maskInstance });
            }
        });
    });
	emit('clean');
};

const bindMask = (value) => {
    if (field.value && props.mask) {
        data.maskInstance = IMask(field.value, props.mask);

        data.maskInstance.on('accept', () => {
            emit('change', { target: data.maskInstance });
        });

        if (value !== null && value !== undefined) {
            data.maskInstance.typedValue = value;
        }
    }
};

const setValue = (value) => {
    if (data.maskInstance) {
        data.maskInstance.typedValue = value;
    } else if (props.mask) {
        data.typedValue = value;
        if (props.displayFormatter) {
            field.value.value = props.displayFormatter(data.typedValue);
        } else {
            field.value.value = value;
        }
    } else {
        field.value.value = value;
    }
};

const displayFormattedValue = () => {
    if (data.maskInstance && props.displayFormatter) {
        if (data.maskInstance.typedValue !== null) {
            data.typedValue = data.maskInstance.typedValue;
        }

        data.maskInstance.destroy();
        delete data.maskInstance;

        setTimeout(() => {
            const value = props.displayFormatter(data.typedValue);
            if (value) {
                field.value.value = value;
            }
        });
        return;
    }
};

onMounted(() => {
    if (field.value && props.mask) {
        if (props.value) {
            bindMask(props.value);
            displayFormattedValue();
        }
    } else {
        if (props.value !== null) {
            field.value.value = props.value;
        }
    }
});

onBeforeUnmount(() => {
    if (data.maskInstance) {
        data.maskInstance.destroy();
        delete data.maskInstance;
    }
});

const onPressEnter = (evn) => {
    onInput(evn);
    emit('pressEnter');
};

const onKeyDown = (evn) => {
	emit('keydown',evn);
};

const onKeyUp =(evn) =>{
	emit('keyup',evn);
};

const onBlur = (evn) => {
    emit('blur', evn);

    displayFormattedValue();

    let value = evn.target.value.trimStart();

    if (value) {
        if (typeof props.min === 'number') {
            if (parseFloat(value, 10) < props.min || Number.isNaN(parseInt(value, 10))) {
                value = props.min;

                setTimeout(() => {
                    if (evn.target && evn.target.value !== value) {
                        evn.target.value = value;
                    }
                });

                emit('change', evn);
            }
        }
    }
};

const onFocus = () => {
    if (props.mask && !data.maskInstance) {
        bindMask(data.typedValue);
    }
};

const onInput = (evn) => {
    if (!evn?.target || props.mask) {
        return;
    }

    if (['.', ',', '-'].includes(evn.data)) {
        if (!evn.target.value) {
            emit('change', evn);
        }
        return;
    }

    let value = evn.target.value.trimStart();

    if (value) {
        // ToDo Возможно, добавить проверку на 0
        if (typeof props.min === 'number') ;
        if (typeof props.max === 'number') {
            if (parseFloat(value, 10) > props.max) {
                value = props.max;
            }
        }
    } else {
        value = '';
    }

    evn.target.value = value;

    // setTimeout оправдан перерисовкой поля input при убирании текста ошибки при валидации
    setTimeout(() => {
        if (evn.target && evn.target.value !== value) {
            evn.target.value = value;
        }
    });

    emit('change', evn);
};

__expose({ field, setValue });

const __returned__ = { props, t, field, data, emit, showPassword, hidePassword, clean, bindMask, setValue, displayFormattedValue, onPressEnter, onKeyDown, onKeyUp, onBlur, onFocus, onInput, onMounted, onBeforeUnmount, reactive, ref, watch, get useI18n() { return useI18n }, Button, get IMask() { return IMask } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = ["type", "name", "min", "max", "maxlength", "disabled", "placeholder", "autocomplete", "readonly", "position"];
const _hoisted_2 = ["title"];
const _hoisted_3 = { class: "actions-block" };
const _hoisted_4 = {
  key: 0,
  class: "error"
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["field", [$setup.props.icon ? 'with-icon' : '', $setup.props.isError || $setup.props.error ? 'with-error' : '']])
  }, [
    createBaseVNode("div", null, [
      createBaseVNode("input", {
        class: normalizeClass({
                    'without-placeholder': !$setup.props.placeholder,
                    clearable: $setup.props.clearable && !$setup.props.readonly,
                    info: !!$setup.props.info
                }),
        ref: "field",
        type: $setup.data.type,
        name: $setup.props.name,
        min: $setup.props.min,
        max: $setup.props.max,
        maxlength: $setup.props.maxlength,
        disabled: $setup.props.disabled,
        placeholder: $setup.props.placeholder,
        autocomplete: $props.autocomplete,
        readonly: $setup.props.readonly,
        position: $setup.props.position,
        onInput: $setup.onInput,
        onBlur: $setup.onBlur,
        onFocus: $setup.onFocus,
        onKeydown: $setup.onKeyDown,
        onKeyup: [
          withKeys($setup.onPressEnter, ["enter"]),
          $setup.onKeyUp
        ]
      }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1),
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
      createBaseVNode("div", _hoisted_3, [
        ($setup.props.type === 'password' && $setup.data.type === 'password')
          ? (openBlock(), createBlock($setup["Button"], {
              key: 0,
              tabindex: "-1",
              icon: "eye-closed",
              class: "minimal small",
              title: $setup.t('ui.field.showPassword'),
              onClick: $setup.showPassword
            }, null, 8 /* PROPS */, ["title"]))
          : ($setup.props.type === 'password' && $setup.data.type === 'text')
            ? (openBlock(), createBlock($setup["Button"], {
                key: 1,
                tabindex: "-1",
                icon: "eye-opened",
                class: "minimal small",
                title: $setup.t('ui.field.hidePassword'),
                onClick: $setup.hidePassword
              }, null, 8 /* PROPS */, ["title"]))
            : ($setup.props.clearable && !$setup.props.readonly)
              ? (openBlock(), createBlock($setup["Button"], {
                  key: 2,
                  tabindex: "-1",
                  icon: "clean",
                  class: "minimal small clean",
                  title: $setup.t('ui.field.clear'),
                  onClick: $setup.clean
                }, null, 8 /* PROPS */, ["title"]))
              : createCommentVNode("v-if", true),
        ($setup.props.info)
          ? (openBlock(), createBlock(_component_Icon, {
              key: 3,
              icon: $setup.props.infoIcon || 'info',
              class: "icon-info",
              title: $setup.props.info
            }, null, 8 /* PROPS */, ["icon", "title"]))
          : createCommentVNode("v-if", true)
      ])
    ]),
    ($setup.props.displayError)
      ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString($setup.props.error), 1 /* TEXT */))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}
_sfc_main.__file = 'src/components/ui/Field.vue';
const Field = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-eb910dd0"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Field.vue"]]);

export { Field as F };
