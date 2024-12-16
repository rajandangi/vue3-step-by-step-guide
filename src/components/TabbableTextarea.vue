<script setup>
defineProps({
  modelValue: String,
});

let emit = defineEmits(["update:modelValue"]); // update:modelValue is the v-model event name for custom components

function onTabPress(e) {
  let textarea = e.target;

  // Get Position/Selection
  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

  // Set textarea value to: text before caret + tab + text after caret
  textarea.value = val.substring(0, start) + "\t" + val.substring(end);

  // Put caret at right position again
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', $event.target.value)"
    v-text="modelValue"
  />
</template>
