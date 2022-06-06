import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';

import { MainProps } from './Main.types';
import { useMain } from './useMain';
import { useMainStyles } from './useMainStyles';
import { renderMain } from './renderMain';

export const Main: ForwardRefComponent<MainProps> = React.forwardRef(
  (props: MainProps, ref: React.Ref<HTMLElement>) => {
    const state = useMain(props, ref);

    useMainStyles(state);

    return renderMain(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<MainProps>;

Main.displayName = 'Main';
