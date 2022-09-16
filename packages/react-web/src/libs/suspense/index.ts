import { NavigateFunction } from 'react-router-dom';

type SuspenseStatus = 'pending' | 'success' | 'error';

export const withPromise = <T = any>(
  promise: (...inputs: any) => Promise<T>,
  inputs: Array<any> = [],
): SuspenseResponse<T> => {
  let status: SuspenseStatus = 'pending';
  let result: T | null;
  let error: Error;

  const suspense = promise(...inputs).then(
    (val: T) => {
      status = 'success';
      result = val;
    },
    (err: Error) => {
      status = 'error';
      error = err;
    },
  );

  return {
    read() {
      switch (status) {
        case 'error':
          throw error;
        case 'pending':
          throw suspense;
        default:
          return result;
      }
    },
  };
};

export const delay = (second: number) => new Promise(r => setTimeout(r, second));

export type SuspenseResponse<T = any> = {
  read: () => T | null;
};
