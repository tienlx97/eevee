import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { CircleAvatarProps } from './CircleAvatar.types';
import { renderCircleAvatar } from './renderCircleAvatar';
import { useCircleAvatar } from './useCircleAvatar';
import { useCircleAvatarStyles } from './useCircleAvatarStyles';

/**
 * CircleAvatar give people a way to trigger an action.
 */
export const CircleAvatar: ForwardRefComponent<CircleAvatarProps> = React.forwardRef(
  (props: CircleAvatarProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useCircleAvatar(props, ref);

    useCircleAvatarStyles(state);

    return renderCircleAvatar(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<CircleAvatarProps>;

CircleAvatar.displayName = 'CircleAvatar';
