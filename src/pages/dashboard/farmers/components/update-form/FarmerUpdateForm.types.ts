import type { User } from '@types';

export interface FarmerUpdateFormSchema extends Omit<User, 'id'> {}

export interface FarmerUpdateFormProps {
  id: number;
}

export type FarmerUpdateFormEmits = {
  success: [payload?: any];
};
