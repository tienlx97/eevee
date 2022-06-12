import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { HeadingProps } from './Heading.types';
import { useHeading } from './useHeading';
import { useHeadingStyles } from './useHeadingStyles';
import { renderHeading } from './renderHeading';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const Heading: ForwardRefComponent<HeadingProps> = React.forwardRef(
  (props: HeadingProps, ref: React.Ref<HTMLElement>) => {
    const state = useHeading(props, ref);

    useHeadingStyles(state);

    return renderHeading(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<HeadingProps>;

Heading.displayName = 'Heading';
