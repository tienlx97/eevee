import * as React from 'react';
import { PageNotFound } from '../page-not-found/index';

export const PageOrPageNotFound: React.FC<{ pageNotFound: boolean }> = ({ pageNotFound, children }) => {
  return pageNotFound ? <PageNotFound /> : <>{children}</>;
};
