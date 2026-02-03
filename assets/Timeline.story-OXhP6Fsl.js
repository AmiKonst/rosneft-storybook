import { bf as i18n, av as _export_sfc, aC as createElementBlock, aB as createBaseVNode, ax as createBlock, aK as createCommentVNode, aG as toDisplayString, aD as Fragment, aE as renderList, aA as createVNode, aQ as useI18n, aH as ref, aN as reactive, be as hooks, aY as computed, aX as watch, aI as onMounted, ay as openBlock, aM as normalizeClass, aw as resolveComponent, az as withCtx, aO as logEvent } from './vendor-rawnQjOC.js';
import { B as Button, L as LocalSettings } from './LocalSettings-CPPAeydY.js';
import { M as Menu } from './Menu-CCVTCfoR.js';

const { t: t$2 } = i18n.global;

[
    {
        code: 'HOUR',
        name: t$2('constants.products.timeline.hour')
    },
    {
        code: 'DAY',
        name: t$2('constants.products.timeline.day')
    },
    {
        code: 'MONTH',
        name: t$2('constants.products.timeline.month'),
        default: true
    }
    // {
    //   code: "YEAR",
    //   name: t("constants.products.timeline.year"),
    // },
];

const { t: t$1 } = i18n.global;

// ToDo Вытащить потом в языковые файлы и переписать использование через t()
const TIMELINE_TITLES = {
    MINUTE: 'HH:mm',
    HOUR: `HH ч.`,
    DAY: 'DD',
    MONTH: 'MMM',
    YEAR: 'YYYY'
};

const TIMELINE_SUBTITLES = {
    MINUTE: 'DD-MM-YY',
    HOUR: 'DD-MM-YY',
    DAY: 'MMMM',
    MONTH: 'YYYY'
};

const { t } = i18n.global;

// try {
//     import moment from '@/utils/moment';
// } catch (error) {
//     import moment from 'moment';
// }
// let moment;

// try {
//     moment = await import('@/utils/moment');
// } catch (error) {
//     moment = await import('moment');
// }


