const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ExcelUploader-DWY0liKr.js","assets/vendor-rawnQjOC.js","assets/LocalSettings-CPPAeydY.js"])))=>i.map(i=>d[i]);
import { av as _export_sfc, aw as resolveComponent, ax as createBlock, az as withCtx, aH as ref, W as defineAsyncComponent, b6 as excelColName, _ as __vitePreload, ay as openBlock, aA as createVNode, aK as createCommentVNode } from './vendor-rawnQjOC.js';
import { L as LocalSettings } from './LocalSettings-CPPAeydY.js';

// Простой набор колонок без ограничений

const _sfc_main = {
  __name: 'ExcelUploder.story',
  setup(__props, { expose: __expose }) {
  __expose();

const ExcelUploader = defineAsyncComponent(() => __vitePreload(() => import('./ExcelUploader-DWY0liKr.js'),true              ?__vite__mapDeps([0,1,2]):void 0));

const simpleCols = [
    { name: 'Имя', code: 'name', type: 'text' },
    { name: 'Возраст', code: 'age', type: 'number' }
];
const simpleValues = [
    { name: 'Иван', age: 28 },
    { name: 'Анна', age: 34 }
];

const __returned__ = { ExcelUploader, simpleCols, simpleValues, defineAsyncComponent, LocalSettings, ref, get excelColName() { return excelColName } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/ExcelUploader Загрузка данных по шаблону" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Базовый вариант использования "),
      createVNode(_component_Variant, { title: "Простой пример с двумя колонками" }, {
        default: withCtx(() => [
          createVNode($setup["ExcelUploader"], {
            cols: $setup.simpleCols,
            values: $setup.simpleValues,
            title: "Простой файл"
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/ExcelUploder.story.vue';
const ExcelUploder_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/ExcelUploder.story.vue"]]);

export { ExcelUploder_story as default };
