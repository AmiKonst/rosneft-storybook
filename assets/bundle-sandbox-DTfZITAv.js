import { P as parseQuery, s as ref, M as createApp, Q as h, S as SANDBOX_READY, c as computed, R as STATE_SYNC, U as PREVIEW_SETTINGS_SYNC, n as watch, L as onMounted, V as applyState, N as createPinia, h as histoireConfig, a as isDark } from './vendor-vzr5K0L1.js';
import { m as mapFile, f as files, _ as _sfc_main } from './mapping-CkYiBiPx.js';
import { _ as _sfc_main$1, a as applyPreviewSettings, t as toRawDeep } from './state-DdVVqJU3.js';

const query = parseQuery(window.location.search);
const file = ref(mapFile(files.find((f) => f.id === query.storyId)));
const app = createApp({
  name: "SandboxApp",
  setup() {
    const story = computed(() => file.value.story);
    const variant = computed(() => {
      var _a;
      return (_a = story.value) == null ? void 0 : _a.variants.find((v) => v.id === query.variantId);
    });
    let synced = false;
    let mounted = false;
    window.addEventListener("message", (event) => {
      var _a, _b;
      if (((_a = event.data) == null ? void 0 : _a.type) === STATE_SYNC) {
        if (!mounted) return;
        synced = true;
        applyState(variant.value.state, event.data.state);
      } else if (((_b = event.data) == null ? void 0 : _b.type) === PREVIEW_SETTINGS_SYNC) {
        applyPreviewSettings(event.data.settings);
      }
    });
    watch(() => variant.value.state, (value) => {
      var _a;
      if (synced && mounted) {
        synced = false;
        return;
      }
      (_a = window.parent) == null ? void 0 : _a.postMessage({
        type: STATE_SYNC,
        state: toRawDeep(value, true)
      });
    }, {
      deep: true
    });
    onMounted(() => {
      mounted = true;
    });
    return {
      story,
      variant
    };
  },
  render() {
    return [
      h("div", { class: "htw-sandbox-hidden" }, [
        h(_sfc_main, {
          key: file.value.story.id,
          story: file.value.story
        })
      ]),
      this.story && this.variant ? h(_sfc_main$1, { story: this.story, variant: this.variant, onReady: () => {
        var _a;
        (_a = window.parent) == null ? void 0 : _a.postMessage({
          type: SANDBOX_READY
        });
      } }) : null
    ];
  }
});
app.use(createPinia());
app.mount("#app");
watch(isDark, (value) => {
  if (value) {
    document.documentElement.classList.add(histoireConfig.sandboxDarkClass);
    document.documentElement.classList.add(histoireConfig.theme.darkClass);
  } else {
    document.documentElement.classList.remove(histoireConfig.sandboxDarkClass);
    document.documentElement.classList.remove(histoireConfig.theme.darkClass);
  }
}, {
  immediate: true
});
