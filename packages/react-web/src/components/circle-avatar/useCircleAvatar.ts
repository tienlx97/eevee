import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { CircleAvatarProps, CircleAvatarState } from './CircleAvatar.types';
import { useCircleAvatarState } from './useCircleAvatarState';

/**
 * Create the state required to render CircleAvatar.
 *
 * The returned state can be modified with hooks such as useCircleAvatarStyles_unstable,
 * before being passed to renderCircleAvatar_unstable.
 *
 * @param props - props from this instance of CircleAvatar
 * @param ref - reference to root HTMLElement of CircleAvatar
 */
export const useCircleAvatar = (props: CircleAvatarProps, ref: React.Ref<HTMLElement>): CircleAvatarState => {
  const { url, title, width = 48, height = 48, img, ...rest } = props;

  const state: CircleAvatarState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
      img: 'img',
    },
    url,
    title,
    width,
    height,
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...rest,
    }),

    img: resolveShorthand(img, {
      defaultProps: {},
      required: true,
    }),
  };

  useCircleAvatarState(state);

  return state;
};
