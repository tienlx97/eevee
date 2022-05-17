import React, { forwardRef } from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

import './Strikethrough.css';

const useStyles = makeStyles({
  wrapper: {
    display: 'inline-block',
    position: 'relative',
    textDecorationLine: 'none',
  },
});

function Strikethrough(
  { children, className, ...delegated }: React.HTMLAttributes<HTMLSpanElement>,
  ref?: React.LegacyRef<HTMLSpanElement>
) {
  const styles = useStyles();
  const classes = mergeClasses(
    styles.wrapper,
    'strikethrough_wrapper',
    className
  );
  return (
    <span ref={ref} className={classes} {...delegated}>
      {children}
    </span>
  );
}

export default forwardRef(Strikethrough);
