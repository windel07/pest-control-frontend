<script setup lang="ts">
import { computed } from 'vue';

import type { User } from '@types';
import { UserService } from '@services';

import FarmersTableDeleteButton from './FarmersTableDeleteButton.vue';

const {
  isFetching,
  data,
  execute: runFetch,
} = UserService.list({ role: 'farmer' });

const items = computed<User[]>(() => {
  const { data: results } = data.value || {};
  const { data: items } = results || {};

  return items || [];
});
</script>

<template>
  <div v-loading="isFetching" class="table-responsive">
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
        <template v-if="!!items.length">
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email || 'N/A' }}</td>
            <td>{{ item.phone }}</td>
            <td class="position-sticky end-0">
              <div class="d-flex align-items-center justify-content-center">
                <RouterLink
                  :to="`/dashboard/farmers/${item.id}`"
                  class="btn btn-link px-2"
                >
                  <i class="bi bi-pencil"></i>
                </RouterLink>

                <FarmersTableDeleteButton :id="item.id" @success="runFetch" />
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
</template>
