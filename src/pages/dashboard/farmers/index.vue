<script setup lang="ts">
import { PhPlus } from '@phosphor-icons/vue';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import FarmersTable from './components/table/FarmersTable.vue';
</script>

<template>
  <DashboardPageHeader title="All Farmers" sub-title="Farmers" />

  <div class="card border-0 shadow">
    <div class="card-body p-5">
      <FarmersTable>
        <template v-slot:top-bar:right>
          <RouterLink
            to="/dashboard/farmers/new/"
            class="btn btn-primary text-light d-flex align-items-center"
            ><PhPlus :size="20" class="me-2" />Add New</RouterLink
          >
        </template>
      </FarmersTable>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
