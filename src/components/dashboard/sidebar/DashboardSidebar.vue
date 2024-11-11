<script setup lang="ts">
import DashboardSidebarLogo from './DashboardSidebarLogo.vue';
import DashboardSidebarNav from './DashboardSidebarNav.vue';
</script>

<template>
  <aside
    class="dashboard-sidebar col-12 col-md-3 col-lg-2 vh-100 bg-white px-0 position-fixed top-0"
  >
    <DashboardSidebarLogo />
    <DashboardSidebarNav />
  </aside>
</template>

<style scoped>
.dashboard-sidebar {
  z-index: 1070;
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