// const getRangeDateTitle = (date, range, mode) => {
//     const formats = {
//         minute: mode === 'html' ? '[<small>]HH:mm[</small>] DD.MM.YYYY' : 'HH:mm DD.MM.YYYY',
//         hour: mode === 'html' ? '[<small>]HH:mm[</small>] DD.MM.YYYY' : 'HH:mm DD.MM.YYYY',
//         day: 'DD.MM.YYYY',
//         month: 'MMMM YYYY' + t('common.th'),
//         year: 'YYYY'
//     };
//     return moment(date).format(formats[range ? range.toLowerCase() : 'year']);
// };
const getRangeDateTitle = (dateInput, range, mode) => {
    const date = new Date(dateInput);
    const pad = (n) => String(n).padStart(2, '0');

    const t = (key) => {
        // Замените на реальную функцию локализации, если есть
        return ''; // Пример: возвращает 'г.' или пусто
    };

    const formatDate = (fmt) => {
        switch (fmt) {
            case 'HH:mm DD.MM.YYYY':
                return `${pad(date.getHours())}:${pad(date.getMinutes())} ${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
            case '[<small>]HH:mm[</small>] DD.MM.YYYY':
                return `<small>${pad(date.getHours())}:${pad(date.getMinutes())}</small> ${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
            case 'DD.MM.YYYY':
                return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
            case 'MMMM YYYY':
                return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}${t()}`;
            case 'YYYY':
                return `${date.getFullYear()}`;
            default:
                return date.toISOString();
        }
    };

    const key = range ? range.toLowerCase() : 'year';
    const formats = {
        minute: mode === 'html' ? '[<small>]HH:mm[</small>] DD.MM.YYYY' : 'HH:mm DD.MM.YYYY',
        hour: mode === 'html' ? '[<small>]HH:mm[</small>] DD.MM.YYYY' : 'HH:mm DD.MM.YYYY',
        day: 'DD.MM.YYYY',
        month: 'MMMM YYYY',
        year: 'YYYY'
    };

    return formatDate(formats[key]);
};



const getCellRangeTitle = (from, to, range) => {
    if (['minute', 'hour'].indexOf(range?.toLowerCase()) !== -1) {
        return `${getRangeDateTitle(from, range)} - ${getRangeDateTitle(to, range)}`;
    }

    return getRangeDateTitle(from, range);
};

const timeline = {
    getRangeDateTitle,
    getCellRangeTitle
};

const _sfc_main$1 = {
  __name: 'Timeline',
  props: {
    title: { type: String, default: '' },
    from: { type: [String, Date, null], default: null },
    to: { type: [String, Date, null], default: null },
    steps: { type: Array, default: () => [] }
},
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {

const { t } = useI18n();

const emit = __emit;

const scrollbox = ref(null);

const props = __props;

const data = reactive({
    timelineTo: null,
    timelineFrom: null,
    timelineRangeFrom: props.from ? hooks(props.from).toISOString() : null,
    timelineRangeTo: props.to ? hooks(props.to).toISOString() : null,
    timelineInfo: [],

    timelineStep: props.steps.find((item) => !!item.default)?.code || props.steps[0].code,
    timeSteps: props.steps,
    viewFromPercent: 0,
    viewToPercent: 100,
    lockShiftTimeline: false
});

const getCellRangeTitle = (from, to, range) => {
    return timeline.getCellRangeTitle(from, to, range || data.timelineStep);
};

const timelineCols = computed(() => {
    const getResult = ({ timelineRangeFrom, timelineRangeTo, timelineFrom, timelineTo, timelineStep }) => {
        const result = [];

        if (!timelineTo || !timelineFrom || !timelineStep) {
            return [];
        }

        const from = hooks(timelineFrom);
        const to = hooks(timelineTo);

        const rangeFrom = hooks(timelineRangeFrom);
        const rangeTo = hooks(timelineRangeTo);

        if (to.diff(from) < 0) {
            return [];
        }

        while (from.diff(to) < 0) {
            const localTo = from.clone().endOf(timelineStep.toLowerCase());

            let active = false;
            data.timelineInfo.forEach((item) => {
                if (item.date.diff(from) >= 0 && item.date.diff(localTo.toISOString()) <= 0) {
                    active = true;
                }
            });

            result.push({
                title: TIMELINE_TITLES[timelineStep] ? from.format(TIMELINE_TITLES[timelineStep]) : null,
                subtitle: TIMELINE_SUBTITLES[timelineStep] ? from.format(TIMELINE_SUBTITLES[timelineStep]) : null,
                from: from.toISOString(),
                to: localTo.toISOString(),
                index: from.unix(),
                inRange: rangeFrom.diff(localTo) < 0 && rangeTo.diff(from) >= 0,
                active
            });

            from.add(1, timelineStep.toLowerCase());
        }

        return result;
    };

    return getResult({
        timelineRangeFrom: data.timelineRangeFrom,
        timelineRangeTo: data.timelineRangeTo,
        timelineFrom: data.timelineFrom,
        timelineTo: data.timelineTo,
        timelineStep: data.timelineStep
    });
});

const getTimelineInfo = () => {
    emit('change', {
        from: data.timelineFrom,
        to: data.timelineTo,
        step: data.timelineStep
    });
};

/*
    payload - Array of {
        date - moment js obj
    }
*/
const setTimelineInfo = (payload) => {
    data.timelineInfo = payload;
};

const setDefaultTimelinePeriod = (date) => {
    const step = data.timelineStep.toLowerCase();
    let pos;

    if (date) {
        pos = hooks(date);
    } else {
        const from = hooks(data.timelineRangeFrom).startOf(step);
        const to = hooks(data.timelineRangeTo).endOf(step);
        const diff = to.clone().add(1, 'second').diff(from, step);
        pos = from.add(parseInt(diff / 2), step);
    }

    data.timelineTo = pos.clone().add(30, step).endOf(step).toISOString();
    data.timelineFrom = pos.clone().subtract(30, step).startOf(step).toISOString();
};

const initTimeline = () => {
    // Сначала расширим границы
    if (data.timelineRangeFrom && data.timelineRangeFrom !== 'null') {
        data.timelineRangeFrom = hooks(data.timelineRangeFrom).startOf(data.timelineStep.toLowerCase()).toISOString();
    } else {
        data.timelineRangeFrom = hooks().startOf(data.timelineStep.toLowerCase()).toISOString();
    }

    if (data.timelineRangeTo && data.timelineRangeTo !== 'null') {
        data.timelineRangeTo = hooks(data.timelineRangeTo).endOf(data.timelineStep.toLowerCase()).toISOString();
    } else {
        data.timelineRangeTo = hooks(data.timelineRangeFrom).endOf(data.timelineStep.toLowerCase()).toISOString();
    }

    // Теперь обновим все колонки таймлайна
    setDefaultTimelinePeriod();

    getTimelineInfo();

    // Ждем, когда перерендерится html сетка
    setTimeout(() => {
        setTimelinePos();
    });
};

const setTimeStep = (value) => {
    data.timelineStep = value;

    initTimeline();
};

const onTimelineMouseDown = (e) => {
    const screenX = e.screenX;
    const scrollLeft = scrollbox.value.scrollLeft;

    //
    scrollbox.value.classList.add('on-move');

    const onMouseUp = () => {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMove);

        //
        scrollbox.value.classList.remove('on-move');

        if (data.viewFromPercent < 10) {
            shiftTimelinePeriodAndRestorePosition(-20);
        } else if (data.viewToPercent > 90) {
            shiftTimelinePeriodAndRestorePosition(20);
        }
    };

    const onMove = (e) => {
        scrollbox.value.scrollLeft = scrollLeft - (e.screenX - screenX);
    };

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMove);
};

const onTimelineScroll = (e) => {
    data.viewFromPercent = parseInt((e.target.scrollLeft / e.target.scrollWidth) * 100);
    data.viewToPercent = Math.round(((e.target.scrollLeft + e.target.clientWidth) / e.target.scrollWidth) * 100);

    if (scrollbox.value.classList.contains('on-move')) {
        return;
    }

    if (data.viewFromPercent < 10) {
        shiftTimelinePeriodAndRestorePosition(-20);
    } else if (data.viewToPercent > 90) {
        shiftTimelinePeriodAndRestorePosition(20);
    }
};

const setTimelinePos = (index) => {
    if (!data.timelineRangeFrom || !data.timelineRangeTo) {
        return;
    }

    let col;

    if (!index) {
        const from = hooks(data.timelineRangeFrom);
        const to = hooks(data.timelineRangeTo);
        const diff = to.clone().add(1, 'second').diff(from, data.timelineStep.toLowerCase());

        const pos = from.add(parseInt(diff / 2), data.timelineStep.toLowerCase());

        col = scrollbox.value.querySelector(`[index="${pos.unix()}"]`);
    } else {
        col = scrollbox.value.querySelector(`[index="${index}"]`);
    }

    if (!col) {
        return;
    }

    scrollbox.value.scrollLeft += col.offsetLeft - (scrollbox.value.scrollLeft + scrollbox.value.clientWidth / 2);
};

const shiftTimelinePeriod = (count) => {
    const step = data.timelineStep.toLowerCase();

    if (!data.timelineTo) {
        return;
    }

    // Двигаем влево на 3 колонки
    data.timelineFrom = hooks(data.timelineFrom).add(count, step).startOf(step).toISOString();
    data.timelineTo = hooks(data.timelineTo).add(count, step).endOf(step).toISOString();

    // Перезагружаем данные для таймлайна (полоски)
    getTimelineInfo();
};

// Да, это невероятно длинное название. Но зато голову не придется ломать что тут происходит
const shiftTimelinePeriodAndRestorePosition = (count) => {
    if (data.lockShiftTimeline) {
        return;
    }

    // На всякий пожарный, чтобы миллион раз не вызывалось на каждый чих
    data.lockShiftTimeline = true;

    count <= 0 ? timelineCols.value[0].index : timelineCols.value[timelineCols.value.length - 1].index;

    const left = scrollbox.value.scrollLeft;
    if (left === null) {
        return;
    }

    shiftTimelinePeriod(count);
    scrollbox.value.scrollLeft = -count * scrollbox.value.querySelector('[index]').clientWidth + left;

    setTimeout(() => {
        data.lockShiftTimeline = false;
    }, 300);
};

const shiftTimelinePeriodAndMove = (count) => {
    // Сначала делаем подгрузку, фикся местоположение
    shiftTimelinePeriodAndRestorePosition(count);

    // А вот потом анимашку добавим
    scrollbox.value.scroll({
        left: scrollbox.value.scrollLeft + count * scrollbox.value.querySelector('[index]').clientWidth,
        top: 0,
        behavior: 'smooth'
    });
};

watch(
    () => props,
    (value) => {
        data.timelineRangeFrom = props.from ? hooks(props.from).toISOString() : null;
        data.timelineRangeTo = props.to ? hooks(props.to).toISOString() : null;

        initTimeline();
    },
    { deep: true }
);

onMounted(() => {
    initTimeline();
});

__expose({
    setTimelineInfo
});

const __returned__ = { t, emit, scrollbox, props, data, getCellRangeTitle, timelineCols, getTimelineInfo, setTimelineInfo, setDefaultTimelinePeriod, initTimeline, setTimeStep, onTimelineMouseDown, onTimelineScroll, setTimelinePos, shiftTimelinePeriod, shiftTimelinePeriodAndRestorePosition, shiftTimelinePeriodAndMove, computed, onMounted, reactive, ref, watch, Button, Menu, get TIMELINE_SUBTITLES() { return TIMELINE_SUBTITLES }, get TIMELINE_TITLES() { return TIMELINE_TITLES }, get moment() { return hooks }, get timeline() { return timeline }, get useI18n() { return useI18n } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

const _hoisted_1 = { class: "timeline" };
const _hoisted_2 = { class: "head" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["index"];
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = ["title"];
const _hoisted_8 = { class: "prev" };
const _hoisted_9 = { class: "next" };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", null, [
      createBaseVNode("label", null, toDisplayString($setup.props.title), 1 /* TEXT */),
      _cache[2] || (_cache[2] = createBaseVNode("span", null, null, -1 /* CACHED */)),
      ($setup.data.timeSteps.length > 1)
        ? (openBlock(), createBlock($setup["Menu"], {
            key: 0,
            class: "solid",
            value: $setup.data.timelineStep,
            items: $setup.data.timeSteps,
            onChange: $setup.setTimeStep
          }, null, 8 /* PROPS */, ["value", "items"]))
        : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("div", {
      ref: "scrollbox",
      onScroll: $setup.onTimelineScroll,
      onMousedown: $setup.onTimelineMouseDown
    }, [
      createBaseVNode("div", null, [
        createBaseVNode("div", _hoisted_2, [
          ($setup.timelineCols.length)
            ? (openBlock(), createElementBlock("ul", _hoisted_3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.timelineCols, (item) => {
                  return (openBlock(), createElementBlock("li", {
                    key: item.from,
                    index: item.index
                  }, [
                    (item.title)
                      ? (openBlock(), createElementBlock("label", _hoisted_5, toDisplayString(item.title), 1 /* TEXT */))
                      : createCommentVNode("v-if", true),
                    (item.subtitle)
                      ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(item.subtitle), 1 /* TEXT */))
                      : createCommentVNode("v-if", true)
                  ], 8 /* PROPS */, _hoisted_4))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            : createCommentVNode("v-if", true)
        ])
      ]),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.timelineCols, (col) => {
            return (openBlock(), createElementBlock("span", {
              key: col.from,
              title: $setup.getCellRangeTitle(col.from, col.to),
              class: normalizeClass({
                            active: col.active
                        })
            }, null, 10 /* CLASS, PROPS */, _hoisted_7))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ])
    ], 544 /* NEED_HYDRATION, NEED_PATCH */),
    createBaseVNode("div", _hoisted_8, [
      createVNode($setup["Button"], {
        icon: "left",
        title: _ctx.$t('constants.datetime.timeline.prev'),
        class: "secondary small",
        onClick: _cache[0] || (_cache[0] = $event => ($setup.shiftTimelinePeriodAndMove(-4)))
      }, null, 8 /* PROPS */, ["title"])
    ]),
    createBaseVNode("div", _hoisted_9, [
      createVNode($setup["Button"], {
        icon: "right",
        title: _ctx.$t('constants.datetime.timeline.next'),
        class: "secondary small",
        onClick: _cache[1] || (_cache[1] = $event => ($setup.shiftTimelinePeriodAndMove(4)))
      }, null, 8 /* PROPS */, ["title"])
    ])
  ]))
}
_sfc_main$1.__file = 'src/components/ui/Timeline.vue';
const Timeline = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-5bdaa10d"],['__file',"C:/MarineTech/rosneft-front/src/components/ui/Timeline.vue"]]);

const _sfc_main = {
  __name: 'Timeline.story',
  setup(__props, { expose: __expose }) {
  __expose();

    const steps = [
        {
            code: 'MINUTE',
            name: 'Минута'
        },
        {
            code: 'HOUR',
            name: 'Час'
        },
        {
            code: 'DAY',
            name: 'День',
            default: true
        },
        {
            code: 'MONTH',
            name: 'Месяц'
        },
        {
            code: 'YEAR',
            name: 'Год'
        }
    ];

const __returned__ = { steps, Timeline, LocalSettings, get logEvent() { return logEvent } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");

  return (openBlock(), createBlock(_component_Story, { title: "UI/Timeline Таймлайн просмотра состояния" }, {
    default: withCtx(() => [
      createVNode($setup["LocalSettings"]),
      createCommentVNode(" Простой пример таймлайна "),
      createVNode(_component_Variant, { title: "По умолчанию" }, {
        default: withCtx(() => [
          createVNode($setup["Timeline"], {
            title: "Таймлайн",
            from: new Date('2024-01-01'),
            to: new Date('2024-12-31'),
            steps: $setup.steps,
            onChange: _cache[0] || (_cache[0] = $event => ($setup.logEvent('change', $event)))
          }, null, 8 /* PROPS */, ["from", "to"])
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" Вариант с временным шагом 'Месяц' по умолчанию "),
      createVNode(_component_Variant, { title: "Шаг по умолчанию: Месяц" }, {
        default: withCtx(() => [
          createVNode($setup["Timeline"], {
            title: "Таймлайн (Месяц)",
            from: new Date('2024-01-01'),
            to: new Date('2024-12-31'),
            steps: [
                    {
                        code: 'MONTH',
                        name: 'Месяц',
                        default: true
                    }
                ],
            onChange: _cache[1] || (_cache[1] = $event => ($setup.logEvent('change', $event)))
          }, null, 8 /* PROPS */, ["from", "to"])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
_sfc_main.__file = 'src/stories/ui/Timeline.story.vue';
const Timeline_story = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"C:/MarineTech/rosneft-front/src/stories/ui/Timeline.story.vue"]]);

export { Timeline_story as default };
