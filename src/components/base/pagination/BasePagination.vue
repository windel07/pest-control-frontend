<script lang="ts" setup>
import { computed } from 'vue';
import { chunk } from 'lodash-es';

import type { BasePaginationProps } from './BasePagination.types';

const props = defineProps<BasePaginationProps>();

const current = defineModel<number>({ default: 1 });

const count = computed<number>(() =>
  Math.ceil(props.total / (props.perPage || 10)),
);

const pages = computed<number[]>(() => {
  const pages: number[][] = chunk(
    Array.from({ length: count.value }, (_, index) => index + 1),
    5,
  );

  const index = pages.findIndex(
    (chunk: number[]) => 0 <= chunk.indexOf(current.value),
  );

  return pages[index] || [];
});
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination my-2 justify-content-center">
      <li class="page-item" :class="{ disabled: 1 === current }">
        <a class="page-link" role="button" @click="() => (current -= 1)"
          ><i class="bi bi-caret-left me-1"></i>Previous</a
        >
      </li>

      <li v-for="item in pages" class="page-item">
        <a
          class="page-link"
          :class="{ active: item === current }"
          role="button"
          @click="() => (current = item)"
        >
          {{ item }}
        </a>
      </li>

      <li class="page-item" :class="{ disabled: current === count }">
        <a class="page-link" role="button" @click="() => (current += 1)"
          >Next<i class="bi bi-caret-right ms-1"></i
        ></a>
      </li>
    </ul>
  </nav>
</template>
