import * as React from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary as ErrorBoundaryWrapper } from 'react-error-boundary';
import { Button } from '@eevee/react-button';

export const ErrorBoundary: React.FC = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ErrorBoundaryWrapper
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an error!
          <Button onClick={() => resetErrorBoundary()}>Try again</Button>
        </div>
      )}
    >
      {children}
    </ErrorBoundaryWrapper>
  );
};
