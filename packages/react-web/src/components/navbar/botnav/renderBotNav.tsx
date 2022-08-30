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
import { ToggleAuthor } from './ToggleAuthor';
import { LaunchPadMenu } from './LaunchPadMenu';

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
            <LinkIcon
              onClick={() => state.onToggle(false)}
              aria-label="Home"
              title="Home"
              iconFill={HomeFill}
              iconRegular={HomeRegular}
              href="/home"
            />
          </div>
          <div className={linkIconWrapperClassName}>
            <LinkIcon
              onClick={() => state.onToggle(false)}
              aria-label="Search"
              title="Search"
              iconFill={SearchFill}
              iconRegular={SearchRegular}
              href="/search"
            />
          </div>

          <div className={linkIconWrapperClassName}>
            <LinkIcon
              onClick={() => state.onToggle(false)}
              aria-label="Write"
              title="Write"
              iconRegular={WriteRegular}
              iconFill={WriteFill}
              href="/new-story"
            />
          </div>

          <div className={linkIconWrapperClassName}>
            <ToggleAuthor toggle={state.open} onToggle={state.onToggle} />
          </div>
        </slots.content>
        {state.open && <LaunchPadMenu setOpen={state.onToggle} />}
      </slots.postition>
    </slots.root>
  );
};
