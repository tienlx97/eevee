import * as React from 'react';
import { MiddleLayout } from '@layout/index';
import { ComingSoon } from '@components/coming-soon/index';

export const Notification = () => {
  return (
    <MiddleLayout>
      <ComingSoon date="2022-11-25 00:00:00" />
    </MiddleLayout>
  );
};
