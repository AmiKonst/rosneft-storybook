import { av as _export_sfc, ax as createBlock, aK as createCommentVNode, aQ as useI18n, aY as computed, b7 as declOfNum, ay as openBlock, aw as resolveComponent, az as withCtx, aO as logEvent, aA as createVNode } from './vendor-vzr5K0L1.js';
import { B as Button, L as LocalSettings } from './LocalSettings-CmLMbIsG.js';

const _sfc_main$1 = {
  __name: 'LoadMore',
  props: {
    loading: { type: Boolean, default: true },
    total: { type: Number, default: 0 },
    limit: { type: [String, Number], default: 20 },
    values: { type: Array, default: () => [] },
    names: { type: Array, default: () => [] }
},
  emits: ['loadMore'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;

const props = __props;

const { t } = useI18n();

const hasMore = computed(() => props.values.length < props.total);

const moreCount = computed(() => Math.min(props.total - props.values.length, +props.limit));

const loadMoreTitle = computed(() =>
    t('ui.load-more.showMore', { items: `${moreCount.value} ${declOfNum(moreCount.value, props.names)}` })
);

const loadMore = () => {
    emit('loadMore');
};

const __returned__ = { emit, props, t, hasMore, moreCount, loadMoreTitle, loadMore, computed, get useI18n() { return useI18n }, Button, get declOfNum() { return declOfNum } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (!$setup.props.loading && $setup.hasMore)
    ? (openBlock(), createBlock($setup["Button"], {
        key: 0,
        name: $setup.loadMoreTitle,
        class: "secondary light",
        onClick: $setup.loadMore
      }, null, 8 /* PROPS */, ["name"]))
    : createCommentVNode("v-if", true)
}
_sfc_main$1.__file = 'src/components/ui/LoadMore.vue';
const LoadMore = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-5550357a"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/LoadMore.vue"]]);

// Фиктивная обработка события loadMore

const _sfc_main = {
  __name: 'LoadMore.story',
  setup(__props, { expose: __expose }) {
  __expose();

function onLoadMore(tag) {
    logEvent('loadMore', { source: tag, timestamp: Date.now() });
}

const __returned__ = { onLoadMore, LoadMore, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/LoadMore Подгрузка" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" По умолчанию "),
      createVNode(_component_Variant, { title: "По умолчанию (есть ещё элементы)" }, {
        default: withCtx(() => [
          createVNode($setup["LoadMore"], {
            loading: false,
            total: 100,
            values: Array(20).fill(0),
            names: ['элемент', 'элемента', 'элементов'],
            onLoadMore: _cache[0] || (_cache[0] = $event => ($setup.onLoadMore('default')))
          }, null, 8 /* PROPS */, ["values"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Ничего не загружено "),
      createVNode(_component_Variant, { title: "Начальное состояние (все элементы скрыты)" }, {
        default: withCtx(() => [
          createVNode($setup["LoadMore"], {
            loading: false,
            total: 10,
            values: [],
            names: ['запись', 'записи', 'записей'],
            onLoadMore: _cache[1] || (_cache[1] = $event => ($setup.onLoadMore('initial')))
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Осталось меньше лимита "),
      createVNode(_component_Variant, { title: "Осталось меньше лимита" }, {
        default: withCtx(() => [
          createVNode($setup["LoadMore"], {
            loading: false,
            total: 22,
            limit: 10,
            values: Array(17).fill(0),
            names: ['файл', 'файла', 'файлов'],
            onLoadMore: _cache[2] || (_cache[2] = $event => ($setup.onLoadMore('lessThanLimit')))
          }, null, 8 /* PROPS */, ["values"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Все элементы загружены "),
      createVNode(_component_Variant, { title: "Все элементы загружены (кнопка не отображается)" }, {
        default: withCtx(() => [
          createVNode($setup["LoadMore"], {
            loading: false,
            total: 5,
            values: Array(5).fill(0),
            names: ['пользователь', 'пользователя', 'пользователей'],
            onLoadMore: _cache[3] || (_cache[3] = $event => ($setup.onLoadMore('complete')))
          }, null, 8 /* PROPS */, ["values"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Идёт загрузка "),
      createVNode(_component_Variant, { title: "Идёт загрузка (кнопка скрыта)" }, {
        default: withCtx(() => [
          createVNode($setup["LoadMore"], {
            loading: true,
            total: 100,
            values: Array(20).fill(0),
            names: ['запись', 'записи', 'записей'],
            onLoadMore: _cache[4] || (_cache[4] = $event => ($setup.onLoadMore('loading')))
          }, null, 8 /* PROPS */, ["values"])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/LoadMore.story.vue';
const LoadMore_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/LoadMore.story.vue"]]);

export { LoadMore_story as default };
