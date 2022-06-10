import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { ParagraphProps } from './Paragraph.types';
import { useParagraph } from './useParagraph';
import { useParagraphStyles } from './useParagraphStyles';
import { renderParagraph } from './renderParagraph';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const Paragraph: ForwardRefComponent<ParagraphProps> = React.forwardRef(
  (props: ParagraphProps, ref: React.Ref<HTMLParagraphElement>) => {
    const state = useParagraph(props, ref);

    useParagraphStyles(state);

    return renderParagraph(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<ParagraphProps>;

Paragraph.displayName = 'Paragraph';
