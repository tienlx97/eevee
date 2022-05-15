import React, { CSSProperties } from 'react';
import { ISpinnerProps } from './Spinner.types';
import { Loader } from '../icons';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  wrapper: {
    display: 'block',
    color: 'var(--color-text)',
    opacity: 0.75,
    animationName: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },

    animationDuration: '1400ms',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',

    transformOrigin: 'center center',
    lineHeight: '0px',

    '& svg': {
      display: 'block !important',
      height: 'var(--size)',
    },
  },
});

const Spinner = ({ size = 24, color }: ISpinnerProps) => {
  const classes = useStyles();

  const spanInlineStyles = {
    width: size,
    height: size,
    '--size': `${size}px`,
    color,
  } as CSSProperties;

  return (
    <span style={spanInlineStyles} className={classes.wrapper}>
      <Loader size={size} />
    </span>
  );
};

export default Spinner;
