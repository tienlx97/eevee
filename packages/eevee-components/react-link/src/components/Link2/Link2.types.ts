import type { EeveeProps, EeveeState, EeveeSlot } from '@eevee/react-utilities';
import * as React from 'react';

export type LinkSlots2 = {
  /**
   * Root of the component that renders as either an <a> or a <button> tag.
   */
  root: EeveeSlot<'a'>;

  iconAndText?: EeveeSlot<'div'>;
  text?: EeveeSlot<'span'>;
};

export type LinkType = 'hash' | 'external' | 'internal';

export type LinkProps2 = EeveeProps<LinkSlots2> & {
  icon?: React.ReactNode;
};

export type LinkState2 = EeveeState<LinkSlots2> &
  Pick<LinkProps2, 'icon'> & {
    /**
     * There are three types of links
     * - Internal links to other pages within the same app
     * - External links, to other domains
     * - Hash links (#introduction), for the same page.
     * @type
     * @default 'internal'
     */
    linkType: LinkType;

    iconOnly?: boolean;
  };
