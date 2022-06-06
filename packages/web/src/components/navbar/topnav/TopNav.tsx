import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';

import { TopNavProps } from './TopNav.types';
import { useTopNav } from './useTopNav';
import { useTopNavStyles } from './useTopNavStyles';
import { renderTopNav } from './renderTopNav';

export const TopNav: ForwardRefComponent<TopNavProps> = React.forwardRef(
  (props: TopNavProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useTopNav(props, ref);

    useTopNavStyles(state);

    return renderTopNav(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<TopNavProps>;

TopNav.displayName = 'TopNav';
