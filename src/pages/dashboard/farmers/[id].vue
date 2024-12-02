<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { PhArrowLeft } from '@phosphor-icons/vue';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import FarmerUpdateForm from './components/update-form/FarmerUpdateForm.vue';

const router = useRouter();
const route = useRoute();

const id = computed<number>(() => parseInt(route.params.id as string));
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

  <DashboardPageHeader title="Update Farmer" sub-title="Farmers" />

  <div class="card border-0">
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
