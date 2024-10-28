import { customAlphabet } from 'nanoid';

export const useUID = (prefix: string = 'id'): string => {
  const uid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

  return `${prefix}_${uid()}`;
};
