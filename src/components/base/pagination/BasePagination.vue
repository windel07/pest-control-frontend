<script lang="ts" setup>
import { computed } from 'vue';

import type { BasePaginationProps } from './BasePagination.types';

const props = defineProps<BasePaginationProps>();

const page = defineModel<number>({ default: 1 });

const items = computed<number[]>(() => {
  const count: number = Math.ceil(props.total / (props.perPage || 10));

  return Array.from({ length: count }, (_, index) => index + 1);
});
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination my-2 justify-content-center">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>

      <li v-for="item in items" class="page-item">
        <a class="page-link" :class="{ active: item === page }" href="#">
          {{ item }}
        </a>
      </li>

      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
