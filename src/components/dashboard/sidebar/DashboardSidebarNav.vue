<script setup lang="ts">
import { PhFiles, PhUsers, PhLeaf } from '@phosphor-icons/vue';
</script>

<template>
  <div class="nav-wrapper overflow-x-hidden overflow-y-auto">
    <ul class="nav nav-pills border-0 flex-column row-gap-3">
      <li class="nav-item">
        <RouterLink
          to="/dashboard/records"
          class="nav-link border-start border-3 border-light text-start d-flex align-items-center"
          ><PhFiles :size="25" class="me-3" /> Records</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          to="/dashboard/farmers"
          class="nav-link border-start border-3 border-light text-start d-flex align-items-center"
          ><PhLeaf :size="25" class="me-3" /> Farmers</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          to="/dashboard/staffs"
          class="nav-link border-start border-3 border-light text-start d-flex align-items-center"
          ><PhUsers :size="25" class="me-3" /> Staffs</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-wrapper {
  height: calc(100vh - 3.75rem - 1px);
}

.nav-wrapper :deep(.active),
.nav-wrapper .nav-link:hover {
  border-left: 3px solid !important;
}
</style>
