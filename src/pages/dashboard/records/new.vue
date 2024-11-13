<script setup lang="ts">
import { useRouter } from 'vue-router';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import RecordCreateForm from './components/create-form/RecordCreateForm.vue';

const router = useRouter();
</script>

<template>
  <div class="mt-3 mb-1">
    <RouterLink to="/dashboard/records/" class="small lh-1 d-inline-flex">
      <i class="bi bi-arrow-left me-2"></i>
      <span>Return</span>
    </RouterLink>
  </div>

  <DashboardPageHeader title="New Record" sub-title="Records" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <RecordCreateForm @success="() => router.push('/dashboard/records/')" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
