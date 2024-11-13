import type { User } from '@types';

export interface StaffCreateFormSchema extends Omit<User, 'id'> {}

export type StaffCreateFormEmits = {
  success: [payload?: any];
};
