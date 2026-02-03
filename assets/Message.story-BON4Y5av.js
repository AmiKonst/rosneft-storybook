import { av as _export_sfc, aw as resolveComponent, ax as createBlock, aJ as message, ay as openBlock, az as withCtx, aA as createVNode, aK as createCommentVNode } from './vendor-rawnQjOC.js';
import { L as LocalSettings, B as Button } from './LocalSettings-CPPAeydY.js';

const _sfc_main = {
  __name: 'Message.story',
  setup(__props, { expose: __expose }) {
  __expose();

    const showSuccess = () => {
        message.success('Операция прошла успешно');
    };

    const showError = () => {
        message.error('Произошла ошибка');
    };

    const showInfo = () => {
        message.info('Информационное сообщение');
    };

    const showWarning = () => {
        message.warning('Предупреждение');
    };

const __returned__ = { showSuccess, showError, showInfo, showWarning, get message() { return message }, Button, LocalSettings };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "Assets/Message Уведомления" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Успешное сообщение "),
      createVNode(_component_Variant, { title: "Успешное сообщение" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Показать Success",
            class: "bg-green-500 text-white hover:bg-green-600",
            onClick: $setup.showSuccess
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Ошибка "),
      createVNode(_component_Variant, { title: "Сообщение об ошибке" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Показать Error",
            class: "bg-red-500 text-white hover:bg-red-600",
            onClick: $setup.showError
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Информационное "),
      createVNode(_component_Variant, { title: "Информационное сообщение" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Показать Info",
            class: "bg-blue-500 text-white hover:bg-blue-600",
            onClick: $setup.showInfo
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Предупреждение "),
      createVNode(_component_Variant, { title: "Предупреждение" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            name: "Показать Warning",
            class: "bg-yellow-500 text-black hover:bg-yellow-600",
            onClick: $setup.showWarning
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/assets/Message.story.vue';
const Message_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/assets/Message.story.vue"]]);

export { Message_story as default };
