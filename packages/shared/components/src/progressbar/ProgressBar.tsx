import React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { animated as Animated, useSpring } from '@react-spring/web';

import { SPRINGS } from '@vaporeon/constants';
import { range } from '@vaporeon/utils';

import { IProgressBarProps } from './ProgressBar.types';

const useStyles = makeStyles({
  outerWrapper: {
    position: 'relative',
    width: '100%',
  },

  wrapper: {
    width: '100%',
    ...shorthands.borderRadius('10000px'),
    ...shorthands.overflow('hidden'),
  },

  bar: {
    width: '100%',
    height: '100%',
    willChange: 'transform',
  },

  notches: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-4px',
    transform: 'translateY(100%)',
    display: 'flex',
    justifyContent: 'space-between',
  },

  notch: {
    height: '5px',
    width: '1px',
    backgroundColor: 'var(--color-gray-300)',
    ...shorthands.borderRadius('2px'),
    '&:first-of-type, &:last-of-type': {
      opacity: 0,
    },
  },
});

const GRADIENTS = {
  primary: 'var(--color-primary)',
  warm: 'linear-gradient(90deg, hsl(333deg, 100%, 55%), hsl(289deg, 100%, 45%), hsl(245deg, 100%, 60%))',
  cool: 'linear-gradient(90deg, hsl(50deg, 95%, 60%), hsl(140deg, 100%, 60%), hsl(200deg, 100%, 60%))',
};

const ProgressBar = ({
  value = 0,
  max,
  height = 8,
  colorTheme = 'warm',
  background = 'var(--color-gray-200)',
  includeNotches,
  animated = true,
  className,
  ...delegated
}: IProgressBarProps) => {
  const classes = useStyles();

  const barColor = GRADIENTS[colorTheme];
  const clipPathPercentage = (value / max) * 100 + '%';

  const animatedStyles = useSpring({
    background: barColor,
    clipPath: `polygon(
      0% 0%,
      ${clipPathPercentage} 0%,
      ${clipPathPercentage} 100%,
      0% 100%
    )`,
    config: SPRINGS.molasses,
    immediate: !animated,
  });

  return (
    <div
      {...delegated}
      className={mergeClasses(classes.outerWrapper, className)}
    >
      <div
        role="progressbar"
        aria-label="Progress bar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        style={{ height, background }}
        className={classes.wrapper}
      >
        <Animated.div className={classes.bar} style={animatedStyles} />
      </div>
      {includeNotches && (
        <>
          <div className={classes.notches}>
            {range(max + 1).map((i) => (
              <div className={classes.notch} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProgressBar;
