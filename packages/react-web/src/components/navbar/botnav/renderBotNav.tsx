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
  WriteRegular,
} from '@components/icons/index';

import { LinkIcon } from '@eevee/react-link';

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
            <LinkIcon
              aria-label="Write"
              title="Write"
              iconRegular={WriteRegular}
              iconFill={WriteFill}
              href="/new-story"
            />
          </div>
        </slots.content>
      </slots.postition>
    </slots.root>
  );
};
