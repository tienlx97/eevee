import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';

import { RightBarProps } from './RightBar.types';
import { useRightBar } from './useRightBar';
import { useRightBarStyles } from './useRightBarStyles';
import { renderRightBar } from './renderRightBar';

export const RightBar: ForwardRefComponent<RightBarProps> = React.forwardRef(
  (props: RightBarProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useRightBar(props, ref);

    useRightBarStyles(state);

    return renderRightBar(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<RightBarProps>;

RightBar.displayName = 'RightBar';
