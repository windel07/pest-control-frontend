<script lang="ts" setup>
import { onMounted } from 'vue';

import { useAuthStore, useUserStore } from '@stores';

const authStore = useAuthStore();
const userStore = useUserStore();

const maybeGetCurrentUser = async () => {
  if (!authStore.isLoggedIn) return;

  await userStore.getCurrentUser();
};

onMounted(maybeGetCurrentUser);
</script>

<template>
  <slot />
</template>
