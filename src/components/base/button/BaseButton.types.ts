import type { BootstrapComponentBaseProps } from '@types';

export type BaseButtonTag = 'a' | 'button' | 'input';
export type BaseButtonType = 'button' | 'submit' | 'reset';

export interface BaseButtonProps
  extends /* @vue-ignore */ Omit<BootstrapComponentBaseProps, 'variant'> {
  variant?: BootstrapComponentBaseProps['variant'] | 'link';
  disabled?: boolean;
  outlined?: boolean;
  block?: boolean;
  loading?: boolean;
  type?: BaseButtonType;
  tag?: BaseButtonTag;
}

export type BaseButtonEmits = {
  click: [evt: Event];
};
