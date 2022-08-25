import { checkValidity } from '@utilities/index';

export const getDate = (input: HTMLInputElement) => {
  return checkValidity(input) ? null : new Date(new Date(input.value)).getTime();
};
