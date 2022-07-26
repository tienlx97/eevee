import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { PublishInProps, PublishInState } from './PublishIn.types';
import { usePublishInState } from './usePublishInState';

/**
 * Create the state required to render PublishIn.
 *
 * The returned state can be modified with hooks such as usePublishInStyles_unstable,
 * before being passed to renderPublishIn_unstable.
 *
 * @param props - props from this instance of PublishIn
 * @param ref - reference to root HTMLElement of PublishIn
 */
export const usePublishIn = (props: PublishInProps, ref: React.Ref<HTMLElement>): PublishInState => {
  const state: PublishInState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  usePublishInState(state);

  return state;
};
