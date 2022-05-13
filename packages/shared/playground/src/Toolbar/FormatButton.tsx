/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Zap } from '@jolteon/icons';
import { VisuallyHidden } from '@jolteon/react-base-ui';
import { ActionButton } from './ActionButton';
import { FormatButtonProps } from './FormatButton.types';
import { usePrefersReducedMotion } from '@vaporeon/hooks';
import { animated, useSpring } from '@react-spring/web';
import { SPRINGS } from '@vaporeon/constants';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    transformOrigin: 'center center',
  },
});

const FormatButton = ({ handleFormat }: FormatButtonProps) => {
  const classes = useStyles();

  const [isHovering, setIsHovering] = useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();

  const springConfig = SPRINGS.springy;

  const style = useSpring({
    transform: isHovering ? 'scaleY(1.2)' : 'scaleY(1)',
    opacity: isHovering ? 1 : 0.7,
    config: springConfig,
    immediate: prefersReducedMotion,
  });

  return (
    <abbr title="Format code using Prettier">
      <ActionButton
        onClick={handleFormat}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        as={animated.button}
        className={classes.root}
        style={style as any}
        title="Format"
        type="button"
      >
        <Zap size={16} />
        <VisuallyHidden>Format code using Prettier</VisuallyHidden>
      </ActionButton>
    </abbr>
  );
};

export { FormatButton };
export default FormatButton;
