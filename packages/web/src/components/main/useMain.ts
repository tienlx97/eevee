import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { MainProps, MainState } from './Main.types';

export const useMain = (props: MainProps, ref: React.Ref<HTMLElement>): MainState => {
  const { content, ...rest } = props;
  const state: MainState = {
    components: {
      root: 'main',
      content: 'div',
    },

    root: {
      ref,
      ...rest,
    },
    content: resolveShorthand(content, { defaultProps: { as: 'div' }, required: true }),
  };

  return state;
};
