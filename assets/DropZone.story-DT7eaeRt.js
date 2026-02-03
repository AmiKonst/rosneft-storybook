import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aB as createBaseVNode, aK as createCommentVNode, aP as createTextVNode, aA as createVNode, aG as toDisplayString, aD as Fragment, aE as renderList, aW as withModifiers, aM as normalizeClass, aQ as useI18n, aN as reactive, aH as ref, aJ as message, ay as openBlock, ax as createBlock, az as withCtx, b5 as Icon, aO as logEvent } from './vendor-rawnQjOC.js';
import { L as LocalSettings } from './LocalSettings-CPPAeydY.js';

const _sfc_main$1 = {
  __name: 'DropZone',
  props: {
    description: { type: String, default: 'ui.drop-zone.description' },
    maxFilesCount: { type: Number, default: 1 },
    maxFileSize: { type: Number, default: 64 * 1024 * 1024 },
    formats: { type: Array, default: () => [] },
    showDetailInfo: { type: Boolean, default: false },
    i18n: { type: Boolean, default: true }
},
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;

const { t } = useI18n();
const props = __props;

const data = reactive({
    files: [],
    over: false
});

const fileInput = ref(null);

const selectFiles = () => {
    fileInput.value.click();
};

const onDragEnter = () => (data.over = true);
const onDragLeave = () => (data.over = false);

const handleDrop = (event) => {
    const droppedFiles = Array.from(event.dataTransfer.files);
    validateAndAddFiles(droppedFiles);
};

const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);
    validateAndAddFiles(selectedFiles);
};

const validateAndAddFiles = (newFiles) => {
    data.over = false;

    if (data.files.length + newFiles.length > props.maxFiles) {
        message.error(t('ui.drop-zone.error.maxLength', { type: props.maxFiles }));
        return;
    }

    newFiles.forEach((file) => {
        if (file.size > props.maxFileSize) {
            message.error(t('ui.drop-zone.error.maxSize', { type: parseInt(props.maxFileSize / (1024 * 1024)) }));
            return;
        }

        data.files.push(file);
    });

    emit('change', data.files);
};

const __returned__ = { emit, t, props, data, fileInput, selectFiles, onDragEnter, onDragLeave, handleDrop, handleFiles, validateAndAddFiles, reactive, ref, get useI18n() { return useI18n }, get message() { return message } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1$1 = ["multiple", "accept"];
const _hoisted_2$1 = { key: 0 };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["dropzone", { over: $setup.data.over }]),
    onClick: $setup.selectFiles,
    onDragover: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"])),
    onDragenter: withModifiers($setup.onDragEnter, ["self"]),
    onDragleave: withModifiers($setup.onDragLeave, ["self"]),
    onDrop: withModifiers($setup.handleDrop, ["prevent"])
  }, [
    createBaseVNode("input", {
      type: "file",
      ref: "fileInput",
      multiple: $setup.props.maxFilesCount > 1,
      accept: $setup.props.formats.join(','),
      onChange: $setup.handleFiles,
      style: {"display":"none"}
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1$1),
    createBaseVNode("p", null, [
      createTextVNode(toDisplayString($setup.props.i18n ? $setup.t($setup.props.description) : $setup.props.description) + " ", 1 /* TEXT */),
      createVNode(_component_Icon, { icon: "upload" })
    ]),
    ($setup.props.showDetailInfo)
      ? (openBlock(), createElementBlock("ul", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.data.files, (file, index) => {
            return (openBlock(), createElementBlock("li", { key: index }, toDisplayString(file.name), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ], 34 /* CLASS, NEED_HYDRATION */))
}
_sfc_main$1.__file = 'src/components/ui/DropZone.vue';
const DropZone = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-7dba0be9"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/DropZone.vue"]]);

const _sfc_main = {
  __name: 'DropZone.story',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { DropZone, LocalSettings, get logEvent() { return logEvent }, Icon };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { style: {"pointer-events":"none"} };
const _hoisted_2 = { class: "dropzone over" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/DropZone Дропзона" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Базовая зона загрузки одного файла "),
      createVNode(_component_Variant, { title: "По умолчанию (1 файл)" }, {
        default: withCtx(() => [
          createVNode($setup["DropZone"], {
            description: "ui.drop-zone.description",
            formats: ['image/png', 'image/jpeg'],
            onChange: _cache[0] || (_cache[0] = $event => ($setup.logEvent('file-change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Множественная загрузка файлов "),
      createVNode(_component_Variant, { title: "Множественный выбор (до 3 файлов)" }, {
        default: withCtx(() => [
          createVNode($setup["DropZone"], {
            description: "Выберите до 3 файлов",
            i18n: false,
            maxFilesCount: 3,
            formats: ['.pdf', '.docx'],
            onChange: _cache[1] || (_cache[1] = $event => ($setup.logEvent('multi-file-change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С отображением списка выбранных файлов "),
      createVNode(_component_Variant, { title: "С отображением информации о файлах" }, {
        default: withCtx(() => [
          createVNode($setup["DropZone"], {
            description: "Выберите файлы, информация отобразится ниже",
            i18n: false,
            showDetailInfo: true,
            formats: ['image/png', 'image/jpeg'],
            maxFilesCount: 5,
            onChange: _cache[2] || (_cache[2] = $event => ($setup.logEvent('detailed-file-change', $event)))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Демонстрация класса .over при перетаскивании "),
      createVNode(_component_Variant, { title: "Состояние drag-over (.over)" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createCommentVNode(" Имитация внешнего вида при наведении файлов "),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("p", null, [
                _cache[3] || (_cache[3] = createTextVNode(" Наведён файл ")),
                createVNode($setup["Icon"], { icon: "upload" })
              ])
            ])
          ])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/DropZone.story.vue';
const DropZone_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-967a4c8e"],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/DropZone.story.vue"]]);

export { DropZone_story as default };
