<script setup>
import Modal from "@/components/Teams/TeamModal.vue";
import {useTeamStore} from "@/stores/TeamStore.js";
import { ref } from "vue";

let showModal = ref(false);
let team = useTeamStore();
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="!team.spotsRemaining"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>

  <Teleport to="body">
    <Modal :show="showModal" @close-modal="showModal = false">
      <template #default>
        <p>Need to add a new member to your team?</p>
        <div class="flex mt-6 gap-3">
          <input type="email" class="flex-1" />
          <button>Add</button>
        </div>
      </template>
    </Modal>
  </Teleport>
</template>
