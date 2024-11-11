<script setup lang="ts">
import DashboardSidebar from '@components/dashboard/sidebar/DashboardSidebar.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <DashboardSidebar />
      <main class="col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div class="container-fluid px-4">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
