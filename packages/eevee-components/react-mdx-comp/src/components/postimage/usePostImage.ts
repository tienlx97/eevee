import * as React from 'react';
import { resolveShorthand } from '@eevee/react-utilities';
import { PostImageProps, PostImageState } from './PostImage.types';
import { usePostImageState } from './usePostImageState';

export const usePostImage = (props: PostImageProps, ref?: React.Ref<HTMLImageElement>): PostImageState => {
  const { type = 'default', as, wrap, caption, includeWhiteBackground, marginBottom, source, title, ...rest } = props;

  const state: PostImageState = {
    includeWhiteBackground,
    marginBottom,
    source,
    title,
    type,
    components: {
      root: 'img',
      wrap: 'span',
      caption: 'span',
    },
    wrap: resolveShorthand(wrap, {
      defaultProps: {
        as: 'span',
      },
      required: true,
    }),
    caption: resolveShorthand(caption, {
      defaultProps: {
        as: 'span',
      },
      required: true,
    }),
    root: {
      as: 'img',
      ref,
      ...rest,
    },
  };

  usePostImageState(state);

  return state;
};
