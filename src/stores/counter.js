import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    setCount(newCount) {
      this.count = newCount;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});