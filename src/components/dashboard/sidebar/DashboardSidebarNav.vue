<script setup lang="ts"></script>

<template>
  <div class="nav-wrapper overflow-x-hidden overflow-y-auto">
    <ul class="nav nav-pills border-0 flex-column row-gap-5">
      <li class="nav-item">
        <RouterLink
          to="/dashboard/records"
          class="nav-link border-start border-4 border-light text-start d-flex align-items-center"
          ><i class="bi bi-file-earmark-text me-3 fs-4"></i>Records</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          to="/dashboard/farmers"
          class="nav-link border-start border-4 border-light text-start d-flex align-items-center"
          ><i class="bi bi-sun me-3 fs-4"></i>Farmers</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          to="/dashboard/staffs"
          class="nav-link border-start border-4 border-light text-start d-flex align-items-center"
          ><i class="bi bi-people me-3 fs-4"></i>Staffs</RouterLink
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
  border-left: 4px solid !important;
}
</style>
