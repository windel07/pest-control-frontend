<script setup lang="ts">
import { useRouter } from 'vue-router';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import RecordCreateForm from './components/create-form/RecordCreateForm.vue';

const router = useRouter();
</script>

<template>
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
