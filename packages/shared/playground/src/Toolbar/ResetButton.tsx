/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { SkipBack } from '@jolteon/icons';
import { useInterval, usePrefersReducedMotion } from '@vaporeon/hooks';
import { normalize } from '@vaporeon/utils';
import { VisuallyHidden } from '@jolteon/react-base-ui';
import { ProgressBar } from '@jolteon/progressbar';
import { Tooltip } from '@jolteon/tooltip';
import { ActionButton } from './ActionButton';
// import { useSpring, animated } from '@react-spring/web';
// import { SPRINGS } from '@vaporeon/constants';
import { makeStyles } from '@griffel/react';
import { IResetButtonProps } from './ResetButton.types';
import { SPRINGS } from '@vaporeon/constants';
import { animated, useSpring } from '@react-spring/web';

const resetAfter = 1000;

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
  },

  progressWrapper: {
    position: 'absolute',
    top: '-6px',
    left: '10%',
    width: '80%',
  },

  miniProgressBar: {
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
  },
});

const ResetButton = ({ handleReset }: IResetButtonProps) => {
  const classes = useStyles();

  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [opacity, setOpacity] = useState(0.7);

  const mouseDownAt = useRef<number>({} as number);

  useEffect(() => {
    if (!isRunning) {
      setProgress(null);
      setOpacity(0.7);
    }
  }, [isRunning]);

  function handleMouseDown() {
    mouseDownAt.current = Date.now();
    setIsRunning(true);
    setShowTooltip(false);
  }

  function handleMouseUp() {
    setIsRunning(false);

    const delta = Date.now() - mouseDownAt.current;
    if (delta < 400) {
      setShowTooltip(true);
    }
  }

  useInterval(
    () => {
      const delta = Date.now() - mouseDownAt.current;

      if (delta > resetAfter) {
        handleReset();
        setIsRunning(false);
        return;
      }

      const newProgress = normalize(delta, 0, resetAfter, 0, 100);

      setProgress(newProgress);
      setOpacity(normalize(delta, 0, resetAfter, 0.7, 1));
    },
    isRunning ? 20 : undefined
  );

  const prefersReducedMotion = usePrefersReducedMotion();

  const style = useSpring({
    transform: isHovering ? 'scale(1.2)' : 'scale(1)',
    opacity,
    config: SPRINGS.springy,
    immediate: prefersReducedMotion,
  });

  return (
    <abbr title="Reset code">
      <Tooltip
        placement="top"
        content="Click and hold to reset code to the initial version"
        when={showTooltip}
        followCursor={false}
      >
        <div className={classes.wrapper}>
          <ActionButton
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setShowTooltip(false);
              setIsHovering(false);
            }}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                handleReset();
              }
            }}
            as={animated.button}
            style={style as any}
          >
            <SkipBack size={16} />
            <VisuallyHidden>Reset code</VisuallyHidden>
          </ActionButton>
          <div className={classes.progressWrapper}>
            <ProgressBar
              value={progress || undefined}
              // It appears to end prematurely if it tracks
              // progress exactly. Leave it full for the final
              // 10%.
              max={100 * 0.9}
              animated={false}
              height={4}
              colorTheme="primary"
              background="transparent"
              style={{ opacity: progress && progress > 0 ? 1 : 0 }}
              className={classes.miniProgressBar}
            />
          </div>
        </div>
      </Tooltip>
    </abbr>
  );
};

export { ResetButton };
export default ResetButton;
