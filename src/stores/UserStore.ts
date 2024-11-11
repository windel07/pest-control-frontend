import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { User } from '@types';
import { UserService } from '@services';

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<User>({});

  const getCurrentUser = async () => {
    const { data } = await UserService.getCurrentUser();
    const { id, email, name, role } = data.value || {};

    currentUser.value = {
      id,
      email,
      name,
      role,
    };
  };

  const resetCurrentUser = () => (currentUser.value = {});

  return {
    currentUser,

    getCurrentUser,
    resetCurrentUser,
  };
});
