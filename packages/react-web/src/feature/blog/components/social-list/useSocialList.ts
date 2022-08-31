import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { SocialListProps, SocialListState } from './SocialList.types';
import { useToast } from '@eevee/react-toast';

/**
 * Create the state required to render SocialList.
 *
 * The returned state can be modified with hooks such as useSocialListStyles,
 * before being passed to renderSocialList.
 *
 * @param props - props from this instance of SocialList
 * @param ref - reference to root HTMLElement of SocialList
 */
export const useSocialList = (props: SocialListProps, ref: React.Ref<HTMLElement>): SocialListState => {
  const { before } = props;
  const toastify = useToast();

  const state: SocialListState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    onCopyLink: () => {
      navigator.clipboard.writeText(window.location.href);
      toastify('info', 'Copied url');
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
