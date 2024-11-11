<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';

import { RecordService } from '@services';

import RecordsTableDeleteButton from './RecordsTableDeleteButton.vue';

const search = ref<string>('ewq');
const page = ref<number>(1);

const {
  isFetching,
  data,
  execute: reFetch,
} = RecordService.list({
  page: page.value,
  search: search.value,
});

const items = computed(() => {
  const { data: records } = data.value || {};

  if (!records) return [];

  return records.data;
});

const perPage = computed<number>(() => {
  const { data: records } = data.value || {};

  if (!records) return 0;

  return records.per_page || 1;
});

const total = computed<number>(() => {
  const { data: records } = data.value || {};

  if (!records) return 0;

  return records.total || 1;
});

const onSearch = useDebounceFn(reFetch, 500);
</script>

<template>
  <div class="mb-4 d-flex align-items justify-content-between">
    <slot name="top-bar:left">
      <BaseInput name="search" placeholder="Search" @input="onSearch" />
    </slot>

    <slot name="top-bar:right" />
  </div>

  <div v-loading="isFetching" class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Pest Type</th>
          <th>Soil Type</th>
          <th>Municipality</th>
          <th>Barangay</th>
          <th>Image</th>
          <th>Date</th>
          <th width="100" class="position-sticky end-0"></th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <template v-if="!!items.length">
          <tr v-for="item in items">
            <td>{{ item.pest_type }}</td>
            <td>{{ item.soil_type }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.barangay }}</td>
            <td></td>
            <td>{{ item.created_at }}</td>
            <td class="position-sticky end-0">
              <div class="d-flex align-items-center justify-content-center">
                <RouterLink
                  :to="`/dashboard/records/${item.id}`"
                  class="btn btn-link px-2"
                >
                  <i class="bi bi-pencil"></i>
                </RouterLink>

                <RecordsTableDeleteButton :id="item.id" @success="reFetch" />
              </div>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="7" class="text-center">No records found.</td>
        </tr>
      </tbody>
    </table>

    <BasePagination v-model="page" :batch="perPage" :total="total" />
  </div>
</template>
