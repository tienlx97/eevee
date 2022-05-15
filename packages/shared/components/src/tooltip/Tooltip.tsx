import React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { followCursor } from 'tippy.js';
import Tippy from '@tippyjs/react';

import { ITooltipProps } from './Tooltip.types';

const useTooltipStyles = makeStyles({
  common: {
    '--background': 'var(--color-gray-900)',
    '--text': 'var(--color-background)',

    ...shorthands.padding('8px', '8px', '12px', '8px'),
    fontSize: '18px !important',
    textAlign: 'center',
    backgroundColor: 'var(--background)',
    color: 'var(--text)',

    '& > .tippy-arror': {
      color: 'var(--background)',
    },
  },

  animatedTipppy: {
    animationDuration: '400ms',
    animationFillMode: 'both',
  },

  staticTippy: {
    transform: 'translateY(-10px)',
  },
});

const useAnimationNameStyles = makeStyles({
  enterKeyframesBottom: {
    animationName: {
      from: {
        transform: 'translateY(-10px)',
      },
      to: {
        transform: 'translateY(-20px)',
      },
    },
  },

  enterKeyframesTop: {
    animationName: {
      from: {
        transform: 'translateY(-10px)',
      },
      to: {
        transform: 'translateY(-20px)',
      },
    },
  },
});

const Tooltip = ({
  content,
  children,
  type = 'default',
  placement = 'bottom',
  when = true,
  className,
  ...delegated
}: ITooltipProps) => {
  const styles = useTooltipStyles();
  const animationNameStyles = useAnimationNameStyles();

  const shouldRenderTooltip = !!when;

  if (!shouldRenderTooltip) {
    return children;
  }

  const tooltipStyles = [styles.common];

  if (type === 'default') {
    tooltipStyles.push(styles.animatedTipppy);
    const animationName =
      placement === 'bottom'
        ? animationNameStyles.enterKeyframesBottom
        : animationNameStyles.enterKeyframesTop;
    tooltipStyles.push(animationName);
  } else {
    tooltipStyles.push(styles.staticTippy);
  }

  const classes = mergeClasses(...tooltipStyles, className);

  return (
    <Tippy
      followCursor={true}
      content={content}
      hideOnClick={false}
      placement={placement}
      className={classes}
      {...delegated}
      plugins={type === 'default' ? [followCursor] : undefined}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
