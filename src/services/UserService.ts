import type { User } from '@types';
import { APIService } from '@services';

export const UserService = {
  getCurrentUser: () => APIService.get('/api/user'),

  list: (params: User<string, string | number>, immediate: boolean = true) => {
    const qs = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    return APIService.get(() => `/api/users/?${qs}`, {
      params,
      immediate,
    }).json();
  },
  create: (newUser: User, immediate: boolean = true) =>
    APIService.post('/api/users/', newUser, { immediate }).json(),
  read: (id: number, immediate: boolean = true) =>
    APIService.get(() => `/api/users/${id}/`, { immediate }).json(),
  update: (id: number, updatedUser: User, immediate: boolean = true) =>
    APIService.put('/api/users/', id, updatedUser, { immediate }).json(),
  delete: (id: number, immediate: boolean = true) =>
    APIService.delete('/api/users/', id, { immediate }).json(),
};
