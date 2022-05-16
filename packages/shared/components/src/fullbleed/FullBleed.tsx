import React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

const useStyles = makeStyles({
  wrapper: {
    width: '100vw',
    position: 'relative',
    left: '50%',
    marginLeft: '-50vw',
  },
});

const FullBleed = ({
  children,
  className,
  ...delegated
}: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, className);

  return (
    <div className={classes} {...delegated}>
      {children}
    </div>
  );
};

export default FullBleed;
