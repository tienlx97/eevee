import React, { useState } from 'react';
import { VisuallyHidden } from '@jolteon/react-base-ui';
import { ActionButton } from './ActionButton';
import { RefreshCw } from '@jolteon/icons';
import { IResreshButtonProps } from './ResreshButton.types';
import { makeStyles, mergeClasses } from '@griffel/react';

const useStyles = makeStyles({
  wrapper: {
    transformOrigin: 'center center',
    transitionProperty: 'opacity',
    transitionDuration: '250ms',

    '@media (prefers-reduced-motion: no-preference) ': {
      transitionProperty: 'transform, opacity',
      transitionDuration: '800ms, 250ms',
      transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.36, 1.04), ease',
      transitionDelay: '0s, 0s',
    },
  },

  opacity1: {
    opacity: 1,
  },

  opacity07: {
    opacity: 0.7,
  },
});

// const $3 = stylex.create({
//   wrapper: {
//     transformOrigin: "center center",
//     transition: "opacity 250ms",

//     "@media (prefers-reduced-motion: no-preference) ": {
//       transition: "transform 800ms cubic-bezier(0.17, 0.67, 0.36, 1.04) opacity 250ms"
//     }
//   },
// });

const RefreshButton = ({ handleRefresh }: IResreshButtonProps) => {
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const styles = useStyles();

  const classes = mergeClasses(
    styles.wrapper,
    isHovering ? styles.opacity1 : styles.opacity07
  );

  return (
    <abbr title="Refresh pane">
      <ActionButton
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={(e) => {
          handleRefresh(e);
          setRotation((r) => r + 180);
        }}
        className={classes}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <RefreshCw size={16} />
        <VisuallyHidden>Refresh results pane</VisuallyHidden>
      </ActionButton>
    </abbr>
  );
};

export { RefreshButton };
