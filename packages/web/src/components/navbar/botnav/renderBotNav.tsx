import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { BotNavSlots, BotNavState } from './BotNav.types';
import { HomeRegular, NotificationRegular, SearchRegular, WriteFill } from '../../icons/index';

import { LinkR } from '@eevee/react-link';

/**
 * Render the final JSX of BotNav
 */
export const renderBotNav = (state: BotNavState) => {
  const { linkIconWrapperClassName } = state;
  const { slots, slotProps } = getSlots<BotNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.postition {...slotProps.postition}>
        <slots.content {...slotProps.content}>
          <div className={linkIconWrapperClassName}>
            <LinkR icon={<HomeRegular />} href="/home" />
          </div>
          <div className={linkIconWrapperClassName}>
            <LinkR icon={<SearchRegular />} href="/search" />
          </div>
          <div className={linkIconWrapperClassName}>
            <LinkR icon={<NotificationRegular />} href="/notification" />
          </div>
          <div className={linkIconWrapperClassName}>
            <LinkR icon={<WriteFill />} href="/write" />
          </div>
        </slots.content>
      </slots.postition>
    </slots.root>
  );
};
