import type { Record } from '@types';

export interface RecordUpdateFormSchema extends Omit<Record, 'id'> {}

export interface RecordUpdateFormProps {
  id: number;
}

export type RecordUpdateFormEmits = {
  success: [payload?: any];
};
