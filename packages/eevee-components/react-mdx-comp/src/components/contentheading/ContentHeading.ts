import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { ContentHeadingProps } from './ContentHeading.types';
import { useContentHeading } from './useContentHeading';
import { useContentHeadingStyles } from './useContentHeadingStyles';
import { renderContentHeading } from './renderContentHeading';

export const ContentHeading: ForwardRefComponent<ContentHeadingProps> = React.forwardRef(
  (props: ContentHeadingProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useContentHeading(props, ref);

    useContentHeadingStyles(state);

    return renderContentHeading(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<ContentHeadingProps>;

ContentHeading.displayName = 'ContentHeading';
