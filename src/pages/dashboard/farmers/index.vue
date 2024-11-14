<script setup lang="ts">
import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import FarmersTable from './components/table/FarmersTable.vue';
</script>

<template>
  <DashboardPageHeader title="All Farmers" sub-title="Farmers" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <FarmersTable>
        <template v-slot:top-bar:right>
          <RouterLink
            to="/dashboard/farmers/new/"
            class="btn btn-primary text-light"
            ><i class="bi bi-plus-lg me-3"></i>Add New</RouterLink
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
