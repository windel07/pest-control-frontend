import type { Record } from '@types';
import { APIService } from '@services';

export const RecordService = {
  list: (
    params: Record<string, string | number>,
    immediate: boolean = true,
  ) => {
    console.log({ params });
    const qs = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    return APIService.get(() => `/api/records/?${qs}`, {
      params,
      immediate,
    }).json();
  },
  create: (newRecord: Record) =>
    APIService.post('/api/records/', newRecord).json(),
  read: (id: number, immediate: boolean = true) =>
    APIService.get(() => `/api/records/${id}/`, { immediate }).json(),
  update: (id: number, newRecord: Record) =>
    APIService.put('/api/records/', id, newRecord).json(),
  delete: (id: number, immediate: boolean = true) =>
    APIService.delete('/api/records/', id, { immediate }).json(),
};
