import type { User } from '@types';

export interface StaffUpdateFormSchema extends Omit<User, 'id'> {}

export interface StaffUpdateFormProps {
  id: number;
}

export type StaffUpdateFormEmits = {
  success: [payload?: any];
};
