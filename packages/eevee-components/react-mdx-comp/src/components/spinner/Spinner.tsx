import * as React from 'react';
import type { CSSProperties } from 'react';
import type { SpinnerProps } from './Spinner.types';
import { Loader } from './Loader';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import './Spinner.css';

const useStyles = makeStyles({
  wrapper: {
    display: 'block',
    color: tokens.foreground1,
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
    animationDelay: '0s',
    animationIterationCount: 'infinite',
    animationDirection: 'normal',
    animationFillMode: 'none',
    animationPlayState: 'running',

    transformOrigin: 'center center',
    lineHeight: '0px',

    '& svg': {
      display: 'block !important',
      height: 'var(--size)',
    },
  },
});

export const Spinner = ({ size = 24, color }: SpinnerProps) => {
  const classes = useStyles();

  const spanInlineStyles = {
    width: size,
    height: size,
    '--size': `${size}px`,
    color,
  } as CSSProperties;

  return (
    <span style={spanInlineStyles} className={mergeClasses(classes.wrapper, 'sp__wrapper')}>
      <Loader size={size} />
    </span>
  );
};
