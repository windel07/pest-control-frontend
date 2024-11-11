<script setup lang="ts">
import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import RecordsTable from './components/table/RecordsTable.vue';
</script>

<template>
  <DashboardPageHeader title="All Records" sub-title="Records" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <RecordsTable>
        <template v-slot:top-bar:right>
          <RouterLink to="/dashboard/records/new/" class="btn btn-primary"
            >Add New</RouterLink
          >
        </template>
      </RecordsTable>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
