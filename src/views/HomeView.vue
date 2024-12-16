<script setup>
import {useFlash} from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
  <main>
    <button @click="flash('Yay', 'It works')">Click me</button>
  </main>
</template>
