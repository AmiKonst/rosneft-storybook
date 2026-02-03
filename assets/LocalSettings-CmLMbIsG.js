import { av as _export_sfc, aw as resolveComponent, aR as resolveDirective, aS as withDirectives, aC as createElementBlock, ax as createBlock, aK as createCommentVNode, aG as toDisplayString, aB as createBaseVNode, aM as normalizeClass, ay as openBlock, aL as renderSlot, aV as Teleport, aW as withModifiers, aY as computed, aH as ref, aN as reactive, aZ as placeOptionList, bg as code, aA as createVNode, aD as Fragment, aE as renderList, bh as useMessagesStore, aF as normalizeStyle, az as withCtx, aI as onMounted } from './vendor-vzr5K0L1.js';

const _sfc_main$3 = {
  __name: 'Button',
  props: {
    icon: { type: String, default: '' },
    name: { type: String, default: '' },
    title: { type: String, default: '' },
    loading: { type: Boolean, default: false }
},
  emits: ['onClick'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const props = __props;
const emit = __emit;

const onClick = () => {
    emit('onClick');
};

const __returned__ = { props, emit, onClick };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1$2 = ["name"];
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$1 = {
  key: 2,
  class: "loader",
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _directive_tooltip = resolveDirective("tooltip");

  return withDirectives((openBlock(), createElementBlock("button", {
    type: "button",
    onClick: $setup.onClick,
    class: normalizeClass({
            'with-icon': !!$setup.props.icon && $setup.props.name,
            'icon-mode': !!$setup.props.icon && !$setup.props.name,
            loading: $setup.props.loading
        }),
    name: $setup.props.title
  }, [
    ($setup.props.icon)
      ? (openBlock(), createBlock(_component_Icon, {
          key: 0,
          icon: $setup.props.icon
        }, null, 8 /* PROPS */, ["icon"]))
      : createCommentVNode("v-if", true),
    ($setup.props.name)
      ? (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString($setup.props.name), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    ($setup.props.loading)
      ? (openBlock(), createElementBlock("svg", _hoisted_3$1, _cache[0] || (_cache[0] = [
          createBaseVNode("g", {
            "clip-path": "url(#paint0_angular_971_20134_clip_path)",
            "data-figma-skip-parse": "true"
          }, [
            createBaseVNode("g", { transform: "matrix(0.007775 -0.002 0.002 0.007775 8 8.5)" }, [
              createBaseVNode("foreignObject", {
                x: "-1219.4",
                y: "-1219.4",
                width: "2438.8",
                height: "2438.8"
              }, [
                createBaseVNode("div", {
                  xmlns: "http://www.w3.org/1999/xhtml",
                  style: {"background":"conic-gradient(\r\n                                    from 90deg,\r\n                                    rgba(255, 255, 255, 1) 0deg,\r\n                                    rgba(255, 255, 255, 1) 0.050819deg,\r\n                                    rgba(255, 255, 255, 0) 4.68376deg,\r\n                                    rgba(255, 255, 255, 1) 286.2deg,\r\n                                    rgba(255, 255, 255, 1) 347.236deg,\r\n                                    rgba(255, 255, 255, 1) 360deg\r\n                                )","height":"100%","width":"100%","opacity":"1"}
                })
              ])
            ])
          ], -1 /* CACHED */),
          createBaseVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM7.91998 13.92C10.9575 13.92 13.42 11.4576 13.42 8.42001C13.42 5.38244 10.9575 2.92001 7.91998 2.92001C4.88241 2.92001 2.41998 5.38244 2.41998 8.42001C2.41998 11.4576 4.88241 13.92 7.91998 13.92Z",
            "data-figma-gradient-fill": "{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":1.0},\"position\":0.00014116388047114015},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.0},\"position\":0.013010452501475811},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":1.0},\"position\":0.79500001668930054},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":1.0},\"position\":0.96454507112503052}],\"stopsVar\":[{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":1.0},\"position\":0.00014116388047114015},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.0},\"position\":0.013010452501475811},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":1.0},\"position\":0.79500001668930054},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":1.0},\"position\":0.96454507112503052}],\"transform\":{\"m00\":15.550000190734863,\"m01\":4.0,\"m02\":-1.7750005722045898,\"m10\":-4.0,\"m11\":15.550000190734863,\"m12\":2.7249999046325684},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}"
          }, null, -1 /* CACHED */),
          createBaseVNode("defs", null, [
            createBaseVNode("clipPath", { id: "paint0_angular_971_20134_clip_path" }, [
              createBaseVNode("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM7.91998 13.92C10.9575 13.92 13.42 11.4576 13.42 8.42001C13.42 5.38244 10.9575 2.92001 7.91998 2.92001C4.88241 2.92001 2.41998 5.38244 2.41998 8.42001C2.41998 11.4576 4.88241 13.92 7.91998 13.92Z"
              })
            ])
          ], -1 /* CACHED */)
        ])))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$2)), [
    [_directive_tooltip, $setup.props.title]
  ])
}
_sfc_main$3.__file = 'src/components/ui/Button.vue';
const Button = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$3],['__scopeId',"data-v-e3216c45"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Button.vue"]]);

const _sfc_main$2 = {
  __name: 'KebabMenu',
  props: {
    icon: { type: String, default: 'menu' },
    name: { type: String, default: '' },
    leftAuto: { type: Boolean, default: true },
    rightAuto: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    minimal: { type: Boolean, default: false }
},
  emits: ['toggle'],
  setup(__props, { expose: __expose, emit: __emit }) {

const props = __props;

const listCode =  computed(() => code());

const emit = __emit;
const menu = ref();

const data = reactive({
    opened: false
});

const onToggle = (e) => {
    if (data.opened && e.target.nodeName === 'UL') {
        return;
    }

    data.opened = !data.opened;

    emit('toggle', data.opened);

    if (!data.opened) {
        return false;
    }

    placeOptionList({
        container: menu.value,
        options: `.kebab-options-list-${listCode.value}`,
        leftAuto: props.leftAuto,
        rightAuto: props.rightAuto,
        offset: {
            right: props.leftAuto ? 48 : 0,
            left: props.rightAuto ? 48 : 0,
            bottom: -40
        }
    });
};

const show = () => {
    if (!data.opened) {
        onToggle();
    }
};

__expose({
    show
});

const __returned__ = { props, listCode, emit, menu, data, onToggle, show, computed, reactive, ref, Button, get code() { return code }, get placeOptionList() { return placeOptionList } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([{ bottom: $setup.data.bottom, opened: $setup.data.opened }, "kebab-menu"]),
    ref: "menu",
    onClick: withModifiers($setup.onToggle, ["stop"])
  }, [
    renderSlot(_ctx.$slots, "trigger", {}, () => [
      createVNode($setup["Button"], {
        title: $setup.props.name,
        icon: $setup.props.icon,
        class: normalizeClass({
                    secondary: $setup.props.secondary,
                    minimal: $setup.props.minimal,
                    small: $setup.props.small,
                    active: $setup.data.opened && $setup.props.ghost,
                    hightlighted: $setup.data.opened && !$setup.props.ghost
                })
      }, null, 8 /* PROPS */, ["title", "icon", "class"])
    ]),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      ($setup.data.opened)
        ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "options-background",
            onClick: $setup.onToggle
          }))
        : createCommentVNode("v-if", true),
      ($setup.data.opened)
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(`kebab-options-list kebab-options-list-${$setup.listCode}`),
            onClick: $setup.onToggle
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2 /* CLASS */))
        : createCommentVNode("v-if", true)
    ]))
  ], 2 /* CLASS */))
}
_sfc_main$2.__file = 'src/components/ui/KebabMenu.vue';
const KebabMenu = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2],['__file',"C:/MarineTech/rosneft-front/src/components/ui/KebabMenu.vue"]]);

