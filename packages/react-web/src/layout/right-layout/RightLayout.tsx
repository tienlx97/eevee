import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';

import { RightLayoutProps } from './RightLayout.types';
import { useRightLayout } from './useRightLayout';
import { useRightLayoutStyles } from './useRightLayoutStyles';
import { renderRightLayout } from './renderRightLayout';

export const RightLayout: ForwardRefComponent<RightLayoutProps> = React.forwardRef(
  (props: RightLayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useRightLayout(props, ref);

    useRightLayoutStyles(state);

    return renderRightLayout(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<RightLayoutProps>;

RightLayout.displayName = 'RightBar';
