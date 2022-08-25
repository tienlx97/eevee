import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { DotProps, DotState } from './Dot.types';
import { useDotState } from './useDotState';

/**
 * Create the state required to render Dot.
 *
 * The returned state can be modified with hooks such as useDotStyles,
 * before being passed to renderDot.
 *
 * @param props - props from this instance of Dot
 * @param ref - reference to root HTMLElement of Dot
 */
export const useDot = (props: DotProps, ref: React.Ref<HTMLElement>): DotState => {
  const { text } = props;

  const state: DotState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
      text: 'span',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),

    text: resolveShorthand(text, {
      defaultProps: {
        as: 'span',
      },
      required: true,
    }),
  };

  useDotState(state);

  return state;
};
