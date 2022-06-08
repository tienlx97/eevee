import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { Button } from '@eevee/react-button';
import { Sun } from '../../../icons/index';
const useRootStyles = makeStyles({
  root: {
    paddingBottom: '16px',
    display: 'block',
  },
});

export const Bottom = () => {
  const styles = useRootStyles();
  return (
    <div className={styles.root}>
      <Button style={{ width: '100%' }} icon={<Sun />} />
    </div>
  );
};
