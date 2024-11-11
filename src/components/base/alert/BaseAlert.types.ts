import type { BootstrapComponentBaseProps } from '@types';

export interface BaseAlertProps
  extends /* @vue-ignore */ Omit<BootstrapComponentBaseProps, 'size'> {
  dismissible?: boolean;
}
