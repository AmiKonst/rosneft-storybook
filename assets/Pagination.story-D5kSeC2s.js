import { av as _export_sfc, b8 as pageSizeOptions, aC as createElementBlock, aK as createCommentVNode, ax as createBlock, aB as createBaseVNode, aS as withDirectives, a_ as vShow, aA as createVNode, aD as Fragment, aE as renderList, aV as Teleport, aG as toDisplayString, aH as ref, aN as reactive, b9 as debounce, aY as computed, aI as onMounted, aX as watch, b5 as Icon, ba as nextTick, ay as openBlock, aM as normalizeClass, aW as withModifiers, aw as resolveComponent, az as withCtx } from './vendor-vzr5K0L1.js';
import { B as Button, L as LocalSettings } from './LocalSettings-CmLMbIsG.js';
import { F as Field } from './Field-B1YYo4d4.js';
import { S as Select } from './Select-Bc3_8Bnh.js';

const _sfc_main$1 = {
  __name: 'Pagination',
  props: {
    total: { type: Number, default: 1 },
    page: { type: Number, default: 1 },
    pageSize: { type: Number, default: 10 },
    showSizeChanger: { type: Boolean, default: false },
    step: { type: Number, default: 3 },
    maxShowPage: { type: Number, default: 10 },
    isShort: { type: Boolean, default: false },
    pageOptions: {
        type: Array,
        default: pageSizeOptions
    }
},
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

const emit = __emit;

const props = __props;

const searchPage = ref(null);

const data = reactive({
    pages: 1,
    currentPage: 1,
    pageSize: props.pageSize,
    opened: false,
    searchPage: null
});

const closeDropdownSearch = () => {
    data.opened = false;
};
const openDropdownSearch = (event) => {
    data.opened = true;
    const rect = event.target.getBoundingClientRect();
    nextTick(() => {
        if (rect.top + searchPage.value.offsetHeight + 10 >= window.innerHeight) {
            searchPage.value.style.top = 'auto';
            searchPage.value.style.bottom = `${searchPage.value.offsetHeight / 2 - 10}px`;
        } else {
            searchPage.value.style.top = `${rect.top + 10}px`;
            searchPage.value.style.bottom = 'auto';
        }
        searchPage.value.style.left = `${rect.right - searchPage.value.offsetWidth / 2}px`;
    });
};

const onSearchChange = debounce((e) => {
    data.searchPage = e.target.value.trim();
}, 200);

const searchFilterPage = computed(() => {
    const arr = Array(data.pages)
        .fill()
        .map((_, i) => `${i + 1}`);
    if (data.searchPage) {
        return arr.filter((el) => el.includes(data.searchPage));
    }
    return arr;
});

const getRange = (start, end) =>
    Array(end - start + 1)
        .fill()
        .map((_, i) => i + start);

const hideOverPages = (currentPage, pagesCount) => {
    if (data.pages <= props.maxShowPage) {
        return [...Array(data.pages)].map((_, i) => i + 1);
    }
    const isFirst = currentPage === 1;
    const isLast = currentPage === pagesCount;
    let delta = 0;
    if (pagesCount <= 2 + props.step) {
        delta = 2 + props.step;
    } else {
        delta += props.step;
        delta -= !isFirst + !isLast;
    }

    const range = {
        start: Math.round(currentPage - 1),
        end: Math.round(currentPage + 1)
    };

    if (range.start - 1 === 1 || range.end + 1 === pagesCount) {
        range.start += 1;
        range.end += 1;
    }

    let pages =
        currentPage > delta
            ? getRange(Math.min(range.start, pagesCount - delta), Math.min(range.end, pagesCount))
            : getRange(1, Math.min(pagesCount, delta + 1));

    const withDots = (value, pair) => (pages.length + 1 !== pagesCount ? pair : [value]);

    if (pages[0] !== 1) {
        const prevPages = [...Array(props.step)].map((_, i) => i + 1);
        if (pages.includes(prevPages[props.step - 1]) || pages[0] - prevPages[props.step - 1] === 1) {
            pages = Array.from(new Set([...prevPages, ...pages]));
        } else {
            pages = withDots(1, [...prevPages, 'prev']).concat(pages);
        }
    }

    if (pages[pages.length - 1] < pagesCount) {
        const nextPages = [...Array(props.step)].map((_, i) => pagesCount - props.step + i + 1);
        if (pages.includes(nextPages[0]) || nextPages[0] - pages[pages.length - 1] === 1) {
            pages = Array.from(new Set([...pages, ...nextPages]));
        } else {
            pages = pages.concat(withDots(pagesCount, ['next', ...nextPages]));
        }
    }

    return pages;
};

const pagination = computed(() => {
    if (data.pages) {
        return !props.isShort ? hideOverPages(data.currentPage, data.pages) : [data.currentPage];
    } else {
        return [];
    }
});

const changePageSize = ({ value }) => {
    data.pageSize = value;
    data.pages = Math.ceil(props.total / data.pageSize);
    if (data.pages < data.pageSize) {
        data.currentPage = data.pages;
    }

    emit('change', {
        page: data.currentPage,
        pageSize: data.pageSize
    });
};

const changePage = (page) => {
    data.currentPage = page;
    emit('change', {
        page: data.currentPage,
        pageSize: data.pageSize
    });
};

const nextPage = (step) => {
    data.currentPage += step;
    emit('change', {
        page: data.currentPage,
        pageSize: data.pageSize
    });
};
const prevPage = (step) => {
    data.currentPage -= step;
    data.currentPage = data.currentPage === 0 ? 1 : data.currentPage;
    emit('change', {
        page: data.currentPage,
        pageSize: data.pageSize
    });
};
onMounted(() => {
    data.currentPage = props.page;
    data.pages = Math.ceil(props.total / data.pageSize);
});

watch(
    () => props.total,
    (total) => {
        data.pages = Math.ceil(total / data.pageSize);
    }
);

const __returned__ = { emit, props, searchPage, data, closeDropdownSearch, openDropdownSearch, onSearchChange, searchFilterPage, getRange, hideOverPages, pagination, changePageSize, changePage, nextPage, prevPage, get debounce() { return debounce }, computed, nextTick, onMounted, reactive, ref, watch, Button, Field, Select, Icon, get pageSizeOptions() { return pageSizeOptions } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1$1 = {
  key: 0,
  class: "pagination"
};
const _hoisted_2 = {
  class: "search-page",
  ref: "searchPage"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["title", "onClick"];
const _hoisted_5 = { key: 2 };
const _hoisted_6 = {
  key: 1,
  class: "all-pages"
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return ($setup.data.pages > 1)
    ? (openBlock(), createElementBlock("ul", _hoisted_1$1, [
        ($setup.props.showSizeChanger)
          ? (openBlock(), createBlock($setup["Select"], {
              key: 0,
              class: "noerror light",
              name: "pageSize",
              value: $setup.data.pageSize,
              clearable: false,
              onChange: $setup.changePageSize,
              optionList: $setup.props.pageOptions
            }, null, 8 /* PROPS */, ["value", "optionList"]))
          : createCommentVNode("v-if", true),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          ($setup.data.opened)
            ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "options-background",
                onClick: $setup.closeDropdownSearch
              }))
            : createCommentVNode("v-if", true),
          withDirectives(createBaseVNode("div", _hoisted_2, [
            createVNode($setup["Field"], {
              class: "noerror light",
              type: "number",
              name: "searchStr",
              onChange: $setup.onSearchChange,
              placeholder: "10",
              icon: "search"
            }, null, 8 /* PROPS */, ["onChange"]),
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.searchFilterPage, (page) => {
                return (openBlock(), createElementBlock("li", {
                  key: page,
                  class: normalizeClass({
                            selected: $setup.data.currentPage == page,
                            matched: $setup.data.searchPage == page
                        }),
                  onClick: $event => ($setup.changePage(+page))
                }, [
                  createBaseVNode("span", null, toDisplayString(page), 1 /* TEXT */),
                  withDirectives(createVNode($setup["Icon"], { icon: "check" }, null, 512 /* NEED_PATCH */), [
                    [vShow, $setup.data.currentPage == page]
                  ])
                ], 10 /* CLASS, PROPS */, _hoisted_3))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ], 512 /* NEED_PATCH */), [
            [vShow, $setup.data.opened]
          ])
        ])),
        createBaseVNode("li", null, [
          createVNode($setup["Button"], {
            disabled: $setup.data.currentPage === 1,
            icon: "arrow-small-left",
            class: "light secondary",
            onClick: _cache[0] || (_cache[0] = $event => ($setup.prevPage(1)))
          }, null, 8 /* PROPS */, ["disabled"])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.pagination, (page) => {
          return (openBlock(), createElementBlock("li", {
            key: page,
            title: page,
            onClick: withModifiers($event => ($setup.props.isShort ? $setup.openDropdownSearch($event) : $setup.changePage(page)), ["stop"]),
            class: normalizeClass({
                active: !$setup.props.isShort && $setup.data.currentPage === page,
                'active-short': $setup.props.isShort && $setup.data.opened
            })
          }, [
            (page === 'prev')
              ? (openBlock(), createBlock($setup["Button"], {
                  key: 0,
                  icon: "dots",
                  class: "light secondary",
                  onClick: withModifiers($setup.openDropdownSearch, ["stop"])
                }))
              : (page === 'next')
                ? (openBlock(), createBlock($setup["Button"], {
                    key: 1,
                    onClick: withModifiers($setup.openDropdownSearch, ["stop"]),
                    class: "light secondary",
                    icon: "dots"
                  }))
                : (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(page), 1 /* TEXT */))
          ], 10 /* CLASS, PROPS */, _hoisted_4))
        }), 128 /* KEYED_FRAGMENT */)),
        createBaseVNode("li", null, [
          createVNode($setup["Button"], {
            disabled: $setup.data.currentPage === $setup.data.pages,
            class: "light secondary",
            icon: "arrow-small-right",
            onClick: _cache[1] || (_cache[1] = $event => ($setup.nextPage(1)))
          }, null, 8 /* PROPS */, ["disabled"])
        ]),
        ($setup.props.isShort)
          ? (openBlock(), createElementBlock("li", _hoisted_6, [
              createBaseVNode("span", null, toDisplayString(_ctx.$t(`ui.pagination.allPages`, { pages: $setup.data.pages })), 1 /* TEXT */)
            ]))
          : createCommentVNode("v-if", true)
      ]))
    : createCommentVNode("v-if", true)
}
_sfc_main$1.__file = 'src/components/ui/Pagination.vue';
const Pagination = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-43428994"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Pagination.vue"]]);

