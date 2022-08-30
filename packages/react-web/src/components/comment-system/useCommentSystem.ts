import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@eevee/react-utilities';
import type { CommentSystemProps, CommentSystemState } from './CommentSystem.types';
import { useCommentSystemState } from './useCommentSystemState';
import { ButtonR } from '@eevee/react-button';

/**
 * Create the state required to render CommentSystem.
 *
 * The returned state can be modified with hooks such as useCommentSystemStyles,
 * before being passed to renderCommentSystem.
 *
 * @param props - props from this instance of CommentSystem
 * @param ref - reference to root HTMLElement of CommentSystem
 */
export const useCommentSystem = (props: CommentSystemProps, ref: React.Ref<HTMLElement>): CommentSystemState => {
  const { onClose, show, blur, commentWrapper, closeButton, ...rest } = props;

  const state: CommentSystemState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
      blur: 'div',
      commentWrapper: 'div',
      closeButton: ButtonR,
    },
    show,
    onClose,
    reset: true,
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...rest,
    }),

    blur: resolveShorthand(blur, {
      defaultProps: {
        as: 'div',
      },
      required: true,
    }),

    commentWrapper: resolveShorthand(commentWrapper, {
      defaultProps: {
        as: 'div',
      },
      required: true,
    }),

    closeButton: resolveShorthand(closeButton, {
      defaultProps: {},
      required: true,
    }),
  };

  useCommentSystemState(state);

  return state;
};
