// import type { BaseService } from '@types';
import { APIService } from '@services';

export const AuthService = {
  login: (email: string, password: string) =>
    APIService.post('/api/login', {
      email,
      password,
    }),
  //   signup: (email: string, password: string) =>
  //     APIService.post('/auth/signup/', {
  //       email,
  //       password1: password,
  //       password2: password,
  //     }),
  logout: () => APIService.post('/logout/'),
  //   changePassword: (oldPassword: string, newPassword: string) =>
  //     APIService.post('/auth/password/change/', {
  //       oldPassword,
  //       newPassword1: newPassword,
  //       newPassword2: newPassword,
  //     }),
  //   resetPassword: (email: string) =>
  //     APIService.post('/auth/password/reset/', {
  //       email,
  //     }),
  //   confirmResetPassword: (newPassword: string, uid: string, token: string) =>
  //     APIService.post('/auth/password/reset/confirm/', {
  //       uid,
  //       token,
  //       newPassword1: newPassword,
  //       newPassword2: newPassword,
  //     }),
  //   getAuthUser: () => APIService.get('/auth/user/'),
  //   updateAuthUser: (payload: User) =>
  //     APIService.put('/auth/user/', undefined, payload),
};
