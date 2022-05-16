import React from 'react';

import { makeStyles, mergeClasses } from '@griffel/react';

const useStyles = makeStyles({
  mdAndSmaller: {
    '@media (max-width:768px)': {
      display: 'none',
    },
  },
  lgAndSmaller: {
    '@media (max-width:1024px)': {
      display: 'none',
    },
  },
});

interface IMobileOnly extends React.HTMLAttributes<HTMLDivElement> {
  breakpoint?: string;
}
export default function DesktopOnly({
  children,
  className,
  breakpoint,
  ...delegated
}: IMobileOnly) {
  const styles = useStyles();
  const classes = mergeClasses(
    breakpoint === 'small' ? styles.mdAndSmaller : styles.lgAndSmaller,
    className
  );

  return (
    <div className={classes} {...delegated}>
      {children}
    </div>
  );
}
