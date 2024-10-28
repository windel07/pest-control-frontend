<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Collapse } from 'bootstrap';

const collapseRef = ref<HTMLDivElement>(null);

onMounted(() => {
  if (!collapseRef.value) return;

  new Collapse(collapseRef.value, {
    toggle: false,
  });
});
</script>

<template>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbar-nav"
    aria-controls="navbar-nav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div ref="collapseRef" id="navbar-nav" class="collapse navbar-collapse">
    <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
  </div>
</template>

<style scoped lang="scss">
.navbar-nav {
  --bs-scroll-height: 100px;
}
</style>
