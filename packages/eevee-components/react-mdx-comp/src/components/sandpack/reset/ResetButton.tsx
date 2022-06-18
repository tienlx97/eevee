import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { ResetButtonProps } from './ResetButton.types';
import { useResetButton } from './useResetButton';
import { useResetButtonStyles } from './useResetButtonStyles';
import { renderResetButton } from './renderResetButton';

export const ResetButton: ForwardRefComponent<ResetButtonProps> = React.forwardRef(
  (props: ResetButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const state = useResetButton(props, ref);

    useResetButtonStyles(state);

    return renderResetButton(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<ResetButtonProps>;

ResetButton.displayName = 'ResetButton';
