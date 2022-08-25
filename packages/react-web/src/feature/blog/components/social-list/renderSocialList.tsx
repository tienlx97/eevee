import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { SocialListState, SocialListSlots } from './SocialList.types';
import { ButtonR } from '@eevee/react-button';
import { CopyLink, Facebook, LinkedIn, Save, Twitter } from '@components/icons/index';

/**
 * Render the final JSX of SocialList
 */
export const renderSocialList = (state: SocialListState) => {
  const { slots, slotProps } = getSlots<SocialListSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      {state.before && slotProps.root.children}
      <ButtonR aria-label="Facebook" title="Share on Facebook" icon={<Facebook />} />
      <ButtonR aria-label="Twitter" title="Share on Twitter" icon={<Twitter />} />
      <ButtonR aria-label="LinkedIn" title="Share on LinkedIn" icon={<LinkedIn />} />
      <ButtonR aria-label="Copy link" title="Copy link" icon={<CopyLink />} />
      {!state.before && slotProps.root.children}
    </slots.root>
  );
};
