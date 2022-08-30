import * as React from 'react';
import { MiddleLayout } from '@layout/index';
import { useStyles } from './styles';
import { ProfileList } from '@feature/settings/index';

export const Settings = () => {
  const styles = useStyles();

  return (
    <MiddleLayout className={styles.root}>
      <ProfileList />
    </MiddleLayout>
  );
};
