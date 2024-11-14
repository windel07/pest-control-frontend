import type { BootstrapSize } from '@types';

export type BaseInputType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'search'
  | 'url'
  | 'tel'
  | 'date'
  | 'time'
  | 'range'
  | 'color'
  | 'datetime'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'hidden';

export interface BaseInputProps {
  size?: BootstrapSize;
  name: string;
  label?: string;
  type?: BaseInputType;
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
  wrapperClass?: string | string[];
  icon?: string;
}
