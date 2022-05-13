/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import { IButtonProps } from './UnstyledButton.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    ...shorthands.margin(0),
    ...shorthands.padding(0),
    // ...shorthands.border('none'),

    borderBottomStyle: 'none',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',

    fontStyle: 'inherit',
    fontVariantLigatures: 'inherit',
    fontVariantCaps: 'inherit',
    fontVariantNumeric: 'inherit',
    fontVariantEastAsian: 'inherit',
    fontWeight: 'inherit',
    fontStretch: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    fontFamily: 'inherit',

    backgroundColor: 'transparent',
    cursor: 'pointer',
    textAlign: 'left',
    // font: 'inherit',

    '&:focus': {
      ...shorthands.outline('2px auto var(--color-primary)'),
      outlineOffset: '2px',
    },

    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
    },
  },
});

const useDisplayStyles = makeStyles({
  none: {
    display: 'none',
  },
  inline: {
    display: 'inline',
  },
  block: {
    display: 'block',
  },
  'inline-block': {
    display: 'inline-block',
  },
});

const UnstyledButton = (props: IButtonProps, ref: any) => {
  const {
    display = 'block',
    as: RootType = 'button',
    children,
    className,
    ...delegated
  } = props;

  const styles = useStyles();
  const displayStyles = useDisplayStyles();

  const classes = mergeClasses(styles.root, displayStyles[display], className);

  return (
    <RootType ref={ref} {...delegated} className={classes}>
      {children}
    </RootType>
  );
};

export default forwardRef(UnstyledButton);
