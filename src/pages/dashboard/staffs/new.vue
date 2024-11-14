<script setup lang="ts">
import { useRouter } from 'vue-router';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import StaffCreateForm from './components/create-form/StaffCreateForm.vue';

const router = useRouter();
</script>

<template>
  <div class="mt-3 mb-1">
    <RouterLink to="/dashboard/staffs/" class="small lh-1 d-inline-flex">
      <i class="bi bi-arrow-left me-2"></i>
      <span>Return</span>
    </RouterLink>
  </div>

  <DashboardPageHeader title="New Staff" sub-title="Staffs" />

  <div class="card col-6 border-0 shadow">
    <div class="card-body py-6 px-8">
      <StaffCreateForm @success="() => router.push('/dashboard/staffs')" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
