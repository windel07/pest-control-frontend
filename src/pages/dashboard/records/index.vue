<script setup lang="ts">
import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import RecordsTable from './components/table/RecordsTable.vue';
import RecordsExportButton from './components/export-button/RecordsExportButton.vue';
</script>

<template>
  <DashboardPageHeader title="All Records" sub-title="Records" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <RecordsTable>
        <template v-slot:top-bar:right>
          <div class="d-flex align-items-center column-gap-2">
            <RecordsExportButton />

            <RouterLink to="/dashboard/records/new/" class="btn btn-primary"
              >Add New</RouterLink
            >
          </div>
        </template>
      </RecordsTable>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
