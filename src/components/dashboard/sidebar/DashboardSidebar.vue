<script setup lang="ts">
import DashboardSidebarLogo from './DashboardSidebarLogo.vue';
import DashboardSidebarNav from './DashboardSidebarNav.vue';
</script>

<template>
  <aside
    class="dashboard-sidebar col-12 col-md-3 col-lg-2 bg-light p-0 pt-4 position-fixed rounded-2"
  >
    <DashboardSidebarLogo />
    <DashboardSidebarNav />
  </aside>
</template>

<style scoped>
.dashboard-sidebar {
  top: 30px;
  left: 25px;
  bottom: 30px;
  z-index: 1070;
}
</style>
