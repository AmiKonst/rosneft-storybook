import { av as _export_sfc, aw as resolveComponent, aC as createElementBlock, aK as createCommentVNode, ay as openBlock, aA as createVNode, aB as createBaseVNode, aH as ref, aQ as useI18n, bl as saveFile, b6 as excelColName, aJ as message, be as hooks, bm as readXlsxFile, bn as XLSX, bo as utils, bp as writeSync } from './vendor-vzr5K0L1.js';
import { B as Button } from './LocalSettings-CmLMbIsG.js';

const _sfc_main = {
  __name: 'ExcelUploader',
  props: {
    cols: { type: Array, default: () => [] },
    values: { type: Array, default: () => [] },
    title: { type: String, default: 'Excel' },
    styles: { type: Array, default: () => [] }
},
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const input = ref(null);
const emit = __emit;
const { t } = useI18n();

const download = () => {
    // Создаем новую книгу и лист
    const wb = utils.book_new();
    const ws_data = [];

    // Заголовок
    const header = props.cols.map(col => col.name);
    ws_data.push(header);

    // Данные
    props.values.forEach(row => {
        const rowData = props.cols.map(col => {
            if (col.type === 'number') {
                const val = row[col.code];
                return typeof val === 'number' ? val : Number(val) || 0;
            } else {
                return row[col.code] || '';
            }
        });
        ws_data.push(rowData);
    });

    // Создаем лист из массива данных
    const ws = utils.aoa_to_sheet(ws_data);

    // Заморозка первой строки (Excel: Freeze Panes)
    ws['!freeze'] = { xSplit: '0', ySplit: '1' };

    // Валидация данных в xlsx через SheetJS сложная и не поддерживается напрямую
    // Если нужна, можно добавить Data Validations вручную с помощью более сложных манипуляций с XML,
    // но обычно делают это уже после выгрузки.
    // Поэтому здесь просто оставляем комментарий.

    // Добавляем лист в книгу
    utils.book_append_sheet(wb, ws, t('ui.excel-uploader.workShit'));

    // Генерируем бинарный файл и сохраняем
    const wbout = writeSync(wb, { bookType: 'xlsx', type: 'array' });
    saveFile(new Blob([wbout], { type: 'application/octet-stream' }),
        `${props.title} (${hooks().format(t('common.moment.ddMMMhhMM'))}).xlsx`);
};

const upload = async () => {
    if (!input.value.files?.length) return;

    const rows = await readXlsxFile(input.value.files[0]);
    if (!rows?.length) return;

    const invalid = rows.slice(1).some(row => {
        return props.cols.some((col, id) => {
            const value = row[id];
            return (
                (col.required && value === null) ||
                (col.max !== undefined && value > col.max) ||
                (col.min !== undefined && value < col.min) ||
                (value && col.type === 'number' && isNaN(value))
            );
        });
    });

    if (invalid) {
        message.error(t('ui.excel-uploader.saveError'));
        return;
    }

    const values = rows.slice(1).map(item => {
        const value = {};
        props.cols.forEach((col, id) => {
            value[col.code] = item[id];
        });
        return value;
    });

    emit('change', values);
    input.value.value = '';
};

const props = __props;

const __returned__ = { input, emit, t, download, upload, props, get XLSX() { return XLSX }, get readXlsxFile() { return readXlsxFile }, ref, get useI18n() { return useI18n }, Button, get moment() { return hooks }, get message() { return message }, get excelColName() { return excelColName }, get saveFile() { return saveFile } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = {
  key: 0,
  class: "excel-uploader more"
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return ($setup.props?.cols?.length)
    ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode($setup["Button"], {
          onClick: $setup.download,
          name: $setup.t('ui.excel-uploader.download'),
          icon: "download"
        }, null, 8 /* PROPS */, ["name"]),
        createVNode(_component_Icon, { icon: "arrow-right" }),
        createVNode($setup["Button"], {
          onClick: _cache[0] || (_cache[0] = $event => ($setup.input.click())),
          name: $setup.t('ui.excel-uploader.save'),
          icon: "upload"
        }, null, 8 /* PROPS */, ["name"]),
        createBaseVNode("input", {
          ref: "input",
          type: "file",
          onChange: $setup.upload,
          accept: ".xlsx"
        }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)
      ]))
    : createCommentVNode("v-if", true)
}
_sfc_main.__file = 'src/components/ui/ExcelUploader.vue';
const ExcelUploader = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-59d91944"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/ExcelUploader.vue"]]);

export { ExcelUploader as default };
