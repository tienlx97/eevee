import type { ComponentProps, ComponentState, Slot } from '@eevee/react-utilities';

export type LinkSlots = {
  /**
   * Root of the component that renders as either an <a> or a <button> tag.
   */
  root: Slot<'a'>;
};

export type LinkType = 'hash' | 'external' | 'internal';

export type LinkProps = ComponentProps<Partial<LinkSlots>> & {
  appearance?: 'medium' | 'twitter';
  linkState?: unknown;
  disabled?: boolean;
};

export type LinkState = ComponentState<LinkSlots> &
  Pick<LinkProps, 'appearance' | 'disabled'> & {
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

    linkState?: unknown;
  };
