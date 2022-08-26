import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import type { LinkIconProps, LinkIconState } from './LinkIcon.types';
import { useLinkIconState } from './useLinkIconState';
import { getNativeElementProps } from '@eevee/react-utilities';
import { bundleIcon } from '@eevee/react-icons';
import type { EeveeIconsProps } from '@eevee/react-icons';
import { tokens } from '@eevee/react-theme';

/**
 * Given user props, defines default props for the Link, calls useLinkState, and returns processed state.
 * @param props - User provided props to the Link component.
 * @param ref - User provided ref to be passed to the Link component.
 */
export const useLinkIcon = (props: LinkIconProps, ref: React.Ref<HTMLAnchorElement>): LinkIconState => {
  const {
    iconWrap,
    textWrap,
    iconFill,
    iconRegular,
    iconWrapColor = tokens.f1,
    rootColor = tokens.f3,
    icon,
    linkState,
    ...rest
  } = props;

  let compoundIcon: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>> | undefined;
  if (iconFill && iconRegular) {
    compoundIcon = bundleIcon(iconFill, iconRegular);
  }

  const state: LinkIconState = {
    // Props passed at the top-level
    linkType: 'internal',
    isCurrentLoc: false,
    icon,
    iconOnly: Boolean(!props.children && (!icon || !compoundIcon)),
    compoundIcon,
    linkState,
    // Slots definition
    components: {
      root: 'a',
      textWrap: 'span',
      iconWrap: 'div',
    },

    root: getNativeElementProps('a', {
      ref,
      ...rest,
    }),

    iconWrap: resolveShorthand(iconWrap, {
      defaultProps: {
        as: 'div',
      },
      required: true,
    }),

    textWrap: resolveShorthand(textWrap, {
      defaultProps: {
        as: 'span',
      },
      required: true,
    }),
  };

  state.root.style = {
    color: rootColor,
    ...state.root.style,
  };

  state.iconWrap.style = {
    color: iconWrapColor,
    ...state.iconWrap.style,
  };

  useLinkIconState(state);

  return state;
};
