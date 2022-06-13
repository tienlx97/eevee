import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { SideNoteProps } from './SideNote.types';
import { useSideNote } from './useSideNote';
import { useSideNoteStyles } from './useSideNoteStyles';
import { renderSideNote } from './renderSideNote';

export const SideNote: ForwardRefComponent<SideNoteProps> = React.forwardRef(
  (props: SideNoteProps, ref: React.Ref<HTMLElement>) => {
    const state = useSideNote(props, ref);

    useSideNoteStyles(state);

    return renderSideNote(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<SideNoteProps>;

SideNote.displayName = 'SideNote';
