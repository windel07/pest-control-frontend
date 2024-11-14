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
    <ul class="nav nav-pills border-0 flex-column row-gap-6">
      <li class="nav-item">
        <a
          class="btn btn-primary text-light text-start d-flex align-items-center py-1 px-3"
          role="button"
          @click.prevent="handleLogout"
          ><i class="bi bi-power me-2"></i>Logout</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-wrapper .btn:hover {
  color: #68c893 !important;
  background: #ffffff;
  border-color: #68c893;
}
</style>
