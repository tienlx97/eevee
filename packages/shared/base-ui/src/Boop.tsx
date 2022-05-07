import React from 'react';
import { animated } from '@react-spring/web';
import stylex from '@ladifire-opensource/stylex';
import { useBoop } from '@vaporeon/hooks';
import { BoopProps } from './types';

const styles = stylex.create({
  wrapper: {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
  },
});

const Boop = ({ x, y, rotation, scale, timing, children }: BoopProps) => {
  const [style, trigger] = useBoop({
    x,
    y,
    rotation,
    scale,
    timing,
  });

  return (
    <animated.span
      className={stylex(styles.wrapper)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onMouseEnter={trigger as any}
      style={style}
    >
      {children}
    </animated.span>
  );
};

export default Boop;
