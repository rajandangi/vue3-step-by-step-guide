<script setup>
import { useTeamStore } from "@/stores/TeamStore.js";

let team = useTeamStore();
team.fill();
// setTimeout(() => {
//   team.grow(25);
// }, 2000);

import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import Modal from "@/components/Teams/TeamModal.vue";
import { ref } from "vue";

let showModal = ref(false);
</script>

<template>
  <TeamHeader @open-modal="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Modal :show="showModal" @close-modal="showModal = false">
    <template #default>
      <p>Need to add a new member to your team?</p>
      <div class="flex mt-6 gap-3">
        <input type="email" class="flex-1" />
        <button>Add</button>
      </div>
    </template>
  </Modal>
</template>
