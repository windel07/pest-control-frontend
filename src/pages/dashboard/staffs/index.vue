<script setup lang="ts">
import { PhPlus } from '@phosphor-icons/vue';

import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import StaffsTable from './components/table/StaffsTable.vue';
</script>

<template>
  <DashboardPageHeader title="All Staffs" sub-title="Staffs" />

  <div class="card border-0">
    <div class="card-body p-5">
      <StaffsTable>
        <template v-slot:top-bar:right>
          <RouterLink
            to="/dashboard/staffs/new/"
            class="btn btn-primary text-light d-flex align-items-center"
            ><PhPlus :size="20" class="me-2" />Add New</RouterLink
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
