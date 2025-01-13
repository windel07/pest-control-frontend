import type { UseFetchOptions } from '@vueuse/core';

import type { BaseService } from '@types';
import { useAPIClient } from '@composables';

export const APIService: BaseService<any> = {
  get: (url: string, options: UseFetchOptions = {}) =>
    useAPIClient()(url, options).get().json(),
  post: (
    url: string,
    body?: Record<string, any>,
    options: UseFetchOptions = {},
  ) => useAPIClient()(url, options).post(body).json(),
  put: (
    url: string,
    id?: number,
    body?: Record<string, any>,
    options: UseFetchOptions = {},
  ) =>
    useAPIClient()(() => {
      if (!id) return url;

      return `${url}${id}`;
    }, options)
      .put(body)
      .json(),
  patch: (
    url: string,
    id?: number,
    body?: unknown,
    options: UseFetchOptions = {},
  ) =>
    useAPIClient()(() => {
      if (!id) return url;

      return `${url}${id}`;
    }, options)
      .patch(body)
      .json(),
  delete: (url: string, id?: number, options: UseFetchOptions = {}) =>
    useAPIClient()(() => {
      if (!id) return url;

      return `${url}${id}`;
    }, options)
      .delete()
      .json(),
};
