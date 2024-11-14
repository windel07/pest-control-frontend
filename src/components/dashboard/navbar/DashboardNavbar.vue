<script setup lang="ts">
import DashboardNavbarNav from './DashboardNavbarNav.vue';
</script>

<template>
  <above
    class="dashboard-navbar navbar fixed-top justify-content-end py-2 px-3 rounded-2"
  >
    <DashboardNavbarNav />
  </above>
</template>

<style scoped>
.dashboard-navbar {
  will-change: transform;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition:
    transform 0.2s ease-in-out,
    -webkit-transform 0.2s ease-in-out;
  box-shadow:
    0 0.125rem 9.375rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.5rem rgba(90, 97, 105, 0.12),
    0 0.9375rem 1.375rem rgba(90, 97, 105, 0.1),
    0 0.4375rem 2.1875rem rgba(165, 182, 201, 0.1);
}
</style>
