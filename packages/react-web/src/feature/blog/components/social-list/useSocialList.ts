import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { SocialListProps, SocialListState } from './SocialList.types';

/**
 * Create the state required to render SocialList.
 *
 * The returned state can be modified with hooks such as useSocialListStyles_unstable,
 * before being passed to renderSocialList_unstable.
 *
 * @param props - props from this instance of SocialList
 * @param ref - reference to root HTMLElement of SocialList
 */
export const useSocialList = (props: SocialListProps, ref: React.Ref<HTMLElement>): SocialListState => {
  const { before } = props;

  const state: SocialListState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    before,
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  return state;
};
