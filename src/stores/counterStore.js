import { defineStore } from "pinia";

export let useCounterStore = defineStore("counter", {
  // State is equivalent to data in options API
  state() {
    return {
      count: 0,
    };
  },

  // actions are equivalent to methods in options API
  actions: {
    increment() {
      if(this.count >= 10) {
        return;
      }
      this.count++;
    },
  },

  // getters are equivalent to computed properties in options API
  getters: {
    remaining() {
      return 10 - this.count;
    },
  },
});
