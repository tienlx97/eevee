/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce =
  (callback: any, wait: any, timeoutId: any) =>
  (...args: any[]) => {
    window.clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      callback.apply(null, args);
    }, wait);
  };
