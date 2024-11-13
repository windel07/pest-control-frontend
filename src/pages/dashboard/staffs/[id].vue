<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import StaffUpdateForm from './components/update-form/StaffUpdateForm.vue';

const router = useRouter();
const route = useRoute();

const id = computed<number>(() => parseInt(route.params.id as string));
</script>

<template>
  <DashboardPageHeader title="Update Staff" sub-title="Staffs" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <StaffUpdateForm
        :id="id"
        @success="() => router.push('/dashboard/staffs')"
      />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
