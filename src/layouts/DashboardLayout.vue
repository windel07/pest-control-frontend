<script setup lang="ts">
import DashboardSidebar from '@components/dashboard/sidebar/DashboardSidebar.vue';
import DashboardNavbar from '@components/dashboard/navbar/DashboardNavbar.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <DashboardSidebar />
      <nav class="col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div class="container-fluid py-6">
          <DashboardNavbar />
        </div>
      </nav>

      <main class="col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div class="container-fluid">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
nav .container-fluid,
main .container-fluid {
  padding: 0 70px 0 90px;
}
</style>
