export type BootstrapSize = 'sm' | 'lg';
export type BootstrapVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface BootstrapComponentBaseProps {
  size?: BootstrapSize;
  variant?: BootstrapVariant;
}
