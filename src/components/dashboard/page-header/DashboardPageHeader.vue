<script setup lang="ts">
interface Props {
  title: string;
  subTitle: string;
}

const { title, subTitle } = defineProps<Props>();
</script>

<template>
  <div class="page-header row no-gutters py-4 align-items-center">
    <div class="col-12 col-sm-4 text-center text-sm-start mb-0 lh-1">
      <span class="page-subtitle mb-2 text-uppercase d-block">{{
        subTitle
      }}</span>

      <h3 class="page-title p-0 m-0 fw-medium lh-1">{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.page-header .page-title {
  font-size: 1.625rem;
}

.page-header .page-subtitle {
  color: #818ea3;
  letter-spacing: 0.125rem;
  font-size: 0.625rem;
}
</style>
