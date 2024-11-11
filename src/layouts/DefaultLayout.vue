<script setup lang="ts">
import AppHeader from '@components/app/header/AppHeader.vue';
import AppFooter from '@components/app/footer/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>
