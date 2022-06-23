import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { BotNavSlots, BotNavState } from './BotNav.types';
import {
  HomeFill,
  HomeRegular,
  NotificationFill,
  NotificationRegular,
  SearchFill,
  SearchRegular,
  WriteFill,
} from '../../icons/index';

import { LinkIcon } from '@eevee/react-link';
import { WriteRegular } from '../../icons/write/Write';

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
            <LinkIcon aria-label="Home" title="Home" iconFill={HomeFill} iconRegular={HomeRegular} href="/home" />
          </div>
          <div className={linkIconWrapperClassName}>
            <LinkIcon
              aria-label="Search"
              title="Search"
              iconFill={SearchFill}
              iconRegular={SearchRegular}
              href="/search"
            />
          </div>
          <div className={linkIconWrapperClassName}>
            <LinkIcon
              aria-label="Notification"
              title="Notification"
              iconFill={NotificationFill}
              iconRegular={NotificationRegular}
              href="/notification"
            />
          </div>
          <div className={linkIconWrapperClassName}>
            <LinkIcon aria-label="Write" title="Write" iconRegular={WriteRegular} iconFill={WriteFill} href="/write" />
          </div>
        </slots.content>
      </slots.postition>
    </slots.root>
  );
};
