export type StatusEmits = {
  (e: 'success', payload?: any): void;
  (e: 'failed', payload?: any): void;
};

export interface Option<T = unknown> {
  value: T;
  disabled?: boolean;
  html?: string;
  key?: string;
  text?: string;
}

export type OptionRaw = string | Option;

export type HTMLClasses = Record<string, boolean>;
