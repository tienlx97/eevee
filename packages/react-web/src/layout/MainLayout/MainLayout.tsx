import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';

import { MainLayoutProps } from './MainLayout.types';
import { useMainLayout } from './useMainLayout';
import { useMainLayoutStyles } from './useMainLayoutStyles';
import { renderMainLayout } from './renderMain';

export const MainLayout: ForwardRefComponent<MainLayoutProps> = React.forwardRef(
  (props: MainLayoutProps, ref: React.Ref<HTMLElement>) => {
    const state = useMainLayout(props, ref);

    useMainLayoutStyles(state);

    return renderMainLayout(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<MainLayoutProps>;

MainLayout.displayName = 'MainLayout';
