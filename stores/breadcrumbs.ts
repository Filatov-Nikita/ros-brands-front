import type { RouteLocationRaw } from 'vue-router';

interface Item {
  label: string,
  to?: RouteLocationRaw
}

interface State {
  items: Item[],
}

export const useBreadcrumbsStore = defineStore('breadcrumbsStore', {
  state: (): State => ({
    items: []
  }),
  actions: {
    push(item: Item): void {
      this.items.push(item);
    },
    pop(): void {
      this.items.pop();
    },
    set(items: Item[]) {
      this.items = items;
    },
    reset() {
      this.items = [];
    }
  },
});
