<script setup>
import { useStorage } from "@/composables/useStorage";

let food = useStorage("food", "pizza");
</script>

<template>
  <main>
    <p>
      What's your favourite food?
      <input type="text" v-model="food" />
    </p>
  </main>
</template>
