import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { BotNavSlots, BotNavState } from './BotNav.types';
import { HomeRegular, NotificationRegular, SearchRegular, WriteFill } from '../../icons/index';
import { LinkIcon } from '../../linkicon/index';

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
          <LinkIcon className={linkIconWrapperClassName} link={{ icon: <HomeRegular />, href: '/home' }} />
          <LinkIcon className={linkIconWrapperClassName} link={{ icon: <SearchRegular />, href: '/search' }} />
          <LinkIcon
            className={linkIconWrapperClassName}
            link={{ icon: <NotificationRegular />, href: '/notification' }}
          />
          <LinkIcon className={linkIconWrapperClassName} link={{ icon: <WriteFill />, href: '/write' }} />
        </slots.content>
      </slots.postition>
    </slots.root>
  );
};
