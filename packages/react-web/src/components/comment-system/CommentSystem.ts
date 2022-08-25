import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { CommentSystemProps } from './CommentSystem.types';
import { renderCommentSystem } from './renderCommentSystem';
import { useCommentSystem } from './useCommentSystem';
import { useCommentSystemStyles } from './useCommentSystemStyles';

/**
 * CommentSystem give people a way to trigger an action.
 */
export const CommentSystem: ForwardRefComponent<CommentSystemProps> = React.forwardRef(
  (props: CommentSystemProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useCommentSystem(props, ref);

    useCommentSystemStyles(state);

    return renderCommentSystem(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<CommentSystemProps>;

CommentSystem.displayName = 'CommentSystem';
