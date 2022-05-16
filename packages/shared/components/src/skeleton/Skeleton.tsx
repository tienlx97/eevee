import React from 'react';
import { makeStyles } from '@griffel/react';

import { Spinner } from '../spinner';

const useStyles = makeStyles({
  wrapper: {
    display: 'grid',
    placeContent: 'center',
    width: '100%',
    maxHeight: '50vh',
  },
});

const Skeleton = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Spinner size={48} color="var(--color-gray-300)" />
    </div>
  );
};

export default Skeleton;
