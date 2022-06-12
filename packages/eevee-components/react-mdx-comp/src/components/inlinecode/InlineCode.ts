import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { InlineCodeProps } from './InlineCode.types';
import { useInlineCode } from './useInlineCode';
import { useInlineCodeStyles } from './useInlineCodeStyles';
import { renderInlineCode } from './renderInlineCode';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const InlineCode: ForwardRefComponent<InlineCodeProps> = React.forwardRef(
  (props: InlineCodeProps, ref: React.Ref<HTMLElement>) => {
    const state = useInlineCode(props, ref);

    useInlineCodeStyles(state);

    return renderInlineCode(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<InlineCodeProps>;

InlineCode.displayName = 'InlineCode';
