import React, { FunctionComponent, useState } from 'react';
import stylex from '@ladifire-opensource/stylex';
import { VisuallyHidden } from '../common/VisuallyHidden';
import { ActionButton } from './ActionButton';
import { RefreshCw } from '../common/refresh-cw';
import { ResreshButtonProps } from '../types';

const $styles = stylex.create({
  wrapper: {
    transformOrigin: 'center center',
    transition: 'opacity 250ms',

    '@media (prefers-reduced-motion: no-preference) ': {
      transition:
        'transform 800ms cubic-bezier(0.17, 0.67, 0.36, 1.04) opacity 250ms',
    },
  },
});

const $opacity = stylex.create({
  1: {
    opacity: 1,
  },
  0.7: {
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

const RefreshButton: FunctionComponent<ResreshButtonProps> = ({
  handleRefresh,
}) => {
  // const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <abbr title="Refresh pane">
      <ActionButton
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onclick={handleRefresh}
        xstyle={[$styles.wrapper, isHovering ? $opacity[1] : $opacity['0.7']]}
      >
        <RefreshCw size={16} />
        <VisuallyHidden>Refresh results pane</VisuallyHidden>
      </ActionButton>
    </abbr>
  );
};

export { RefreshButton };
