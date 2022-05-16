import React from 'react';

import { makeStyles, mergeClasses } from '@griffel/react';

const useStyles = makeStyles({
  small: {
    '@media (min-width:769px)': {
      display: 'none',
    },
  },
  notSmall: {
    '@media (min-width:1025px)': {
      display: 'none',
    },
  },
});

interface IMobileOnly extends React.HTMLAttributes<HTMLDivElement> {
  breakpoint?: string;
}
export default function MobileOnly({
  children,
  className,
  breakpoint,
  ...delegated
}: IMobileOnly) {
  const styles = useStyles();
  const classes = mergeClasses(
    breakpoint === 'small' ? styles.small : styles.notSmall,
    className
  );

  return (
    <div className={classes} {...delegated}>
      {children}
    </div>
  );
}
