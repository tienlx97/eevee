import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';

const useRootStyles = makeStyles({
  base: {
    ...shorthands.padding('40px', 0),
    textAlign: 'center',
  },
});

type TopProps = {
  _?: string;
  children?: React.ReactNode;
};

export const Top = (props: TopProps) => {
  const styles = useRootStyles();
  return <div className={styles.base} {...props} />;
};
