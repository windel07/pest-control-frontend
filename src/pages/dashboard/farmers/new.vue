<script setup lang="ts">
import { useRouter } from 'vue-router';
import { PhArrowLeft } from '@phosphor-icons/vue';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import FarmerCreateForm from './components/create-form/FarmerCreateForm.vue';

const router = useRouter();
</script>

<template>
  <div class="mt-3">
    <BaseButton
      type="button"
      class="d-inline-flex p-2"
      @click="() => router.push('/dashboard/farmers/')"
      z
    >
      <PhArrowLeft :size="22" />
    </BaseButton>
  </div>

  <DashboardPageHeader title="New Farmer" sub-title="Farmers" />

  <div class="card col-6 border-0">
    <div class="card-body py-6 px-8">
      <FarmerCreateForm @success="() => router.push('/dashboard/farmers')" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
