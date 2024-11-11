<script setup lang="ts">
import { useRouter } from 'vue-router';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import FarmerCreateForm from './components/create-form/FarmerCreateForm.vue';

const router = useRouter();
</script>

<template>
  <DashboardPageHeader title="New Farmer" sub-title="Farmers" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <FarmerCreateForm @success="() => router.push('/dashboard/farmers')" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
