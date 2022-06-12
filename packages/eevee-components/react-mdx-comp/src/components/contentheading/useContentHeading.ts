import * as React from 'react';
import type { ContentHeadingProps, ContentHeadingState } from './ContentHeading.types';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import { useContentHeadingState } from './useContentHeadingState';
import { Heading } from '../heading/index';

export const useContentHeading = (props: ContentHeadingProps, ref?: React.Ref<HTMLDivElement>): ContentHeadingState => {
  const { showIcon = true, heading, anchor, ...rest } = props;

  const as = props.as || 'div';

  const state: ContentHeadingState = {
    showIcon,
    components: {
      root: 'div',
      heading: Heading,
      anchor: 'a',
    },
    root: getNativeElementProps(as, {
      ref,
      ...rest,
      as: as,
    }),
    heading: resolveShorthand(heading, {
      defaultProps: {},
      required: true,
    }),
    anchor: resolveShorthand(anchor, {
      defaultProps: {
        as: 'a',
      },
      required: true,
    }),
  };

  useContentHeadingState(state);

  return state;
};
