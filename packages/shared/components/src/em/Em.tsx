/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';
import { IEmProps } from './Em.types';

const useStyles = makeStyles({
  wrapper: {
    fontFamily: 'var(--font-family-spicy)',
    letterSpacing: '-0.25px',
    fontStyle: 'normal',
    fontWeight: '400',

    '.tippy-popper': {
      color: 'var(--color-background) !important',
    },
  },
});

const Em = (props: IEmProps, ref?: any) => {
  const { color, children, className } = props;

  const styles = useStyles();
  const classes = mergeClasses(styles.wrapper, className);

  return (
    <em
      ref={ref}
      style={{ color: color || 'var(--color-text)' }}
      className={classes}
    >
      {children}
    </em>
  );
};

export default forwardRef(Em);
