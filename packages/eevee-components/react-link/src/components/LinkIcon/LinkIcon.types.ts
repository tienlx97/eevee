import type { EeveeProps, EeveeState, EeveeSlot } from '@eevee/react-utilities';
import * as React from 'react';
import { EeveeIconsProps } from '@eevee/react-icons';

export type LinkIconSlots = {
  /**
   * Root of the component that renders as either an <a> or a <button> tag.
   */
  root: EeveeSlot<'a'>;

  iconWrap: NonNullable<EeveeSlot<'div'>>;
  textWrap: NonNullable<EeveeSlot<'span'>>;
};

export type LinkType = 'hash' | 'external' | 'internal';

export type LinkIconProps = EeveeProps<Partial<LinkIconSlots>> & {
  icon?: React.ReactNode;
  iconFill?: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>>;
  iconRegular?: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>>;
  rootColor?: string;
  iconWrapColor?: string;
  // compoundIcon?: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>>;
};

export type LinkIconState = EeveeState<LinkIconSlots> &
  Pick<LinkIconProps, 'icon'> & {
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

    compoundIcon?: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>>;

    isCurrentLoc: boolean;
  };
