import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { BotNavProps, BotNavState } from './BotNav.types';
import { useLocation } from 'react-router-dom';

export const useBotNav = (props: BotNavProps, ref: React.Ref<HTMLDivElement>): BotNavState => {
  const { content, postition, ...rest } = props;
  const [open, setOpen] = React.useState(false);

  const state: BotNavState = {
    components: {
      root: 'div',
      postition: 'div',
      content: 'div',
    },
    onToggle: setOpen,
    open,

    root: {
      ref,
      ...rest,
    },
    postition: resolveShorthand(postition, { required: true }),
    content: resolveShorthand(content, { required: true }),
  };

  return state;
};
