import type { Record } from '@types';

export interface RecordCreateFormSchema extends Omit<Record, 'id'> {}

export type RecordCreateFormEmits = {
  success: [payload?: any];
};
