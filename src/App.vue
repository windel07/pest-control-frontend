<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { APIService } from '@services';
import AuthWrapper from '@components/auth/AuthWrapper.vue';

const route = useRoute();

const layout = computed<string>(
  () => `${route?.meta?.layout || 'Default'}Layout`,
);

onMounted(async () => {
  await APIService.get('/sanctum/csrf-cookie/');
});
</script>

<template>
  <component :is="layout">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <AuthWrapper>
          <component :is="Component"></component>
        </AuthWrapper>
      </template>
    </RouterView>
  </component>
</template>
