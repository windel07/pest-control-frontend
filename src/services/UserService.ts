import type { MaybeRefOrGetter } from 'vue';
import { toValue } from 'vue';

import type { User } from '@types';
import { APIService } from '@services';

export const UserService = {
  getCurrentUser: () => APIService.get('/api/user'),

  list: (payload?: MaybeRefOrGetter<string>, immediate: boolean = true) => {
    if (!!payload)
      return APIService.get(() => `/api/users?${toValue(payload)}`, {
        immediate,
      }).json();

    return APIService.get('/api/users', { immediate }).json();
  },
  create: (newUser: User, immediate: boolean = true) =>
    APIService.post('/api/users', newUser, { immediate }).json(),
  read: (id: number, immediate: boolean = true) =>
    APIService.get(() => `/api/users/${id}`, { immediate }).json(),
  update: (id: number, updatedUser: User, immediate: boolean = true) =>
    APIService.put('/api/users', id, updatedUser, { immediate }).json(),
  delete: (id: number, immediate: boolean = true) =>
    APIService.delete('/api/users', id, { immediate }).json(),
};
