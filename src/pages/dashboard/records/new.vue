<script setup lang="ts">
import { useRouter } from 'vue-router';
import { PhArrowLeft } from '@phosphor-icons/vue';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import RecordCreateForm from './components/create-form/RecordCreateForm.vue';

const router = useRouter();
</script>

<template>
  <div class="mt-3">
    <BaseButton
      type="button"
      class="d-inline-flex p-2"
      @click="() => router.push('/dashboard/records/')"
      z
    >
      <PhArrowLeft :size="22" />
    </BaseButton>
  </div>

  <DashboardPageHeader title="New Record" sub-title="Records" />

  <div class="d-grid col-6">
    <div class="card border-0">
      <div class="card-body py-6 px-8">
        <RecordCreateForm @success="() => router.push('/dashboard/records/')" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
