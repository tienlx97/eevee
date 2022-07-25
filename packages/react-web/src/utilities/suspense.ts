import { NavigateFunction } from 'react-router-dom';

type Status = 'pending' | 'success' | 'error';

// https://blog.logrocket.com/react-suspense-data-fetching/#wrappromise-js
export function wrapPromise<T>(promise: Promise<T | null>, navigate: NavigateFunction, pathname: string) {
  let status: Status = 'pending';
  let response: T;
  let responseErr: unknown;

  const suspender = promise.then(
    (res: T | null) => {
      status = 'success';
      if (res === null) {
        navigate(pathname, {
          replace: true,
          state: {
            errorStatusCode: 404,
          },
        });
      } else {
        response = res;
      }
    },
    err => {
      status = 'error';
      responseErr = err;
    },
  );

  return {
    read() {
      switch (status) {
        case 'pending':
          throw suspender;
        case 'error':
          throw responseErr;
        case 'success':
          return response;
      }
    },
  } as SuspenseResponse<T>;
}

export type SuspenseResponse<T = any> = {
  read: () => T;
};
