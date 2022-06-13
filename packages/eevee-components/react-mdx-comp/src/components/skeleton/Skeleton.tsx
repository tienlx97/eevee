import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { Spinner } from '../spinner/index';

const useStyles = makeStyles({
  wrapper: {
    display: 'grid',
    placeContent: 'center',
    width: '100%',
    maxHeight: '50vh',
  },
});

export const Skeleton = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Spinner size={48} color={tokens.foreground10} />
    </div>
  );
};
