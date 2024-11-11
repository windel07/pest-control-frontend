<script setup lang="ts">
import DashboardPageHeader from '@components/dashboard/page-header/DashboardPageHeader.vue';

import FarmersTable from './components/table/FarmersTable.vue';
</script>

<template>
  <DashboardPageHeader title="All Farmers" sub-title="Farmers" />

  <div class="card border-0 shadow">
    <div class="card-body">
      <div class="d-flex align-items justify-content-between">
        <BaseInput name="search" placeholder="Search" />
        <RouterLink to="/dashboard/farmers/new/" class="btn btn-primary"
          >Add New</RouterLink
        >
      </div>

      <FarmersTable class="mt-4" />

      <nav aria-label="Page navigation example">
        <ul class="pagination my-2 justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 'Dashboard'
</route>
