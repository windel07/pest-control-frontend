<script setup lang="ts">
import { PhPlus } from '@phosphor-icons/vue';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import RecordsTable from './components/table/RecordsTable.vue';
import RecordsExportButton from './components/export-button/RecordsExportButton.vue';
</script>

<template>
  <DashboardPageHeader title="All Records" sub-title="Records" />

  <div class="card border-0 shadow">
    <div class="card-body p-5">
      <RecordsTable>
        <template v-slot:top-bar:right="filters">
          <div class="d-flex align-items-center column-gap-2">
            <RecordsExportButton v-bind="filters" />

            <RouterLink
              to="/dashboard/records/new/"
              class="btn btn-primary text-light d-flex align-items-center"
              ><PhPlus :size="20" class="me-2" />Add New</RouterLink
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
