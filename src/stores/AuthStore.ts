import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';

import { AuthService } from '@services';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = useLocalStorage<string>('access-token', '');
  const tokenType = useLocalStorage<string>('token-type', '');

  const isLoggedIn = computed<boolean>(() => !!accessToken.value);

  const login = async (email: string, password: string) => {
    const { data, error } = await AuthService.login(email, password);
    const { access_token, token_type } = data.value || {};

    if (!!access_token) {
      accessToken.value = access_token;
      tokenType.value = token_type;
    }

    return {
      data,
      error,
    };
  };

  const logout = async () => {
    await AuthService.logout();

    accessToken.value = '';
    tokenType.value = '';
  };

  return {
    accessToken,
    tokenType,

    isLoggedIn,

    login,
    logout,
  };
});
