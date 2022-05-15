import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { makeStyles, shorthands } from '@griffel/react';

import { usePrefersReducedMotion } from '@vaporeon/hooks';
import { SPRINGS } from '@vaporeon/constants';

import { VisuallyHidden } from '../../button';
import { ActionButton } from './ActionButton';

import { IFullscreenToggleButtonProps } from './FullscreenToggleButton.types';

const useStyles = makeStyles({
  svg: {
    width: '16px',
    height: '16px',
    stroke: 'currentColor',
    strokeWidth: '1.5px',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...shorthands.overflow('visible'),
    willChange: 'transform',
    backfaceVisibility: 'hidden',
  },

  wrapper: {
    transformOrigin: 'center center',
  },
});

// const styles = stylex.create({
//   svg: {
//     width: '16px',
//     height: '16px',
//     stroke: 'currentColor',
//     strokeWidth: '1.5px',
//     strokeLinecap: 'round',
//     strokeLinejoin: 'round',
//     overflow: 'visible',
//     willChange: 'transform',
//     backfaceVisibility: 'hidden',
//   },

//   wrapper: {
//     transformOrigin: 'center center',
//   },
// });

const FullscreenToggleButton = ({
  isFullscreened,
  handleToggleFullscreen,
}: IFullscreenToggleButtonProps) => {
  const classes = useStyles();

  const [isHovering, setIsHovering] = useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();

  const springSettings = {
    config: SPRINGS.springy,
    immediate: prefersReducedMotion,
  };

  const position =
    (isFullscreened && isHovering) || (!isFullscreened && !isHovering)
      ? 'in'
      : 'out';

  const path1 = useSpring({
    opacity: isHovering ? 1 : 0.7,
    transform:
      position === 'out' ? 'translate(-1px, -1px)' : 'translate(0px,0px)',
    ...springSettings,
  });
  const path2 = useSpring({
    opacity: isHovering ? 1 : 0.7,
    transform:
      position === 'out' ? 'translate(1px, -1px)' : 'translate(0px,0px)',
    ...springSettings,
  });
  const path3 = useSpring({
    opacity: isHovering ? 1 : 0.7,
    transform:
      position === 'out' ? 'translate(1px, 1px)' : 'translate(0px,0px)',
    ...springSettings,
  });
  const path4 = useSpring({
    opacity: isHovering ? 1 : 0.7,
    transform:
      position === 'out' ? 'translate(-1px, 1px)' : 'translate(0px,0px)',
    ...springSettings,
  });

  return (
    <abbr title="Toggle fullscreen">
      <ActionButton
        onClick={handleToggleFullscreen}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        id={isFullscreened ? 'fs-wrapper' : undefined}
        className={classes.wrapper}
      >
        <svg className={classes.svg} viewBox="0 0 16 16" fill="none">
          <animated.path d="M2 6 L 2 2 L 6 2" style={path1} />
          <animated.path d="M10 2 L 14 2 L 14 6" style={path2} />
          <animated.path d="M14 10 L 14 14 L 10 14" style={path3} />
          <animated.path d="M6 14 L 2 14 L 2 10" style={path4} />
        </svg>
        <VisuallyHidden>Toggle fullscreen</VisuallyHidden>
      </ActionButton>
    </abbr>
  );
};

export { FullscreenToggleButton };
export default FullscreenToggleButton;
