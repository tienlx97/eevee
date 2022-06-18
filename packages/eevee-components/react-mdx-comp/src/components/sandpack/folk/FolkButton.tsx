import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { FolkButtonProps } from './FolkButton.types';
import { useFolkButton } from './useFolkButton';
import { useFolkButtonStyles } from './useFolkButtonStyles';
import { renderFolkButton } from './renderFolkButton';

export const FolkButton: ForwardRefComponent<FolkButtonProps> = React.forwardRef(
  (props: FolkButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const state = useFolkButton(props, ref);

    useFolkButtonStyles(state);

    return renderFolkButton(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<FolkButtonProps>;

FolkButton.displayName = 'FolkButton';
