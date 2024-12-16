import { ref, watch } from "vue";

export function useStorage(key, data = null) {
  let storedValue = read();

  if (storedValue) {
    data = ref(storedValue);
  } else {
    data = ref(data);

    write();
  }

  // Watch for changes to the value and update local storage
  watch(data, () => write(), { deep: true });

  function read() {
    if (!localStorage.getItem(key)) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key));
  }

  function write() {
    if (data.value === null || data.value === "") {
      localStorage.removeItem(key);
    } else {
      return localStorage.setItem(key, JSON.stringify(data.value));
    }
  }

  return data;
}
