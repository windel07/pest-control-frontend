// import type {
//   BeforeFetchContext,
//   AfterFetchContext,
//   OnFetchErrorContext,
// } from '@vueuse/core';
// import { computed } from 'vue';
// import { createFetch } from '@vueuse/core';
// import { ref } from 'vue';

// import { useToast } from '@composables';

// export const useAPIClient = () => {
//   const endpointUrl = ref<string>('');

//   const baseUrl = computed<string>(() => {
//     const baseUrl = import.meta.env?.VITE_API_BASE_URL;

//     return `${baseUrl}${endpointUrl.value}`;
//   });

//   const refetch = ref<boolean>(false);

//   const isRefreshedToken = ref<boolean>(false);
//   const isRefreshingToken = computed<boolean>(() => {
//     return endpointUrl.value.includes('/auth/token/refresh/');
//   });

//   const handleFetch = createFetch({
//     baseUrl,
//     combination: 'chain',
//     options: {
//       refetch,
//       updateDataOnError: true,
//       //   beforeFetch(
//       //     context: BeforeFetchContext,
//       //   ):
//       //     | Promise<Partial<BeforeFetchContext> | void>
//       //     | Partial<BeforeFetchContext>
//       //     | void {
//       //     const { options } = context;

//       //     options.headers = options.headers || {};

//       //     const tokenStore = useTokenStore();
//       //     const { accessToken, refreshToken } = storeToRefs(tokenStore);

//       //     if (accessToken.value)
//       //       options.headers['Authorization'] = `JWT ${accessToken.value}`;

//       //     if (endpointUrl.value.includes('/auth/token/refresh/')) {
//       //       options.method = 'POST';
//       //       options.headers['Content-Type'] = 'application/json';
//       //       options.body = JSON.stringify({
//       //         refresh: refreshToken.value,
//       //       });

//       //       return {
//       //         url: baseUrl.value,
//       //         options,
//       //       };
//       //     }

//       //     return { options };
//       //   },
//       //   afterFetch: (
//       //     context: AfterFetchContext,
//       //   ): Promise<Partial<AfterFetchContext>> | Partial<AfterFetchContext> => {
//       //     const { data } = context;

//       //     if (isRefreshedToken.value) {
//       //       refetch.value = false;

//       //       isRefreshedToken.value = false;
//       //     }

//       //     if (isRefreshingToken.value) {
//       //       const { access } = data || {};

//       //       const { isSpoofing } = useUserSpoof();

//       //       const tokenStore = useTokenStore();
//       //       const { refreshToken } = storeToRefs(tokenStore);
//       //       const { setTokens } = tokenStore;

//       //       setTokens(
//       //         access,
//       //         refreshToken.value,
//       //         isSpoofing.value ? 'spoof' : 'auth',
//       //       );

//       //       isRefreshedToken.value = true;

//       //       endpointUrl.value = '';
//       //     }

//       //     return context;
//       //   },
//       onFetchError(
//         context,
//       ): Promise<Partial<OnFetchErrorContext>> | Partial<OnFetchErrorContext> {
//         const { showToast } = useToast();

//         const { data } = context;

//         if (!!data) {
//           const { code, detail } = data || {};

//           const isInvalidToken = 'token_not_valid' === code;

//           if (isInvalidToken) {
//             // const { isSpoofing } = useUserSpoof();

//             // const tokenStore = useTokenStore();
//             // const { resetTokens } = tokenStore;

//             if (isRefreshingToken.value) {
//               //   resetTokens(isSpoofing.value ? 'spoof' : 'auth');
//             } else {
//               refetch.value = true;
//               isRefreshedToken.value = false;

//               endpointUrl.value = '/auth/token/refresh/';
//             }
//           } else {
//             if (!!detail) showToast(detail, 'danger');
//           }

//           context.error = data;
//         } else {
//           context.data = { message: 'Oops! Something went wrong.' };
//         }

//         return context;
//       },
//     },
//     fetchOptions: {
//       credentials: 'include',
//       mode: 'cors',
//     },
//   });

//   return {
//     isRefreshedToken,
//     isRefreshingToken,

//     handleFetch,
//   };
// };

import type {
  BeforeFetchContext,
  AfterFetchContext,
  OnFetchErrorContext,
} from '@vueuse/core';
import { createFetch } from '@vueuse/core';
import { computed, ref } from 'vue';

import { useToast } from '@composables';
import { useAuthStore } from '@stores';

export const useAPIClient = () => {
  const authStore = useAuthStore();

  const { showToast } = useToast();

  const endpointUrl = ref<string>('');

  const baseUrl = computed<string>(() => {
    const baseUrl = import.meta.env?.VITE_API_BASE_URL;

    return `${baseUrl}${endpointUrl.value}`;
  });

  const refreshTokenStatus = ref<boolean | undefined>(undefined);

  const refreshTokenProcessing = computed<boolean>(() =>
    endpointUrl.value.includes('/auth/token/refresh/'),
  );

  return createFetch({
    baseUrl,
    combination: 'chain',
    options: {
      refetch: true,
      updateDataOnError: true,
      beforeFetch(
        context: BeforeFetchContext,
      ):
        | Promise<Partial<BeforeFetchContext> | void>
        | Partial<BeforeFetchContext>
        | void {
        const { options } = context;

        options.headers = options.headers || {};

        if (authStore.isLoggedIn) {
          options.headers['Authorization'] =
            `${authStore.tokenType} ${authStore.accessToken}`;
        }

        if (
          endpointUrl.value.includes('/auth/token/refresh/') ||
          endpointUrl.value.includes('/auth/logout/')
        ) {
          options.method = 'POST';

          return {
            url: baseUrl.value,
            options,
          };
        }

        return { options };
      },
      afterFetch: (
        context: AfterFetchContext,
      ): Promise<Partial<AfterFetchContext>> | Partial<AfterFetchContext> => {
        if (true === refreshTokenStatus.value) {
          refreshTokenStatus.value = undefined;
        }

        if (refreshTokenProcessing.value) {
          refreshTokenStatus.value = true;

          endpointUrl.value = '';
        }

        return context;
      },
      onFetchError(
        context,
      ): Promise<Partial<OnFetchErrorContext>> | Partial<OnFetchErrorContext> {
        const { data, response } = context;

        if (!!data) {
          const { status } = response || {};
          const { detail } = data || {};

          if (401 === status) {
            if ('undefined' === typeof refreshTokenStatus.value) {
              if (refreshTokenProcessing.value) {
                // Request logout on refresh token failure
                refreshTokenStatus.value = false;

                endpointUrl.value = '/auth/logout/';
              } else {
                // Request refresh token on failure
                // endpointUrl.value = '/auth/token/refresh/';
              }
            } else if (false === refreshTokenStatus.value) {
              // Auto-logout user on refresh token and logout requests failure
              // authStore.unsetUser();
            }
          } else {
            if (!!detail) showToast(detail, 'danger');
          }

          context.error = data;
        } else {
          context.data = { message: 'Oops! Something went wrong.' };
        }

        return context;
      },
    },
    fetchOptions: {
      credentials: 'include',
      mode: 'cors',
    },
  });
};
