import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { PublishInState, PublishInSlots } from './PublishIn.types';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { TextLink } from '@eevee/react-link';
import { Link } from 'react-router-dom';

const useRootStyles = makeStyles({
  root: {
    marginRight: '16px',
  },

  avatarLink: {
    ...shorthands.margin(0),
    ...shorthands.padding(0),
  },

  publishInWrapper: {
    marginRight: '3px',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    display: 'block',
  },

  publishInText: {
    fontSize: '14px',
    lineHeight: '20px',
    color: tokens.f1,
    fontWeight: 400,
  },
});

/**
 * Render the final JSX of PublishIn
 */
export const renderPublishIn = (state: PublishInState) => {
  const { slots, slotProps } = getSlots<PublishInSlots>(state);
  const { displayClassName, heightClassName, mediaQueryClassName } = state;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const rootStyles = useRootStyles();

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <div className={displayClassName}>
        <div className={mediaQueryClassName}>
          <div className={heightClassName}>
            <div className={rootStyles.root}>
              <Link className={rootStyles.avatarLink} to="">
                <div style={{ position: 'relative', display: 'block' }}>
                  <img
                    width={32}
                    height={32}
                    style={{ borderRadius: '50%' }}
                    src="https://miro.medium.com/fit/c/32/32/1*eSkI3WnRuNvB7HLLV6HvGA.png"
                  />
                </div>
              </Link>
            </div>
            <div className={rootStyles.publishInWrapper}>
              <div className={rootStyles.publishInText}>Published in</div>
            </div>
            <TextLink href="/">Technology</TextLink>
          </div>
        </div>
      </div>
    </slots.root>
  );
};
