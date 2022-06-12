import * as React from 'react';
import type { HeadingProps, HeadingState } from './Heading.types';
import { getNativeElementProps } from '@eevee/react-utilities';
import { useHeadingState } from './useHeadingState';

export const useHeading = (props: HeadingProps, ref?: React.Ref<HTMLElement>): HeadingState => {
  const { type = 'medium-title', ...rest } = props;

  const as = props.as || 'h1';

  const state: HeadingState = {
    type,
    components: {
      root: 'h1',
    },
    root: getNativeElementProps(as, {
      ref,
      ...rest,
      as: as,
    }),
  };

  useHeadingState(state);

  return state;
};
