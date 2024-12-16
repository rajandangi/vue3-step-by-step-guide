// store.js
import { reactive } from "vue";

export const counter = reactive({
  // state
  count: 0,

  // actions
  increment() {
    this.count++;
  },
});
