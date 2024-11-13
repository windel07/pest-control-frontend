<script setup lang="ts">
import { useRouter } from 'vue-router';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import StaffCreateForm from './components/create-form/StaffCreateForm.vue';

const router = useRouter();
</script>

<template>
  <DashboardPageHeader title="New Staff" sub-title="Staffs" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <StaffCreateForm @success="() => router.push('/dashboard/staffs')" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
