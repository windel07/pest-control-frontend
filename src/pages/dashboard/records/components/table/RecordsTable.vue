<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';

import type { Record } from '@types';
import { RecordService } from '@services';
import { MunicipalityDropdown, BarangayDropdown } from '@components/misc';

import RecordsTableDeleteButton from './RecordsTableDeleteButton.vue';

const isFetching = ref<boolean>(true);

const search = ref<string>('');
const city = ref<string | undefined>(undefined);
const barangay = ref<string | undefined>(undefined);

const records = ref<Record[]>([]);

const page = ref<number>(1);
const perPage = ref<number>(10);
const total = ref<number>(0);

const parameters = computed<string>(() => {
  return Object.entries({
    search: search.value,
    city: city.value,
    barangay: barangay.value,
    page: page.value,
    per_page: perPage.value,
  })
    .map(([key, value]) => `${key}=${value || ''}`)
    .join('&');
});

const handleFetch = async () => {
  isFetching.value = true;

  const { data } = await RecordService.list(parameters);
  const { data: results } = data.value || {};

  isFetching.value = false;

  records.value = results.data || [];

  page.value = results.current_page || 1;
  perPage.value = results.per_page || 10;
  total.value = results.total || 0;
};

watch(
  parameters,
  useDebounceFn(() => handleFetch(), 500),
  { immediate: true },
);
</script>

<template>
  <div v-loading="isFetching">
    <div class="mb-4 d-flex align-items justify-content-between">
      <div class="d-flex align-items-center column-gap-2">
        <BaseInput v-model="search" name="search" placeholder="Search" />
        <MunicipalityDropdown
          v-model="city"
          @input="() => (barangay = undefined)"
        />
        <BarangayDropdown v-model="barangay" :municipality="city" />
      </div>

      <slot name="top-bar:right" />
    </div>

    <div class="table-responsive">
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
          <template v-if="!!records.length">
            <tr v-for="record in records">
              <td>{{ record.pest_type }}</td>
              <td>{{ record.soil_type }}</td>
              <td>{{ record.city }}</td>
              <td>{{ record.barangay }}</td>
              <td></td>
              <td>{{ record.created_at }}</td>
              <td class="position-sticky end-0">
                <div class="d-flex align-items-center justify-content-center">
                  <RouterLink
                    :to="`/dashboard/records/${record.id}`"
                    class="btn btn-link px-2"
                  >
                    <i class="bi bi-pencil"></i>
                  </RouterLink>

                  <RecordsTableDeleteButton
                    :id="record.id"
                    @success="handleFetch"
                  />
                </div>
              </td>
            </tr>
          </template>
          <tr v-else>
            <td colspan="7" class="text-center">No records found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <BasePagination v-model="page" :per-page="perPage" :total="total" />
  </div>
</template>
