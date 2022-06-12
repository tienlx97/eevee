import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { PostImageProps } from './PostImage.types';
import { usePostImage } from './usePostImage';
import { usePostImageStyles } from './usePostImageStyles';
import { renderPostImage } from './renderPostImage';

export const PostImage: ForwardRefComponent<PostImageProps> = React.forwardRef(
  (props: PostImageProps, ref: React.Ref<HTMLImageElement>) => {
    const state = usePostImage(props, ref);

    usePostImageStyles(state);

    return renderPostImage(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<PostImageProps>;

PostImage.displayName = 'PostImage';
