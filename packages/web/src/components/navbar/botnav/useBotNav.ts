import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { BotNavProps, BotNavState } from './BotNav.types';

export const useBotNav = (props: BotNavProps, ref: React.Ref<HTMLDivElement>): BotNavState => {
  const { content, postition, ...rest } = props;

  const state: BotNavState = {
    components: {
      root: 'div',
      postition: 'div',
      content: 'div',
    },

    root: {
      ref,
      ...rest,
    },
    postition: resolveShorthand(postition, { required: true }),
    content: resolveShorthand(content, { required: true }),
  };

  return state;
};
