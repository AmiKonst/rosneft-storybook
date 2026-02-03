import { av as _export_sfc, aC as createElementBlock, aB as createBaseVNode, aD as Fragment, aE as renderList, aN as reactive, bd as changeSort, be as hooks, ay as openBlock, aF as normalizeStyle, aP as createTextVNode, ax as createBlock, aK as createCommentVNode, aG as toDisplayString, aM as normalizeClass, aL as renderSlot, aw as resolveComponent, az as withCtx, aO as logEvent, aA as createVNode } from './vendor-vzr5K0L1.js';
import { B as Button, L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main$1 = {
  __name: 'Table',
  props: {
    columns: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    sort: { type: Object, default: () => ({}) },
    selectedId: { type: [Number, null], default: null }
},
  emits: ['onSort', 'onDblclick', 'onMouseleave', 'onMouseenter', 'onClick'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;

const props = __props;

const data = reactive({});

const updateSort = (key) => {
    emit('onSort', { key, value: changeSort(props.sort[key]) });
};

const __returned__ = { emit, props, data, updateSort, get moment() { return hooks }, reactive, Button, get changeSort() { return changeSort } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "table" };
const _hoisted_2 = ["onDblclick", "onMouseleave", "onMouseenter", "onClick"];
const _hoisted_3 = {
  key: 2,
  class: "actions"
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("table", null, [
      createBaseVNode("colgroup", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.columns, (col, id) => {
          return (openBlock(), createElementBlock("col", {
            key: id,
            style: normalizeStyle(col.width ? `min-width: ${col.width}px; width: ${col.width}px` : null)
          }, null, 4 /* STYLE */))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.columns, (column, id) => {
            return (openBlock(), createElementBlock("th", { key: id }, [
              createBaseVNode("div", null, [
                createTextVNode(toDisplayString(column.title) + " ", 1 /* TEXT */),
                (column.sortField)
                  ? (openBlock(), createBlock($setup["Button"], {
                      key: 0,
                      class: normalizeClass(["small secondary", {
                                    'active-filter': !!$setup.props.sort[column.sortField]
                                }]),
                      icon: $setup.props.sort[column.sortField] === '+' ? 'sort-up' : 'sort-down',
                      onClick: $event => ($setup.updateSort(column.sortField))
                    }, null, 8 /* PROPS */, ["icon", "class", "onClick"]))
                  : createCommentVNode("v-if", true)
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ]),
      createBaseVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.items, (item) => {
          return (openBlock(), createElementBlock("tr", {
            key: item.id,
            class: normalizeClass({ selected: $setup.props.selectedId === item.id }),
            onDblclick: $event => ($setup.emit('onDblclick', item)),
            onMouseleave: $event => ($setup.emit('onMouseleave', item)),
            onMouseenter: $event => ($setup.emit('onMouseenter', item)),
            onClick: $event => ($setup.emit('onClick', item))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.columns, (column, id) => {
              return (openBlock(), createElementBlock("td", { key: id }, [
                (column.dataIndex === 'date')
                  ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString($setup.moment(item?.[column.key]).format('DD.MM.YYYY')), 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
                  : (column.dataIndex === 'datetime')
                    ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString($setup.moment(item?.[column.key]).format('DD.MM.YYYY, HH:mm')), 1 /* TEXT */)
                      ], 64 /* STABLE_FRAGMENT */))
                    : (column.dataIndex === 'actions')
                      ? (openBlock(), createElementBlock("div", _hoisted_3, [
                          renderSlot(_ctx.$slots, "actions", { item: item }, undefined, true)
                        ]))
                      : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                          createTextVNode(toDisplayString(item[column.key]), 1 /* TEXT */)
                        ], 64 /* STABLE_FRAGMENT */))
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_2))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}
_sfc_main$1.__file = 'src/components/ui/Table.vue';
const Table = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-4eb931cf"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Table.vue"]]);

// Массив данных для отображения

const _sfc_main = {
  __name: 'Table.story',
  setup(__props, { expose: __expose }) {
  __expose();

const items = [
    { id: 1, name: 'Объект 1', date: '2023-10-01', createdAt: '2023-10-01T12:00:00' },
    { id: 2, name: 'Объект 2', date: '2023-11-05', createdAt: '2023-11-05T15:30:00' },
    { id: 3, name: 'Объект 3', date: '2023-12-10', createdAt: '2023-12-10T08:45:00' },
];

// Базовые колонки без сортировки
const columns = [
    { title: 'ID', key: 'id', dataIndex: 'text' },
    { title: 'Название', key: 'name', dataIndex: 'text' },
    { title: 'Дата', key: 'date', dataIndex: 'date' }
];

// Колонки с поддержкой сортировки
const columnsWithSort = [
    { title: 'ID', key: 'id', dataIndex: 'text', sortField: 'id' },
    { title: 'Название', key: 'name', dataIndex: 'text', sortField: 'name' },
    { title: 'Создано', key: 'createdAt', dataIndex: 'datetime', sortField: 'createdAt' }
];

// Колонки с actions-слотом
const columnsWithActions = [
    { title: 'ID', key: 'id', dataIndex: 'text' },
    { title: 'Название', key: 'name', dataIndex: 'text' },
    { title: 'Действия', key: '', dataIndex: 'actions' }
];

// Объект сортировки
const sort = reactive({});

// Эмуляция обработки сортировки
const onSort = ({ key, value }) => {
    sort[key] = value;
    logEvent('Сортировка', `${key}: ${value}`);
};

const __returned__ = { items, columns, columnsWithSort, columnsWithActions, sort, onSort, Table, Button, LocalSettings, get logEvent() { return logEvent }, reactive };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Table Таблицы" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Пример таблицы без классов "),
      createVNode(_component_Variant, { title: "Базовая таблица" }, {
        default: withCtx(() => [
          createVNode($setup["Table"], {
            columns: $setup.columns,
            items: $setup.items,
            sort: $setup.sort,
            onOnSort: $setup.onSort,
            onOnClick: _cache[0] || (_cache[0] = $event => ($setup.logEvent('click', $event)))
          }, null, 8 /* PROPS */, ["sort"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Таблица с возможностью выбора строки "),
      createVNode(_component_Variant, { title: "С выделением строки (selectable)" }, {
        default: withCtx(() => [
          createVNode($setup["Table"], {
            class: "selectable",
            columns: $setup.columns,
            items: $setup.items,
            sort: $setup.sort,
            selectedId: 2,
            onOnSort: $setup.onSort,
            onOnClick: _cache[1] || (_cache[1] = $event => ($setup.logEvent('click', $event)))
          }, null, 8 /* PROPS */, ["sort"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Таблица с действиями в колонке "),
      createVNode(_component_Variant, { title: "С действиями (actions slot)" }, {
        default: withCtx(() => [
          createVNode($setup["Table"], {
            class: "selectable",
            columns: $setup.columnsWithActions,
            items: $setup.items,
            sort: $setup.sort,
            onOnSort: $setup.onSort,
            onOnClick: _cache[2] || (_cache[2] = $event => ($setup.logEvent('click', $event)))
          }, {
            actions: withCtx(({ item }) => [
              createVNode($setup["Button"], {
                icon: "trash",
                class: "secondary light",
                onClick: $event => ($setup.logEvent('Удалить', item))
              }, null, 8 /* PROPS */, ["onClick"]),
              createVNode($setup["Button"], {
                icon: "info",
                class: "secondary light",
                onClick: $event => ($setup.logEvent('Инфо', item))
              }, null, 8 /* PROPS */, ["onClick"])
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["sort"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Таблица с сортировкой по дате "),
      createVNode(_component_Variant, { title: "С сортировкой" }, {
        default: withCtx(() => [
          createVNode($setup["Table"], {
            columns: $setup.columnsWithSort,
            items: $setup.items,
            sort: $setup.sort,
            class: "selectable",
            onOnSort: $setup.onSort,
            onOnClick: _cache[3] || (_cache[3] = $event => ($setup.logEvent('click', $event)))
          }, null, 8 /* PROPS */, ["sort"])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Table.story.vue';
const Table_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Table.story.vue"]]);

export { Table_story as default };
