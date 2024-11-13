<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useToast } from '@composables';
import { useAuthStore } from '@stores';

const { showConfirmToast } = useToast();

const router = useRouter();

const authStore = useAuthStore();

const handleLogout = async () => {
  const { isConfirmed } = await showConfirmToast(
    'Logout',
    'Are you sure you want to log out?',
  );

  if (!isConfirmed) return;

  await authStore.logout();

  router.push('/');
};
</script>

<template>
  <div class="nav-wrapper overflow-x-hidden overflow-y-auto">
    <ul class="nav flex-column">
      <li class="nav-item">
        <RouterLink to="/dashboard/records" class="nav-link"
          >Records</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink to="/dashboard/farmers" class="nav-link"
          >Farmers</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink to="/dashboard/staffs" class="nav-link">Staffs</RouterLink>
      </li>
    </ul>

    <ul class="nav mt-auto flex-column">
      <li class="nav-item">
        <a class="nav-link" role="button" @click.prevent="handleLogout"
          >Logout</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-wrapper {
  height: calc(100vh - 3.75rem - 1px);
}
</style>
