import * as React from 'react';
import { IllustrationBlockProps, IllustrationBlockState } from './IllustrationBlock.types';
import { resolveShorthand } from '@eevee/react-utilities';
import { useIllustrationBlockState } from './useIllustrationBlockState';

export const IllustrationBlock = (
  props: IllustrationBlockProps,
  ref?: React.Ref<HTMLDivElement>,
): IllustrationBlockState => {
  const {
    as = 'div',
    title,
    author,
    authorLink,
    sequential,
    titleWrap,
    contentWrap,
    imgWrap,
    captionWrap,
    ...rest
  } = props;

  const state: IllustrationBlockState = {
    title,
    author,
    authorLink,
    sequential,

    components: {
      root: 'div',
      titleWrap: 'h3',
      imgWrap: 'div',
      captionWrap: 'figcaption',
      contentWrap: 'ol',
    },

    root: {
      as,
      ref,
      ...rest,
    },
    titleWrap: resolveShorthand(titleWrap, {
      defaultProps: {},
      required: true,
    }),
    contentWrap: resolveShorthand(contentWrap, {
      defaultProps: {},
      required: true,
    }),
    imgWrap: resolveShorthand(imgWrap, {
      defaultProps: {},
      required: true,
    }),
    captionWrap: resolveShorthand(captionWrap, {
      defaultProps: {},
      required: true,
    }),
  };

  useIllustrationBlockState(state);

  return state;
};