const _sfc_main = {
  __name: 'Pagination.story',
  setup(__props, { expose: __expose }) {
  __expose();

    
const __returned__ = { Pagination, LocalSettings };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "w-full" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Pagination Пагинация" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Простой пример с минимальными параметрами "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Pagination"], {
            total: 100,
            page: 1
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" С выбором размера страницы "),
      createVNode(_component_Variant, { title: "С выбором размера страницы" }, {
        default: withCtx(() => [
          createVNode($setup["Pagination"], {
            total: 100,
            page: 1,
            showSizeChanger: true
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Модификация внешнего вида: короткий режим "),
      createVNode(_component_Variant, { title: "Короткий режим (isShort)" }, {
        default: withCtx(() => [
          createVNode($setup["Pagination"], {
            total: 50,
            page: 3,
            isShort: true
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Центрированная пагинация (через CSS класс) "),
      createVNode(_component_Variant, { title: "Центрировано (class='center')" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["Pagination"], {
              total: 100,
              page: 5,
              class: "center"
            })
          ])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пагинация с большим количеством страниц "),
      createVNode(_component_Variant, { title: "Много страниц (больше maxShowPage)" }, {
        default: withCtx(() => [
          createVNode($setup["Pagination"], {
            total: 1000,
            page: 25,
            maxShowPage: 5
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Пагинация с кастомными pageSizeOptions "),
      createVNode(_component_Variant, { title: "С кастомными pageOptions" }, {
        default: withCtx(() => [
          createVNode($setup["Pagination"], {
            total: 250,
            page: 2,
            showSizeChanger: true,
            pageOptions: [5, 10, 20, 50, 100].map(item => ({ code: item, name: item }))
          }, null, 8 /* PROPS */, ["pageOptions"])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Pagination.story.vue';
const Pagination_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-b14f68da"],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Pagination.story.vue"]]);

export { Pagination_story as default };
