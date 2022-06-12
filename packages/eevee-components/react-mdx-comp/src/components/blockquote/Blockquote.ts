import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { BlockquoteProps } from './Blockquote.types';
import { useBlockquote } from './useBlockquote';
import { useBlockquoteStyles } from './useBlockquoteStyles';
import { renderBlockquote } from './renderBlockquote';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const Blockquote: ForwardRefComponent<BlockquoteProps> = React.forwardRef(
  (props: BlockquoteProps, ref: React.Ref<HTMLElement>) => {
    const state = useBlockquote(props, ref);

    useBlockquoteStyles(state);

    return renderBlockquote(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<BlockquoteProps>;

Blockquote.displayName = 'Blockquote';
