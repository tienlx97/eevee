import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { SocialListProps } from './SocialList.types';
import { renderSocialList } from './renderSocialList';
import { useSocialList } from './useSocialList';
import { useSocialListStyles } from './useSocialListStyles';

/**
 * SocialList give people a way to trigger an action.
 */
export const SocialList: ForwardRefComponent<SocialListProps> = React.forwardRef(
  (props: SocialListProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useSocialList(props, ref);

    useSocialListStyles(state);

    return renderSocialList(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<SocialListProps>;

SocialList.displayName = 'SocialList';
