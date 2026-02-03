const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-docs-data-CsTSr8lN.js","assets/vendor-vzr5K0L1.js"])))=>i.map(i=>d[i]);
import { s as ref, n as watch, c as computed, a0 as markRaw, d as defineComponent, e as createElementBlock, o as openBlock, a7 as renderSlot, A as withKeys, x as normalizeClass, C as createBlock, g as unref, I as Icon, j as createVNode, f as createBaseVNode, k as createCommentVNode, D as createTextVNode, y as toDisplayString, F as Fragment, B as renderList, p as useCssVars, a3 as toRefs, a4 as useRouter, v as withCtx, bi as useFocus, bj as refDebounced, w as withDirectives, aj as vModelText, ad as withModifiers, _ as __vitePreload, bk as Fuse } from './vendor-vzr5K0L1.js';
import { o as onKeyboardShortcut, u as useCommandStore } from './bundle-main-BeeHMsGn.js';
import { u as useStoryStore } from './story-CA2Co9IF.js';
import './mapping-CkYiBiPx.js';
import { B as BaseEmpty } from './BaseEmpty.vue-DN0HoP1h.js';
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from './responsive-DXU-6RYD.js';

function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}

let searchData$1 = { "index": [{ "id": 0, "text": "шрифтовые токены" }, { "id": 1, "text": "шрифтовые токены демонстрация шрифтов" }, { "id": 2, "text": "message уведомления" }, { "id": 3, "text": "message уведомления успешное сообщение" }, { "id": 4, "text": "message уведомления сообщение об ошибке" }, { "id": 5, "text": "message уведомления информационное сообщение" }, { "id": 6, "text": "message уведомления предупреждение" }, { "id": 7, "text": "radio и checkbox" }, { "id": 8, "text": "radio и checkbox checkboxes" }, { "id": 9, "text": "radio и checkbox radio buttons" }, { "id": 10, "text": "цветовые токены" }, { "id": 11, "text": "цветовые токены токены" }, { "id": 12, "text": "accordion аккордеон" }, { "id": 13, "text": "accordion аккордеон базовый закрыт" }, { "id": 14, "text": "accordion аккордеон базовый открыт" }, { "id": 15, "text": "accordion аккордеон тип simple" }, { "id": 16, "text": "accordion аккордеон тип group" }, { "id": 17, "text": "accordion аккордеон иконка  group" }, { "id": 18, "text": "addition fields доп поле при подтверждении" }, { "id": 19, "text": "addition fields доп поле при подтверждении период  необязательное поле" }, { "id": 20, "text": "addition fields доп поле при подтверждении период  обязательное поле" }, { "id": 21, "text": "addition fields доп поле при подтверждении комбинация обязательного и необязательного поля" }, { "id": 22, "text": "auto complete автокомплит" }, { "id": 23, "text": "auto complete автокомплит по умолчанию" }, { "id": 24, "text": "auto complete автокомплит с классом noerror" }, { "id": 25, "text": "auto complete автокомплит с классом light и предустановленными значениями" }, { "id": 26, "text": "auto complete автокомплит отключённый" }, { "id": 27, "text": "auto complete автокомплит с ошибкой" }, { "id": 28, "text": "auto complete автокомплит с иконкой" }, { "id": 29, "text": "auto complete автокомплит максимум одно значение max values count 1" }, { "id": 30, "text": "auto complete автокомплит с иконкой и отсутствием возможностью очистки clearable" }, { "id": 31, "text": "box хранилище" }, { "id": 32, "text": "box хранилище по умолчанию" }, { "id": 33, "text": "box хранилище с кнопкой очистки clearable" }, { "id": 34, "text": "box хранилище без возможности сворачивания collapsable" }, { "id": 35, "text": "box хранилище свернутое состояние collapsed" }, { "id": 36, "text": "box хранилище кнопка справа right" }, { "id": 37, "text": "box хранилище класс round 2 скругление" }, { "id": 38, "text": "bread crumbs хлебные крошки" }, { "id": 39, "text": "bread crumbs хлебные крошки по умолчанию" }, { "id": 40, "text": "button кнопка" }, { "id": 41, "text": "button кнопка по умолчанию" }, { "id": 42, "text": "button кнопка с иконкой и текстом with icon" }, { "id": 43, "text": "button кнопка только иконка icon mode" }, { "id": 44, "text": "button кнопка только иконка минималистичная маленькая icon mode  minimal  small" }, { "id": 45, "text": "button кнопка загрузка loading" }, { "id": 46, "text": "button кнопка отключено disabled" }, { "id": 47, "text": "button кнопка вторичная secondary" }, { "id": 48, "text": "button кнопка вторичная легкая secondary  light" }, { "id": 49, "text": "button кнопка с границей border" }, { "id": 50, "text": "button кнопка вторичная с границей secondary  border" }, { "id": 51, "text": "button кнопка обратный порядок reverse" }, { "id": 52, "text": "button кнопка легкая light" }, { "id": 53, "text": "button кнопка маленькая small" }, { "id": 54, "text": "button кнопка вторичная маленькая с границей secondary  small  border" }, { "id": 55, "text": "button кнопка минималистичная minimal" }, { "id": 56, "text": "button кнопка минималистичная маленькая minimal  small" }, { "id": 57, "text": "button кнопка ссылка link" }, { "id": 58, "text": "button кнопка минималистичная  загрузка  граница" }, { "id": 59, "text": "button кнопка выделенная" }, { "id": 60, "text": "button кнопка активная кнопка active" }, { "id": 61, "text": "button кнопка вторичная активная secondary  active" }, { "id": 62, "text": "button кнопка минималистичная активная minimal  active" }, { "id": 63, "text": "button кнопка ссылка активная link  active" }, { "id": 64, "text": "button кнопка компактная активная light  active" }, { "id": 65, "text": "date field выбор дат" }, { "id": 66, "text": "date field выбор дат по умолчанию" }, { "id": 67, "text": "date field выбор дат с кастомной иконкой" }, { "id": 68, "text": "date field выбор дат с таймпикером auto apply" }, { "id": 69, "text": "date field выбор дат диапазон дат" }, { "id": 70, "text": "date field выбор дат кастомный триггер кнопка" }, { "id": 71, "text": "date field выбор дат выбор месяца" }, { "id": 72, "text": "date field выбор дат выбор года" }, { "id": 73, "text": "date field выбор дат шаг 30 минут" }, { "id": 74, "text": "date field выбор дат без выбора минут" }, { "id": 75, "text": "date field выбор дат стилизация class" }, { "id": 76, "text": "date field выбор дат очистка значения" }, { "id": 77, "text": "drop zone дропзона" }, { "id": 78, "text": "drop zone дропзона по умолчанию 1 файл" }, { "id": 79, "text": "drop zone дропзона множественный выбор до 3 файлов" }, { "id": 80, "text": "drop zone дропзона с отображением информации о файлах" }, { "id": 81, "text": "drop zone дропзона состояние drag over over" }, { "id": 82, "text": "empty label загружка на пустоту" }, { "id": 83, "text": "empty label загружка на пустоту по умолчанию с кнопкой заголовком и описанием" }, { "id": 84, "text": "empty label загружка на пустоту без кнопки" }, { "id": 85, "text": "empty label загружка на пустоту вертикальный режим по умолчанию" }, { "id": 86, "text": "empty label загружка на пустоту слот кастомной кнопки" }, { "id": 87, "text": "excel uploader загрузка данных по шаблону" }, { "id": 88, "text": "excel uploader загрузка данных по шаблону простой пример с двумя колонками" }, { "id": 89, "text": "field поле ввода" }, { "id": 90, "text": "field поле ввода по умолчанию" }, { "id": 91, "text": "field поле ввода с иконкой" }, { "id": 92, "text": "field поле ввода с иконкой и подсказкой info" }, { "id": 93, "text": "field поле ввода с ошибкой is error" }, { "id": 94, "text": "field поле ввода лёгкий стиль light" }, { "id": 95, "text": "field поле ввода лёгкий стиль с ошибкой" }, { "id": 96, "text": "field поле ввода лёгкий стиль с ошибкой и значением" }, { "id": 97, "text": "field поле ввода лёгкий стиль с ошибкой значением и disabled" }, { "id": 98, "text": "field поле ввода только подсказка info" }, { "id": 99, "text": "field поле ввода light  info" }, { "id": 100, "text": "field поле ввода только placeholder" }, { "id": 101, "text": "field поле ввода только placeholder light" }, { "id": 102, "text": "field поле ввода disabled" }, { "id": 103, "text": "field поле ввода disabled с текстом" }, { "id": 104, "text": "field поле ввода пароль password" }, { "id": 105, "text": "field поле ввода очищаемое поле clearable" }, { "id": 106, "text": "field поле ввода без placeholder" }, { "id": 107, "text": "field поле ввода без активного placeholder without active placeholder" }, { "id": 108, "text": "field поле ввода кастомная иконка подсказки info icon без ошибки и с отключённым активным плейсхолдером" }, { "id": 109, "text": "field поле ввода маска ввода телефона" }, { "id": 110, "text": "field поле ввода маска с числовыми ограничениями" }, { "id": 111, "text": "field поле ввода маска буквенно цифрового кода abc 123" }, { "id": 112, "text": "icon иконки" }, { "id": 113, "text": "icon иконки все иконки" }, { "id": 114, "text": "kebab menu кебаб меню" }, { "id": 115, "text": "kebab menu кебаб меню по умолчанию" }, { "id": 116, "text": "kebab menu кебаб меню с кнопкой в стиле secondary" }, { "id": 117, "text": "kebab menu кебаб меню минимальный стиль кнопки" }, { "id": 118, "text": "kebab menu кебаб меню кнопка small  secondary" }, { "id": 119, "text": "kebab menu кебаб меню кастомная кнопка через слот trigger" }, { "id": 120, "text": "link компонент" }, { "id": 121, "text": "link компонент по умолчанию" }, { "id": 122, "text": "link компонент отключено class link disabled" }, { "id": 123, "text": "link компонент с иконкой class link" }, { "id": 124, "text": "link компонент с иконкой справа class link reverse" }, { "id": 125, "text": "link компонент отключена  reverse  иконка" }, { "id": 126, "text": "link компонент посещённая visited" }, { "id": 127, "text": "loader лоадер" }, { "id": 128, "text": "loader лоадер по умолчанию" }, { "id": 129, "text": "loader лоадер с заголовком" }, { "id": 130, "text": "loader лоадер light модификатор" }, { "id": 131, "text": "load more подгрузка" }, { "id": 132, "text": "load more подгрузка по умолчанию есть ещё элементы" }, { "id": 133, "text": "load more подгрузка начальное состояние все элементы скрыты" }, { "id": 134, "text": "load more подгрузка осталось меньше лимита" }, { "id": 135, "text": "load more подгрузка все элементы загружены кнопка не отображается" }, { "id": 136, "text": "load more подгрузка идёт загрузка кнопка скрыта" }, { "id": 137, "text": "menu меню" }, { "id": 138, "text": "menu меню по умолчанию" }, { "id": 139, "text": "menu меню с заданным активным элементом" }, { "id": 140, "text": "menu меню с иконками" }, { "id": 141, "text": "menu меню со счетчиками" }, { "id": 142, "text": "menu меню с классом solid" }, { "id": 143, "text": "menu меню с классом light buttons" }, { "id": 144, "text": "menu меню с классом solid light buttons" }, { "id": 145, "text": "pagination пагинация" }, { "id": 146, "text": "pagination пагинация по умолчанию" }, { "id": 147, "text": "pagination пагинация с выбором размера страницы" }, { "id": 148, "text": "pagination пагинация короткий режим is short" }, { "id": 149, "text": "pagination пагинация центрировано class center" }, { "id": 150, "text": "pagination пагинация много страниц больше max show page" }, { "id": 151, "text": "pagination пагинация с кастомными page options" }, { "id": 152, "text": "range диапазон" }, { "id": 153, "text": "range диапазон по умолчанию значение 50" }, { "id": 154, "text": "range диапазон диапазон от 0 до 200" }, { "id": 155, "text": "range диапазон дробное значение шаг 0 1" }, { "id": 156, "text": "range диапазон произвольные границы 10 30" }, { "id": 157, "text": "range диапазон отключено disabled" }, { "id": 158, "text": "select селект" }, { "id": 159, "text": "select селект по умолчанию" }, { "id": 160, "text": "select селект с выбранным значением" }, { "id": 161, "text": "select селект отключённое состояние disabled" }, { "id": 162, "text": "select селект с иконкой" }, { "id": 163, "text": "select селект с ошибкой is error" }, { "id": 164, "text": "select селект лёгкий стиль  иконка class light with icon noerror" }, { "id": 165, "text": "select селект запрет на очистку выбора clearable" }, { "id": 166, "text": "table таблицы" }, { "id": 167, "text": "table таблицы базовая таблица" }, { "id": 168, "text": "table таблицы с выделением строки selectable" }, { "id": 169, "text": "table таблицы с действиями actions slot" }, { "id": 170, "text": "table таблицы с сортировкой" }, { "id": 171, "text": "timeline таймлайн просмотра состояния" }, { "id": 172, "text": "timeline таймлайн просмотра состояния по умолчанию" }, { "id": 173, "text": "timeline таймлайн просмотра состояния шаг по умолчанию месяц" }, { "id": 174, "text": "toggler тогглер" }, { "id": 175, "text": "toggler тогглер по умолчанию" }, { "id": 176, "text": "toggler тогглер состояние checked" }, { "id": 177, "text": "toggler тогглер отключённый disabled" }, { "id": 178, "text": "toggler тогглер inline стиль" }, { "id": 179, "text": "toggler тогглер inline  checked" }, { "id": 180, "text": "toggler тогглер inline  отключённый" }, { "id": 181, "text": "toggler тогглер отключённый  checked" }, { "id": 182, "text": "toggler тогглер класс square на контейнере" }, { "id": 183, "text": "toggler тогглер cursor default" }], "idMap": { "0": { "id": "src-stories-assets-font-story-vue", "kind": "story" }, "1": { "id": "src-stories-assets-font-story-vue:src-stories-assets-font-story-vue-0", "kind": "variant" }, "2": { "id": "src-stories-assets-message-story-vue", "kind": "story" }, "3": { "id": "src-stories-assets-message-story-vue:src-stories-assets-message-story-vue-0", "kind": "variant" }, "4": { "id": "src-stories-assets-message-story-vue:src-stories-assets-message-story-vue-1", "kind": "variant" }, "5": { "id": "src-stories-assets-message-story-vue:src-stories-assets-message-story-vue-2", "kind": "variant" }, "6": { "id": "src-stories-assets-message-story-vue:src-stories-assets-message-story-vue-3", "kind": "variant" }, "7": { "id": "src-stories-assets-radio-checkbox-story-vue", "kind": "story" }, "8": { "id": "src-stories-assets-radio-checkbox-story-vue:src-stories-assets-radio-checkbox-story-vue-0", "kind": "variant" }, "9": { "id": "src-stories-assets-radio-checkbox-story-vue:src-stories-assets-radio-checkbox-story-vue-1", "kind": "variant" }, "10": { "id": "src-stories-assets-token-story-vue", "kind": "story" }, "11": { "id": "src-stories-assets-token-story-vue:src-stories-assets-token-story-vue-0", "kind": "variant" }, "12": { "id": "src-stories-ui-accordion-story-vue", "kind": "story" }, "13": { "id": "src-stories-ui-accordion-story-vue:src-stories-ui-accordion-story-vue-0", "kind": "variant" }, "14": { "id": "src-stories-ui-accordion-story-vue:src-stories-ui-accordion-story-vue-1", "kind": "variant" }, "15": { "id": "src-stories-ui-accordion-story-vue:src-stories-ui-accordion-story-vue-2", "kind": "variant" }, "16": { "id": "src-stories-ui-accordion-story-vue:src-stories-ui-accordion-story-vue-3", "kind": "variant" }, "17": { "id": "src-stories-ui-accordion-story-vue:src-stories-ui-accordion-story-vue-4", "kind": "variant" }, "18": { "id": "src-stories-ui-additionfields-story-vue", "kind": "story" }, "19": { "id": "src-stories-ui-additionfields-story-vue:src-stories-ui-additionfields-story-vue-0", "kind": "variant" }, "20": { "id": "src-stories-ui-additionfields-story-vue:src-stories-ui-additionfields-story-vue-1", "kind": "variant" }, "21": { "id": "src-stories-ui-additionfields-story-vue:src-stories-ui-additionfields-story-vue-2", "kind": "variant" }, "22": { "id": "src-stories-ui-autocomplete-story-vue", "kind": "story" }, "23": { "id": "src-stories-ui-autocomplete-story-vue:src-stories-ui-autocomplete-story-vue-0", "kind": "variant" }, "24": { "id": "src-stories-ui-autocomplete-story-vue:src-stories-ui-autocomplete-story-vue-1", "kind": "variant" }, "25": { "id": "src-stories-ui-autocomplete-story-vue:src-stories-ui-autocomplete-story-vue-2", "kind": "variant" }, "26": { "id": "src-stories-ui-autocomplete-story-vue:src-stories-ui-autocomplete-story-vue-3", "kind": "variant" }, "27": { "id": "src-stories-ui-autocomplete-story-vue:src-stories-ui-autocomplete-story-vue-4", "kind": "variant" }, "28": { "id": "src-stories-ui-autocomplete-story-vue:src-stories-ui-autocomplete-story-vue-5", "kind": "variant" }, "29": { "id": "src-stories-ui-autocomplete-story-vue:src-stories-ui-autocomplete-story-vue-6", "kind": "variant" }, "30": { "id": "src-stories-ui-autocomplete-story-vue:src-stories-ui-autocomplete-story-vue-7", "kind": "variant" }, "31": { "id": "src-stories-ui-box-story-vue", "kind": "story" }, "32": { "id": "src-stories-ui-box-story-vue:src-stories-ui-box-story-vue-0", "kind": "variant" }, "33": { "id": "src-stories-ui-box-story-vue:src-stories-ui-box-story-vue-1", "kind": "variant" }, "34": { "id": "src-stories-ui-box-story-vue:src-stories-ui-box-story-vue-2", "kind": "variant" }, "35": { "id": "src-stories-ui-box-story-vue:src-stories-ui-box-story-vue-3", "kind": "variant" }, "36": { "id": "src-stories-ui-box-story-vue:src-stories-ui-box-story-vue-4", "kind": "variant" }, "37": { "id": "src-stories-ui-box-story-vue:src-stories-ui-box-story-vue-5", "kind": "variant" }, "38": { "id": "src-stories-ui-breadcrumbs-story-vue", "kind": "story" }, "39": { "id": "src-stories-ui-breadcrumbs-story-vue:src-stories-ui-breadcrumbs-story-vue-0", "kind": "variant" }, "40": { "id": "src-stories-ui-button-story-vue", "kind": "story" }, "41": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-0", "kind": "variant" }, "42": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-1", "kind": "variant" }, "43": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-2", "kind": "variant" }, "44": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-3", "kind": "variant" }, "45": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-4", "kind": "variant" }, "46": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-5", "kind": "variant" }, "47": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-6", "kind": "variant" }, "48": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-7", "kind": "variant" }, "49": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-8", "kind": "variant" }, "50": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-9", "kind": "variant" }, "51": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-10", "kind": "variant" }, "52": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-11", "kind": "variant" }, "53": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-12", "kind": "variant" }, "54": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-13", "kind": "variant" }, "55": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-14", "kind": "variant" }, "56": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-15", "kind": "variant" }, "57": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-16", "kind": "variant" }, "58": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-17", "kind": "variant" }, "59": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-18", "kind": "variant" }, "60": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-19", "kind": "variant" }, "61": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-20", "kind": "variant" }, "62": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-21", "kind": "variant" }, "63": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-22", "kind": "variant" }, "64": { "id": "src-stories-ui-button-story-vue:src-stories-ui-button-story-vue-23", "kind": "variant" }, "65": { "id": "src-stories-ui-datefield-story-vue", "kind": "story" }, "66": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-0", "kind": "variant" }, "67": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-1", "kind": "variant" }, "68": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-2", "kind": "variant" }, "69": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-3", "kind": "variant" }, "70": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-4", "kind": "variant" }, "71": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-5", "kind": "variant" }, "72": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-6", "kind": "variant" }, "73": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-7", "kind": "variant" }, "74": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-8", "kind": "variant" }, "75": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-9", "kind": "variant" }, "76": { "id": "src-stories-ui-datefield-story-vue:src-stories-ui-datefield-story-vue-10", "kind": "variant" }, "77": { "id": "src-stories-ui-dropzone-story-vue", "kind": "story" }, "78": { "id": "src-stories-ui-dropzone-story-vue:src-stories-ui-dropzone-story-vue-0", "kind": "variant" }, "79": { "id": "src-stories-ui-dropzone-story-vue:src-stories-ui-dropzone-story-vue-1", "kind": "variant" }, "80": { "id": "src-stories-ui-dropzone-story-vue:src-stories-ui-dropzone-story-vue-2", "kind": "variant" }, "81": { "id": "src-stories-ui-dropzone-story-vue:src-stories-ui-dropzone-story-vue-3", "kind": "variant" }, "82": { "id": "src-stories-ui-emptylabel-story-vue", "kind": "story" }, "83": { "id": "src-stories-ui-emptylabel-story-vue:src-stories-ui-emptylabel-story-vue-0", "kind": "variant" }, "84": { "id": "src-stories-ui-emptylabel-story-vue:src-stories-ui-emptylabel-story-vue-1", "kind": "variant" }, "85": { "id": "src-stories-ui-emptylabel-story-vue:src-stories-ui-emptylabel-story-vue-2", "kind": "variant" }, "86": { "id": "src-stories-ui-emptylabel-story-vue:src-stories-ui-emptylabel-story-vue-3", "kind": "variant" }, "87": { "id": "src-stories-ui-exceluploder-story-vue", "kind": "story" }, "88": { "id": "src-stories-ui-exceluploder-story-vue:src-stories-ui-exceluploder-story-vue-0", "kind": "variant" }, "89": { "id": "src-stories-ui-field-story-vue", "kind": "story" }, "90": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-0", "kind": "variant" }, "91": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-1", "kind": "variant" }, "92": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-2", "kind": "variant" }, "93": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-3", "kind": "variant" }, "94": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-4", "kind": "variant" }, "95": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-5", "kind": "variant" }, "96": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-6", "kind": "variant" }, "97": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-7", "kind": "variant" }, "98": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-8", "kind": "variant" }, "99": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-9", "kind": "variant" }, "100": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-10", "kind": "variant" }, "101": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-11", "kind": "variant" }, "102": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-12", "kind": "variant" }, "103": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-13", "kind": "variant" }, "104": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-14", "kind": "variant" }, "105": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-15", "kind": "variant" }, "106": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-16", "kind": "variant" }, "107": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-17", "kind": "variant" }, "108": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-18", "kind": "variant" }, "109": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-19", "kind": "variant" }, "110": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-20", "kind": "variant" }, "111": { "id": "src-stories-ui-field-story-vue:src-stories-ui-field-story-vue-21", "kind": "variant" }, "112": { "id": "src-stories-ui-icon-story-vue", "kind": "story" }, "113": { "id": "src-stories-ui-icon-story-vue:src-stories-ui-icon-story-vue-0", "kind": "variant" }, "114": { "id": "src-stories-ui-kebabmenu-story-vue", "kind": "story" }, "115": { "id": "src-stories-ui-kebabmenu-story-vue:src-stories-ui-kebabmenu-story-vue-0", "kind": "variant" }, "116": { "id": "src-stories-ui-kebabmenu-story-vue:src-stories-ui-kebabmenu-story-vue-1", "kind": "variant" }, "117": { "id": "src-stories-ui-kebabmenu-story-vue:src-stories-ui-kebabmenu-story-vue-2", "kind": "variant" }, "118": { "id": "src-stories-ui-kebabmenu-story-vue:src-stories-ui-kebabmenu-story-vue-3", "kind": "variant" }, "119": { "id": "src-stories-ui-kebabmenu-story-vue:src-stories-ui-kebabmenu-story-vue-4", "kind": "variant" }, "120": { "id": "src-stories-ui-link-story-vue", "kind": "story" }, "121": { "id": "src-stories-ui-link-story-vue:src-stories-ui-link-story-vue-0", "kind": "variant" }, "122": { "id": "src-stories-ui-link-story-vue:src-stories-ui-link-story-vue-1", "kind": "variant" }, "123": { "id": "src-stories-ui-link-story-vue:src-stories-ui-link-story-vue-2", "kind": "variant" }, "124": { "id": "src-stories-ui-link-story-vue:src-stories-ui-link-story-vue-3", "kind": "variant" }, "125": { "id": "src-stories-ui-link-story-vue:src-stories-ui-link-story-vue-4", "kind": "variant" }, "126": { "id": "src-stories-ui-link-story-vue:src-stories-ui-link-story-vue-5", "kind": "variant" }, "127": { "id": "src-stories-ui-loader-story-vue", "kind": "story" }, "128": { "id": "src-stories-ui-loader-story-vue:src-stories-ui-loader-story-vue-0", "kind": "variant" }, "129": { "id": "src-stories-ui-loader-story-vue:src-stories-ui-loader-story-vue-1", "kind": "variant" }, "130": { "id": "src-stories-ui-loader-story-vue:src-stories-ui-loader-story-vue-2", "kind": "variant" }, "131": { "id": "src-stories-ui-loadmore-story-vue", "kind": "story" }, "132": { "id": "src-stories-ui-loadmore-story-vue:src-stories-ui-loadmore-story-vue-0", "kind": "variant" }, "133": { "id": "src-stories-ui-loadmore-story-vue:src-stories-ui-loadmore-story-vue-1", "kind": "variant" }, "134": { "id": "src-stories-ui-loadmore-story-vue:src-stories-ui-loadmore-story-vue-2", "kind": "variant" }, "135": { "id": "src-stories-ui-loadmore-story-vue:src-stories-ui-loadmore-story-vue-3", "kind": "variant" }, "136": { "id": "src-stories-ui-loadmore-story-vue:src-stories-ui-loadmore-story-vue-4", "kind": "variant" }, "137": { "id": "src-stories-ui-menu-story-vue", "kind": "story" }, "138": { "id": "src-stories-ui-menu-story-vue:src-stories-ui-menu-story-vue-0", "kind": "variant" }, "139": { "id": "src-stories-ui-menu-story-vue:src-stories-ui-menu-story-vue-1", "kind": "variant" }, "140": { "id": "src-stories-ui-menu-story-vue:src-stories-ui-menu-story-vue-2", "kind": "variant" }, "141": { "id": "src-stories-ui-menu-story-vue:src-stories-ui-menu-story-vue-3", "kind": "variant" }, "142": { "id": "src-stories-ui-menu-story-vue:src-stories-ui-menu-story-vue-4", "kind": "variant" }, "143": { "id": "src-stories-ui-menu-story-vue:src-stories-ui-menu-story-vue-5", "kind": "variant" }, "144": { "id": "src-stories-ui-menu-story-vue:src-stories-ui-menu-story-vue-6", "kind": "variant" }, "145": { "id": "src-stories-ui-pagination-story-vue", "kind": "story" }, "146": { "id": "src-stories-ui-pagination-story-vue:src-stories-ui-pagination-story-vue-0", "kind": "variant" }, "147": { "id": "src-stories-ui-pagination-story-vue:src-stories-ui-pagination-story-vue-1", "kind": "variant" }, "148": { "id": "src-stories-ui-pagination-story-vue:src-stories-ui-pagination-story-vue-2", "kind": "variant" }, "149": { "id": "src-stories-ui-pagination-story-vue:src-stories-ui-pagination-story-vue-3", "kind": "variant" }, "150": { "id": "src-stories-ui-pagination-story-vue:src-stories-ui-pagination-story-vue-4", "kind": "variant" }, "151": { "id": "src-stories-ui-pagination-story-vue:src-stories-ui-pagination-story-vue-5", "kind": "variant" }, "152": { "id": "src-stories-ui-range-story-vue", "kind": "story" }, "153": { "id": "src-stories-ui-range-story-vue:src-stories-ui-range-story-vue-0", "kind": "variant" }, "154": { "id": "src-stories-ui-range-story-vue:src-stories-ui-range-story-vue-1", "kind": "variant" }, "155": { "id": "src-stories-ui-range-story-vue:src-stories-ui-range-story-vue-2", "kind": "variant" }, "156": { "id": "src-stories-ui-range-story-vue:src-stories-ui-range-story-vue-3", "kind": "variant" }, "157": { "id": "src-stories-ui-range-story-vue:src-stories-ui-range-story-vue-4", "kind": "variant" }, "158": { "id": "src-stories-ui-select-story-vue", "kind": "story" }, "159": { "id": "src-stories-ui-select-story-vue:src-stories-ui-select-story-vue-0", "kind": "variant" }, "160": { "id": "src-stories-ui-select-story-vue:src-stories-ui-select-story-vue-1", "kind": "variant" }, "161": { "id": "src-stories-ui-select-story-vue:src-stories-ui-select-story-vue-2", "kind": "variant" }, "162": { "id": "src-stories-ui-select-story-vue:src-stories-ui-select-story-vue-3", "kind": "variant" }, "163": { "id": "src-stories-ui-select-story-vue:src-stories-ui-select-story-vue-4", "kind": "variant" }, "164": { "id": "src-stories-ui-select-story-vue:src-stories-ui-select-story-vue-5", "kind": "variant" }, "165": { "id": "src-stories-ui-select-story-vue:src-stories-ui-select-story-vue-6", "kind": "variant" }, "166": { "id": "src-stories-ui-table-story-vue", "kind": "story" }, "167": { "id": "src-stories-ui-table-story-vue:src-stories-ui-table-story-vue-0", "kind": "variant" }, "168": { "id": "src-stories-ui-table-story-vue:src-stories-ui-table-story-vue-1", "kind": "variant" }, "169": { "id": "src-stories-ui-table-story-vue:src-stories-ui-table-story-vue-2", "kind": "variant" }, "170": { "id": "src-stories-ui-table-story-vue:src-stories-ui-table-story-vue-3", "kind": "variant" }, "171": { "id": "src-stories-ui-timeline-story-vue", "kind": "story" }, "172": { "id": "src-stories-ui-timeline-story-vue:src-stories-ui-timeline-story-vue-0", "kind": "variant" }, "173": { "id": "src-stories-ui-timeline-story-vue:src-stories-ui-timeline-story-vue-1", "kind": "variant" }, "174": { "id": "src-stories-ui-toggler-story-vue", "kind": "story" }, "175": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-0", "kind": "variant" }, "176": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-1", "kind": "variant" }, "177": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-2", "kind": "variant" }, "178": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-3", "kind": "variant" }, "179": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-4", "kind": "variant" }, "180": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-5", "kind": "variant" }, "181": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-6", "kind": "variant" }, "182": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-7", "kind": "variant" }, "183": { "id": "src-stories-ui-toggler-story-vue:src-stories-ui-toggler-story-vue-8", "kind": "variant" } } };

