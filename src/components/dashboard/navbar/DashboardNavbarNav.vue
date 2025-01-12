<script setup lang="ts">
import { useRouter } from 'vue-router';
import { PhPower } from '@phosphor-icons/vue';

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
          class="btn text-primary border-0 p-0 rounded-circle"
          role="button"
          @click.prevent="handleLogout"
          ><PhPower :size="25" weight="bold" />
        </a>
      </li>
    </ul>
  </div>
</template>
