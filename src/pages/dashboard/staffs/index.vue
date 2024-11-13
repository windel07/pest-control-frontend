<script setup lang="ts">
import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import StaffsTable from './components/table/StaffsTable.vue';
</script>

<template>
  <DashboardPageHeader title="All Staffs" sub-title="Staffs" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <StaffsTable class="mt-4">
        <template v-slot:top-bar:right>
          <RouterLink to="/dashboard/staffs/new/" class="btn btn-primary"
            >Add New</RouterLink
          >
        </template>
      </StaffsTable>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
