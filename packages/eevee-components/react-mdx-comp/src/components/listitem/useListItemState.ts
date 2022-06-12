import * as React from 'react';
import { ListItemState } from './ListItem.types';
import { usePrefersReducedMotion } from '@eevee/react-utilities';
import { useSpring } from '@react-spring/web';

const TIGHT_SPRING = {
  tension: 450,
  friction: 25,
};

export const useListItemState = (state: ListItemState): ListItemState => {
  const { onMouseEnter, onMouseLeave } = state.content;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isHovering, setIsHovering] = React.useState(false);
  const iconSpring = useSpring(
    state.animated && !prefersReducedMotion
      ? {
          transform: isHovering ? `translateY(5px) translateX(8px)` : `translateY(5px) translateX(0px)`,
          config: TIGHT_SPRING,
        }
      : { transform: 'translateY(5px)' },
  );

  if (state.type === 'unordered') {
    state.content.onMouseEnter = ev => {
      setIsHovering(true);
      if (onMouseEnter) {
        onMouseEnter(ev);
      }
    };

    state.content.onMouseLeave = ev => {
      setIsHovering(false);
      if (onMouseLeave) {
        onMouseLeave(ev);
      }
    };

    state.iconSpring = iconSpring;
  }

  return state;
};
