import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { BlurSystemProps, BlurSystemState } from './BlurSystem.types';
import { useBlurSystemState } from './useBlurSystemState';

/**
 * Create the state required to render BlurSystem.
 *
 * The returned state can be modified with hooks such as useBlurSystemStyles,
 * before being passed to renderBlurSystem.
 *
 * @param props - props from this instance of BlurSystem
 * @param ref - reference to root HTMLElement of BlurSystem
 */
export const useBlurSystem = (props: BlurSystemProps, ref: React.Ref<HTMLElement>): BlurSystemState => {
  const state: BlurSystemState = {
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

  useBlurSystemState(state);

  return state;
};
