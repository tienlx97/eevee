import React, { CSSProperties } from 'react';
import stylex from '@ladifire-opensource/stylex';
import { Loader } from './Loader';
import { SpinnerProps } from './types';
import { joinClasses } from '@eevee/utils';

const styles = stylex.create({
  wrapper: {
    display: 'block',
    color: 'var(--color-text)',
    opacity: 0.75,

    animationName: stylex.keyframes({
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    }),

    animationDuration: '1400ms',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',

    transformOrigin: 'center center',
    lineHeight: '0px',

    svg: {
      display: 'block !important',
      height: 'var(--size)',
    },
  },
});

const Spinner = ({ size = 24, color }: SpinnerProps) => {
  const varsStyle = {
    '--size': `${size}px`,
  } as CSSProperties;

  return (
    <span
      className={joinClasses(
        stylex(styles.wrapper),
        stylex.dedupe({ width: size, height: size, color })
      )}
      style={varsStyle}
    >
      <Loader size={size} />
    </span>
  );
};

export { Spinner };
export default Spinner;
