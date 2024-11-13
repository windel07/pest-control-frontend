<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';

import type { User } from '@types';
import { UserService } from '@services';

import StaffsTableDeleteButton from './StaffsTableDeleteButton.vue';

const isFetching = ref<boolean>(true);

const search = ref<string>('');

const users = ref<User[]>([]);

const page = ref<number>(1);
const perPage = ref<number>(10);
const total = ref<number>(0);

const parameters = computed<string>(() => {
  return Object.entries({
    search: search.value,
    page: page.value,
    per_page: perPage.value,
    role: 'staff',
  })
    .map(([key, value]) => `${key}=${value || ''}`)
    .join('&');
});

const handleFetch = async () => {
  isFetching.value = true;

  const { data } = await UserService.list(parameters);
  const { data: results } = data.value || {};

  isFetching.value = false;

  users.value = results.data || [];

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
        <BaseInput name="search" placeholder="Search" />
      </div>

      <slot name="top-bar:right" />
    </div>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email address</th>
            <th>Phone</th>
            <th width="100" class="position-sticky end-0"></th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <template v-if="!!users.length">
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.email || 'N/A' }}</td>
              <td>{{ user.phone }}</td>
              <td class="position-sticky end-0">
                <div class="d-flex align-items-center justify-content-center">
                  <RouterLink
                    :to="`/dashboard/staffs/${user.id}`"
                    class="btn btn-link px-2"
                  >
                    <i class="bi bi-pencil"></i>
                  </RouterLink>

                  <StaffsTableDeleteButton
                    :id="user.id"
                    @success="handleFetch"
                  />
                </div>
              </td>
            </tr>
          </template>
          <tr v-else>
            <td colspan="4"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <BasePagination v-model="page" :per-page="perPage" :total="total" />
  </div>
</template>
