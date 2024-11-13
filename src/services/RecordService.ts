import type { MaybeRefOrGetter } from 'vue';
import { toValue } from 'vue';

import type { Record } from '@types';
import { APIService } from '@services';

export const RecordService = {
  list: (payload?: MaybeRefOrGetter<string>, immediate: boolean = true) => {
    if (!!payload)
      return APIService.get(() => `/api/records/?${toValue(payload)}`, {
        immediate,
      }).json();

    return APIService.get('/api/records/', { immediate }).json();
  },
  create: (newRecord: Record) =>
    APIService.post('/api/records/', newRecord).json(),
  read: (id: number, immediate: boolean = true) =>
    APIService.get(() => `/api/records/${id}/`, { immediate }).json(),
  update: (id: number, newRecord: Record) =>
    APIService.put('/api/records/', id, newRecord).json(),
  delete: (id: number, immediate: boolean = true) =>
    APIService.delete('/api/records/', id, { immediate }).json(),
  export: (immediate: boolean = true) =>
    APIService.post('/api/records/export', null, { immediate }).blob(),
};
