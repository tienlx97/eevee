import type { EeveeProps, EeveeState, EeveeSlot } from '@eevee/react-utilities';

export type LinkSlots = {
  /**
   * Root of the component that renders as either an <a> or a <button> tag.
   */
  root: EeveeSlot<'a'>;
};

export type LinkType = 'hash' | 'external' | 'internal';

export type LinkProps = EeveeProps<Partial<LinkSlots>> & {};

export type LinkState = EeveeState<LinkSlots> & {
  /**
   * There are three types of links
   * - Internal links to other pages within the same app
   * - External links, to other domains
   * - Hash links (#introduction), for the same page.
   * @type
   * @default 'internal'
   */
  linkType: LinkType;

  isCurrentLoc: boolean;
};