const _sfc_main$1 = {
  __name: 'Notifications',
  setup(__props, { expose: __expose }) {
  __expose();

const messages = useMessagesStore();

const classes = {
    info: 'info',
    success: 'success',
    warning: 'alert',
    error: 'attention'
};

const icons = {
    info: 'info',
    success: 'check',
    warning: 'alert',
    error: 'attention'
};

const __returned__ = { messages, classes, icons, get useMessagesStore() { return useMessagesStore } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1$1 = { class: "notifications" };
const _hoisted_2$1 = { class: "notifications-container" };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.messages.messages, (message) => {
        return (openBlock(), createElementBlock("div", {
          key: message.id,
          class: normalizeClass(["message", [message.type, message.config?.class ? message.config?.class : '', $setup.classes[message.type]]]),
          style: normalizeStyle(message.config?.style ? message.config.style : {})
        }, [
          createVNode(_component_Icon, {
            icon: message.config?.icon ? message.config.icon : $setup.icons[message.type]
          }, null, 8 /* PROPS */, ["icon"]),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "devider" }, null, -1 /* CACHED */)),
          createBaseVNode("span", null, toDisplayString(message.text), 1 /* TEXT */)
        ], 6 /* CLASS, STYLE */))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}
_sfc_main$1.__file = 'src/components/ui/Notifications.vue';
const Notifications = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-267e4118"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Notifications.vue"]]);

const _sfc_main = {
  __name: 'LocalSettings',
  setup(__props, { expose: __expose }) {
  __expose();

    const themes = ['default', 'dark', 'blue'];

    const data = reactive({
        ready: false,
        theme: localStorage['histoire-theme'] || 'default'
    });

    const changeTheme = (theme) => {
        data.theme = theme;
        localStorage['histoire-theme'] = theme;
        window.setHistoireTheme?.(data.theme);
    };

    onMounted(() => {
        const check = () => {
            if (document.querySelector('#app > .htw-sandbox-hidden')) {
                data.ready = true;
            } else {
                requestAnimationFrame(check);
            }
        };
        check();
    });

const __returned__ = { themes, data, changeTheme, reactive, onMounted, Button, KebabMenu, Notifications };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "histoire-locale-settings" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ($setup.data.ready)
    ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: "#app"
      }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode($setup["KebabMenu"], {
            secondary: true,
            leftAuto: false,
            rightAuto: true
          }, {
            trigger: withCtx(() => [
              createVNode($setup["Button"], {
                name: $setup.data.theme + ' theme',
                icon: "color-scheme",
                class: "secondary"
              }, null, 8 /* PROPS */, ["name"])
            ]),
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.themes, (item) => {
                  return createBaseVNode("li", {
                    key: item,
                    onClick: $event => ($setup.changeTheme(item))
                  }, [
                    (item === $setup.data.theme)
                      ? (openBlock(), createElementBlock("span", _hoisted_3, [
                          createBaseVNode("b", null, toDisplayString(item), 1 /* TEXT */)
                        ]))
                      : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(item), 1 /* TEXT */))
                  ], 8 /* PROPS */, _hoisted_2)
                }), 64 /* STABLE_FRAGMENT */))
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        createVNode($setup["Notifications"])
      ]))
    : createCommentVNode("v-if", true)
}
_sfc_main.__file = 'src/stories/LocalSettings.vue';
const LocalSettings = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-b7737278"],['__file',"C:/MarineTech/rosneft-front/src/stories/LocalSettings.vue"]]);

export { Button as B, KebabMenu as K, LocalSettings as L };
