<script setup lang="ts">
import { useRouter } from 'vue-router';
import { PhArrowLeft } from '@phosphor-icons/vue';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import StaffCreateForm from './components/create-form/StaffCreateForm.vue';

const router = useRouter();
</script>

<template>
  <div class="mt-3">
    <BaseButton
      type="button"
      class="d-inline-flex p-2"
      @click="() => router.push('/dashboard/staffs/')"
      z
    >
      <PhArrowLeft :size="22" />
    </BaseButton>
  </div>

  <DashboardPageHeader title="New Staff" sub-title="Staffs" />

  <div class="card col-6 border-0">
    <div class="card-body py-6 px-8">
      <StaffCreateForm @success="() => router.push('/dashboard/staffs')" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
