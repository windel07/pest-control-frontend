import type { BootstrapSize, OptionRaw } from '@types';

export interface BaseSelectProps {
  name: string;
  options: OptionRaw[];
  label?: string;
  disabled?: boolean;
  helpText?: string;
  multiple?: boolean;
  size?: BootstrapSize;
  wrapperClass?: string | string[];
}
