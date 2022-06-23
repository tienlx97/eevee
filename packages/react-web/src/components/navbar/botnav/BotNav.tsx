import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';

import { BotNavProps } from './BotNav.types';
import { useBotNav } from './useBotNav';
import { useBotNavStyles } from './useBotNavStyles';
import { renderBotNav } from './renderBotNav';

export const BotNav: ForwardRefComponent<BotNavProps> = React.forwardRef(
  (props: BotNavProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useBotNav(props, ref);

    useBotNavStyles(state);

    return renderBotNav(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<BotNavProps>;

BotNav.displayName = 'BotNav';
