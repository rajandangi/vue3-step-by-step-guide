<script setup>
import { useTeamStore } from "@/stores/TeamStore.js";

let team = useTeamStore();
team.fill();
setTimeout(() => {
  team.grow(25);
}, 2000);

import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
