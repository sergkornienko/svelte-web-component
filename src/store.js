import { readable, get } from 'svelte/store'
export const count = readable(0, set => {
  window.onmessage = (e) => {
    if (e.data && e.data.num) {
      set(get(count) + e.data.num);
    }
  };
});