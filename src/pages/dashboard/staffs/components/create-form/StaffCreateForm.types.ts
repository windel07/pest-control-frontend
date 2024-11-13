import type { User } from '@types';

export interface FarmerCreateFormSchema extends Omit<User, 'id'> {}

export type FarmerCreateFormEmits = {
  success: [payload?: any];
};
