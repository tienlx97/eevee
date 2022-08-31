import * as React from 'react';
import { MiddleLayout } from '@layout/index';
import { ComingSoon } from '@components/coming-soon/index';

export const Home = () => {
  return (
    <MiddleLayout>
      <ComingSoon date="2022-09-05 00:00:00" />
    </MiddleLayout>
  );
};
