import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { SideNavProps } from './SideNav.types';
import { renderSideNav } from './renderSideNav';
import { useSideNavStyles } from './useSideNavStyles';
import { useSideNav } from './useSideNav';

export const SideNav: ForwardRefComponent<SideNavProps> = React.forwardRef(
  (props: SideNavProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useSideNav(props, ref);

    useSideNavStyles(state);

    return renderSideNav(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<SideNavProps>;

SideNav.displayName = 'SideNav';
