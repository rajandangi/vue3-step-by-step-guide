<script setup>
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
  <div>
    <button @click="flash('You did it', 'It works from the About Page', 'info')">
      Click me
    </button>
  </div>
</template>
