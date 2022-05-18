import React, { CSSProperties } from 'react';
import { ISpinnerProps } from './Spinner.types';
import { Loader } from '../icons';
import { makeStyles, mergeClasses } from '@griffel/react';

// import './Spinner.css';

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

const Spinner = ({ size = 24, color }: ISpinnerProps) => {
  const classes = useStyles();

  const spanInlineStyles = {
    width: size,
    height: size,
    '--size': `${size}px`,
    color,
  } as CSSProperties;

  return (
    <span
      style={spanInlineStyles}
      className={mergeClasses(classes.wrapper, 'sp__wrapper')}
    >
      <Loader size={size} />
    </span>
  );
};

export default Spinner;
