import type { EeveeProps, EeveeState, EeveeSlot } from '@eevee/react-utilities';

export type LinkSlots = {
  /**
   * Root of the component that renders as either an <a> or a <button> tag.
   */
  root: EeveeSlot<'a'>;

  icon?: EeveeSlot<'span'>;
};

export type LinkType = 'hash' | 'external' | 'internal';

export type LinkProps = EeveeProps<LinkSlots> & {
  /**
   * Whether the link is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * A link can appear either with its default style or subtle.
   * If not specified, the link appears with its default styling.
   * @default 'default'
   */
  appearance?: 'default' | 'subtle';

  /**
   * When set, allows the link to be focusable even when it has been disabled. This is used in scenarios where it is
   * important to keep a consistent tab order for screen reader and keyboard users.
   * @default false
   */
  disabledFocusable?: boolean;

  /**
   * If true, changes styling when the link is being used alongside other text content.
   * @default false
   */
  inline?: boolean;
};

export type LinkState = EeveeState<LinkSlots> &
  Required<Pick<LinkProps, 'appearance' | 'disabled' | 'disabledFocusable' | 'inline'>> & {
    /**
     * There are three types of links
     * - Internal links to other pages within the same app
     * - External links, to other domains
     * - Hash links (#introduction), for the same page.
     * @type
     * @default 'internal'
     */
    linkType: LinkType;

    iconOnly: boolean;
  };
