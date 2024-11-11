<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import FarmerUpdateForm from './components/update-form/FarmerUpdateForm.vue';

const router = useRouter();
const route = useRoute();

const id = computed<number>(() => parseInt(route.params.id as string));
</script>

<template>
  <DashboardPageHeader title="Update Farmer" sub-title="Farmers" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <FarmerUpdateForm
        :id="id"
        @success="() => router.push('/dashboard/farmers')"
      />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
