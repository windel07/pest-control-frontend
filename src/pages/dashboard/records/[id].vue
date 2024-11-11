<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import RecordUpdateForm from './components/update-form/RecordUpdateForm.vue';

const router = useRouter();
const route = useRoute();

const id = computed<number>(() => parseInt(route.params.id as string));
</script>

<template>
  <DashboardPageHeader title="Update Record" sub-title="Records" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <RecordUpdateForm
        :id="id"
        @success="() => router.push('/dashboard/records')"
      />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
