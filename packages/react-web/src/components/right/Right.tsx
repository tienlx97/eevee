import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';

import { RightProps } from './Right.types';
import { useRight } from './useRight';
import { useRightStyles } from './useRightStyles';
import { renderRight } from './renderRight';

export const Right: ForwardRefComponent<RightProps> = React.forwardRef(
  (props: RightProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useRight(props, ref);

    useRightStyles(state);

    return renderRight(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<RightProps>;

Right.displayName = 'Right';
