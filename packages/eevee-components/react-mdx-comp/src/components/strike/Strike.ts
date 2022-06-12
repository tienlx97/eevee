import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { StrikeProps } from './Strike.types';
import { useStrike } from './useStrike';
import { useStrikeStyles } from './useStrikeStyles';
import { renderStrike } from './renderStrike';

export const Strike: ForwardRefComponent<StrikeProps> = React.forwardRef(
  (props: StrikeProps, ref: React.Ref<HTMLSpanElement>) => {
    const state = useStrike(props, ref);

    useStrikeStyles(state);

    return renderStrike(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<StrikeProps>;

Strike.displayName = 'Strike';
