<script>
import flash from "@/mixins/flash";

export default {
  mixins: [flash]
}
</script>

<template>
  <main>
    <button @click="flash('It works')">Click me</button>
  </main>
</template>
