import * as React from 'react';
import { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';

export type SideNoteSlots = {
  root: NonNullable<Slot<'aside'>>;
  content: NonNullable<Slot<'div'>>;
  showMore: NonNullable<Slot<typeof Button>>;
};

export type SideNoteTypeName = 'Note' | 'Tip' | 'Important' | 'Caution' | 'Warning';

export type SideNoteProps = ComponentProps<Partial<SideNoteSlots>> & {
  title?: string;
  type?: 'Note' | 'Tip' | 'Important' | 'Caution' | 'Warning';
};

export type SideNoteState = ComponentState<SideNoteSlots> &
  Pick<SideNoteProps, 'title' | 'type'> & {
    iconWrapClasses?: string;
    titleClasses?: string;
    expandedClasses?: string;
    showMoreStyle?: object;
    expandedChildren?: boolean;
    isExpanded?: boolean;
    previewChildren?: (React.ReactChild | React.ReactPortal | React.ReactFragment)[];
  };
