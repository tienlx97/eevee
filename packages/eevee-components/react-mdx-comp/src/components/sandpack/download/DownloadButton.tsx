import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { DownloadButtonProps } from './DownloadButton.types';
import { useDownloadButton } from './useDownloadButton';
import { useDownloadButtonStyles } from './useDownloadButtonStyles';
import { renderDownloadButton } from './renderDownloadButton';

export const DownloadButton: ForwardRefComponent<DownloadButtonProps> = React.forwardRef(
  (props: DownloadButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const state = useDownloadButton(props, ref);

    useDownloadButtonStyles(state);

    return renderDownloadButton(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<DownloadButtonProps>;

DownloadButton.displayName = 'DownloadButton';
