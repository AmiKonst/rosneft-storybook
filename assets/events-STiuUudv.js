import { l as defineStore, E as reactive, s as ref, n as watch } from './vendor-rawnQjOC.js';
import { u as useStoryStore } from './story-BmNzyU2e.js';
import './mapping-DTmyKjvM.js';

const useEventsStore = defineStore("events", () => {
  const storyStore = useStoryStore();
  const events = reactive([]);
  const unseen = ref(0);
  function addEvent(event) {
    events.push(event);
    unseen.value++;
  }
  function reset() {
    events.length = 0;
    unseen.value = 0;
  }
  watch(() => {
    var _a;
    return (_a = storyStore.currentVariant) == null ? void 0 : _a.id;
  }, () => {
    reset();
  });
  return {
    addEvent,
    reset,
    events,
    unseen
  };
});

export { useEventsStore };
