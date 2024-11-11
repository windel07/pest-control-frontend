<script setup lang="ts">
import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import FarmerForm from './components/FarmerForm.vue';
</script>

<template>
  <DashboardPageHeader title="New Farmer" sub-title="Farmers" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <FarmerForm />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
