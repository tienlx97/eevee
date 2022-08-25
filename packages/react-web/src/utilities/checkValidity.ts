export const checkValidity = (input: HTMLInputElement) => {
  return input.checkValidity() ? 0 : input.validity.rangeUnderflow ? 2 : 1;
};