const searchData = markRaw(searchData$1);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});

const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});

const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2114f510"]]);

const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});

const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "1f9aa6ca": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected) return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});

const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f94ad2b"]]);

const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import('./search-docs-data-CsTSr8lN.js'),true              ?__vite__mapDeps([0,1]):void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new Fuse([], {
        keys: ["text"]
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const document of data.index) {
        titleSearchIndex.add(document);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const document of data.index) {
          docSearchIndex.add(document);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          await searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      await load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const result = titleSearchIndex.search(value);
      let rank = 0;
      for (const document of result) {
        const idMapData = titleIdMap[document.item.id];
        if (!idMapData) continue;
        switch (idMapData.kind) {
          case "story": {
            list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
            rank++;
            break;
          }
          case "variant": {
            const [storyId] = idMapData.id.split(":");
            const story = storyStore.getStoryById(storyId);
            const variant = storyStore.getVariantById(idMapData.id);
            list.push(variantResultFactory(story, variant, rank));
            rank++;
            break;
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const result = docSearchIndex.search(query);
        let rank = 0;
        for (const document of result) {
          const idMapData = docIdMap[document.item.id];
          if (!idMapData) continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
              rank++;
              break;
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => _cache[6] || (_cache[6] = [
            createTextVNode(" No results ")
          ])),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

export { _sfc_main as default };
